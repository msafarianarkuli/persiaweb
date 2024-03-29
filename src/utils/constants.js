import { FaRegNewspaper, FaRegListAlt, FaRegBookmark } from "react-icons/fa";

export const profileCardsInfo = [
  {
    id: 1,
    Icon: FaRegNewspaper,
    link: "my-advertisements",
    title: "آگهی‌های من",
    description: "مشاهده تمام آگهی‌های ثبت شده توسط شما",
  },
  {
    id: 2,
    Icon: FaRegListAlt,
    link: "my-resume",
    title: "اطلاعات رزومه من",
    description: "مشاهده و ویرایش اطلاعات پیش‌فرض رزومه شما",
  },
  {
    id: 3,
    Icon: FaRegBookmark,
    link: "bookmarks",
    title: "نشان شده‌ها",
    description: "مشاهده تمام آگهی‌هایی که نشان کرده‌اید",
  },
];

export const gender = [
  { value: "male", label: "مرد" },
  { value: "female", label: "زن" },
  { value: "no_matter", label: "تفاوتی ندارد" },
];

export const education = [
  { value: "middle_degree", label: "زیر دیپلم" },
  { value: "diploma", label: "دیپلم" },
  { value: "associate_degree", label: "کاردانی" },
  { value: "bachelor", label: "کارشناسی" },
  { value: "masters", label: "کارشناسی‌ارشد" },
  { value: "phd", label: "دکتری" },
  { value: "other", label: "سایر" },
];

export const age = [
  { value: 0, label: "سربازی رفته ام" },
  { value: 1, label: "معاف شده ام" },
];

export const english = [
  { value: 0, label: "عالی" },
  { value: 1, label: "خوب" },
  { value: 2, label: "متوسط" },
  { value: 3, label: "ضعیف" },
];

export const Advantages = [
  { value: "round_trip_service", label: "سرویس رفت و برگشت" },
  { value: "lunch", label: "نهار" },
  { value: "occasional_gifts", label: "هدایا مناسبتی" },
  { value: "supplementary_insurance", label: "بیمه تکمیلی" },
  { value: "salary_on_time", label: "حقوق سر‌‌موقع" },
];

export const work_experience = [
  { value: "no_history_required", label: "مهم نیست" },
  { value: "less_than_1_year", label: "کمتر از یک سال" },
  { value: "at_least_1_year", label: "حداقل یک سال" },
  { value: "at_least_2_years", label: "حداقل دو سال" },
  { value: "at_least_3_years", label: "حداقل سه سال" },
  { value: "at_least_4_years", label: "حداقل چهار سال" },
  { value: "at_least_5_years", label: "حداقل پنج سال" },
  { value: "more_than_5_years", label: "بیشتر از پنج سال" },
];
