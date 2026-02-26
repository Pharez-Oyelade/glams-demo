import Footer from "./components/Footer";
// import FloatingWhatsapp from "./components/FloatingWhatsapp";
import WhatsAppChat from "./components/WhatsappChat";
import { playfair, poppins, greatVibes } from "./fonts";
import "./globals.css";

import CartContextProvider from "./context/cartContext";
import Cart from "./components/Cart";
import ScrollToTop from "./components/ScrollToTop";

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
        <CartContextProvider>
          <ScrollToTop />
          <div className="">{children}</div>
          <Footer />
          {/* <FloatingWhatsapp/>  */}
          <WhatsAppChat />
          <Cart />
        </CartContextProvider>
      </body>
    </html>
  );
}
