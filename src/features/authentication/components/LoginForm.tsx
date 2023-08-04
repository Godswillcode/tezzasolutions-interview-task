import React from "react";
import { Form, Input } from "antd";
import {
  emailValidationRules,
  generalValidationRules,
} from "utils/formValidations";

export const LoginForm = () => {
  return (
    <Form layout="vertical" className="mt-5" requiredMark={false}>
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
        <button className="button w-56">Login</button>
      </div>
    </Form>
  );
};
