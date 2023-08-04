import { Rule } from "antd/lib/form";

export const emailValidationRules: Rule[] = [
    {
      required: true,
      message: "Field is required",
    },
    {
      type: "email",
      message: "Invalid Email Address",
    },
  ];

  export const generalValidationRules: Rule[] = [
    { required: true, message: "Field is required!" },
  ];