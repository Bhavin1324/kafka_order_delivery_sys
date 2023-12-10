import Navbar from "../components/layouts/Navbar";
import BlendedCarousal from "./landing/BlendedCarousal";
import Typo from "./landing/Typo";
import FeatureCards from "./landing/FeatureCards";
// import LoggedInNav from "../components/layouts/LoggedInNav";

function IndexPage() {
  return (
    <>
      <Navbar />
      {/* <LoggedInNav /> */}
      <BlendedCarousal />
      <Typo />
      <FeatureCards />
    </>
  );
}

export default IndexPage;
