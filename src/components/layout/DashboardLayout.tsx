import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export interface IProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <div>
      <div className="flex w-full relative">
        <div className="w-52 fixed z-40 overflow-hidden lg:flex hidden">
          <Sidebar />
        </div>
        <div className="w-full lg:ml-52 pb-12">
          <TopBar />
          <main className="Container pt-10">{children}</main>
        </div>
      </div>
    </div>
  );
};
