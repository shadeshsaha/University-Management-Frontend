"use client";

import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormYearPicker from "@/components/Forms/FormYearPicker";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { monthOptions } from "@/constants/global";
import {
  useAcademicSemesterQuery,
  useUpdateAcademicSemesterMutation,
} from "@/redux/api/academic/semesterApi";
import { Button, Col, Row, message } from "antd";

const semesterOptions = [
  {
    label: "Autumn",
    value: "Autumn",
  },
  {
    label: "Summer",
    value: "Summer",
  },
  {
    label: "Fall",
    value: "Fall",
  },
];

const EditACSemesterPage = ({ params }: any) => {
  console.log("params: ", params);

  // get single semester hooks from "redux/api/academic/semesterApi"
  const { data: semesterData, isLoading: loading } = useAcademicSemesterQuery(
    params?.id
  );
  console.log("semesterData: ", semesterData);

  const [updateAcademicSemester] = useUpdateAcademicSemesterMutation();

  const onSubmit = async (values: any) => {
    console.log("values: ", values);
    console.log("values.year: ", values.year);
    try {
      const res = await updateAcademicSemester({
        id: params?.id,
        body: values,
      }).unwrap();
      console.log("res: ", res);
      if (res?.id) {
        message.success("Academic Semester Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    title: semesterData?.title || "",
    startMonth: semesterData?.startMonth || "",
    endMonth: semesterData?.endMonth || "",
    year: semesterData?.year || "",
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
            label: "academic-semester",
            link: "/admin/academic/semester",
          },
        ]}
      />

      {/* <ActionBar title="Update Admin"></ActionBar> */}
      {/* <h1>Edit Academic Semester {params?.id}</h1> */}
      <h1>
        Edit Academic Semester {semesterData?.title} - {semesterData?.year}
      </h1>

      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <div style={{ margin: "10px 0" }}>
                <FormSelectField
                  size="large"
                  name="title"
                  options={semesterOptions}
                  label="Semester Title"
                  placeholder="Select"
                />
              </div>
              <div style={{ margin: "10px 0" }}>
                <FormSelectField
                  size="large"
                  name="startMonth"
                  options={monthOptions}
                  label="Start Month"
                  placeholder="Select"
                />
              </div>
              <div style={{ margin: "10px 0" }}>
                <FormSelectField
                  size="large"
                  name="endMonth"
                  options={monthOptions}
                  label="End Month"
                  placeholder="Select"
                />
              </div>
              <div style={{ margin: "10px 0" }}>
                <FormYearPicker name="year" label="Year" picker="year" />
              </div>
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

export default EditACSemesterPage;
