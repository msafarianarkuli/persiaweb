import { useField } from "formik";

export default function Textarea({
  label,
  id,
  placeholder,
  classLabel,
  className,
  top = true,
  ...props
}) {
  const [field, meta] = useField(props);

  return (
    <div className={`flex mt-4 ${top ? "flex-col" : ""}`}>
      {label ? (
        <label htmlFor={id} className={`flex text-text-100 ${classLabel}`}>
          <span> {label}</span>
        </label>
      ) : null}
      <textarea
        id={id}
        className={`border border-text-300 rounded outline-none p-2 w-full bg-inherit
             ${className} ${
          meta.touched && meta.error ? "border-red-400" : "border-text-300"
        }`}
        placeholder={placeholder}
        {...props}
        {...field}></textarea>
      {!!meta.touched && meta.error && (
        <p className='text-red-500 text-sm font-semibold flex gap-x-2 items-center h-4 mt-2'>
          <span>{!!meta.touched && meta.error}</span>
        </p>
      )}
    </div>
  );
}
