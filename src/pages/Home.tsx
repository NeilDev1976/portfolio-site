import siteConfig from '../data/siteConfig.json';
import keyboardPic from "../assets/keyboardImage.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      
      <div className="card hover:shadow-2xl mb-4 p-4 mt-8 mx-4 text-center">
        <h1 className="rounded-xl mb-4">{siteConfig.site.author}</h1>
        <p>{siteConfig.site.description}</p>
      </div>


    <section className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl mx-auto px-4 py-12">

      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-6">
        <img
          src={keyboardPic}
          alt="Picture of a keyboard on a desk with hands typing and a cup of coffee"
          className="w-full h-full border-gray-300 dark:border-gray-700 rounded-xl shadow-lg object-cover"
        />
  
        <div className="card p-6 flex-1 md:col-span-2">
          <h2 className="mb-4 text-center">
            About Me
          </h2>

          <p className="leading-relaxed mb-4">
            Hello! I'm a developer returning to the tech world after leading teams,
            coordinating operations, and building the kind of decision-making skills
            you only acquire through real-world problem-solving. My focus now is on
            modern web development using TypeScript, React, Tailwind CSS, C#, .NET,
            and Azure.
          </p>

          <p className="leading-relaxed">
            I previously worked as a Software Engineer specialising in Visual C++,
            telecommunications and medical systems, and I'm now blending that
            technical foundation with the leadership and analytical skills gained
            from my career journey since.
          </p>
        </div>
      </div>

    </section>
  
    </div>
)};

export { Home };
