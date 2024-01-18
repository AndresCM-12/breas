import "./globals.css";
import localFont from "@next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Breas",
  description: "Beauty products",
};

const texta = localFont({
  src: [
    {
      path: "../../public/fonts/texta/TextaRegular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/texta/TextaBold.ttf",
      weight: "700",
    },

    {
      path: "../../public/fonts/texta/TextaMedium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/texta/TextaLight.ttf",
      weight: "300",
    },
  ],
  variable: "--font-texta",
});
const jemina = localFont({
  src: [
    {
      path: "../../public/fonts/jemina/JeminaRegular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/jemina/JeminaBold.otf",
      weight: "700",
    },

    {
      path: "../../public/fonts/jemina/JeminaMedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/jemina/JeminaLight.otf",
      weight: "300",
    },
  ],
  variable: "--font-jemina",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${texta.variable} ${jemina.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


