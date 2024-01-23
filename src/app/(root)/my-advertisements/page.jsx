import { meta } from "@/utils/meta";
import MyAdvertisements from "@/views/main/myAdvertisements";

export const metadata = {
  title: meta.myads.title,
  description: meta.myads.description,
};

function MyAdvertisementsPage() {
  return <MyAdvertisements />;
}

export default MyAdvertisementsPage;
