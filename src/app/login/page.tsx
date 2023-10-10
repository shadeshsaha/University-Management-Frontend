"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assests/login-image.png";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  // console.log("getUserInfo(): ", getUserInfo());

  const [userLogin] = useUserLoginMutation();
  console.log("isLoggedIn: ", isLoggedIn());
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      // console.log("data: ", data);
      const res = await userLogin({ ...data }).unwrap(); // using unwarp it provides actual data.
      // console.log("res: ", res);
      storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (error) {
      console.error("error: ", error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>

        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User ID" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
