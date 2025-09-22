/*
* Description:
Tells the story of the yoga studio and introduces instructors.

Purpose:
Builds trust and credibility by showing the mission, values, and real people behind the studio.
* */

const instructors = [
    {
        name: 'Elena Vasileva',
        bio: 'With over 15 years of experience in Vinyasa and Hatha yoga, Elena guides students to find strength and serenity on the mat.',
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.Xm1EXmPOVQQajFrYh3F_WAHaHa?pid=Api&P=0&h=180',
    },
    {
        name: 'Marcus Chen',
        bio: 'Marcus specializes in Ashtanga and power yoga, helping students push their limits while maintaining a focus on breath and alignment.',
        imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.Wwkj6mz7ZUkF8pBMY7UvIwHaHa?pid=Api&P=0&h=180',
    },
    {
        name: 'Aisha Khan',
        bio: 'Aisha’s restorative and Yin yoga classes are a sanctuary for deep relaxation and mindful presence. She believes in yoga for every body.',
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.GMKwAuRIiB5Kj9-0jvbllQHaHa?pid=Api&P=0&h=180',
    },
];

export default function AboutSection(){
    return(
        <section id="about" className="bg-gray-50 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Our Mission</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        A Space for Growth and Stillness
                    </p>
                    <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
                        At Zenith Yoga, we believe in the transformative power of practice. Our mission is to provide a welcoming,
                        inclusive, and beautiful space where you can explore the connection between mind, body, and spirit.
                    </p>
                </div>

                <div className="mt-20">
                    <h3 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight mb-12">
                        Meet Our Instructors
                    </h3>
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {instructors.map((instructor) => (
                            <div key={instructor.name} className="text-center">
                                <div className="relative w-48 h-48 mx-auto">
                                    <img
                                        className="rounded-full object-cover w-full h-full shadow-lg"
                                        src={instructor.imageUrl}
                                        alt={`Headshot of ${instructor.name}`}
                                    />
                                </div>
                                <div className="mt-6">
                                    <h4 className="text-lg font-bold text-gray-900">{instructor.name}</h4>
                                    <p className="mt-2 text-base text-gray-600">{instructor.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}