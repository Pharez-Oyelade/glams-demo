import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import { playfair, poppins, greatVibes } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Glams Wardrobe",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} ${greatVibes.variable} bg-glams-butter`}
      >
        <Navbar />
        <div className="">{children}</div>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
