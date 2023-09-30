import "./globals.css";
import { Inter } from "next/font/google";
import { AppContextProvider } from "./contexts/appContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EU Chernoff Faces",
  description: "EU Data mapped to Chernoff Faces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
