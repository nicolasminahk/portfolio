import React from 'react'
import { useNavigate } from 'react-router-dom'
import bannerDesarrollo from '../assets/desarrollo.png'
import bannerDiseno from '../assets/desing.png'
import bannerAudiovisual from '../assets/audiovisual.png'

const Works = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-wrap justify-center gap-6 ">
            <div className="w-full mb-5">
                <img
                    src={bannerDesarrollo}
                    alt="Banner Desarrollo"
                    className="w-full h-auto"
                    style={{ width: '100%', height: 'auto', transition: 'transform 0.3s ease' }}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                />
            </div>

            <div className="w-full mb-5">
                <img
                    src={bannerDiseno}
                    alt="Banner Diseño"
                    className="w-full h-auto"
                    style={{ width: '100%', height: 'auto', transition: 'transform 0.3s ease' }}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                />
            </div>

            <div className="w-full" mb-5>
                <img
                    src={bannerAudiovisual}
                    alt="Banner Audiovisual"
                    className="w-full h-auto"
                    style={{ width: '100%', height: 'auto', transition: 'transform 0.3s ease' }}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                />
            </div>
        </div>
    )
}

export default Works
