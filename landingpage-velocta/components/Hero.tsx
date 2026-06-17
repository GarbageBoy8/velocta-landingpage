// components/Hero.tsx
export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 bg-zinc-900 text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
                Transformamos tus ideas en <span className="text-blue-500">software</span> de alto rendimiento
            </h1>
            <p className="mt-6 text-lg text-zinc-400 max-w-xl">
                En Velocta Solutions creamos aplicaciones web y móviles a la medida para impulsar tu negocio.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Cotizar proyecto
            </button>
        </section>
    );
}