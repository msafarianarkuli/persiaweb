import Container from "@/components/ui/containers/Container";
import H1 from "@/components/ui/heading/H1";
import Link from "next/link";
import LoginForm from "./components/LoginForm";

function Login() {
  return (
    <Container className='bg-white my-6 text-center'>
      <div className='max-w-sm mx-auto'>
        <H1>ورود به جاب</H1>
        <p className='text-text-100 mt-6 mb-10'>
          با ورود به جاب{" "}
          <Link href='' className='text-primary-blue'>
            قوانین و مقررات
          </Link>{" "}
          سایت را می پذیرید
        </p>
        <LoginForm />
      </div>
    </Container>
  );
}

export default Login;
