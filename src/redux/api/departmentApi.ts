// Injecting & exporting additional endpoints

import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

// departmentApi is for create department.
export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get All Departments
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

    // Create A New Department
    // eta ekta hook create kore dibe. er maddhome department create korbe.
    addDepartment: build.mutation({
      query: (data) => ({
        // url: `${DEPARTMENT_URL}/create-department`,
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.department],
      // invalidatesTags hocche prottekta POST request er ager cache kora data gulo k se remove kore felbe.
    }),

    // get single department by id
    department: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),

    // update single department by id
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});
// ekhanei DEPARTMENT API er kaj sesh. erpor rootReducer a jeye connect korte hobe.

export const {
  useDepartmentsQuery,
  useAddDepartmentMutation,
  useDepartmentQuery, // get single department hooks
  useUpdateDepartmentMutation, // update single department hooks
} = departmentApi;

// RTK Query er khetre POST(POST/PUT/PATCH) method hole, "mutation" korte hoy(line-11)

// useAddDepartmentMutation k "super_admin/department/create/page.tsx" er moddhe call korte hobe. (Same baki gulor jonnow)
