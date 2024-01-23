import { meta } from "@/utils/meta";
import Profile from "@/views/main/profile";

export const metadata = {
  title: meta.profile.title,
  description: meta.profile.description,
};

function ProfilePage() {
  return <Profile />;
}

export default ProfilePage;
