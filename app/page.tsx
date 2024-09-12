import LandingPage from "./sections/LandingPage";
import Footer from "./Components/footer";
import Faq from "./Components/faq";


export default function Home() {
  return (
    <main className=" flex justify-center items-center  bg-black">
      <LandingPage/>
      <Faq/>
      <Footer/>
    </main>
  );
}
