// components/Hero.tsx
export default function Hero() {
    return (
        <section 
            className="relative flex flex-col items-center justify-center text-center min-h-175 py-24 bg-zinc-950 text-white px-4 bg-cover bg-center overflow-hidden"
            style={{ 
                // Asegúrate de que el nombre del archivo coincida con el que guardaste en tu carpeta public
                backgroundImage: `url('/imagen-logo.png')` 
            }}
        >
            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4 block">
                    SOLUCIONES TECNOLÓGICAS EXCLUSIVAS
                </span>

                {/* Título Principal adaptado */}
                <h1 className="text-4xl md:text-6xl font-normal tracking-tight leading-tight max-w-3xl font-sans">
                    Tu Socio Estratégico en <br className="hidden md:block" />
                    <span className="font-semibold">Software a la Medida</span>
                </h1>

                {/* Descripción profesional */}
                <p className="mt-4 text-base md:text-xl text-zinc-300 font-light max-w-2xl tracking-wide">
                    Soluciones tecnológicas exclusivas para optimizar, escalar y transformar tu negocio.
                </p>

                {/* Botón de Acción principal */}
                <button className="mt-8 px-8 py-3 bg-[#4479d4] hover:bg-[#3561b0] text-white font-medium rounded-md transition-all shadow-lg hover:shadow-blue-500/20 text-sm md:text-base">
                    Cotizar Proyecto
                </button>
            </div>
        </section>
    );
}