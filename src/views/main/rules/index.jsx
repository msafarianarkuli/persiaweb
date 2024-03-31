"use client";
import Container from "@/components/ui/containers/Container";
import H1 from "@/components/ui/heading/H1";
import { useSetting } from "@/services/hooks/setting/useSetting";

function Rules() {
  const { data: terms_page } = useSetting("terms_page");
  return (
    <Container className='bg-white relative mt-8 mb-44'>
      <H1 className='text-center'>قالب خام برای صفحه‌ساز</H1>
      <p className='text-text-100 max-w-4xl mx-auto leading-8 mt-8'>
        {terms_page?.value}
      </p>
    </Container>
  );
}

export default Rules;
