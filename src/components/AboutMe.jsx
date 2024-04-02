import { useState } from 'react'
import { FaFilePdf, FaFileAlt } from 'react-icons/fa'
import myPhoto from '../assets/yo.png'

const AboutMe = () => {
    const [showDownload, setShowDownload] = useState(false)

    const handleDownloadCV = () => {
        window.open('src/assets/NICOLAS MINAHK-CV-2024.pdf', '_blank')
    }

    const handleDownloadPortfolio = () => {
        window.open('src/assets/PORTFOLIO-NM-2024.pdf', '_blank')
    }

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
                    <div className="mt-4 flex gap-4">
                        <FaFilePdf className="text-blue-500 cursor-pointer" size={24} onClick={handleDownloadCV} />
                        <FaFileAlt
                            className="text-blue-500 cursor-pointer"
                            size={24}
                            onClick={handleDownloadPortfolio}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
