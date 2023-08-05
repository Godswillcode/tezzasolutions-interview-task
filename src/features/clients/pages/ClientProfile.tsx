import { PageIntro } from "components/PageIntro";
import { DashboardLayout } from "components/layout/DashboardLayout";
import avatar from "../assets/images/clientAvatar.png";
import { routePath } from "config/routesManagement/routePath";
import { Link } from "react-router-dom";

const ClientProfile = () => {
  return (
    <DashboardLayout>
      <PageIntro
        title="Client Profile"
        description="View client profile here"
      />
      <div className="bg-white rounded px-3 md:px-5 py-6 shadow-sm mt-8">
        <div
          className="mt-4 py-5 px-4 rounded"
          style={{ background: "#fafafc" }}
        >
          <h3 className="font-semibold">Client Picture</h3>
          <div className="flex items-center gap-4 mt-4 font-medium">
            <img src={avatar} alt="avatar" />
            <div>
              <h2 className="font-extrabold text-base">Odusote Mayokun</h2>
              <h4 className="text-accent py-2">
                adegoketemitope1909@gmail.com
              </h4>
              <div className="flex items-center gap-3 text-accent">
                <span>Female</span>
                <span>54 years old</span>
                <span>Nigerian</span>
              </div>
            </div>
          </div>
        </div>

          <div>
            
          </div>

        <div className="flex justify-end mt-5">
          <Link to={routePath.clients} className="hover:text-black button rounded">
            <button className="w-24 rounded font-medium">back</button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientProfile;
