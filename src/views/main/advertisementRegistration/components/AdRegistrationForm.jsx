"use client";
import { Form, Formik } from "formik";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/Input";
import Select from "@/components/ui/inputs/Select";
import { Advantages, age, education, english, gender } from "@/utils/constants";
import Radio from "@/components/ui/inputs/Radio";
import Textarea from "@/components/ui/inputs/Textarea";
import Checkbox from "@/components/ui/inputs/Checkbox";

function AdRegistrationForm() {
  const initialValues = {
    industy: "",
    age: "",
    experience: "",
    worktime: "",
    income: "",
    address: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}>
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
          <Input type='text' name='worktime' id='worktime' label='ساعت کاری' />
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
          <div className='flex'>
            <span className='me-4'>میزان تحصیلات مورد نیاز</span>
            {education.map((opt, index) => (
              <Radio
                label={opt.label}
                key={index}
                name='education'
                value={opt.value}
              />
            ))}
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-6'>
          <div className='flex'>
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
        <Button type='submit' className='bg-primary-green text-white mt-4 mb-8'>
          ارسال رزومه
        </Button>
      </Form>
    </Formik>
  );
}

export default AdRegistrationForm;
