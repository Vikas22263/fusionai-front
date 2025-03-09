import { Request } from "@/lib/axios";
import { userDetails } from "../Reducers/stateSlice";

export const asyncpersonHander = () => async (dispatch, getState) => {
  try {
    const response = await Request.get("/profile", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("acessToken") || ""),
      },
    });
    console.log(response);
    dispatch(userDetails(response.data.data));
  } catch (error) {
    console.log(error);
    dispatch(userDetails(null));
  }
};
