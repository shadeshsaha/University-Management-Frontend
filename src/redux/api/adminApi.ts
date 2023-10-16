import { IAdmin, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create admin
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    // show admins
    admins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),

    // get single department by id
    singleAdmin: build.query({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),

    // update single admin by id
    updateAdmin: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    // delete single admin by id
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useAdminsQuery,
  useAddAdminWithFormDataMutation,
  useSingleAdminQuery, // get single admin hooks
  useUpdateAdminMutation, // update single admin hooks
  useDeleteAdminMutation, // delete single admin hooks
} = adminApi;
