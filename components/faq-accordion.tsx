export function Accordion() {
  return (
    <div className="space-y-4 px-24 gap-6 flex flex-col justify-center items-center">
      <details
        className="group border-s-4 border-gray-300 bg-black p-6 [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-400">
            Q1. Why you should hire me?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-300">
          Hiring me as a full stack developer brings several benefits, even as a
          self-taught professional. I have developed strong skills in both
          front-end (HTML, CSS, JavaScript, React) and back-end technologies
          (Node.js, Express, MongoDB) through dedicated self-study and practical
          projects. My self-motivation and passion for learning ensure that I
          stay current with industry trends and technologies. My ability to
          learn independently and adapt quickly, combined with a collaborative
          mindset, makes me a valuable addition to your team.
        </p>
      </details>

      <details className="group border-s-4 border-gray-300 bg-black p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-400">
            Q2. Why I choose full stack developer?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-300">
          I chose to become a full stack developer because I enjoy the
          versatility and challenge of working on both the front-end and
          back-end of web applications. I find it rewarding to see a project
          through from conception to deployment, and being a full stack
          developer allows me to contribute to every phase of the development
          process. Additionally, the continuous learning and problem-solving
          inherent in this role align perfectly with my passion for technology
          and innovation.
        </p>
      </details>
      <details
        className="group border-s-4 border-gray-300 bg-black p-6 [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-400">
            Q3. How you differentiate with others?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-300">
          I read tech blogs, articles, and documentation regularly, staying
          up-to-date with new technologies and industry trends to adapt in the
          fast-paced, constantly changing tech world.
        </p>
      </details>
    </div>
  );
}
