import "@/src/styles/globals.css";
import { Metadata } from "next";
import { Katibeh, Advent_Pro} from "next/font/google"

const katibeh = Katibeh({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-katibeh',
})

const advent_pro = Advent_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-advent-pro',
})

export const metadata: Metadata = {
  title: "Young Man Winter",
  description: "a band from Worcester, MA",
  // Add favicon here
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${katibeh.variable} ${advent_pro.variable}`}>
      <body className="bg-black">{children}</body>
    </html>
  );
};

export default RootLayout;
