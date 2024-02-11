import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'
import Cards from './Cards'
import { useNavigate } from 'react-router-dom'

const Works = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <Cards className="w-80" title="Branding" description="Diseño de identidad visual">
                <CardHeader onClick={navigate('/desing')}>Branding</CardHeader>
                <CardBody>Diseño de identidad visual</CardBody>
            </Cards>

            {/* Card 2 */}
            <Cards className="w-80" title="DISEÑO" description="Trabajos en relación al diseño gráfico">
                {/* Contenido de la tarjeta */}
            </Cards>

            {/* Card 3 */}
            <Cards className="w-80" title="Audiovisual" description="Trabajos en relación al diseño gráfico">
                {/* Contenido de la tarjeta */}
            </Cards>
        </div>
    )
}

export default Works
