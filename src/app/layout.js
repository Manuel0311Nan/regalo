import { Inter, Shrikhand } from "next/font/google";
import "./globals.css";

const shrikhand = Shrikhand({ subsets: ["latin"],
weight: '400', });

export const metadata = {
  title: "Regalo de Silvia",
  description: "Continñua hasta llegar a tu regalo, tranquila algo habrá",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={shrikhand.className}>{children}</body>
    </html>
  );
}
