import React from "react";
import PaymentMethods from "./PaymentMethods";

const CasinoInfoContent = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#08131e] to-[#02080f] px-4 py-14">

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto text-gray-300 text-base md:text-lg leading-7 md:leading-8">

        <h1 className="text-yellow-400 text-2xl md:text-3xl font-semibold mb-6">
          Online casino games in India
        </h1>

        <p className="mb-8">
          Online casino games in India have become extremely popular due to the
          ease of access, exciting bonuses, and real money gaming options.
          Players can enjoy a wide range of casino and sports betting games
          with fast deposits, secure withdrawals, and 24/7 support.
        </p>

        <h2 className="text-yellow-400 text-xl md:text-2xl font-semibold mt-10 mb-4">
          Latest Casino and Sports Promotions
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <span className="text-yellow-400 font-semibold">Welcome Bonus:</span>{" "}
            Get attractive signup bonuses on your first deposit.
          </li>
          <li>
            <span className="text-yellow-400 font-semibold">Instant Cashback Rewards:</span>{" "}
            Enjoy cashback offers on casino and sports bets.
          </li>
          <li>
            <span className="text-yellow-400 font-semibold">Every Deposit Free Spins:</span>{" "}
            Free spins available on selected slot games.
          </li>
          <li>
            <span className="text-yellow-400 font-semibold">Special Gaming Events:</span>{" "}
            Participate in tournaments and seasonal events.
          </li>
        </ul>

        <h2 className="text-yellow-400 text-xl md:text-2xl font-semibold mt-10 mb-4">
          Live Casino Games
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Live Roulette</li>
          <li>Live Blackjack</li>
          <li>Live Baccarat</li>
          <li>Crazy Time</li>
          <li>Andar Bahar</li>
        </ul>

        <h2 className="text-yellow-400 text-xl md:text-2xl font-semibold mt-10 mb-4">
          Sports Betting in India
        </h2>

        <p className="mb-6">
          Sports betting is one of the most popular forms of online betting in
          India. Players can place bets on domestic and international sports
          events with competitive odds.
        </p>

        <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
          Popular Sports Betting Options
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Cricket Betting</li>
          <li>Football Betting</li>
          <li>Tennis Betting</li>
          <li>Kabaddi Betting</li>
          <li>Basketball Betting</li>
        </ul>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-7xl mx-auto mt-16 text-gray-300 text-base md:text-lg leading-7 md:leading-8">

        <h2 className="text-yellow-400 text-2xl md:text-3xl font-semibold mb-8">
          Frequently Asked Questions
        </h2>

        {[
          {
            q: "How to start online betting in India?",
            a: "Starting online betting in India is simple with Sanwariya Seth Book. Create an account, make your first deposit, and claim your 200% welcome bonus. Choose casino or sports bonus and start betting instantly.",
          },
          {
            q: "How to Deposit & Withdraw Money in Online Betting?",
            a: "You can deposit using UPI, Net Banking, and e-wallets. Withdrawals are processed quickly after basic KYC verification directly to your bank account.",
          },
          {
            q: "Are online betting sites legal in India?",
            a: "Online betting legality varies by state. Sanwariya Seth Book operates under international licenses and follows strict compliance standards.",
          },
          {
            q: "Which is the best online betting site in India?",
            a: "Sanwariya Seth Book offers 200% bonuses, instant cashback up to 25%, free spins, and a strong focus on Indian sports like cricket and kabaddi.",
          },
          {
            q: "What types of casino games can I play at Sanwariya Seth Book?",
            a: "You can play slots, live dealer games, table games, Teen Patti, Andar Bahar, and crash games like Aviator.",
          },
          {
            q: "Is mobile betting available at Sanwariya Seth Book?",
            a: "Yes, Sanwariya Seth Book works perfectly on Android and iOS through mobile browsers without downloading any app.",
          },
        ].map((item, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-yellow-400 text-lg md:text-xl font-semibold mb-2">
              {item.q}
            </h3>
            <p>{item.a}</p>
          </div>
        ))}

        <h2 className="text-yellow-400 text-2xl md:text-3xl font-semibold mt-12 mb-4">
          Final Words
        </h2>

        <p>
       To win online betting games and events, do not allow your emotions to get in the way. Play with expansive knowledge and place your money on bets you are considerably sure to win. Sanwariya Seth Book stands as your premier destination for online casino games and sports betting in India. With our extensive game selection, generous bonuses, and dedication to the Indian market, we provide a complete gaming experience tailored to Indian players. Whether you're interested in casino games, sports betting, or both, our platform offers everything you need for an exciting and rewarding online gaming experience. Join us today and discover why thousands of Indian players choose Sanwariya Seth Book as their preferred online gaming destination.
        </p>

      </div>

<PaymentMethods />
    </section>
    
    </>
  
  );
};

export default CasinoInfoContent;
