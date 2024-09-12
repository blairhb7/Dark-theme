import LandingPage from "./sections/LandingPage";
import Footer from "./Components/footer";
import Faq from "./Components/faq";


export default function Home() {
  return (
    <main className=" mx-auto bg-black">
      <LandingPage/>
      <Faq/>
      <Footer/>
    </main>
  );
}
