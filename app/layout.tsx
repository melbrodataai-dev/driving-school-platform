import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ronald's Driving School | Zimbabwe VID Practice",
  description:
    "A driving school website demonstration with VID theory practice and a student learning area.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
