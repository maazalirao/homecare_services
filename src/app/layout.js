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
  icons: {
    icon: [
      { url: '/favicon.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased bg-neutral-50 min-h-screen w-full`}
      >
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
