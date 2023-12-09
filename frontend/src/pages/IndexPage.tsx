import Navbar from "../components/layouts/Navbar";
import BlendedCarousal from "./landing/BlendedCarousal";
import Typo from "./landing/Typo";
import FeatureCards from "./landing/FeatureCards";

function IndexPage() {
  return (
    <>
      <Navbar />
      <BlendedCarousal />
      <Typo />
      <FeatureCards />
    </>
  );
}

export default IndexPage;
