import React, { useEffect } from "react";

const GoogleAddCard = ({ addsloat }) => {
  useEffect(() => {
    // Function to refresh the ad
    const refreshAds = () => {
      // Find all the ads in the DOM
      const ads = document.querySelectorAll(".adsbygoogle");

      ads.forEach(ad => {
        // Check if the ad already has content, if so, skip
        if (!ad.innerHTML.trim()) {
          // Push a new ad if the ad slot is empty
          window.adsbygoogle.push({});
        }
      });
    };

    // Initial ad load
    refreshAds();

    // Set interval to refresh the ad every 30 seconds (adjust as needed)
    const interval = setInterval(refreshAds, 30000); // Refresh every 30 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ad-container">
      <ins
        className={`adsbygoogle `}
        style={{ display: "block" ,width:"full", height:"full",  }}
        data-ad-client="ca-pub-7717561782171956"
        data-ad-slot={addsloat}
        data-ad-format="auto"
        data-ad-frequency-hint="30s"
      ></ins>
    </div>
  );
};

export default GoogleAddCard;
