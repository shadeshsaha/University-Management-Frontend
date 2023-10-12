"use client";

import Form from "@/components/Forms/Form";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateAdminPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log("data: ", data);
    } catch (error: any) {
      console.error("error: ", error.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h1>Create Admin</h1>

      <div>
        <Form submitHandler={onSubmit}></Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;
