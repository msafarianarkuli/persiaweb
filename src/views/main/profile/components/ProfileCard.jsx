import Container from "@/components/ui/containers/Container";
import H1 from "@/components/ui/heading/H1";
import Link from "next/link";

function ProfileCard({ item }) {
  const { title, description, Icon, link } = item;
  return (
    <Link href={link}>
      <Container className='bg-bg-100 flex items-center gap-x-4 pt-0 cursor-pointer'>
        <Icon className='text-5xl mt-4 text-primary-blue' />
        <div>
          <H1 className='mb-4'>{title}</H1>
          <p className='text-text-300'>{description}</p>
        </div>
      </Container>
    </Link>
  );
}

export default ProfileCard;
