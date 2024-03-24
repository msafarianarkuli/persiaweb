import { meta } from "@/utils/meta";
import "@/assets/styles/globals.css";
import ReactQueryProvider from "./ReactQueryProvider";

export const metadata = {
  title: meta.layout.title,
  description: meta.layout.description,
  manifest: "/manifest.json",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang='fa'>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
