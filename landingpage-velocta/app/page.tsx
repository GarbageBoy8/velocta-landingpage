// app/page.tsx
import Hero from "@/components/Hero";

// Aquí irías importando los demás: 
import ServicesMarquee from "@/components/ServicesMarquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Tu componente Hero */}
      <Hero />
      <ServicesMarquee />
      {/* El día de mañana solo agregas o quitas componentes aquí abajo */}
      {/* <Services /> */}
      {/* <ContactForm /> */}
    </main>
  );
}