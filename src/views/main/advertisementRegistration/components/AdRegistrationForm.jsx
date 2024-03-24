"use client";
import { Form, Formik } from "formik";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/input";
import Select from "@/components/ui/inputs/Select";
import { Advantages, age, education, english, gender } from "@/utils/constants";
import Textarea from "@/components/ui/inputs/Textarea";
import Checkbox from "@/components/ui/inputs/Checkbox";
import Upload from "@/components/ui/picture/Upload";
import { useState } from "react";

function AdRegistrationForm() {
  const [isWoman, setIsWoman] = useState(false);
  const initialValues = {
    industy: "",
    age: "",
    experience: "",
    worktime: "",
    income: "",
    address: "",
  };

  const onSubmit = (values) => {};

  return (
    <div className='md:px-[170px]'>
      <Upload />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}>
        <Form>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
            <Select
              label='استان'
              data={gender}
              id='state'
              name='state'
              defaultValue={gender?.[0]}
            />
            <Select
              label='عنوان شغلی'
              data={gender}
              id='state'
              name='state'
              defaultValue={gender?.[0]}
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
            <Input type='text' name='industy' id='industy' label='نام شرکت' />
            <Input type='text' name='age' id='age' label='سن مورد نیاز' />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
            <Input
              type='text'
              name='experience'
              id='experience'
              label='سابقه کار مورد نیاز'
            />
            <Input
              type='text'
              name='worktime'
              id='worktime'
              label='ساعت کاری'
            />
            <Select
              label='میزان حقوق'
              data={gender}
              id='income'
              name='income'
              defaultValue={gender?.[0]}
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
            <div className='flex gap-x-2'>
              <span className='me-4'>جنسیت مورد نیاز</span>
              {gender.map((opt, index) => (
                <Checkbox
                  label={opt.label}
                  key={index}
                  name='gender'
                  value={opt.value}
                />
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6 mt-6'>
            <div className='lg:flex'>
              <span className='me-4'>میزان تحصیلات مورد نیاز</span>
              {education.map((opt, index) => (
                <Checkbox
                  label={opt.label}
                  key={index}
                  name='education'
                  value={opt.value}
                />
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6 mt-6'>
            <div className='lg:flex'>
              <span className='me-4'>مزایا</span>
              {Advantages.map((opt, index) => (
                <Checkbox
                  label={opt.label}
                  key={index}
                  name='advantages'
                  value={opt.value}
                />
              ))}
            </div>
          </div>
          <Textarea type='text' name='address' id='address' label='محل کار' />
          <Button
            type='submit'
            className='bg-primary-green text-white mt-4 mb-8'>
            ثبت آگهی
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default AdRegistrationForm;
