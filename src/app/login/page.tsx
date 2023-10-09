"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assests/login-image.png";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log("data: ", data);
    } catch (error) {}
  };

  return (
    <Row>
      <Col sm={12} md={16} lg={16}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1>First login your account</h1>

        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User ID" />
            </div>
            <div>
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
