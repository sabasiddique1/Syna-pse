import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const About = () => {
    return (
        <footer className="bg-dotted-pattern bg-contain p-12 md:py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Synapse Section - 2/4 of the width */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Synapse</h2>
                    <p className="text-gray-400">
                        App for therapy, your one stop for healing.
                    </p>
                    <div className="flex items-center space-x-4 mt-2 ">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            <FaFacebook size={28} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                            <FaInstagram size={28} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                            <FaTwitter size={28} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                            <FaLinkedin size={28} />
                        </a>
                    </div>
                </div>

                {/* About Section - 1/4 of the width */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold mb-2">About & Conditions</h3>
                    <p className="text-gray-400">Terms & Conditions</p>
                    <p className="text-gray-400">Privacy Policy</p>
                    <p className="text-gray-400">About Us</p>
                </div>

                {/* Search by Doctor Section - 1/4 of the width */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold mb-2">Search by Doctor</h3>
                    <p className="text-gray-400">Find a Doctor</p>
                    <p className="text-gray-400">Specialists</p>
                    <p className="text-gray-400">Contact Us</p>
                </div>
            </div>
        </footer>
    );
};
