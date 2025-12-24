export const LOGIN_ADMIN_URL = "/api/admin/login";
export const GET_ALL_LOANS_ADMIN = "/api/loans/admin/loans";
export const APPROVE_LOAN = (id) => `/api/loans/admin/loan/${id}/approve`;
export const REJECT_LOAN = (id) => `/api/loans/admin/loan/${id}/restart`;
export const GET_LOAN_DETAILS = (id) => `/api/loans/admin/loan/${id}`;
export const CHECK_LOAN_STATUS = (phone) => `/api/loans/status/${phone}`;

