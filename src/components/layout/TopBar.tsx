import user_avatar from "assets/images/avatar.png";
import { Badge, Drawer, Dropdown, MenuProps } from "antd";
import { Icon } from "@iconify/react";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { routePath } from "config/routesManagement/routePath";
import { Link } from "react-router-dom";

export const TopBar = () => {
  const [open, setOpen] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: <Link to={routePath.login}>Logout</Link>,
      key: "1",
    },
  ];
  return (
    <>
      <div className="w-full bg-white shadow-sm py-3">
        <div className="Container flex justify-between items-center">
          <div className="lg:invisible">
            <Icon
              icon="pixelarticons:menu"
              fontSize={25}
              onClick={() => setOpen(true)}
            />
          </div>
          <div className="flex items-center justify-end gap-x-6">
            <Badge count={2} size="small" color="#aa2d22">
              <Icon icon="mdi:bell-outline" fontSize={20} />
            </Badge>
            <h4 className="font-semibold text-sm">Kelin</h4>
            <Dropdown menu={{ items }}>
              <img
                src={user_avatar}
                alt="user-avatar"
                className="h-7 w-7 rounded-full object-cover cursor-pointer"
              />
            </Dropdown>
          </div>
        </div>
      </div>

      {/* mobile side bar */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Sidebar />
      </Drawer>
    </>
  );
};
