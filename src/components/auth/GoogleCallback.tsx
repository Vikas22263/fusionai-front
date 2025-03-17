import React, { useEffect } from "react";
import { LoadingDots } from "../molecules/loadingDot";
const GoogleCallback: React.FC = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (window.opener) {
      window.opener.postMessage({ type: 'UPDATE_STORE', token }, 'https://algofusionai.com');
    }
    window.close();
  }, []);

  return <LoadingDots />;
};

export default GoogleCallback;
