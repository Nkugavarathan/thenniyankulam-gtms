import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mu/Thenniyankulam GTMS",
  description: "Official School Website",
  // icons: {
  //   icon: "/images/logo.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="font-sans bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
