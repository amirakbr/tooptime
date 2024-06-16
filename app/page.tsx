import { Metadata } from "next";
import HeroSlider from "./component/landingPage/heroSlider";
import ExpressSearch from "./component/landingPage/expressSearch/expressSearch";

export const metadata: Metadata = {
  title: "toopita",
  description: "reserve futsal salon",
};

export default function Home() {
  return (
    <div>
      <div>
        <HeroSlider />
        <ExpressSearch />
      </div>
    </div>
  );
}
