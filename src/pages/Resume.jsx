import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
  HiDownload,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 font-sans text-gray-800 print:bg-white print:p-0">
      {/* Action Bar */}
      <div className="mx-auto mb-6 flex max-w-4xl flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold transition hover:bg-gray-50 hover:text-blue-600"
        >
          <HiArrowLeft />
          Back to Portfolio
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <HiPrinter />
          Print / Save as PDF
        </button>
      </div>

      {/* Resume Sheet */}
      <main className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow-xl sm:p-12 print:rounded-none print:border-none print:p-0 print:shadow-none">
        {/* Header */}
        <header className="mb-6 border-b border-gray-200 pb-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Md. Shahin Alam
          </h1>

          <p className="mt-1 text-lg font-bold text-blue-600">
            Full Stack Web Developer
          </p>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
            Aspiring Full Stack Web Developer passionate about building
            responsive, accessible, and user-friendly web applications
            using modern frontend and backend technologies.
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-600 sm:text-sm">
            <a
              href="mailto:shahin236715@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-blue-600"
            >
              <HiMail className="text-blue-600" />
              shahin236715@gmail.com
            </a>

            <a
              href="tel:+8801768236715"
              className="inline-flex items-center gap-1.5 hover:text-blue-600"
            >
              <HiPhone className="text-blue-600" />
              +880 1768-236715
            </a>

            <span className="inline-flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-600" />
              Chapai Nawabganj, Bangladesh
            </span>

            <a
              href="https://github.com/shahinAlam715"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shahin-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600"
            >
              <FaLinkedin className="text-blue-600" />
              LinkedIn
            </a>

            <a
              href="https://my-prossional-protfilio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600"
            >
              <FaGlobe className="text-blue-600" />
              Portfolio
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <SectionTitle>Professional Summary</SectionTitle>
          <p className="text-justify text-sm leading-relaxed text-gray-700">
            Motivated Full Stack Web Developer with hands-on experience
            building modern web applications using React, Next.js,
            TypeScript, JavaScript, Tailwind CSS, Node.js, Express.js,
            and MongoDB. Familiar with responsive UI development,
            reusable components, REST API integration, authentication,
            and database fundamentals. Eager to contribute to real-world
            software projects, solve technical problems, and continue
            growing as a developer.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <SectionTitle>Technical Skills</SectionTitle>

          <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <SkillBox title="Frontend Development">
              React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5,
              CSS3, Tailwind CSS, Bootstrap, DaisyUI, React Router
            </SkillBox>

            <SkillBox title="Backend Development">
              Node.js, Express.js, REST APIs, HTTP methods, JSON,
              Server-side fundamentals
            </SkillBox>

            <SkillBox title="Database & Authentication">
              MongoDB, MongoDB Atlas, Better Auth, Google OAuth,
              Firebase Authentication
            </SkillBox>

            <SkillBox title="Tools & Deployment">
              Git, GitHub, VS Code, npm, Vite, Postman, Vercel, Netlify
            </SkillBox>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <SectionTitle>Featured Projects</SectionTitle>

          <div className="space-y-5">
            {/* Bazar Dor */}
            <ProjectItem
              title="Bazar Dor — E-commerce Platform"
              stack="Next.js, React, TypeScript, Tailwind CSS, MongoDB Atlas, Better Auth"
              live="https://e-commerce-bazer-dor-project.vercel.app"
              github="https://github.com/shahinAlam715/E-commerce-Bazer-dor-Project"
            >
              <li>
                Developed a modern e-commerce application with responsive
                product browsing and product detail views.
              </li>
              <li>
                Integrated email-based authentication and Google sign-in
                using Better Auth.
              </li>
              <li>
                Connected the application to MongoDB Atlas and deployed
                the project on Vercel.
              </li>
            </ProjectItem>

            {/* My-FitLog */}
            <ProjectItem
              title="My-FitLog — Fitness Workout Planner"
              stack="Next.js, React, TypeScript, Tailwind CSS, Context API"
              live="https://my-fitlog-project-a6.vercel.app"
              github="https://github.com/shahinAlam715/my-fitlog-project-a6"
            >
              <li>
                Built a fitness planning interface for organizing workout
                routines and daily activities.
              </li>
              <li>
                Used reusable components and shared application state
                to organize workout-related interactions.
              </li>
              <li>
                Focused on responsive layouts and a clear, user-friendly
                experience across screen sizes.
              </li>
            </ProjectItem>

            {/* DevStack */}
            <ProjectItem
              title="DevStack — Technology Exploration Platform"
              stack="React, TypeScript, Tailwind CSS, DaisyUI"
              live="https://thunderous-smakager-d0231b.netlify.app/"
              github="https://github.com/shahinAlam715/my-Devstack-project"
            >
              <li>
                Created a responsive platform for exploring technology
                items through an interactive interface.
              </li>
              <li>
                Implemented an add-to-cart style system with React state
                management and dynamic UI updates.
              </li>
              <li>
                Used JSON data, reusable components, and conditional
                rendering to organize the interface.
              </li>
            </ProjectItem>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <SectionTitle>Experience</SectionTitle>

          <div>
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <div>
                <h3 className="font-bold text-gray-900">
                  Frontend Developer Intern
                </h3>
                <p className="text-sm text-gray-600">
                  Creative IT Institute · Dhaka, Bangladesh
                </p>
              </div>

              <p className="text-xs font-semibold text-gray-500 sm:text-right">
                Jan 2026 – Mar 2026
              </p>
            </div>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
              <li>
                Developed responsive web interfaces using HTML, CSS,
                JavaScript, and React.
              </li>
              <li>
                Built reusable UI components and collaborated on
                team-based frontend projects.
              </li>
              <li>
                Worked on responsive layouts, cross-browser compatibility,
                and UI troubleshooting.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <SectionTitle>Education</SectionTitle>

          <div className="space-y-4">
            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Bachelor of Science (B.Sc.) in Botany
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nawabgonj Government College
                  </p>
                  <p className="text-xs text-gray-500">
                    Chapai Nawabganj, Rajshahi
                  </p>
                </div>

                <p className="text-xs font-medium text-gray-500 sm:text-right">
                  2023 – Present
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Higher Secondary Certificate (HSC) — Science
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nachole Government College
                  </p>
                </div>

                <div className="text-xs text-gray-500 sm:text-right">
                  <p>2021 – 2022</p>
                  <p>GPA: 4.00 / 5.00</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Secondary School Certificate (SSC) — Science
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sonaichandi High School
                  </p>
                </div>

                <div className="text-xs text-gray-500 sm:text-right">
                  <p>2019 – 2020</p>
                  <p>GPA: 4.56 / 5.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training */}
        <section className="mb-6">
          <SectionTitle>Training & Professional Development</SectionTitle>

          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-gray-900">
                Front-End Development
              </h3>
              <p className="text-sm text-gray-600">
                Creative IT Institute
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">
                Practical learning in responsive web design, HTML, CSS,
                JavaScript, React, reusable components, and frontend
                development workflows.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Full Stack Web Development
              </h3>
              <p className="text-sm text-gray-600">
                Programming Hero — In Progress
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">
                Continuing to develop skills in modern web development,
                including frontend frameworks, backend fundamentals,
                APIs, and database concepts.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <SectionTitle>Additional Skills</SectionTitle>

          <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">
                Core Competencies
              </h3>
              <p className="leading-relaxed text-gray-700">
                Problem Solving, Teamwork, Adaptability, Time Management,
                Attention to Detail, Continuous Learning
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-gray-900">
                Languages
              </h3>
              <p className="leading-relaxed text-gray-700">
                Bengali (Native), English (Basic/Intermediate — update
                to your actual proficiency)
              </p>
            </div>
          </div>
        </section>
      </main>

