import BannerSlider from "@/components/Banner";
import Homepage from "@/components/Homepage";
import LegalCategories from "@/components/homepage/LegalCategories";

export default function Home() {
  return (
    <div>
      <BannerSlider/>
      <Homepage></Homepage>
      {/* <LegalCategories></LegalCategories> */}
    </div>
  );
}
