"use client";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/input";
import { Form, Formik } from "formik";
import { signIn, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
function VerifyForm() {
  const router = useRouter();
  const handleSubmit = async (values) => {
    const body = {
      ...values,
      phone: Cookies.get("user_phone"),
    };
    signIn("credentials", {
      ...body,
      redirect: false,
    });
    // router.push("/");
  };

  const data = useSession();
  Cookies.set("token", data?.data?.user?.access_token);
  const initialValues = { code: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}>
      <Form>
        <Input type='text' name='code' id='code' label='کد یکبار مصرف' />
        <Button type='submit' className='bg-primary-green text-white mt-4'>
          ورود
        </Button>
      </Form>
    </Formik>
  );
}

export default VerifyForm;
