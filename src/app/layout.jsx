import { Montserrat } from "next/font/google";
import "./globals.css";
const jost = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "EduMate",
  description: "e-learning management Application",
  icons: {
    icon: "./logoIcon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
