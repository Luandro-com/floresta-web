import ProjectItem from './ProjectItem';

export default ({ projects }) => (
	<div>
		{projects && projects.map((project) => <ProjectItem {...project} key={project.id} />)}
		<style jsx>{`width: 100%;`}</style>
	</div>
);
