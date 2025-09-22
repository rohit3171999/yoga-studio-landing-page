
/*
* Description:
Provides multiple ways for prospective students to reach the studio.

Purpose:
Convert interest into action—trial signups, inquiries, or studio visits.
* */
export default function ContactSection(){
    return (
        <section id="contact" className="bg-gray-50 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Contact Form Column */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get In Touch</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Have a question or ready to book your first class? Send us a message and we’ll get back to you shortly.
                        </p>
                        <form action="#" method="POST" className="mt-8 grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="full-name" className="sr-only">Full name</label>
                                <input type="text" name="full-name" id="full-name" autoComplete="name"
                                       className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                                       placeholder="Full name"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input id="email" name="email" type="email" autoComplete="email"
                                       className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                                       placeholder="Email"/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input type="text" name="phone" id="phone" autoComplete="tel"
                                       className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                                       placeholder="Phone (Optional)"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea id="message" name="message" rows={4}
                                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                                          placeholder="Your message..."/>
                            </div>
                            <div>
                                <button type="submit"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Studio Info Column */}
                    <div className="flex flex-col">
                        <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Visit Our Studio</h3>
                        <div className="mt-8 space-y-6 text-lg text-gray-600">
                            <p className="leading-relaxed">
                                123 Serenity Lane<br/>
                                Harmony City, ST 12345
                            </p>
                            <div className="space-y-3">
                                <p>
                                    <a href="tel:+15551234567" className="hover:text-teal-600 transition-colors">
                                        (555) 123-4567
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:hello@zenithyoga.com" className="hover:text-teal-600 transition-colors">
                                        hello@zenithyoga.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="mt-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.517969587453!2d-73.98785368459395!3d40.75050497932765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1633123456789!5m2!1sen!2sus"
                                className="w-full h-64 border-0 rounded-lg shadow-md"
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps location of Zenith Yoga Studio"
                            ></iframe>
                        </div>

                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h4 className="text-xl font-bold text-gray-800">Follow Us</h4>
                            <div className="mt-4 flex space-x-6">
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.885 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}