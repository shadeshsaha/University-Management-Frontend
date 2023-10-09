import { ReactElement, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

// Form 3 ta property(props) receive korbe. children, handler function(ex: submitHandler), defaultValues
const Form = ({ children, submitHandler, defaultValues }: FormProps) => {
  // defaultValues validation
  const formConfig: FormConfig = {};
  if (!!defaultValues) {
    // !! means kono truthy value thakle porer kaj tuku execute korbe
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm<FormProps>(formConfig);
  // console.log("methods: ", methods)
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
