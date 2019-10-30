import ProjectItem from './ProjectItem'
import Pagination from './Pagination'

const projectHeight = 270

export default ({ projects, title }) => (
  <div>
    {title && <h1>{title}</h1>}
    <div className='container'>
      {projects &&
        projects.map(project => (
          <div key={project.id} className='project-item'>
            <ProjectItem height={projectHeight} {...project} />
          </div>
        ))}
      {!projects && <ProjectItem height={projectHeight} />}
      {/* <Pagination /> */}
    </div>
    <style jsx>{`
      width: 100%;
      margin: 0 auto;
      h1 {
        padding: 5vh 0;
        font-size: 3em;
      }
      .container {
        width: 100%;
        margin: 0 auto;
      }
      .project-item {
        margin: 10px auto;
      }
      @media screen and (min-width: 845px) {
        .container {
          /* height: ${projects.length * projectHeight +
            projects.length * 40}px; */
          display: flex;
          flex-flow: column;
          justify-content: space-around;
        }
      }
    `}</style>
  </div>
)
