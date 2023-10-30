"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useAcademicDepartmentQuery,
  useUpdateAcademicDepartmentMutation,
} from "@/redux/api/academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";

const EditACDepartmentPage = ({ params }: any) => {
  console.log("params: ", params);

  // get single department hooks from "redux/api/academic/departmentApi"
  const { data: departmentData, isLoading: loading } =
    useAcademicDepartmentQuery(params?.id);
  console.log("departmentData: ", departmentData);
  const [updateAcademicDepartment] = useUpdateAcademicDepartmentMutation();

  const onSubmit = async (values: any) => {
    try {
      const res = await updateAcademicDepartment({
        id: params?.id,
        body: values,
      }).unwrap();
      // console.log(res);
      if (res?.id) {
        message.success("Academic Department Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    title: departmentData?.title || "",
    academicFacultyId: departmentData?.academicFacultyId || "",
    // academicFacultyId: departmentData?.academicFaculty?.title || "",
  };

  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const academicFaculties = data?.academicFaculties;
  const acFacultiesOptions = academicFaculties?.map((faculty) => {
    return {
      label: faculty?.title,
      value: faculty?.id,
    };
  });

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "academic-department",
            link: "/admin/academic/department",
          },
        ]}
      />

      {/* <ActionBar title="Update Admin"></ActionBar> */}
      {/* <h1>Edit Academic Department {params?.id}</h1> */}
      <h1>Edit Academic Department {departmentData?.title}</h1>

      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="title" label="Academic Department Title" />
            </Col>
          </Row>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                size="large"
                name="academicFacultyId"
                options={acFacultiesOptions as SelectOptions[]}
                label="Academic Faculty"
                placeholder="Select"
              />
            </Col>
          </Row>
          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditACDepartmentPage;
