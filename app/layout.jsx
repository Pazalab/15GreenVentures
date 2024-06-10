import { DM_Sans, Kumbh_Sans } from "next/font/google";
import "./globals.css";

export const dm_sans = DM_Sans({ subsets: ['latin'], weight: ['500', '600', '700']})
export const khumb_sans = Kumbh_Sans({ subsets: ["latin"], weight: ['300', '400', '500', '600'] });

// export const metadata = {
//   title: "Agulu",
//   description: "Effective way to save and invest among like-minded individuals.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
              <head>
                       <title>Agulu</title>
                       <meta  name="description" content="Effective way to save and invest among like-minded individuals."  />
                       <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
              </head>
             <body className={khumb_sans.className}>
                        {children}
             </body>
    </html>
  );
}
