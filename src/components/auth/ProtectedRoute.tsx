import { useAppDispatch } from "@/hooks/useReduxTypes";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userDetails,Googlepopup } from "../../store/Reducers/stateSlice";
import { Request } from "@/lib/axios";
import Spiner from "../molecules/Spiner";

const ProtectedRoute: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getAuthorizationHeader = () => {
    const token = localStorage.getItem("acessToken");
    return token ? `Bearer ${JSON.parse(token)}` : "";
  };

  const checkTokenIsValid = async () => {
    try {
      const response = await Request.get("/profile", {
        headers: { Authorization: getAuthorizationHeader() },
      });
      setIsLoading(false);
      console.log(response)
      dispatch(userDetails(response.data.data));
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.error("Error checking token validity:", error);
      dispatch(Googlepopup())
    }
  };

  useEffect(() => {
    checkTokenIsValid();
  }, []);

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate]);

  if (isLoading) {
    return <div className="w-full h-screen flex items-center justify-center">
      <Spiner classes={'w-14 h-14'}/>
    </div>;
  }

  return <Outlet />;
};

export default ProtectedRoute;
