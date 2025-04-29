import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Special Touch Home Care Group | Compassionate Home Care in New York",
  description: "Special Touch Home Care Group provides personalized and compassionate home care services in New York City. Our professional caregivers are dedicated to enhancing quality of life with dignity and respect.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased bg-neutral-50 min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
