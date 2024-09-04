import LandingPage from "./sections/LandingPage";
import Footer from "./Components/footer";
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
