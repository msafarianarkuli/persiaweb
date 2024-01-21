import { useField } from "formik";

const SelectiveInput = ({ classSpan, label, id, ...rest }) => {
  const [field] = useField(rest);
  return (
    <div className='me-6'>
      <label className='label cursor-pointer justify-start gap-x-3'>
        <input
          type='checkbox'
          className='relative peer shrink-0
              appearance-none w-4 h-4 border-2 border-primary rounded bg-white mt-1
              checked:bg-primary-blue checked:border-0'
          {...rest}
          {...field}
          value={rest.value}
        />
        <svg
          className='absolute w-[12px] h-[12px] -mt-[24px] mr-[2px] hidden peer-checked:block stroke-white'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <polyline points='20 6 9 17 4 12'></polyline>
        </svg>
        <span className='text-text-200 self-center label-text pr-2 relative bottom-[5px]'>
          {label}
        </span>
      </label>
    </div>
  );
};

export default SelectiveInput;
