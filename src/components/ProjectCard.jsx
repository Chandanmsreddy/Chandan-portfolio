function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

      <h2 className="text-3xl font-bold mb-4">
        {project.title}
      </h2>

      <p className="text-gray-700 mb-4">
        {project.overview}
      </p>

      <div className="mb-4">
        <h3 className="font-bold text-lg mb-2">
          Technical Details
        </h3>

        <p className="text-gray-600 whitespace-pre-line">
          {project.technical}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        className="inline-block bg-black text-white px-5 py-2 rounded-lg mb-5"
      >
        GitHub Repository
      </a>

      <iframe
        width="100%"
        height="350"
        src={project.youtube}
        title="YouTube video"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
    </div>
  )
}

export default ProjectCard