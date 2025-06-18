import AboutUs from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "About Us - Iperhome",
  description:
    "Learn more about Iperhome, our mission, and our commitment to enhancing daily lives through innovative solutions.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
}
