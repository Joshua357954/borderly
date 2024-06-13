import { Oswald } from "next/font/google";
import "./globals.css";

const inter = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Borderly",
  description: "Your local trips sorted out",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
