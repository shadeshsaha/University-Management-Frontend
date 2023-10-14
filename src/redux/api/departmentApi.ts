// Injecting & exporting additional endpoints

import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

// departmentApi is for create department.
export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get method tai query hobe
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
      // providesTags hocche jokhn get korbo tokhn cache kore rakhbe.
    }),

    // eta ekta hook create kore dibe. er maddhome department create korbe.
    addDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/create-department`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.department],
      // invalidatesTags hocche prottekta POST request er ager cache kora data gulo k se remove kore felbe.
    }),
  }),
});
// ekhanei DEPARTMENT API er kaj sesh. erpor rootReducer a jeye connect korte hobe.

export const { useDepartmentsQuery, useAddDepartmentMutation } = departmentApi;

// RTK Query er khetre POST(POST/PUT/PATCH) method hole, "mutation" korte hoy(line-11)

// useAddDepartmentMutation k "super_admin/department/create/page.tsx" er moddhe call korte hobe. (Same baki gulor jonnow)
