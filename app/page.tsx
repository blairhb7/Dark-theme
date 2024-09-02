import Image from "next/image";
import LandingPage from "./sections/LandingPage";
import Nav from "./Components/nav";
import Footer from "./Components/footer";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main className="flex  h-full flex-col">
      <LandingPage/>
      <Footer/>
    </main>
  );
}
