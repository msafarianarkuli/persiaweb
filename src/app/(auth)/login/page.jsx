import { meta } from "@/utils/meta";
import Login from "@/views/auth/login";

export const metadata = {
  title: meta.login.title,
  description: meta.login.description,
};

function LoginPage() {
  return <Login />;
}

export default LoginPage;
