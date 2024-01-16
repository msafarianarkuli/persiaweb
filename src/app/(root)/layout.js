import Header from "@/views/layout/header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className='max-w-screen-xl mx-auto'> {children}</div>
    </>
  );
}
