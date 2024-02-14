import React from 'react'

const Contact = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold leading-7 text-gray-900">Contacto</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
                Encuéntrame en redes sociales o envíame un correo electrónico:
            </p>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6 sm:gap-y-8">
                <div className="sm:col-span-3">
                    <a
                        href="mailto:nicolasminahk@gmail.com"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-indigo-600 text-white text-center py-2 hover:bg-indigo-700"
                    >
                        Email
                    </a>
                </div>

                <div className="sm:col-span-3">
                    <a
                        href="https://www.instagram.com/s333ma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-pink-600 text-white text-center py-2 hover:bg-pink-700"
                    >
                        Instagram
                    </a>
                </div>

                <div className="sm:col-span-3">
                    <a
                        href="https://www.linkedin.com/in/nicolas-minahk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-blue-600 text-white text-center py-2 hover:bg-blue-700"
                    >
                        LinkedIn
                    </a>
                </div>

                <div className="sm:col-span-3">
                    <a
                        href="https://api.whatsapp.com/send?phone=3814012014"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-green-600 text-white text-center py-2 hover:bg-green-700"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
