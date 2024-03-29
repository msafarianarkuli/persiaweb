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
  return (
    <div className={`flex ${top ? "flex-col" : ""}`}>
      {label ? (
        <label htmlFor={id} className={`flex text-text-100 ${classLabel}`}>
          <span> {label}</span>
        </label>
      ) : null}
      <input
        placeholder={placeholder}
        className='border border-text-300 rounded outline-none p-2 w-full bg-inherit'
        {...props}
        {...field}
      />
    </div>
  );
}
