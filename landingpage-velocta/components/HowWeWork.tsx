import React from 'react';
import Image from 'next/image';

const PASOS_PROCESO = [
    {
        id: '01',
        titulo: 'Diagnóstico y Análisis',
        descripcion: 'Nos sumergimos en tu negocio para entender tus ineficiencias críticas, flujos de trabajo y objetivos. Diseñamos el mapa de ruta tecnológico ideal para tu modelo de empresa.',
        imagenSrc: '/diagnostico-analisis.jpg', // Reemplaza con tus rutas reales
        imagenAlt: 'Reunión de equipo analizando la arquitectura y diagnóstico de software en pantallas'
    },
    {
        id: '02',
        titulo: 'Diseño y Propuesta',
        descripcion: 'Estructuramos una propuesta clara con la arquitectura escalable, el alcance del proyecto y las tecnologías que utilizaremos (APIs, microservicios, etc.), garantizando transparencia desde el día uno.',
        imagenSrc: '/diseno-propuesta.jpg', // Reemplaza con tus rutas reales
        imagenAlt: 'Prototipo de interfaz de usuario y planeación de arquitectura tecnológica'
    },
    {
        id: '03',
        titulo: 'Desarrollo Ágil',
        descripcion: 'Nuestro equipo de ingenieros expertos escribe código limpio, seguro y adaptable. Trabajamos con metodologías ágiles para entregarte avances continuos y asegurar que todo marche a la perfección.',
        imagenSrc: '/desarrollo-agil.jpg', // Reemplaza con tus rutas reales
        imagenAlt: 'Programador desarrollando código limpio y seguro en un entorno de desarrollo moderno'
    },
    {
        id: '04',
        titulo: 'Despliegue y Soporte',
        descripcion: 'Lanzamos tu plataforma al mercado digital de forma segura y automatizada. Además, te acompañamos con soporte técnico continuo y mantenimiento evolutivo post-entrega para que nunca te detengas.',
        imagenSrc: '/despliegue-soporte.jpg', // Reemplaza con tus rutas reales
        imagenAlt: 'Monitoreo de servidores e infraestructura en la nube durante el despliegue exitoso del software'
    }
];


export default function ComoTrabajamos() {
    return (
        <section className="bg-[#0b0f19] text-white py-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-6xl mx-auto">

                {/* Encabezado de la sección */}
                <div className="text-center mb-16">
                    <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-blue-600 block mb-3">
                        NUESTRO PROCESO
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Cómo Trabajamos Con Tu Negocio
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        Diseñamos una estrategia clara y transparente desde el primer día para asegurar que tu software sea robusto, escalable y seguro.
                    </p>
                </div>

                {/* Lista de Pasos */}
                <div className="flex flex-col gap-12">
                    {PASOS_PROCESO.map((paso, index) => (
                        <div
                            key={paso.id}
                            className="bg-[#111625] rounded-2xl border border-gray-800 overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-8 group"
                        >
                            {/* Bloque de Texto */}
                            <div className="flex-1 space-y-4 order-2 md:order-1">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-bold text-gray-500 opacity-50">
                                        {paso.id}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {paso.titulo}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {paso.descripcion}
                                </p>
                            </div>

                            {/* Bloque de Imagen con Contenedor para el Efecto de Escala */}
                            <div className="w-full md:w-[40%] aspect-4/3 relative rounded-xl overflow-hidden order-1 md:order-2">
                                <Image
                                    src={paso.imagenSrc}
                                    alt={paso.imagenAlt}
                                    fill
                                    sizes="(max-w-768px) 100vw, 40vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}