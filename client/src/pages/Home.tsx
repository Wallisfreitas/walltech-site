/**
 * Home Page — WallTech Tecnologia
 * Composes all page sections: Header, Hero, Services, Products, Rental,
 * Enterprise, Differentials, How It Works, About, Reviews, FAQ, Contact, Footer, WhatsApp Float.
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import RentalSection from "@/components/RentalSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <RentalSection />
        <EnterpriseSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <AboutSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
