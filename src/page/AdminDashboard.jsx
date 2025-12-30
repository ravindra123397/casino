import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLoansThunk,
  approveLoanThunk,
  restartLoanThunk,
  getLoanDetailsThunk,
} from "../Store/Slice/loanSlice";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Drawer,
  Typography,
  Divider,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

/* ===== MIS REASONS ===== */
const MIS_REASONS = [
  "Your full name does not match with the name on your submitted documents",
  "Uploaded document image is unclear, blurred, or damaged",
  "Incorrect PAN number entered or PAN details do not match records",
  "Incomplete or missing required details in the application form",
];

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { loans, loading, selectedLoan } = useSelector((s) => s.loan);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openRejectDialog, setOpenRejectDialog] = useState(false);
  const [activeLoanId, setActiveLoanId] = useState(null);
  const [selectedReasons, setSelectedReasons] = useState([]);

  useEffect(() => {
    dispatch(getAllLoansThunk());
  }, [dispatch]);

  /* ================= HANDLERS ================= */

  const handleView = (id) => {
    dispatch(getLoanDetailsThunk(id));
    setOpenDrawer(true);
  };

  const handleApprove = (id) => {
    dispatch(approveLoanThunk(id));
  };

  const openReject = (loanId) => {
    setActiveLoanId(loanId);
    setSelectedReasons([]);
    setOpenRejectDialog(true);
  };

  const toggleReason = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

 const confirmReject = () => {
  if (selectedReasons.length === 0) {
    alert("Please select at least one reason");
    return;
  }

  dispatch(
    restartLoanThunk({
      loanId: activeLoanId,
      reasons: selectedReasons,
    })
  );

  setOpenRejectDialog(false);
  setActiveLoanId(null);
  setSelectedReasons([]);
};


  if (loading) {
    return <Typography sx={{ p: 3 }}>Loading loans...</Typography>;
  }

  return (
    <>
      {/* ================= TABLE ================= */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Phone</b></TableCell>
              <TableCell><b>PAN</b></TableCell>
              <TableCell><b>Amount</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell align="center"><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loans.map((loan) => (
              <TableRow key={loan._id}>
                <TableCell>
                  {loan.firstName} {loan.lastName}
                </TableCell>

                <TableCell>{loan.phone}</TableCell>
                <TableCell>{loan.panNumber}</TableCell>
                <TableCell>₹{loan.amountRequested}</TableCell>

                <TableCell>
                  <Chip
                    label={loan.status}
                    color={
                      loan.status === "APPROVED"
                        ? "success"
                        : loan.status === "RESTART"
                        ? "error"
                        : "warning"
                    }
                    size="small"
                  />
                </TableCell>

                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleView(loan._id)}
                    >
                      View
                    </Button>

                    {/* APPROVE */}
                    {(loan.status === "PENDING" ||
                      loan.status === "RESTART") && (
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => handleApprove(loan._id)}
                      >
                        Approve
                      </Button>
                    )}

                    {/* REJECT / RESTART */}
                    {(loan.status === "PENDING" ||
                      loan.status === "APPROVED") && (
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => openReject(loan._id)}
                      >
                        Reject
                      </Button>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ================= DETAILS DRAWER ================= */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box width={460} p={3}>
          {selectedLoan && (
            <>
              <Typography variant="h6">Loan Details</Typography>
              <Divider sx={{ my: 2 }} />

              <Info label="Name" value={`${selectedLoan.firstName} ${selectedLoan.lastName}`} />
              <Info label="Phone" value={selectedLoan.phone} />
              <Info label="PAN Number" value={selectedLoan.panNumber} />
              <Info label="Amount Requested" value={`₹${selectedLoan.amountRequested}`} />

              {selectedLoan.status === "APPROVED" && (
                <>
                  <Divider sx={{ my: 2 }} />
                  <Info label="Approved Amount" value={`₹${selectedLoan.approvedAmount}`} />
                  <Info label="8% Deduction" value={`₹${selectedLoan.deduction8Percent}`} />
                  <Info label="Processing Fee (5%)" value={`₹${selectedLoan.processingFee5Percent}`} />
                </>
              )}

              <Divider sx={{ my: 3 }} />
              <Typography variant="subtitle1" fontWeight={600}>
                Documents
              </Typography>

              <Stack spacing={2} mt={2}>
                <Doc title="Aadhaar Front" src={selectedLoan.aadhaarFront} />
                <Doc title="Aadhaar Back" src={selectedLoan.aadhaarBack} />
                <Doc title="PAN Card" src={selectedLoan.panFile} />
              </Stack>

              {selectedLoan.userMessage && (
                <>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="subtitle1">User Message</Typography>
                  <Typography variant="body2">
                    {selectedLoan.userMessage}
                  </Typography>
                </>
              )}
            </>
          )}
        </Box>
      </Drawer>

      {/* ================= REJECT DIALOG (MIS) ================= */}
      <Dialog
        open={openRejectDialog}
        onClose={() => setOpenRejectDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Reject / Restart Loan (MIS)</DialogTitle>

        <DialogContent>
          <Stack spacing={1}>
            {MIS_REASONS.map((reason, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selectedReasons.includes(reason)}
                    onChange={() => toggleReason(reason)}
                  />
                }
                label={reason}
              />
            ))}
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenRejectDialog(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={confirmReject}
          >
            Confirm Reject
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

/* ================= SMALL COMPONENTS ================= */

const Info = ({ label, value }) => (
  <Box mb={1}>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body2">{value}</Typography>
  </Box>
);

const Doc = ({ title, src }) => (
  <Box>
    <Typography variant="caption" color="text.secondary">
      {title}
    </Typography>
    <Box
      component="img"
      src={src}
      alt={title}
      sx={{
        width: "100%",
        borderRadius: 1,
        border: "1px solid #e0e0e0",
        mt: 0.5,
      }}
    />
  </Box>
);

export default AdminDashboard;
