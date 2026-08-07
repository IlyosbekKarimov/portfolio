import { mobileApps, profile, projects, socials } from "#constants";
import { APP_ICONS, SOCIAL_ICONS } from "#mobile/icons";
import useMobileStore from "#store/mobile";
import { useGSAP } from "@gsap/react";
import dayjs from "dayjs";
import gsap from "gsap";
import { useRef } from "react";

const gridApps = mobileApps.filter((app) => !app.dock);
const dockedApps = mobileApps.filter((app) => app.dock);

const Tile = (props) => {
    const { name, gradient, icon: Icon, href, onClick } = props;
    const glyph = <Icon size={29} strokeWidth={1.9} />;

    return (
        <li className="app-tile">
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="app-icon" style={{ backgroundImage: gradient }} aria-label={name}>
                    {glyph}
                </a>
            ) : (
                <button type="button" className="app-icon" style={{ backgroundImage: gradient }} aria-label={name} onClick={onClick}>
                    {glyph}
                </button>
            )}

            <p>{name}</p>
        </li>
    );
};

const HomeScreen = () => {
    const { openApp, pushScreen } = useMobileStore();
    const screenRef = useRef(null);

    // Deep link straight into a project's detail screen, skipping the list.
    const openProject = (projectId) => {
        openApp("projects");
        pushScreen(projectId);
    };

    useGSAP(() => {
        gsap.from(".widget", { y: 24, opacity: 0, duration: 0.5, ease: 'power3.out' });
        gsap.from(".app-grid .app-tile", { scale: 0.6, opacity: 0, duration: 0.45, stagger: 0.035, ease: 'back.out(1.6)', delay: 0.1 });
        gsap.from(".project-strip", { y: 24, opacity: 0, duration: 0.5, ease: 'power3.out', delay: 0.25 });
        gsap.from("#dock-bar", { y: 48, opacity: 0, duration: 0.55, ease: 'power3.out', delay: 0.3 });
    }, { scope: screenRef });

    return (
        <section id="home-screen" ref={screenRef}>
            <div className="pages">
                <button type="button" className="widget" onClick={() => openApp("about")}>
                    <img src={profile.avatar} alt={profile.name} />

                    <div>
                        <p className="date">{dayjs().format("dddd, D MMMM")}</p>
                        <h2>{profile.name}</h2>
                        <p className="role">{profile.role}</p>

                        <span className="status">
                            <i />
                            {profile.status}
                        </span>
                    </div>
                </button>

                <ul className="app-grid">
                    {gridApps.map(({ id, name, gradient }) => (
                        <Tile key={id} name={name} gradient={gradient} icon={APP_ICONS[id]} onClick={() => openApp(id)} />
                    ))}

                    {socials.map(({ id, text, gradient, link }) => (
                        <Tile key={id} name={text} gradient={gradient} icon={SOCIAL_ICONS[text]} href={link} />
                    ))}
                </ul>

                <div className="project-strip">
                    <p className="label">Projects</p>

                    <ul>
                        {projects.map(({ id, name, cover }) => (
                            <li key={id}>
                                <button type="button" onClick={() => openProject(id)}>
                                    {cover ? <img src={cover} alt="" /> : <i>{name.at(0)}</i>}
                                    <span>{name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="page-dots">
                <i className="active" />
            </div>

            <div id="dock-bar">
                <ul>
                    {dockedApps.map(({ id, name, gradient }) => (
                        <Tile key={id} name={name} gradient={gradient} icon={APP_ICONS[id]} onClick={() => openApp(id)} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeScreen;
