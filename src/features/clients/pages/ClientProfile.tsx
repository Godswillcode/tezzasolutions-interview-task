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
          <div className="flex items-center gap-2 md:grid-cols-4 mt-4 font-medium">
            <img src={avatar} alt="avatar" />
            <div className="">
              <h2 className="font-extrabold text-base">Odusote Mayokun</h2>
              <h4 className="text-accent py-2 pr-2">
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

        <div className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-32 text-sm">
            <ul className="flex flex-col gap-y-6 profile_list">
              <li>
                <h4 className="label">Full Name</h4>
                <h2 className="value">Odusote Mayokun</h2>
              </li>
              <li>
                <h4 className="label">
                  Applicant Fullname (
                  <span style={{ color: "#aa2d22" }}>as shown in passport</span>
                  )
                </h4>
                <h2 className="value">Odusote Mayokun Kemi</h2>
              </li>
              <li>
                <div className="grid grid-cols-2 gap-x-10">
                  <div>
                    <h4 className="label">Place of Birth</h4>
                    <h2 className="value">Nigeria</h2>
                  </div>
                  <div>
                    <h4 className="label">Date of Birth</h4>
                    <h2 className="value">04/11/2012</h2>
                  </div>
                </div>
              </li>
              <li>
                <h4 className="label">Marital status</h4>
                <h2 className="value">Married</h2>
              </li>
              <li>
                <h4 className="label">Current Occupation</h4>
                <h2 className="value">Engineer</h2>
              </li>
              <li>
                <h4 className="label">Residential Address</h4>
                <h2 className="value">
                  No 2, Oloro Street Bank, Ibadan Oyo State, Nigeria
                </h2>
              </li>
              <li>
                <h4 className="label">Country of Interest</h4>
                <h2 className="value">Iceland</h2>
              </li>
            </ul>
            <ul className="flex flex-col gap-y-6 profile_list">
              <li>
                <h4 className="label">Email</h4>
                <h2 className="value">adegoketemiope1909@gmail.com</h2>
              </li>
              <li>
                <h4 className="label">Gender</h4>
                <h2 className="value">Female</h2>
              </li>
              <li>
                <h4 className="label">Country of Citizenship</h4>
                <h2 className="value">Nigerian</h2>
              </li>
              <li>
                <h4 className="label">
                  Education (
                  <span style={{ color: "#aa2d22" }}>
                    client's highest level of Education
                  </span>
                  )
                </h4>
                <h2 className="value">Bachelor's Degree</h2>
              </li>
              <li>
                <h4 className="label">Phone Number</h4>
                <h2 className="value">+234(0)8160730668</h2>
              </li>
              <li>
                <h4 className="label">Mailing Address</h4>
                <h2 className="value">
                  No 2, Oloro Street Bank, Ibadan Oyo State, Nigeria
                </h2>
              </li>
              <li>
                <h4 className="label">Purpose of Travailing</h4>
                <h2 className="value">Trading</h2>
              </li>
            </ul>
          </div>
        </div>

        {/* Back to client page */}
        <div className="flex justify-end mt-20">
          <Link
            to={routePath.clients}
            className="hover:text-black button rounded"
          >
            <button className="w-24 rounded font-medium">back</button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientProfile;
