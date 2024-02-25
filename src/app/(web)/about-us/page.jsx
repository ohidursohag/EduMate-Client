import AboutBanner from "@/Components/WebLayoutComponents/AboutUs/AboutBanner/AboutBanner";
import KnowAboutUs from "@/Components/WebLayoutComponents/AboutUs/KnowAboutUs/KnowAboutUs";
import RouteBanner from "@/Components/WebLayoutComponents/Shared/RouteBanner/RouteBanner";

const AboutUsPage = () => {

  return (
    <div>
      <RouteBanner title={'About-Us'}/>
       <AboutBanner></AboutBanner>
       <KnowAboutUs></KnowAboutUs>
    </div>
  )
};

export default AboutUsPage;
