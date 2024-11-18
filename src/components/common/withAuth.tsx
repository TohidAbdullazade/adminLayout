import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const WithAuth = (Component: any) => {
  return (props: any) => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = Cookies.get("accessToken");
      if (!token) {
        navigate("/login", { replace: true });
      }
    }, [navigate]);

    return Cookies.get("accessToken") ? <Component {...props} /> : null;
  };
};

export default WithAuth;
