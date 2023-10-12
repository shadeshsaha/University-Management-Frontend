import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateDepartmentPage = () => {
  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
    </div>
  );
};

export default CreateDepartmentPage;
