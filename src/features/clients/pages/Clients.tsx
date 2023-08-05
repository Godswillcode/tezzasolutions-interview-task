import { Input } from "antd";
import { PageIntro } from "components/PageIntro";
import { DashboardLayout } from "components/layout/DashboardLayout";
import { Icon } from "@iconify/react";
import { ClientTable } from "../components/ClientTable";

const Clients = () => {
  return (
    <DashboardLayout>
      <PageIntro title="Clients" description="Here's the clients list" />
      <div className="bg-white rounded px-5 py-6 shadow-sm">
        <div className="flex md:items-center md:flex-row flex-col gap-5 search mb-8">
          <div className="w-full md:w-3/4 lg:w-4/5">
            <Input
              placeholder="Search by name, email ..."
              className="rounded-lg py-2"
              prefix={<Icon icon="octicon:search-24" />}
              style={{ background: "#fafafc" }}
            />
          </div>
          <div>
            <button className="button rounded-md font-medium">
              Add new client
            </button>
          </div>
        </div>

        <ClientTable />
      </div>
    </DashboardLayout>
  );
};

export default Clients;
