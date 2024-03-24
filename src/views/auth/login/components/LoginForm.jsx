"use client";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/input";
import { Form, Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import login from "@/services/api/auth/login";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["auth/login"],
    mutationFn: (data) => login(data),
    onSuccess: (data) => {
      Cookies.set("code", data?.data?.code);
      Cookies.set("user_phone", data?.data?.user_phone);
      router.push("/verify");
    },
  });

  const handleSubmit = async (values) => {
    mutate(values);
  };
  const initialValues = { phone: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}>
      <Form>
        <Input type='text' name='phone' id='phone' label='شماره موبایل' />
        <Button type='submit' className='bg-primary-green text-white mt-4'>
          {isLoading ? "در حال دریافت کد..." : "دریافت کد"}
        </Button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
