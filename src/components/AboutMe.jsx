import React from 'react'
import myPhoto from '../assets/yo.png'

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 mb-8">
            <div className="sm:order-2 w-full sm:w-1/2">
                <img src={myPhoto} alt="Mi Foto" className="w-full rounded-lg shadow-md mb-4 sm:mb-0" />
            </div>
            <div className="w-full sm:w-1/2">
                <div className="text-gray-800">
                    <h2 className="text-2xl font-bold mb-4">Sobre Mí</h2>
                    <p className="text-lg leading-relaxed">
                        Apasionado por la Inteligencia Artificial, la comunicación y el diseño. Amalgamar distintas
                        técnicas ( diseño multimedia, arte audiovisual y programación) en pos de construir sentido,
                        identitario y funcional, acorte a la visión de la empresa/ producto.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
