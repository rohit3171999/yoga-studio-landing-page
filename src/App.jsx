import React from 'react';
import './App.css'; // Importing the custom CSS file

// SVG Icon Components for better readability
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
    </svg>
);
const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
);


function App() {
    return (
        <div className="bg-slate-50 text-gray-800 font-sans">

            {/* --- Header & Navigation --- */}
            <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="text-2xl font-bold text-teal-700">Serenity Flow</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#schedule" className="text-gray-600 hover:text-teal-600">Schedule</a>
                        <a href="#about" className="text-gray-600 hover:text-teal-600">About Us</a>
                        <a href="#contact" className="text-gray-600 hover:text-teal-600">Contact</a>
                    </div>
                    <a href="#contact" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors">
                        Book a Trial
                    </a>
                </nav>
            </header>

            <main>
                {/* --- 4.1 Hero Section --- */}
                <section className="hero-section h-screen flex items-center justify-center text-white text-center">
                    <div className="bg-black/50 p-8 rounded-lg">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">Find Your Balance. Breathe. Flow.</h1>
                        <p className="text-lg md:text-xl mb-8">Join our community to rejuvenate your mind, body, and soul.</p>
                        <a href="#schedule" className="bg-white text-teal-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors">
                            View Class Schedule
                        </a>
                    </div>
                </section>

                {/* --- 4.2 Class Schedule Section --- */}
                <section id="schedule" className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-2">Class Schedule</h2>
                        <p className="text-gray-600 mb-10">Find a class that fits your schedule and level.</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white shadow-md rounded-lg">
                                <thead className="bg-teal-600 text-white">
                                <tr>
                                    <th className="py-3 px-4">Day</th>
                                    <th className="py-3 px-4">Time</th>
                                    <th className="py-3 px-4">Class Type</th>
                                    <th className="py-3 px-4">Level</th>
                                    <th className="py-3 px-4">Instructor</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                <tr className="hover:bg-gray-100">
                                    <td className="py-3 px-4 border-b">Monday</td>
                                    <td className="py-3 px-4 border-b">6:00 AM - 7:00 AM</td>
                                    <td className="py-3 px-4 border-b">Vinyasa Flow</td>
                                    <td className="py-3 px-4 border-b">Intermediate</td>
                                    <td className="py-3 px-4 border-b">Priya</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-3 px-4 border-b">Tuesday</td>
                                    <td className="py-3 px-4 border-b">7:00 PM - 8:00 PM</td>
                                    <td className="py-3 px-4 border-b">Hatha Yoga</td>
                                    <td className="py-3 px-4 border-b">Beginner</td>
                                    <td className="py-3 px-4 border-b">Anjali</td>
                                </tr>
                                <tr className="hover:bg-gray-100 bg-teal-50">
                                    <td className="py-3 px-4 border-b font-bold text-teal-800" colSpan="5">
                                        Saturday Special Workshop: 10:00 AM - 12:00 PM - Restorative Yoga with Arjun
                                    </td>
                                </tr>
                                {/* ... Add more rows for other classes */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* --- 4.3 About Section --- */}
                <section id="about" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-2">Our Sanctuary</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                At Serenity Flow, we believe yoga is a journey of self-discovery. Our mission is to provide a welcoming space for everyone to explore their practice, regardless of experience.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Instructor Card 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img src="https://i.pravatar.cc/150?img=25" alt="Instructor Priya" className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-bold">Priya</h3>
                                <p className="text-gray-500 mt-2">Specializing in Vinyasa and Ashtanga, Priya brings energetic flows to her classes.</p>
                            </div>
                            {/* Instructor Card 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img src="https://i.pravatar.cc/150?img=45" alt="Instructor Anjali" className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-bold">Anjali</h3>
                                <p className="text-gray-500 mt-2">Anjali's gentle approach to Hatha and Yin yoga is perfect for beginners.</p>
                            </div>
                            {/* Instructor Card 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img src="https://i.pravatar.cc/150?img=60" alt="Instructor Arjun" className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-bold">Arjun</h3>
                                <p className="text-gray-500 mt-2">A master of restorative yoga, Arjun helps you find deep relaxation.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 4.4 Contact Section --- */}
                <section id="contact" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                            {/* Contact Form */}
                            <form action="#" method="POST" className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 font-bold">Send Message</button>
                            </form>
                            {/* Map and Info */}
                            <div>
                                <div className="aspect-w-16 aspect-h-9 mb-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507886!3d-6.194741395514856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f428942372af%3A0x2641d8e5e545d355!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1622445831969!5m2!1sen!2sid"
                                        width="100%"
                                        height="350"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Studio Location"
                                        className="rounded-lg shadow-md"
                                    ></iframe>
                                </div>
                                <p className="text-lg"><strong>Address:</strong> 123 Wellness Lane, Bharthia, UP</p>
                                <p className="text-lg mt-2"><strong>Phone:</strong> <a href="tel:+911234567890" className="text-teal-600 hover:underline">+91 12345 67890</a></p>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="text-gray-500 hover:text-teal-600"><InstagramIcon /></a>
                                    <a href="#" className="text-gray-500 hover:text-teal-600"><FacebookIcon /></a>
                                    <a href="#" className="text-gray-500 hover:text-teal-600"><YouTubeIcon /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- Footer --- */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2025 Serenity Flow Yoga Studio. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;