import { meta } from "@/utils/meta";
import "../assets/styles/globals.css";

export const metadata = {
  title: meta.layout.title,
  description: meta.layout.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang='fa'>
      <body>{children}</body>
    </html>
  );
}
