import Navbar from "@/app/components/Navbar";
import Accueil from "@/app/components/Accueil";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <Accueil />
      <Footer />
    </>
  );
}
