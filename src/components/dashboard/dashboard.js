import React from "react";
import UserProfileInstance from "./userProfileInstance";
import UserStats from "./userStats";
import LiveGig from "./liveGig";
import RecommendedForUser from "./recommendedForUser";
import TrendingContent from "./trendingContent";
import LatestContent from "./latestContent";
import { DashboardStyled } from "./dashboardStyled";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <UserProfileInstance />
      <UserStats />
      <LiveGig />
      <RecommendedForUser />
      <TrendingContent />
      <LatestContent />
    </DashboardStyled>
  );
};

export default Dashboard;
