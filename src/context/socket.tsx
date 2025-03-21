// WebSocketContext.js
import React, {
  createContext,
  startTransition,
  useEffect,
  useState,
} from "react";
import { getWebSocket } from "@/utils/socket";

import { useAppDispatch } from "@/hooks/useReduxTypes";
import { setPreviousData, setStockSlider } from "@/store/Reducers/sliderSlice";
import { setIndexData, setMostActive } from "@/store/Reducers/stockData";
import { Request } from "@/lib/axios";
export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ws = getWebSocket();

    const getPrevdata = async () => {
      try {
        const response = await Request.get("/previousScripts");
        console.log(response)
        dispatch(setPreviousData(response.data.data||[]));
      } catch (error) {
        console.log(error);
      }
    };

    const handleMessage = (event) => {
      try {
        const response = JSON.parse(event.data);

        if (response.event === "getFeeds") {
          // const parsedData = JSON.parse(response.data);
          const parsedData = response.data;
          startTransition(() => {
            // console.log(parsedData)
            // Check for duplicates

            // console.log(td)
            const pdata = JSON.parse(parsedData);
            dispatch(setStockSlider(pdata));

            // Return updated stock data (for local state, if needed)
          });
        }
        if (response.event === "indexData") {
          try {
            const parsedData = JSON.parse(response.data);

            const indexdata = (prevIndexData) => {
              if (!parsedData || typeof parsedData !== "object") {
                console.error("Invalid parsedData:", parsedData);
                return prevIndexData; // Return current state if data is invalid
              }

              const { Name: name, LTP: ltp, percentage } = parsedData;

              // Validation
              if (
                !name ||
                typeof name !== "string" ||
                !name.trim() ||
                ltp === undefined ||
                percentage === undefined
              ) {
                console.error("Invalid data format:", parsedData);
                return prevIndexData; // Keep existing state if data is invalid
              }

              // Fixed order of indices
              const fixedOrder = [
                "NIFTY 50",
                "BANKNIFTY",
                "Nifty Midcap",
                "India VIX",
              ];

              // Ensure `prevIndexData` is always an array
              const updatedData = Array.isArray(prevIndexData)
                ? [...prevIndexData]
                : Array(fixedOrder.length).fill(null);

              // Find the index for the current name
              const index = fixedOrder.indexOf(name.trim());
              if (index === -1) {
                console.error("Unexpected name:", name);
                return prevIndexData; // Return current state if name is not in fixed order
              }

              // Update the corresponding position in the array
              updatedData[index] = { name, ltp, percentage };

              console.log("Updated Data:", updatedData);

              return updatedData;
            };

            // Correct way to update Redux state
            // dispatch(setIndexData((prevState) => indexdata(prevState)));
          } catch (error) {
            console.error("Error parsing response data:", error);
          }
        }

        if (response.event === "activeStockConnection") {
          try {
            dispatch(setMostActive(response.data.data));
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (err) {
        console.error("Error parsing WebSocket message:", err);
      }
    };
    getPrevdata();
    if (ws) {
      ws.onopen = () => {
        console.log("WebSocket connected");
      };

      ws.onclose = () => {
        console.log("WebSocket disconnected");
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.onmessage = handleMessage;

      setSocket(ws);
    } else {
      console.error("Failed to initialize WebSocket connection.");
    }
  }, []);

  console.log("hited");
  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};
