import Header from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedHomes from "./components/FeaturedHomes";
import Cities from "./components/Cities";
import Review from "./components/Review";
import Subsription from "./components/Subscription";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <FeaturedHomes></FeaturedHomes>
      <Cities></Cities>
      <Review></Review>
      <Subsription></Subsription>
      <Footer></Footer>
    </>
  );
}
