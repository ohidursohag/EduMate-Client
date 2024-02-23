import { Jost, Poppins } from "next/font/google";
import "./globals.css";
const jost = Jost({
  // weight: ["400", "700", "800", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});
const popins = Poppins({
  weight: ["400", "700", "800", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-popins",
});

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
      <body
        className={`${jost.className} ${popins.className} max-w-[1920px] mx-auto`}
        suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
