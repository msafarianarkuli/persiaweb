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
  { value: 0, label: "سرویس رفت و برگشت" },
  { value: 1, label: "نهار" },
  { value: 2, label: "هدایا مناسبتی" },
  { value: 3, label: "بیمه تکمیلی" },
  { value: 3, label: "حقوق سر‌‌موقع" },
];
