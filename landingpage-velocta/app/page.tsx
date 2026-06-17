// app/page.tsx
import Hero from "@/components/Hero";
// Aquí irías importando los demás: 
// import Services from "@/components/Services";
// import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Tu componente Hero */}
      <Hero />
      
      {/* El día de mañana solo agregas o quitas componentes aquí abajo */}
      {/* <Services /> */}
      {/* <ContactForm /> */}
    </main>
  );
}