import { Typography } from '@material-tailwind/react'

export function FooterWithLogo() {
    return (
        <footer className="w-full bg-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between"></div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2024 Nicolas Minahk
            </Typography>
        </footer>
    )
}
