import Container from "@/components/ui/containers/Container";
import H1 from "@/components/ui/heading/H1";
import ProfileCard from "./components/ProfileCard";
import { profileCardsInfo } from "@/utils/constants";

function Profile() {
  return (
    <Container className='bg-white my-6'>
      <H1 className='text-center'>پروفایل من</H1>
      <div className='pt-12 pb-8 flex flex-col gap-y-4'>
        {profileCardsInfo.map((item) => (
          <ProfileCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}

export default Profile;
