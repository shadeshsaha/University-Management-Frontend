"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useAcademicFacultyQuery,
  useUpdateAcademicFacultyMutation,
} from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";

const EditACFacultyPage = ({ params }: any) => {
  console.log("params: ", params);

  // get single academic faculty hooks from "redux/api/academic/facultyApi"
  const { data: acFacultyData, isLoading: loading } = useAcademicFacultyQuery(
    params?.id
  );
  console.log("acFacultyData: ", acFacultyData);
  const [updateAcademicFaculty] = useUpdateAcademicFacultyMutation();

  const onSubmit = async (values: any) => {
    console.log("values: ", values);
    console.log("params: ", params);
    try {
      const res = await updateAcademicFaculty({
        id: params?.id,
        body: values,
      }).unwrap();
      console.log("res: ", res);
      if (res?.id) {
        message.success("Academic Faculty Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    title: acFacultyData?.title || "",
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "academic-faculty",
            link: "/admin/academic/faculty",
          },
        ]}
      />

      {/* <ActionBar title="Update Admin"></ActionBar> */}
      {/* <h1>Edit Faculty: {params?.id}</h1> */}
      <h1>Edit Faculty: {acFacultyData?.title}</h1>

      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="title"
                  size="large"
                  label="Faculty Title/Name"
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditACFacultyPage;
