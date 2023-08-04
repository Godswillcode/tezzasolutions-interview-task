import user_avatar from "assets/images/avatar.png";
import { Badge } from "antd";
import { Icon } from "@iconify/react";

export const TopBar = () => {
  return (
    <>
    <div className="w-full bg-white shadow-sm py-3">
      <div className="Container flex justify-between items-center">
        <div className="lg:invisible">
          <Icon icon="pixelarticons:menu" fontSize={25} />
        </div>
        <div className="flex items-center justify-end gap-x-6">
          <Badge count={2} size="small" color="#aa2d22">
            <Icon icon="mdi:bell-outline" fontSize={20} />
          </Badge>
          <h4 className="font-semibold text-sm">Kelly</h4>
          <img
            src={user_avatar}
            alt="user-avatar"
            className="h-7 w-7 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
    </>
  );
};
