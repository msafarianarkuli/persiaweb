"use client";
import { Form, Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/input";
import Select from "@/components/ui/inputs/Select";
import {
  Advantages,
  education,
  gender,
  work_experience,
} from "@/utils/constants";
import Textarea from "@/components/ui/inputs/Textarea";
import Checkbox from "@/components/ui/inputs/Checkbox";
import Upload from "@/components/ui/picture/Upload";
import { useSelectProvinces } from "@/services/hooks/area/useProvinces";
import { useSelectCategories } from "@/services/hooks/categories/useCategories";
import Radio from "@/components/ui/inputs/Radio";
import addAdvertise from "@/services/api/advertises/addAdvertise";
import { useAdvertisementJobTitle } from "@/services/hooks/advertises/useAdvertisementJobTitle";
import { useState } from "react";

function AdRegistrationForm() {
  const [image, setImage] = useState();
  const { data: provinces } = useSelectProvinces();
  const { data: categories } = useSelectCategories();
  const { data: jobTitles } = useAdvertisementJobTitle();
  const { mutate } = useMutation({
    mutationKey: ["addAdvertise"],
    mutationFn: addAdvertise,
    onSuccess: (data) => {
      toast.success(data?.data?.message);
    },
    onError: (err) => {
      toast.error(err.response.data.data.message);
    },
  });

  const initialValues = {
    job_title: "",
    province_id: provinces?.[0],
    category_id: categories?.[0],
    company_name: "",
    age: "",
    work_experience: "",
    min_salary: "",
    max_salary: "",
    start_time: "",
    end_time: "",
    gender: gender[0]?.value,
    education: education[0]?.value,
    advantages: Advantages[0]?.value,
    job_location: "",
  };

  const ValidateSchema = yup.object({
    company_name: yup.string().required("لطفا نام شرکت را وارد نمایید"),
    age: yup.string().required("لطفا سن را وارد نمایید"),
    min_salary: yup.string().required("لطفا حداقل حقوق را وارد نمایید"),
    max_salary: yup.string().required("لطفا حداکثر حقوق را وارد نمایید"),
    start_time: yup.string().required("لطفا ساعت شروع کار را وارد نمایید"),
    end_time: yup.string().required("لطفا ساعت پایان کار را وارد نمایید"),
    job_location: yup.string().required("لطفا محل کار را وارد نمایید"),
  });

  const onSubmit = (values) => {
    const data = {
      ...values,
      "advantages[]": values.advantages,
      company_logo: image,
    };
    mutate(data);
  };

  const handleupload = (base64) => {
    setImage(base64);
  };

  return (
    <div className='md:px-[170px]'>
      <Upload onUpload={handleupload} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={ValidateSchema}>
        <Form>
          <Select
            label='عنوان شغلی'
            data={jobTitles}
            id='job_title'
            name='job_title'
            defaultValue={jobTitles?.[0]}
          />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
            <Select
              label='استان'
              data={provinces}
              id='province_id'
              name='province_id'
              defaultValue={provinces?.[0]}
            />
            <Select
              label='دسته بندی مشاغل'
              data={categories}
              id='category_id'
              name='category_id'
              defaultValue={categories?.[0]}
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
            <Input
              type='text'
              name='company_name'
              id='company_name'
              label='نام شرکت'
            />
            <Input type='text' name='age' id='age' label='سن مورد نیاز' />
          </div>
          <div className='grid grid-cols-1 gap-6 mt-6'>
            <Select
              label='سابقه کار مورد نیاز'
              data={work_experience}
              id='work_experience'
              name='work_experience'
              defaultValue={work_experience?.[0]}
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6'>
            <Input
              type='text'
              name='min_salary'
              id='min_salary'
              label='حداقل حقوق'
            />
            <Input
              type='text'
              name='max_salary'
              id='max_salary'
              label='حداکثر حقوق'
            />
            <Input
              type='text'
              name='start_time'
              id='start_time'
              label='ساعت شروع کار'
            />
            <Input
              type='text'
              name='end_time'
              id='end_time'
              label='ساعت پایان کار'
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
            <div className='flex gap-x-2'>
              <span className='me-4'>جنسیت مورد نیاز</span>
              {gender.map((opt, index) => (
                <Radio
                  label={opt.label}
                  key={index}
                  name='gender'
                  value={opt.value}
                  checked={index === 0}
                />
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6 mt-6'>
            <div className='lg:flex'>
              <span className='me-4'>میزان تحصیلات مورد نیاز</span>
              {education.map((opt, index) => (
                <Radio
                  label={opt.label}
                  key={index}
                  name='education'
                  value={opt.value}
                  checked={index === 0}
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
                  key={opt.value}
                  name='advantages'
                  value={opt.value}
                  checked={index === 0}
                />
              ))}
            </div>
          </div>
          <Textarea
            type='text'
            name='job_location'
            id='job_location'
            label='محل کار'
          />
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
