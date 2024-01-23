"use client";
import { useEffect, useRef, useState } from "react";
import { useField, useFormikContext } from "formik";
import { FaCaretDown } from "react-icons/fa";

const MultipleInput = ({
  data,
  defaultValue,
  id,
  label,
  classLabel,
  boxClassName,
  system,
  placeholder,
  Icon,
  className,
  ...props
}) => {
  const { setFieldValue } = useFormikContext();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [field] = useField(props);
  const componentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      componentRef?.current &&
      !componentRef?.current?.contains(event?.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleAddTag = (value, label) => {
    if (open !== false) {
      setText(label);
      setFieldValue(field.name, String(value));
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setText(defaultValue?.label);
      setFieldValue(field.name, String(data?.[0]?.value));
    }
  }, [defaultValue]);

  return (
    <div ref={componentRef} className='relative text-text-100'>
      {label ? (
        <label
          htmlFor={id}
          className={`flex items-center justify-between px-1 gap-2 text-text-100 text-start ${classLabel}`}>
          <span>{label}</span>
        </label>
      ) : null}
      <div
        onClick={() => setOpen((old) => !old)}
        className={`flex items-center gap-2 cursor-pointer border border-text-300 px-4 py-1 rounded w-full focus-within:bg-white focus-within:border focus-within:border-bg-300 duration-500`}>
        {!Icon ? null : <Icon className='w-6 fill-[#bbb]' />}
        <button
          type='button'
          className={`w-full h-8 flex justify-between items-center text-start outline-none indent-3 focus:bg-white focus:text-text-100 duration-500 ${className}`}>
          {text}
          <FaCaretDown />
        </button>
      </div>

      {open ? (
        <div
          className={`flex flex-col z-30 absolute w-full max-h-[200px] overflow-y-auto border-2 border-bg-300 rounded top-[70px]`}>
          {data.map((item) => (
            <div
              className={`px-2 w-full h-full ${
                text === item.value ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-100`}
              key={item.value}>
              <button
                type='button'
                className={`w-full h-10 cursor-pointer border-b border-b-[#F3F3F3] text-start text-text-100 ${
                  text === item.value ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-100`}
                onClick={() => {
                  setOpen(false);
                  handleAddTag(item.value, item.label);
                }}>
                {item.label}
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MultipleInput;
