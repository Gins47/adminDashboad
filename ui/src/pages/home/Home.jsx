import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import "./Home.css";
import { userData } from "../../data/dummyData";
import NewUsers from "../../components/newUsers/NewUsers";
import LatestTrans from "../../components/latestTransactions/LatestTrans";
function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="Active Users " data={userData} dataKeyX="name" dataKeyY="Active User" />
      <div className="widgets">
        <NewUsers />
        <LatestTrans />
      </div>
    </div>
  );
}

export default Home;
