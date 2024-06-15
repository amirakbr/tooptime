import { Metadata } from "next";
import Image from "next/image";
import HeroSlider from "./component/landingPage/heroSlider";

export const metadata: Metadata = {
  title: "toopita",
  description: "reserve futsal salon",
};

export default function Home() {
  return (
    <div>
      <div>
        <HeroSlider />
      </div>
    </div>
  );
}
