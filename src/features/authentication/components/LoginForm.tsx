import { Form, Input, notification } from "antd";
import {
  emailValidationRules,
  generalValidationRules,
} from "utils/formValidations";
import { useNavigate } from "react-router-dom";
import { routePath } from "config/routesManagement/routePath";

export const LoginForm = () => {
  const navigate = useNavigate();

  // on form submit
  const onSubmit = (data: any) => {
    if (data.email === "example@gmail.com" && data.password === "12345") {
      navigate(routePath.workspace);
    } else {
      notification.error({
        message: "Invalid credentials",
        description:
          "Please use 'example@gmail.com' as the email and '12345' as the password.",
      });
    }
  };

  return (
    <Form
      onFinish={onSubmit}
      layout="vertical"
      className="mt-5"
      requiredMark={false}
    >
      <Form.Item name="email" label="Email" rules={emailValidationRules}>
        <Input className="py-2" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={generalValidationRules}
      >
        <Input className="py-2" />
      </Form.Item>

      <div className="flex justify-center">
        <button className="button w-64">Login</button>
      </div>
    </Form>
  );
};
