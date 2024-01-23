"use client";
import Container from "@/components/ui/containers/Container";
import ResumeDetail from "./components/ResumeDetail";
import ResumeList from "./components/ResumeList";
import Pagination from "@/components/ui/pagination/pagination";
import { useState } from "react";
import ResumeDetailMobile from "./components/ResumeDetailMobile";
import Drawer from "@/components/ui/Drawer/Drawer";

function ResumesReceived() {
  const [open, setOpen] = useState(false);

  const handleOPen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container className='bg-white my-6'>
        <div className='grid col-span-1 lg:grid-cols-3 gap-x-6'>
          <div>
            <Container className='bg-bg-100 lg:col-span-1 pt-0'>
              <ResumeList onOpen={handleOPen} />
            </Container>
            <Pagination />
          </div>
          <Container className='bg-bg-100 lg:col-span-2 hidden lg:block'>
            <ResumeDetail />
          </Container>
        </div>
      </Container>
      <Drawer open={open}>
        <ResumeDetailMobile onClose={handleClose} />
      </Drawer>
    </>
  );
}

export default ResumesReceived;
