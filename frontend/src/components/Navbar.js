export default function Navbar() {
    return(
        <header className="shadow-sm bg-white sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-xl font-bold text-orange-500">
                    Trivoya Travels
                </div>

                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li><a href="/">Home</a></li>
                    <li><a href="/tours">Tours</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

                <a href="https://wa.me/911234567890" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">WhatsApp Us</a>
            </nav>
        </header>
    )
}