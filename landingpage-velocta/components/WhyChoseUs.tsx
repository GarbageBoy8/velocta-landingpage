// components/WhyChooseUs.tsx

export default function WhyChooseUs() {
    return (
        <section className="relative w-full bg-[#f8fafc] text-zinc-900 py-20 px-4 md:px-8 overflow-hidden">
            {/* Efectos de luces de fondo sutiles como en la imagen */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Subtítulo superior */}
                <div className="text-center mb-12">
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-blue-600 block mb-3">
                        EXPERTOS EN INGENIERÍA DE SOFTWARE
                    </span>
                    {/* Título Principal */}
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 max-w-4xl mx-auto leading-tight">
                        Soluciones de Software Integrales para Desafíos Modernos
                    </h2>
                </div>

                {/* Contenedor Grid: Izquierda Imágenes, Derecha Texto */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
                    
                    {/* COLUMNA IZQUIERDA: Composición de imágenes superpuestas */}
                    <div className="relative w-full max-w-[500px] mx-auto aspect-[4/3] lg:max-w-none">
                        {/* Imagen de fondo principal (La más grande) */}
                        <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-xl overflow-hidden shadow-xl border border-zinc-200/50">
                            <img 
                                src="/images/developer-main.jpg" 
                                alt="Desarrollo de software de alto rendimiento" 
                                className="w-full h-full object-cover"
                            />
                            {/* Tarjeta Azul Flotante (99.9%) */}
                            <div className="absolute bottom-6 left-6 bg-gradient-to-br from-[#4479d4] to-[#3561b0] text-white p-6 rounded-xl shadow-lg max-w-[180px] z-20">
                                <span className="text-3xl md:text-4xl font-bold block mb-1">99.9%</span>
                                <p className="text-xs text-blue-100 font-light leading-relaxed">
                                    De disponibilidad y optimización en procesos internos.
                                </p>
                            </div>
                        </div>

                        {/* Imagen secundaria superpuesta al frente (La pequeña de la derecha) */}
                        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] rounded-xl overflow-hidden shadow-2xl border-2 border-white z-10 transition-transform hover:scale-105 duration-300">
                            <img 
                                src="/images/code-detail.jpg" 
                                alt="Líneas de código limpio y arquitectura" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Copys persuasivos de venta */}
                    <div className="flex flex-col justify-center">
                        <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed mb-6">
                            Por más de 10 años, hemos impulsado el crecimiento de empresas mediante la creación de software a la medida que resuelve ineficiencias críticas. Nuestro equipo de ingenieros expertos diseña soluciones de extremo a extremo: desde la automatización de procesos complejos y el desarrollo de plataformas web robustas, hasta aplicaciones móviles nativas de alta escalabilidad. Nos aseguramos de que tu infraestructura tecnológica sea rápida, segura y esté lista para el futuro del mercado digital.
                        </p>

                        {/* Lista de viñetas con palomitas (Checkmarks) */}
                        <ul className="space-y-3.5 mb-8">
                            <li className="flex items-start space-x-3 text-zinc-700 font-medium">
                                <span className="text-blue-600 text-lg mt-0.5">✓</span>
                                <span>Arquitectura escalable diseñada exclusivamente para tu modelo de negocio</span>
                            </li>
                            <li className="flex items-start space-x-3 text-zinc-700 font-medium">
                                <span className="text-blue-600 text-lg mt-0.5">✓</span>
                                <span>Automatización de flujos de trabajo que reduce costos operativos</span>
                            </li>
                            <li className="flex items-start space-x-3 text-zinc-700 font-medium">
                                <span className="text-blue-600 text-lg mt-0.5">✓</span>
                                <span>Código limpio, seguro y adaptable a futuras integraciones (APIs)</span>
                            </li>
                            <li className="flex items-start space-x-3 text-zinc-700 font-medium">
                                <span className="text-blue-600 text-lg mt-0.5">✓</span>
                                <span>Soporte técnico continuo y mantenimiento evolutivo post-entrega</span>
                            </li>
                        </ul>

                        {/* Botón de Acción */}
                        <div className="flex justify-start">
                            <button className="px-8 py-3 bg-[#4479d4] hover:bg-[#3561b0] text-white font-medium rounded-md transition-all shadow-md hover:shadow-blue-500/10 text-sm md:text-base">
                                Solicitar una Asesoría Gratuita
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}