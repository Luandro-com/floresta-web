import ProjectItem from "./ProjectItem"

const projectHeight = 280

export default ({ projects }) => (
  <div>
    {projects &&
      projects.map(project => (
        <ProjectItem height={projectHeight} {...project} key={project.id} />
      ))}
    <style jsx>{`
      width: 100%;
      height: ${projects.length * projectHeight + projects.length * 20}px;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
    `}</style>
  </div>
)
