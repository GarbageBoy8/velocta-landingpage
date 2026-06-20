// app/page.tsx
import Hero from "@/components/Hero";

// Aquí irías importando los demás: 
import ServicesMarquee from "@/components/ServicesMarquee";
import WhyChooseUs from "@/components/WhyChoseUs";
import CTA from "@/components/CTA";
import HowWeWork from "@/components/HowWeWork";


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Tu componente Hero */}
      <Hero />
      <ServicesMarquee />
      <WhyChooseUs />
      <CTA />
      <HowWeWork /> 
      {/* HowWeWork component removed because the module was not found. Add it back when the component exists at '@/components/HowWeWork' */}
      {/* El día de mañana solo agregas o quitas componentes aquí abajo */}
      {/* <Services /> */}
      {/* <ContactForm /> */}
    </main>
  );
}