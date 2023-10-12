import StepperForm from "@/components/StepperForm/StepperForm";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: "Second-content",
    },
    {
      title: "Guardian Information",
      content: "Last-content",
    },
    {
      title: "Local Guardian Information",
      content: "Last-content",
    },
  ];

  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm steps={steps} />
    </div>
  );
};

export default CreateStudentPage;
