import authBg from "../assets/images/authBg.png";
import logo from "assets/images/logo.png";
import { Form, Input } from "antd";
import {
  emailValidationRules,
  generalValidationRules,
} from "utils/formValidations";

const Login = () => {
  return (
    <div>
      <img
        src={authBg}
        alt="auth background"
        className="w-full"
        style={{ height: "70vh" }}
      />
      <div className="Container">
        <div className="bg-white p-6 max-w-lg mx-auto shadow -mt-52 relative z-30">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold pb-1">Login</h3>
              <p>Login to your account</p>
            </div>
            <img src={logo} alt="logo" className="h-1w-16 w-16 rounded-full" />
          </div>

          <Form layout="vertical" className="mt-5" requiredMark={false}>
            <Form.Item name="email" label="Email" rules={emailValidationRules}>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={generalValidationRules}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
