import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import InstagramFeed from "@/components/InstagramFeed";
import FloralDivider from "@/components/FloralDivider";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Floral Divider */}
      <FloralDivider />

      {/* Locations Section */}
      <Locations />

      {/* Footer */}
      <Footer />
    </main>
  );
}
