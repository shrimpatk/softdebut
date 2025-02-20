import MainNavbar from "./components/layout/main-navbar";
import TopNavbar from "./components/layout/top-navbar";
import Footer from "./components/layout/footer";
import TireSearchForm from "./components/tire-search-form";
import HeroSection from "./components/hero";
import CategoryCard from "./components/category-card";

import batteryImg from "../src/assets/category/SOne_index_bt-battery.jpg";
import batteryHoverImg from "../src/assets/category/SOne_index_bt-battery1.jpg";
import breakImg from "../src/assets/category/SOne_index_bt-break.jpg";
import breakHoverImg from "../src/assets/category/SOne_index_bt-break1.jpg";
import chokeImg from "../src/assets/category/SOne_index_bt-chokeup.jpg";
import chokeHoverImg from "../src/assets/category/SOne_index_bt-chokeup1.jpg";
import guaranteeImg from "../src/assets/category/SOne_index_bt-guarantee.jpg";
import guaranteeHoverImg from "../src/assets/category/SOne_index_bt-guarantee1.jpg";
import oilImg from "../src/assets/category/SOne_index_bt-oil.jpg";
import oilHoverImg from "../src/assets/category/SOne_index_bt-oil1.jpg";
import tireImg from "../src/assets/category/SOne_index_bt-tire.jpg";
import tireHoverImg from "../src/assets/category/SOne_index_bt-tire1.jpg";

const CATEGORY_ITEMS = [
  {
    defaultImg: batteryImg,
    hoverImg: batteryHoverImg,
    alt: "Battery",
  },
  {
    defaultImg: breakImg,
    hoverImg: breakHoverImg,
    alt: "Brake",
  },
  {
    defaultImg: chokeImg,
    hoverImg: chokeHoverImg,
    alt: "Choke",
  },
  {
    defaultImg: guaranteeImg,
    hoverImg: guaranteeHoverImg,
    alt: "Guarantee",
  },
  {
    defaultImg: oilImg,
    hoverImg: oilHoverImg,
    alt: "Oil",
  },
  {
    defaultImg: tireImg,
    hoverImg: tireHoverImg,
    alt: "Tire",
  },
];

function App() {
  return (
    <main className="mx-auto">
      <TopNavbar />
      <MainNavbar />
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 place-items-center">
          <div className="md:col-span-4 order-2 md:order-1 w-full flex justify-center">
            <TireSearchForm />
          </div>

          <div className="md:col-span-8 order-1 md:order-2 w-full flex justify-center">
            <HeroSection />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 max-w-7xl mx-auto px-4">
        {CATEGORY_ITEMS.map((item, index) => (
          <CategoryCard
            key={index}
            defaultImg={item.defaultImg}
            hoverImg={item.hoverImg}
            alt={item.alt}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}

export default App;
