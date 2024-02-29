import { useEffect } from "react";
import Features from "~/components/home/Features";
import Footer from "~/components/home/Footer";
import Header from "~/components/home/Header";
import HeroHome from "~/components/home/HeroHome";
import Testimonials from "~/components/home/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { SEO } from "~/components/seo";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <>
      <SEO />
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Header />

        <main className="flex-grow text-zinc-900">
          <HeroHome />
          <Features />
          {/* <FeaturesBlocks /> */}
          <Testimonials />
        </main>

        <Footer />
      </div>
    </>
  );
}
