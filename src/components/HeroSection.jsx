/*
* Description:
The entry point of the site showcasing the studio’s branding, tagline, and main call-to-action.

Purpose:
Grab attention, communicate the brand essence, and guide users toward viewing the schedule or booking a trial.
* */
export default function HeroSection() {
    return(
        <section className="relative h-screen flex items-center justify-center text-center text-white">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1887&q=80"
                    alt="Woman practicing yoga in a serene outdoor setting"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">
                    Zenith Yoga Studio
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl mb-8">
                    Find Your Inner Peace, One Breath at a Time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#schedule"
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        View Schedule
                    </a>
                    <a
                        href="#booking"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Book a Free Trial
                    </a>
                </div>
            </div>
        </section>
    )
}