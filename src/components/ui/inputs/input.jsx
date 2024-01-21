import { useField } from "formik";

export default function Input({ label, id, classLabel, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      {label ? (
        <label htmlFor={id} className={`flex text-text-100 ${classLabel}`}>
          <span> {label}</span>
        </label>
      ) : null}
      <input
        className='border border-text-300 rounded outline-none p-2 w-full'
        {...props}
        {...field}
      />
    </>
  );
}
