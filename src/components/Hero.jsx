import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaReact, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import heroimg from "../assets/protfilioimg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[88vh] w-full max-w-7xl items-center justify-center overflow-hidden px-4 pb-12 pt-24 sm:px-6 md:px-10 lg:px-12"
    >
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute left-1/4 top-20 -z-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 -z-10 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="grid w-full grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        {/* Left Column */}
        <div className="min-w-0 space-y-5 text-left sm:space-y-6 lg:col-span-7">
          {/* Status Badge */}
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm sm:px-3.5 sm:text-sm">
            <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-emerald-500" />
            <span>Available for Hire • Fresher Full Stack Developer</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-base font-medium text-gray-600 sm:text-lg">
              Hello, I am a passionate
            </p>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-5xl xl:text-6xl">
              Full Stack
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Web Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
            I craft clean, fast, and responsive full-stack web applications with{" "}
            <span className="font-semibold text-gray-900">React.js</span>,{" "}
            <span className="font-semibold text-gray-900">Next.js</span>,{" "}
            <span className="font-semibold text-gray-900">
              JavaScript (ES6+)
            </span>
            , <span className="font-semibold text-gray-900">Node.js</span>,{" "}
            <span className="font-semibold text-gray-900">Express.js</span>, and{" "}
            <span className="font-semibold text-gray-900">MongoDB</span>.
            Dedicated to writing maintainable code, building scalable
            applications, integrating APIs, and bringing intuitive user
            experiences to life.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              to="/resume"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl sm:w-auto sm:px-7 sm:text-base"
            >
              <HiDocumentText className="text-xl" />
              <span>View Resume / CV</span>
            </Link>

            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50/40 hover:text-blue-600 sm:w-auto sm:px-6 sm:text-base"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center px-4 py-3 text-sm font-semibold text-gray-600 transition hover:text-blue-600 sm:w-auto"
            >
              Get in Touch &rarr;
            </a>
          </div>

          {/* Core Tech Stack */}
         <div className="border-t border-gray-200/80 pt-5 sm:pt-6">
            <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <HiSparkles className="text-base text-blue-600" />
              Core Tech Stack
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-100/90 px-2.5 py-2 text-xs font-medium text-gray-800 sm:px-3 sm:text-sm">
                <FaReact className="shrink-0 text-base text-cyan-500" />
                React.js
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-100/90 px-2.5 py-2 text-xs font-medium text-gray-800 sm:px-3 sm:text-sm">
                <FaJsSquare className="shrink-0 text-base text-yellow-500" />
                JavaScript (ES6+)
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-100/90 px-2.5 py-2 text-xs font-medium text-gray-800 sm:px-3 sm:text-sm">
                <SiTailwindcss className="shrink-0 text-base text-teal-500" />
                Tailwind CSS
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-100/90 px-2.5 py-2 text-xs font-medium text-gray-800 sm:px-3 sm:text-sm">
                <SiVite className="shrink-0 text-base text-purple-500" />
                Vite
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-100/90 px-2.5 py-2 text-xs font-medium text-gray-800 sm:px-3 sm:text-sm">
                <FaGitAlt className="shrink-0 text-base text-orange-500" />
                Git &amp; GitHub
              </span>
            </div>
          </div> 

          



        </div>

        {/* Right Column: Profile Image */}
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:col-span-5 lg:max-w-none">
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-blue-400/30 to-indigo-500/20 blur-xl sm:-inset-5" />

          <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50 shadow-xl shadow-blue-900/10 sm:rounded-3xl">
            <img
              src={heroimg}
              alt="Full Stack Web Developer"
              className="block aspect-[4/5] w-full object-cover object-top"
              fetchPriority="high"
            />
          </div>

          {/* Decorative Dots */}
          <div className="pointer-events-none absolute -right-3 -top-3 -z-10 grid grid-cols-4 gap-2 opacity-60 sm:-right-5 sm:-top-5">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
