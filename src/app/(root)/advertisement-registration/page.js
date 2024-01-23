import { meta } from "@/utils/meta";
import AdvertisementRegistration from "@/views/main/advertisementRegistration";

export const metadata = {
  title: meta.adRegistration.title,
  description: meta.adRegistration.description,
};

function AdvertisementRegistrationPage() {
  return <AdvertisementRegistration />;
}

export default AdvertisementRegistrationPage;
