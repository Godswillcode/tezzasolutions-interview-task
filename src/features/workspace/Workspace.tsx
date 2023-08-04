import { PageIntro } from "components/PageIntro";
import { DashboardLayout } from "components/layout/DashboardLayout";
import React from "react";

const Workspace = () => {
  return (
    <DashboardLayout>
      <PageIntro title="Your Workspace" description="Welcome, xxx" />
    </DashboardLayout>
  );
};

export default Workspace;