{/* Download Resume Button */}
<div className="mx-auto mt-6 flex max-w-4xl justify-center print:hidden">
  <a
    href="/Shahin-Alam-Resume.pdf"
    download="Md-Shahin-Alam-Resume.pdf"
    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:w-auto"
  >
    <HiDownload className="text-xl" />
    Download Resume (PDF)
  </a>
</div>

    </div>
  );
};

/* Reusable Section Heading */
const SectionTitle = ({ children }) => (
  <h2 className="mb-3 flex items-center gap-2 border-b border-gray-200 pb-1 text-lg font-bold uppercase tracking-wider text-gray-900">
    <span className="h-2.5 w-2.5 rounded-sm bg-blue-600" />
    {children}
  </h2>
);

/* Reusable Skill Box */
const SkillBox = ({ title, children }) => (
  <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
    <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
    <p className="text-xs leading-relaxed text-gray-700 sm:text-sm">
      {children}
    </p>
  </div>
);

/* Reusable Project Item */
const ProjectItem = ({ title, stack, live, github, children }) => (
  <article className="border-l-2 border-blue-600 py-0.5 pl-4">
    <div className="flex flex-col justify-between gap-2 sm:flex-row">
      <h3 className="font-bold text-gray-900">{title}</h3>

      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-blue-600 print:hidden">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          Live Demo <HiExternalLink />
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          GitHub <HiExternalLink />
        </a>
      </div>
    </div>

    <p className="mt-1 text-xs font-medium text-gray-500">
      Tech Stack: {stack}
    </p>

    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
      {children}
    </ul>
  </article>
);

export default Resume;