import Image from "next/image";
import LandingPage from "./sections/LandingPage";
import Nav from "./Components/nav";
import Footer from "./Components/footer";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Faq from "./Components/faq";

export default function Home() {
  return (
    <main className="">
      <LandingPage/>
      <Faq/>
      <Footer/>
    </main>
  );
}
