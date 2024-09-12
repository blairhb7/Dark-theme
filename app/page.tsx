import LandingPage from "./sections/LandingPage";
import Footer from "./Components/footer";
import Faq from "./Components/faq";


export default function Home() {
  return (
    <main className=" 2xl:mx-[400px] bg-black">
      <LandingPage/>
      <Faq/>
      <Footer/>
    </main>
  );
}
