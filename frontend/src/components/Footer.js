export default function Footer() {
    return(
        <footer className="bg-grey-900 text-white mt-16">
            <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold">Trivoya Travels</h3>
                    <p className="text-sm mt-3">Authentic travel experiences across India including Taj Mahal tours
            and Golden Triangle journeys.</p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/tours">Tours</a></li>
                        <li><a href="/blog">Travel Blogt</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Contact Us</h4>
                    <p className="text-sm">Email: trivoyatravelss@gmail.com</p>
                    <p className="text-sm">WhatsApp: +91 7409970085</p>
                </div>
            </div>
            <div className="text-center text-sm border-t border-gray-700 py-4"> © {new Date().getFullYear()} Trivoya Travels. 

            </div>
        </footer>
    );
}