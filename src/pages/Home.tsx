import siteConfig from '../data/siteConfig.json';
import keyboardPic from "../assets/keyboardImage.jpg";

const Home = () => {
  return (
    <div className="bg-zinc-50 dark:bg-red-900 flex flex-col items-center justify-start">
      
      <div className="bg-white text-gray-900 rounded-xl shadow-md hover:shadow-2xl mb-4 p-4 mt-8 text-center">
        <h1 className=" text-4xl rounded-xl font-bold mb-4">{siteConfig.site.author}</h1>
        <p>{siteConfig.site.description}</p>
      </div>


    <section className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl mx-auto px-4 py-12">

      {/* Image */}
      <img
        src={keyboardPic}
        alt="Picture of a keyboard on a desk with hands typing and a cup of coffee"
        className="w-48 h-48 md:w-64 md:h-64 rounded-xl shadow-lg object-cover"
      />

      {/* Text box */}
      <div className="bg-white rounded-xl shadow-md p-6 flex-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          About Me
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Hello! I'm a developer returning to the tech world after leading teams,
          coordinating operations, and building the kind of decision-making skills
          you only acquire through real-world problem-solving. My focus now is on
          modern web development using TypeScript, React, Tailwind CSS, C#, .NET,
          and Azure.
        </p>

        <p className="text-gray-700 leading-relaxed">
          I previously worked as a Software Engineer specialising in Visual C++,
          telecommunications and medical systems, and I'm now blending that
          technical foundation with the leadership and analytical skills gained
          from my career journey since.
        </p>
      </div>

    </section>
  
    </div>
)};

export { Home };
