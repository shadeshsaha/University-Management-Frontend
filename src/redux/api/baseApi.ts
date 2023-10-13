// Create an API Slice
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// ekhanei shokol API end-point gulo inject hobe.
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  // Axios baseQuery
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList, // Fetch hoye asha data k store kore rakhbo/cache kore rakhbo
});
