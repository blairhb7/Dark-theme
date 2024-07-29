import Image from "next/image";
import LandingPage from "./sections/LandingPage";
import Nav from "./Components/nav";
import Footer from "./Components/footer";
import MyComponent from "./Components/section"

export default function Home() {
  return (
    <main className="flex  flex-col">
      <LandingPage/>
      <Footer/>
    </main>
  );
}
