/*
* Description:
Displays weekly yoga class timings, levels, and instructors.

Purpose:
Helps visitors plan their attendance, explore class types, and see upcoming special events.
* */

const scheduleData = [
    {
        time: '8:00 AM - 9:00 AM',
        days: {
            Monday: { name: 'Sunrise Vinyasa', instructor: 'Elena V.', level: 'All Levels' },
            Tuesday: null,
            Wednesday: { name: 'Morning Flow', instructor: 'Aisha K.', level: 'Beginner' },
            Thursday: null,
            Friday: { name: 'Sunrise Vinyasa', instructor: 'Elena V.', level: 'All Levels' },
            Saturday: { name: 'Weekend Warrior', instructor: 'Marcus C.', level: 'Intermediate' },
            Sunday: null,
        },
    },
    {
        time: '10:00 AM - 11:15 AM',
        days: {
            Monday: null,
            Tuesday: { name: 'Hatha Yoga', instructor: 'Elena V.', level: 'Beginner' },
            Wednesday: null,
            Thursday: { name: 'Ashtanga Prep', instructor: 'Marcus C.', level: 'Intermediate' },
            Friday: null,
            Saturday: { name: 'Vinyasa & Vibes', instructor: 'Elena V.', level: 'All Levels' },
            Sunday: { name: 'Community Yoga', instructor: 'Guest', level: 'All Levels' },
        },
    },
    {
        time: '5:30 PM - 6:30 PM',
        days: {
            Monday: { name: 'Power Yoga', instructor: 'Marcus C.', level: 'Adv.' },
            Tuesday: { name: 'Yin & Restore', instructor: 'Aisha K.', level: 'All Levels' },
            Wednesday: { name: 'Power Yoga', instructor: 'Marcus C.', level: 'Adv.' },
            Thursday: { name: 'Yin & Restore', instructor: 'Aisha K.', level: 'All Levels' },
            Friday: { name: 'Happy Hour Flow', instructor: 'Elena V.', level: 'All Levels' },
            Saturday: null,
            Sunday: { name: 'Deep Stretch', instructor: 'Aisha K.', level: 'All Levels' },
        },
    },
];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function ClassScheduleSection(){
    return (
        <section id="schedule" className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Timetable</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Our Weekly Class Schedule
                    </p>
                </div>

                {/* Schedule Table */}
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Time
                            </th>
                            {daysOfWeek.map(day => (
                                <th key={day} scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                                    {day}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {scheduleData.map((slot) => (
                            <tr key={slot.time} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {slot.time}
                                </td>
                                {daysOfWeek.map(day => (
                                    <td key={day} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {slot.days[day] ? (
                                            <div>
                                                <p className="font-bold text-teal-700">{slot.days[day].name}</p>
                                                <p className="text-gray-600">{slot.days[day].instructor}</p>
                                                <span className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                    slot.days[day].level === 'Beginner' ? 'bg-green-100 text-green-800' :
                                                    slot.days[day].level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                                    slot.days[day].level === 'Adv.' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                                                }`}>
                                                    {slot.days[day].level}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400">—</span>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Special Event Highlight */}
                <div className="mt-16 bg-teal-50 rounded-lg p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-teal-800">Special Weekend Workshop</h3>
                            <p className="mt-2 text-lg text-teal-700">
                                Join Aisha for a 2-hour Deep Dive into Restorative Yoga & Mindfulness.
                            </p>
                            <p className="mt-1 text-md text-teal-600">This Saturday @ 2:00 PM</p>
                        </div>
                        <div className="flex-shrink-0">
                            <a
                                href="#booking"
                                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                            >
                                Reserve Your Spot
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}