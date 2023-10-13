// Injecting & exporting additional endpoints

import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

// departmentApi is for create department.
export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // eta ekta hook create kore dibe. er maddhome department create korbe.
    addDepartment: build.mutation({
      query: (departmentData) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data: departmentData,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});
// ekhanei DEPARTMENT API er kaj sesh. erpor rootReducer a jeye connect korte hobe.

export const { useAddDepartmentMutation } = departmentApi;

// RTK Query er khetre POST(POST/PUT/PATCH) method hole, "mutation" korte hoy(line-11)

// useAddDepartmentMutation k "super_admin/department/create/page.tsx" er moddhe call korte hobe. (Same baki gulor jonnow)
