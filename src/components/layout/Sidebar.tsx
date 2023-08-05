import React from "react";
import logo from "assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { routePath } from "config/routesManagement/routePath";
import { Icon } from "@iconify/react";

export const Sidebar = () => {
  return (
    <div
      className="bg-white h-screen w-full shadow"
      style={{ paddingLeft: "0.6px" }}
    >
      <div className="pb-6 pt-12 flex justify-center">
        <img src={logo} alt="logo" className="h-20 w-20 rounded-full" />
      </div>

      <div className="flex flex-col gap-5">
        <NavLink to={routePath.workspace} className="sideBarStyle">
          <Icon icon="circum:grid-4-2" fontSize={22} />
          <span>Workspace</span>
        </NavLink>
        <NavLink to={routePath.clients} className="sideBarStyle">
          <Icon icon="fluent:people-community-16-filled" fontSize={22} />
          <span>Clients</span>
        </NavLink>

        <NavLink to="/appoint" className="sideBarStyle">
          <Icon icon="mdi:invoice-schedule-outline" fontSize={22} />
          <span>Schedule Appointment</span>
        </NavLink>
        <NavLink to="/payment" className="sideBarStyle">
          <Icon icon="la:file-invoice-dollar" fontSize={22} />
          <span>Payment</span>
        </NavLink>
        <NavLink to="/payment" className="sideBarStyle">
          <Icon icon="fluent:task-list-24-filled" fontSize={22} />
          <span>Task</span>
        </NavLink>
        <NavLink to="/payment" className="sideBarStyle">
          <Icon icon="ant-design:message-outlined" fontSize={22} />
          <span>Message</span>
        </NavLink>
        <NavLink to="/payment" className="sideBarStyle">
          <Icon icon="tabler:report-analytics" fontSize={22} />
          <span>Report</span>

          {/* <i className="ri-arrow-down-s-fill text-base pl-16"></i> */}
          <Icon icon="ri:arrow-down-s-fill" fontSize={16} className="ml-16"/>
        </NavLink>
      </div>
    </div>
  );
};
