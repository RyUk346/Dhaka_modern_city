import Header from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedHomes from "./components/FeaturedHomes";
import Cities from "./components/Cities";
import Review from "./components/Review";
import Subsription from "./components/Subscription";
import Footer from "./components/Footer";
import Search from "./components/Search";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Search></Search>
      <FeaturedHomes></FeaturedHomes>
      <Cities></Cities>
      <Review></Review>
      <Subsription></Subsription>
      <Footer></Footer>
    </>
  );
}
