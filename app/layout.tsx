import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ronald's Driving School — VID Test Prep (Demo)",
  description: "Demo build — driving test prep platform for Ronald's driving school.",
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
