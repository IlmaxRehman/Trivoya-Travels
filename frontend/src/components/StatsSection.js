import {
  FaUsers,
  FaSuitcaseRolling,
  FaStar,
  FaAward,
} from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "10K+",
      title: "Happy Travelers",
    },
    {
      icon: <FaSuitcaseRolling />,
      number: "150+",
      title: "Tour Packages",
    },
    {
      icon: <FaStar />,
      number: "4.9",
      title: "Average Rating",
    },
    {
      icon: <FaAward />,
      number: "8+",
      title: "Years Experience",
    },
  ];

  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-3">
            OUR ACHIEVEMENTS
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Travelers Worldwide
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 text-center"
            >

              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-3xl">

                {stat.icon}

              </div>

              <h3 className="text-4xl font-bold text-gray-900 mb-2">

                {stat.number}

              </h3>

              <p className="text-gray-600">

                {stat.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}