import { useField } from "formik";

export default function Input({
  label,
  id,
  classLabel,
  placeholder,
  top = true,
  ...props
}) {
  const [field, meta] = useField(props);
  console.log(meta.touched);
  return (
    <div className={`flex ${top ? "flex-col" : ""}`}>
      {label ? (
        <label htmlFor={id} className='flex text-text-100'>
          <span> {label}</span>
        </label>
      ) : null}
      <input
        placeholder={placeholder}
        className={`border rounded outline-none p-2 w-full bg-inherit ${
          meta.touched && meta.error ? "border-red-400" : "border-text-300"
        }`}
        {...props}
        {...field}
      />
      {!!meta.touched && meta.error && (
        <p className='text-red-500 text-sm font-semibold flex gap-x-2 items-center h-4 mt-2'>
          <span>{!!meta.touched && meta.error}</span>
        </p>
      )}
    </div>
  );
}
