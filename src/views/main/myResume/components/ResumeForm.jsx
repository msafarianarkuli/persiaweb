"use client";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/input";
import Textarea from "@/components/ui/inputs/Textarea";
import Select from "@/components/ui/inputs/Select";
import { education, english, gender, military_status } from "@/utils/constants";
import { useState } from "react";
import addResume from "@/services/api/resumes/addResume";
import toast from "react-hot-toast";
import getProfile from "@/services/api/profile/getProfile";
import { useResume } from "@/services/hooks/resumes/useResume";
import editResume from "@/services/api/resumes/editResume";

function ResumeForm() {
  const [Gender, setGender] = useState();
  const queryClient = useQueryClient();
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  const { mutate } = useMutation({
    mutationKey: ["addResume"],
    mutationFn: addResume,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data?.message);
      queryClient.invalidateQueries(["resume", profile.id]);
    },
  });

  const { mutate: edit } = useMutation({
    mutationKey: ["editResume"],
    mutationFn: editResume,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries(["resume", profile.id]);
    },
  });
  const { data } = useResume(profile?.id);

  const initialValues = {
    full_name: data?.full_name,
    phone: data?.phone,
    age: data?.age,
    religion: data?.religion,
    min_requested_salary: data?.min_requested_salary,
    max_requested_salary: data?.max_requested_salary,
    education: education?.[0]?.value,
    military_status: military_status?.[0]?.value,
    english_lan_status: english?.[0]?.value,
    address: data?.address,
    skills: data?.skills,
    work_experiences: data?.work_experiences,
  };

  const ValidateSchema = yup.object({
    full_name: yup.string().required("لطفا نام و نام خانوادگی را وارد نمایید"),
    phone: yup.string().required("لطفا شماره موبایل را وارد نمایید"),
    age: yup.string().required("لطفا سن را وارد نمایید"),
    religion: yup.string().required("لطفا دین را وارد نمایید"),
    min_requested_salary: yup
      .string()
      .required("لطفا حداقل حقوق درخواستی را وارد نمایید"),
    max_requested_salary: yup
      .string()
      .required("لطفا حداکثر حقوق درخواستی را وارد نمایید"),
    skills: yup.string().required("لطفا مهارت ها را وارد نمایید"),
    work_experiences: yup.string().required("لطفا سابقه را وارد نمایید"),
    address: yup.string().required("لطفا آدرس را وارد نمایید"),
  });

  const handleSelectOnChange = (value) => {
    setGender(value);
  };

  const onSubmit = (values) => {
    const newData = {
      ...values,
      ...{
        military_status:
          values?.gender === "male" ? values?.military_status : null,
      },
    };
    data ? edit({ id: profile?.id, obj: newData }) : mutate(newData);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={ValidateSchema}
      enableReinitialize={true}>
      <Form>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
          <Input
            type='text'
            name='full_name'
            id='full_name'
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
            defaultValue={
              !!data?.gender
                ? {
                    value: data?.gender,
                    label: gender?.find((g) => g.value === data?.gender)?.label,
                  }
                : gender?.[0]
            }
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
            defaultValue={
              !!data?.education
                ? {
                    value: data?.education,
                    label: education?.find((g) => g.value === data?.education)
                      ?.label,
                  }
                : education?.[0]
            }
          />
          {Gender === "male" ||
            (data?.gender === "male" ? (
              <Select
                label='وضعیت نظام وظیفه'
                data={military_status}
                id='military_status'
                name='military_status'
                defaultValue={
                  !!data?.military_status
                    ? {
                        value: data?.military_status,
                        label: military_status?.find(
                          (g) => g.value === data?.military_status
                        )?.label,
                      }
                    : military_status?.[0]
                }
              />
            ) : null)}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
          <Select
            label='سطح زبان انگلیسی'
            data={english}
            id='english_lan_status'
            name='english_lan_status'
            defaultValue={
              !!data?.english
                ? {
                    value: data?.english,
                    label: english?.find((g) => g.value === data?.english)
                      ?.label,
                  }
                : english?.[0]
            }
          />
          <Input
            type='text'
            name='min_requested_salary'
            id='min_requested_salary'
            top={true}
            label='حداقل حقوق درخواستی'
          />
          <Input
            type='text'
            name='max_requested_salary'
            id='max_requested_salary'
            top={true}
            label='حداکثر حقوق درخواستی'
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
            name='work_experiences'
            id='work_experiences'
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
          {data ? "ویرایش رزومه" : "ثبت رزومه"}
        </Button>
      </Form>
    </Formik>
  );
}

export default ResumeForm;
