import { IoSearch } from "react-icons/io5";
import { Form, Formik } from "formik";
import Input from "./onChange/Input";
import { useCommonStore } from "@/store/commonStore";

function SearchInput() {
  const setSearch = useCommonStore((state) => state.setSearch);
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => setSearch(values.search)}>
      {({ handleChange, submitForm }) => (
        <Form>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <IoSearch className='text-lg text-text-100' />
            </div>
            <Input
              id='search'
              name='search'
              type='search'
              className='block w-full p-[10px] ps-10 text-sm placeholder::text-[#7a7a7a] outline-none rounded bg-bg-100 focus:ring-blue-500 focus:border-blue-500'
              placeholder='جستجوی...'
              required
              onChange={(e) => {
                handleChange(e);
                submitForm();
              }}
            />
            {/* <Button type='submit'>click</Button> */}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SearchInput;
