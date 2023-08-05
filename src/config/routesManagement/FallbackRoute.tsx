import { DashboardLayout } from "components/layout/DashboardLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const FallbackRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate(-1);
    }, 10);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);
  return <DashboardLayout children={undefined}></DashboardLayout>;
};
