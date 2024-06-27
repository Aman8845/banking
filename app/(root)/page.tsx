import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = async ({searchParams: {id, page}}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn= {firstName: 'Aman', lastName: 'VV'}


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          {/* <TotalBalanceBox 
          accounts={accountsData}
          totalBanks={accounts?.totalBanks}
          totalCurrentBalance={accounts.totalCurrentBalance}
          /> */}
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1} 
          totalCurrentBalance={1250.25}/>
        </header>
      </div>
    </section>
  );
};

export default Home;
