import { DM_Sans } from "next/font/google";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albert_sans = Albert_Sans({ subsets: ["latin"], weight: ['300', '400', '500', '600'] });
export const dm_sans = DM_Sans({ subsets: ['latin'], weight: ['500', '600', '700']})

export const metadata = {
  title: "15 Green Ventures",
  description: "Joining hands to take on the future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
             <body className={albert_sans.className}>{children}</body>
    </html>
  );
}
