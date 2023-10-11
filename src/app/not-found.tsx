// import { Row } from "antd";
import { Button, Result, Row } from "antd";

const NotFoundPage = () => {
  return (
    // 1st
    // <Row
    //   justify="center"
    //   align="middle"
    //   style={{
    //     height: "100vh",
    //   }}
    // >
    //   <h1>404!!! Page Not Found!</h1>
    // </Row>

    // 2nd
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        height: "100vh",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </Row>
  );
};

export default NotFoundPage;
