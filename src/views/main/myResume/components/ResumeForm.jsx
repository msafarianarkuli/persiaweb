"use client";
import { Form, Formik } from "formik";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/input";
import Textarea from "@/components/ui/inputs/Textarea";
import Select from "@/components/ui/inputs/Select";
import { age, education, english, gender } from "@/utils/constants";
import { useState } from "react";

function ResumeForm() {
  const [Gender, setGender] = useState(0);

  const initialValues = {
    name: "",
    phone: "",
    age: "",
    religion: "",
    age: "",
    income: "",
    skills: "",
    experience: "",
    address: "",
  };

  const handleSelectOnChange = (value) => {
    setGender(value);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}>
      <Form>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
          <Input
            type='text'
            name='name'
            id='name'
            top={true}
            label='نام و نام‌خانوادگی'
          />
          <Input
            type='text'
            name='phone'
            id='phone'
            top={true}
            label='شماره موبایل'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-6'>
          <Input type='text' name='age' id='age' top={true} label='سن' />
          <Select
            label='جنسیت'
            data={gender}
            id='gender'
            name='gender'
            defaultValue={gender?.[0]}
            onClick={(value) => handleSelectOnChange(value)}
          />
          <Input
            type='text'
            name='religion'
            id='religion'
            top={true}
            label='دین'
          />
          <Select
            label='میزان تحصیلات'
            data={education}
            id='education'
            name='education'
            defaultValue={education?.[0]}
          />
          {!Gender && (
            <Select
              label='وضعیت نظام وظیفه'
              data={age}
              id='status'
              name='status'
              defaultValue={age?.[0]}
            />
          )}
        </div>
        <div className='grid grid-cols-1پ lg:grid-cols-2 gap-6 mt-6'>
          <Select
            label='سطح زبان انگلیسی'
            data={english}
            id='english'
            name='english'
            defaultValue={english?.[0]}
          />
          <Input
            type='text'
            name='income'
            id='income'
            top={true}
            label='میزان حقوق درخواستی'
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
          <Textarea
            type='text'
            name='skills'
            id='skills'
            top={true}
            label='مهارت‌ها'
          />
          <Textarea
            type='text'
            name='experience'
            id='experience'
            top={true}
            label='سابقه و محل کار'
          />
        </div>
        <div className='grid grid-cols-1 gap-6 mt-6'>
          <Textarea
            type='text'
            name='address'
            id='address'
            top={true}
            label='آدرس محل سکونت'
          />
        </div>
        <Button type='submit' className='bg-primary-green text-white mt-4'>
          ثبت رزومه
        </Button>
      </Form>
    </Formik>
  );
}

export default ResumeForm;
