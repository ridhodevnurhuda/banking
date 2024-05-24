import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  // console.log(loggedIn?.name)


  // loggedInOld
  // const loggedIn = {
  //   name: "Ridho Komplit",
  //   firstName: "Ridho",
  //   lastName: "Nurhuda",
  //   email : "JWbUW@example.com"
  // }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your accounts transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 1314.15 }, { currentBalance: 99.15 }]}
      />
    </section>
  );
};

export default Home;
