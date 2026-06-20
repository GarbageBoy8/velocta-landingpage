// components/CTA.tsx

export default function CTA() {
    return (
        <section className="relative w-full bg-zinc-950 text-white py-11 px-4 md:px-8 overflow-hidden flex items-center min-h-[350px]">

            {/*  VIDEO DE FONDO */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
            >
                <source src="/video-bg-cta.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>

            {/* 🖤 CAPA OSCURA (OVERLAY) - Asegura que el texto se lea impecable */}
            <div
                className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95))`
                }}
            />

            {/*  CONTENIDO PRINCIPAL (Con z-20 para quedar encima del video y la capa) */}
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-20">

                {/* COLUMNA IZQUIERDA */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-blue-600 block mb-2">
                        ¿Listo para dar el siguiente paso?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                        Deja de adaptar tu negocio al software. <br />
                        <span className="font-light text-zinc-300">Diseñemos uno a tu medida.</span>
                    </h2>
                </div>

                {/* COLUMNA DERECHA */}
                <div className="lg:col-span-6 flex flex-col justify-center items-start text-left lg:pl-6">
                    <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed mb-6 max-w-xl">
                        Cuéntanos tu idea o el problema que quieres resolver. Nuestro equipo transformará tus requerimientos en una plataforma rápida, segura y completamente escalable.
                    </p>

                    {/* 🔽 Añadimos lg:w-full para asegurar todo el ancho y lg:justify-end para empujarlo a la derecha */}
                    <div className="flex flex-col sm:flex-row gap-4 items-end w-full lg:w-full lg:justify-end">
                        <button className="w-full sm:w-auto px-8 py-4 bg-[#4479d4] hover:bg-[#3561b0] text-white font-medium rounded-md transition-all shadow-lg hover:shadow-blue-500/20 text-sm md:text-base whitespace-nowrap">
                            Agendar Consultoría Gratuita
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}