import Container from "@/components/ui/containers/Container";
import H4 from "@/components/ui/heading/H4";
import Link from "next/link";

function ProfileCard({ item }) {
  const { title, description, Icon, link } = item;
  return (
    <Link href={link}>
      <Container className='bg-bg-100 flex items-center gap-x-4 pt-0 cursor-pointer hover:shadow-[0px_0px_9px_0px_rgba(0,0,0,0.5)] custom-transition'>
        <Icon className='text-5xl mt-4 text-primary-blue hidden md:block' />
        <div className=' w-full'>
          <div className='flex justify-between items-center'>
            <H4 className='pt-8 pb-4'>{title}</H4>
            <Icon className='text-5xl mt-4 text-primary-blue md:hidden' />
          </div>
          <p className='text-text-300'>{description}</p>
        </div>
      </Container>
    </Link>
  );
}

export default ProfileCard;
