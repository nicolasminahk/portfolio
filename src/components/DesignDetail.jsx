import React from 'react'
import { motion } from 'framer-motion'

const DesignDetail = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center h-screen bg-gray-100"
        >
            <h1 className="text-4xl font-bold mb-8">Detalle de Diseño</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Grid de Trabajos */}
                <div className="rounded-md overflow-hidden shadow-md">
                    {/* Miniaturas de trabajos */}
                    {/* Aquí irían las miniaturas de tus trabajos */}
                    <img src=''></img>
                </div>

                {/* Manual de Marca Interactivo */}
                <div className="rounded-md overflow-hidden shadow-md">
                    {/* Sección interactiva para el manual de marca */}
                    {/* Puedes usar tabs o deslizadores para mostrar diferentes secciones */}
                </div>

                {/* Diseño para Redes Sociales */}
                <div className="rounded-md overflow-hidden shadow-md">
                    {/* Ejemplos de diseño para redes sociales */}
                    {/* Simulaciones de publicaciones en redes */}
                </div>

                {/* Diseño Multimedia con Animaciones */}
                <div className="rounded-md overflow-hidden shadow-md">
                    {/* Proyectos multimedia con animaciones */}
                    {/* Infografías, animaciones, proyectos interactivos */}
                </div>

                {/* Integración del Portafolio en PDF */}
                <div className="rounded-md overflow-hidden shadow-md">
                    {/* Extractos visuales del portafolio PDF */}
                    {/* Miniaturas de páginas relevantes o capturas de pantalla */}
                    {/* Enlaces o botones para descargar el PDF o secciones específicas */}
                </div>
            </div>
        </motion.div>
    )
}

export default DesignDetail
