import MainNavbar from "./components/layout/main-navbar";
import TopNavbar from "./components/layout/top-navbar";
import Footer from "./components/layout/footer";
import TireSearchForm from "./components/tire-search-form";
import HeroSection from "./components/hero";

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
      <Footer />
    </main>
  );
}

export default App;
