
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineServer,
} from "react-icons/hi";
import { FaLaptopCode, FaRocket, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

import heroImg from "../assets/hero.png";

const AboutMe = () => {
  const highlights = [
    {
      title: "Full Stack Development",
      desc: "Building complete web applications with modern frontend and backend technologies.",
      icon: <HiOutlineCode />,
    },
    {
      title: "REST API Integration",
      desc: "Connecting frontend interfaces with backend services and database operations.",
      icon: <HiOutlineServer />,
    },
    {
      title: "Responsive UI & UX",
      desc: "Creating clean, accessible interfaces that work smoothly across all devices.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Clean & Maintainable Code",
      desc: "Writing reusable components and organized code following modern best practices.",
      icon: <HiOutlineCheckCircle />,
    },
  ];

  const technologies = [
    {
      name: "React.js",
      icon: <FaReact />,
      color: "text-cyan-500",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "text-gray-900",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-blue-600",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-600",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-800",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-green-600",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-teal-500",
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl bg-gray-50/50 px-4 py-20 sm:px-6 md:px-12 md:py-24"
    >
      {/* Section Header */}
      <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center sm:mb-16">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
          <HiOutlineUser className="text-sm text-blue-600" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Who I{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Am
          </span>
        </h2>

        <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
          A passionate Full Stack Web Developer focused on building modern,
          responsive, and user-friendly web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Profile Card */}
        <div className="space-y-6 lg:col-span-5">
          <div className="relative rounded-2xl border border-gray-200/90 bg-white p-5 shadow-sm sm:p-8">
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />

            {/* Profile Details */}
            <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-6">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20">
                <img
                  src={heroImg}
                  alt="Md. Shahin Alam"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  Md. Shahin Alam
                </h3>

                <p className="text-sm font-medium text-blue-600">
                  Full Stack Web Developer
                </p>

                <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                  <HiOutlineLocationMarker className="shrink-0 text-gray-400" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-50 py-2">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineBriefcase className="text-lg text-blue-600" />
                  Availability:
                </span>

                <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                  Open to Opportunities
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-50 py-2">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaLaptopCode className="text-blue-600" />
                  Primary Focus:
                </span>

                <span className="font-semibold text-gray-800">
                  Full Stack Development
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-50 py-2">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineMail className="text-blue-600" />
                  Communication:
                </span>

                <span className="font-semibold text-gray-800">
                  English &amp; Bengali
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-gray-100 pt-6 text-center sm:gap-3">
              <div className="rounded-xl bg-gray-50 p-2.5">
                <span className="block text-xl font-black text-blue-600 sm:text-2xl">
                  3+
                </span>
                <span className="text-[10px] font-medium text-gray-500 sm:text-[11px]">
                  Projects
                </span>
              </div>

              <div className="rounded-xl bg-gray-50 p-2.5">
                <span className="block text-xl font-black text-indigo-600 sm:text-2xl">
                  2
                </span>
                <span className="text-[10px] font-medium text-gray-500 sm:text-[11px]">
                  Development Areas
                </span>
              </div>

              <div className="rounded-xl bg-gray-50 p-2.5">
                <span className="block text-xl font-black text-emerald-600 sm:text-2xl">
                  100%
                </span>
                <span className="text-[10px] font-medium text-gray-500 sm:text-[11px]">
                  Commitment
                </span>
              </div>
            </div>
          </div>

          {/* Technology Stack Card */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-5 shadow-sm sm:p-6">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-700">
              <HiOutlineSparkles className="text-lg text-blue-600" />
              Technologies I Use
            </h4>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 sm:text-sm"
                >
                  <span className={`text-base ${tech.color}`}>
                    {tech.icon}
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Strengths */}
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-4 text-base leading-relaxed text-gray-600">
            <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-gray-900 sm:text-3xl">
              Turning ideas into powerful,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                full-stack web experiences.
              </span>
            </h3>

            <p>
              I am an aspiring{" "}
              <strong className="text-gray-900">
                Full Stack Web Developer
              </strong>{" "}
              passionate about building complete web applications, from
              interactive user interfaces to backend services and database
              integration. My development journey includes working with{" "}
              <strong className="text-gray-900">
                React.js, Next.js, JavaScript, and TypeScript
              </strong>{" "}
              to create responsive and maintainable frontend experiences.
            </p>

            <p>
              On the backend, I am developing my skills with{" "}
              <strong className="text-gray-900">
                Node.js, Express.js, and MongoDB
              </strong>{" "}
              to build APIs, manage application data, and connect frontend
              interfaces with backend functionality. I value clean code,
              reusable components, debugging, and continuous learning.
            </p>

            <p>
              My goal is to contribute to a collaborative development team,
              solve real-world problems, and build scalable applications
              that deliver meaningful value to users and businesses.
            </p>
          </div>

          {/* Core Strengths */}
          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <span className="mt-0.5 shrink-0 text-xl text-blue-600">
                  {item.icon}
                </span>

                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-stretch gap-3 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <HiOutlineSparkles className="text-lg" />
              <span>View Full Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
            >
              <FaRocket className="text-sm" />
              <span>Let's Work Together</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
