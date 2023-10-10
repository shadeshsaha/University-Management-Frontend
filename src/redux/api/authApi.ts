// Injecting & exporting additional endpoints

import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // eta ekta hook create kore dibe. er maddhome user login korbe
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
// ekhanei auth API er kaj sesh. erpor rootReducer a jeye connect korte hobe

export const { useUserLoginMutation } = authApi;
