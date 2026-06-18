// components/ServicesMarquee.tsx

const SERVICES = [
    "Desarrollo Web a la Medida",
    "Aplicaciones Móviles (iOS & Android)",
    "Sistemas ERP & CRM Personalizados",
    "Integración de APIs y Microservicios",
    "Migración a la Nube (Cloud Computing)",
    "Diseño de Experiencia UI/UX",
    "Optimización y Refactorización de Código",
    "Consultoría Tecnológica",
];

export default function ServicesMarquee() {
    // Duplicamos la lista para asegurar el bucle visual infinito sin cortes abruptos
    const marqueeItems = [...SERVICES, ...SERVICES];

    return (
        <div className="w-full bg-linear-to-r from-[#4479d4] to-[#3b6bc2] text-white py-4 overflow-hidden whitespace-nowrap flex items-center shadow-inner">
            {/* Contenedor que ejecuta la animación */}
            <div className="flex animate-marquee space-x-12 shrink-0 pr-12">
                {marqueeItems.map((service, index) => (
                    <div key={index} className="flex items-center space-x-12 text-sm md:text-lg font-medium tracking-wide">
                        <span>{service}</span>
                        {/* El separador visual de la imagen image_fedbc4.png */}
                        <span className="text-blue-300/60 font-light text-xl">/</span>
                    </div>
                ))}
            </div>
        </div>
    );
}