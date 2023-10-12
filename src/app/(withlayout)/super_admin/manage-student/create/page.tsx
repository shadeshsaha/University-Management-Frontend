"use client";

import StepperForm from "@/components/StepperForm/StepperForm";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
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
