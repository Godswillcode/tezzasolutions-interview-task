import authBg from "../assets/images/authBg.png";
import logo from "assets/images/logo.png";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen w-full bg-white overflow-y-auto">
      <img
        src={authBg}
        alt="auth background"
        className="w-full"
        style={{ height: "70vh" }}
      />
      <div className="Container">
        <div className="bg-white p-7 max-w-md mx-auto shadow-md -mt-56 relative z-30">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold pb-1">Login</h3>
              <p>Login to your account</p>
            </div>
            <img src={logo} alt="logo" className="h-16 w-16 rounded-full" />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
