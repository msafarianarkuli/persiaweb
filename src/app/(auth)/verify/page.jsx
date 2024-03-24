import { meta } from "@/utils/meta";
import Verify from "@/views/auth/verify";

export const metadata = {
  title: meta.login.title,
  description: meta.login.description,
};

function VerifyPage() {
  return <Verify />;
}

export default VerifyPage;
