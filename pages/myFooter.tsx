export default function Footer() {
    return (
        <footer className=" shadow bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://borna1103.github.io/Borna/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Borna Hemmaty</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
                        <li>
                            <a href="#Home" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#About" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#Project" className="hover:underline me-4 md:me-6">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">© 2023 <a href="https://borna1103.github.io/Borna/" className="hover:underline">BornaHemmaty™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}