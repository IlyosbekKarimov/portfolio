import { projects } from "#constants";
import MobileAppWrapper from "#hoc/MobileAppWrapper";
import { AppHeader } from "#mobile";
import useMobileStore from "#store/mobile";
import { ChevronRight, ExternalLink, Figma } from "lucide-react";

const ProjectRow = ({ project, onOpen }) => (
    <li>
        <button type="button" onClick={() => onOpen(project.id)}>
            <span className="thumb wide">
                {project.cover ? <img src={project.cover} alt={project.name} loading="lazy" /> : <i>{project.name.at(0)}</i>}
            </span>

            <span className="meta">
                <strong>{project.name}</strong>
                <small>{project.description.at(0)}</small>
            </span>

            <ChevronRight size={20} className="chevron" />
        </button>
    </li>
);

const ProjectDetail = ({ project }) => (
    <>
        <AppHeader title={project.name} subtitle={project.href ? "Live project" : "Case study"} />

        <div className="app-body">
            {project.cover ? <img src={project.cover} alt={project.name} className="hero" /> : null}

            <div className="prose">
                {project.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="actions">
                {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <ExternalLink size={18} />
                        Visit live site
                    </a>
                ) : null}

                {project.design ? (
                    <a href={project.design} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <Figma size={18} />
                        Open design file
                    </a>
                ) : null}
            </div>
        </div>
    </>
);

const Projects = () => {
    const { stack, pushScreen } = useMobileStore();
    const activeProject = projects.find((project) => project.id === stack.at(-1));

    if (activeProject) return <ProjectDetail project={activeProject} />;

    return (
        <>
            <AppHeader title="Projects" subtitle={`${projects.length} projects`} />

            <div className="app-body">
                <ul className="row-group">
                    {projects.map((project) => (
                        <ProjectRow key={project.id} project={project} onOpen={pushScreen} />
                    ))}
                </ul>
            </div>
        </>
    );
};

const ProjectsScreen = MobileAppWrapper(Projects, 'projects');

export default ProjectsScreen;
