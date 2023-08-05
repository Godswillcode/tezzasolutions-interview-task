import { PageIntro } from "components/PageIntro";
import { DashboardLayout } from "components/layout/DashboardLayout";
import { Icon } from "@iconify/react";

const Workspace = () => {
  return (
    <DashboardLayout>
      <PageIntro title="Your Workspace" description="Welcome, xxx" />

      <h3 className="pb-4 font-semibold pt-4" style={{ fontSize: 14.5 }}>
        Overview
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 lg:gap-x-16 gap-y-7 lg:gap-y-5 text-sm">
        <div>
          <div
            className="border-t border-primary bg-white shadow-lg"
            style={{ borderTopWidth: 6.5 }}
          >
            <div className="bg-secondary py-2 px-3">
              <h4 className="font-semibold">Today's Agenda</h4>
            </div>
            <p className="py-14 text-center text-accent px-2">
              You don't have any event schedule for today.
              <span className="text-primary cursor-pointer">Add</span>
            </p>
          </div>
        </div>
        <div
          className="border-t border-primary bg-white shadow-lg lg:mr-20"
          style={{ borderTopWidth: 6.5 }}
        >
          <div className="bg-secondary py-2 px-3 flex justify-between items-center">
            <h4 className="font-semibold">Activity Report</h4>
            <div className="flex items-center gap-2 text-primary cursor-pointer">
              <h5 className="text-primary">View full activity report </h5>
              <Icon icon="cil:arrow-right" />
            </div>
          </div>
          <div className="px-2 py-3">
            <div className="flex items-center gap-2">
              <div
                style={{ height: 1.5, background: "#8a8a8a" }}
                className="w-1/2"
              />
              <h3 className="text-accent">Tuesday {"("}18th Sept, 2019</h3>
            </div>

            <div className="flex mt-2 mb-16">
              <div>
                <h3 className="text-accent">You added a new client</h3>
                <div className="flex items-end flex-col gap-1">
                  <h3 className="text-primary">Odusote Mayokun</h3>
                  <div className="border-l-2 border-primary bg-secondary">
                    <span className="pr-2 pl-1 py-1 text-xs text-accent">
                      status: Pending
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div
          className="border-t border-primary bg-white shadow-lg"
          style={{ borderTopWidth: 6.5 }}
        >
          <div className="bg-secondary py-2 px-3 flex justify-between items-center">
            <h4 className="font-semibold">Task that are due</h4>
            <div className="flex items-center gap-3 text-primary cursor-pointer">
              <h5 className="text-primary">Create Tasks</h5>
              <Icon icon="cil:arrow-right" />
            </div>
          </div>
          <div className="px-3">
            <div className="bg-secondary rounded py-2 px-3 mt-4 mb-20">
              <h3 className="font-semibold pb-1">
                Follow up with <span className="text-primary">Odusote</span>
              </h3>
              <div className="flex items-center gap-x-5">
                <h5>Due on: 1/21/2021</h5>
                <h5>Created on: 1/15/2021</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Workspace;
