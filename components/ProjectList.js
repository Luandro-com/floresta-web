import ProjectItem from "./ProjectItem"

const projectHeight = 260

export default ({ projects }) => (
  <div>
    {projects &&
      projects.map(project => (
        <ProjectItem height={projectHeight} {...project} key={project.id} />
      ))}
    <style jsx>{`
      width: 100%;
      margin: 0 auto;
      @media screen and (min-width: 845px) {
        height: ${projects.length * projectHeight + projects.length * 40}px;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
      }
    `}</style>
  </div>
)
