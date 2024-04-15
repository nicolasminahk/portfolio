import React from 'react'

const ListAI = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Lista de IAs</h1>
            <a href="https://www.udio.com/">Generación de música</a>
            <div className="sm:col-span-3">
                <a
                    href="http://www.udio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-pink-600 text-white text-center py-2 hover:bg-pink-700"
                >
                    Generación de música
                </a>

                <a
                    href="https://claid.ai/photoshoot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-pink-600 text-white text-center py-2 hover:bg-pink-700"
                >
                    Generación de música
                </a>
            </div>
        </div>
    )
}

export default ListAI
