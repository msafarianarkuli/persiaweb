"use client";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/Input";
import { Form, Formik } from "formik";

function LoginForm() {
  const initialValues = { phone: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}>
      <Form>
        <Input type='text' name='phone' id='phone' label='شماره موبایل' />
        <Button type='submit' className='bg-primary-green text-white mt-4'>
          دریافت کد
        </Button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
