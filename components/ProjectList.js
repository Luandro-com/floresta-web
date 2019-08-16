import ProjectItem from "./ProjectItem"
import Pagination from "./Pagination"

const projectHeight = 270

export default ({ projects, title }) => (
  <div>
    {title && <h1>{title}</h1>}
    {projects &&
      projects.map(project => (
        <ProjectItem height={projectHeight} {...project} key={project.id} />
      ))}
    {!projects && <ProjectItem height={projectHeight} />}
    {/* <Pagination /> */}

    <style jsx>{`
      h1 {
        padding: 5vh 0;
        font-size: 3em;
      }
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
