"use client";

import { useSingleAdminQuery } from "@/redux/api/adminApi";
import { Col, Form, Input, Row, Skeleton, Spin } from "antd";
import dayjs from "dayjs";
import Image from "next/image";

const AdminDetailsPage = ({ params }: any) => {
  console.log("params: ", params);

  const {
    data: singleAdmin,
    isLoading: loading,
    isFetching,
  } = useSingleAdminQuery(params?.id);
  console.log("singleAdmin: ", singleAdmin);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen common">
        <Skeleton />
      </div>
    );
  }

  return (
    <>
      <div>
        <Form>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <Image
                  width={210}
                  height={200}
                  src={singleAdmin?.profileImage ?? ""}
                  className="w-[200px] h-[200px] object-cover object-center rounded-full border shadow-xl bg-white"
                  alt="admin-image"
                  style={{
                    borderRadius: "80%",
                  }}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <Input
                  prefix={
                    singleAdmin?.name?.firstName +
                    " " +
                    singleAdmin?.name?.middleName +
                    singleAdmin?.name?.lastName
                  }
                  // suffix=""
                  disabled
                />

                <Input
                  prefix={singleAdmin?.email}
                  // suffix=""
                  style={{
                    marginTop: "10px",
                  }}
                  disabled
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                {loading ||
                  (isFetching && (
                    <Spin spinning={loading || isFetching}></Spin>
                  ))}
              </Col>
            </Row>
          </div>

          {/* basic info */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={4}>
                First Name:
                <Input
                  prefix={singleAdmin?.name?.firstName}
                  // suffix=""
                  disabled
                />
              </Col>
              <Col className="gutter-row" span={4}>
                Middle Name:
                <Input
                  prefix={singleAdmin?.name?.middleName}
                  // suffix=""
                  disabled
                />
              </Col>
              <Col
                className="gutter-row"
                span={4}
                style={{
                  marginBottom: "10px",
                }}
              >
                Last Name:
                <Input
                  prefix={singleAdmin?.name?.lastName}
                  // suffix=""
                  disabled
                />
              </Col>
              <Col className="gutter-row" span={5}>
                Email:
                <Input
                  prefix={singleAdmin?.email}
                  // suffix=""
                  disabled
                />
              </Col>
              <Col className="gutter-row" span={4}>
                Contact Number:
                <Input
                  prefix={singleAdmin?.contactNo ?? "No Number"}
                  // suffix=""
                  disabled
                />
              </Col>
              <Col className="gutter-row" span={3}>
                Blood Group:
                <Input
                  prefix={singleAdmin?.bloodGroup ?? "- -"}
                  // suffix=""
                  disabled
                />
              </Col>
              <Col className="gutter-row" span={10}>
                Permanent Address:
                <Input
                  prefix={singleAdmin?.permanentAddress ?? "- -"}
                  // suffix=""
                  disabled
                />
              </Col>
              <Col className="gutter-row" span={10}>
                Present Address:
                <Input
                  prefix={singleAdmin?.presentAddress ?? "- -"}
                  // suffix=""
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col
                className="gutter-row"
                span={4}
                style={{ margin: "10px 0px" }}
              >
                Profile Created at:
                <Input
                  prefix={
                    singleAdmin?.createdAt &&
                    dayjs(singleAdmin?.createdAt).format("MMM D, YYYY hh:mm A")
                  }
                  // suffix=""
                  disabled
                />
              </Col>
              <Col
                className="gutter-row"
                span={4}
                style={{ margin: "10px 10px" }}
              >
                Profile Updated at:
                <Input
                  prefix={
                    singleAdmin?.updatedAt &&
                    dayjs(singleAdmin?.updatedAt).format("MMM D, YYYY hh:mm A")
                  }
                  // suffix=""
                  disabled
                />
              </Col>
            </Row>
          </div>

          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              More Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={4}>
                Date Of Birth:
                <Input
                  prefix={singleAdmin?.dateOfBirth}
                  // suffix=""
                  disabled
                />
              </Col>
              <Col className="gutter-row" span={5}>
                Emergency Contact Number:
                <Input
                  prefix={singleAdmin?.emergencyContactNo}
                  // suffix=""
                  disabled
                />
              </Col>
            </Row>

            <div>
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "5px",
                  marginTop: "15px",
                }}
              >
                Management Department
              </p>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={10}>
                  Department Name:
                  <Input
                    prefix={singleAdmin?.managementDepartment?.title}
                    // suffix=""
                    disabled
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AdminDetailsPage;
