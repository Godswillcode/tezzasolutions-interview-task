import { PageIntro } from "components/PageIntro";
import { DashboardLayout } from "components/layout/DashboardLayout";
import React from "react";

const ClientProfile = () => {
  return (
    <DashboardLayout>
      <PageIntro
        title="Client Profile"
        description="View client profile here"
      />
      <div className="bg-white rounded px-3 py-6 shadow-sm">

      </div>
    </DashboardLayout>
  );
};

export default ClientProfile;
