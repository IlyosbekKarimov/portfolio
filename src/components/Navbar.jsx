import { navIcons, navLinks, profile } from "#constants";
import { useClock } from "#hooks";
import useWindowStore from "#store/window";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const time = useClock("ddd MMM D h:mm A");

    return (
        <nav>
            <div>
                <img src="images/logo.svg" alt="logo" />
                <p className="font-bold">{profile.name} | Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} alt={`icon-${id}`} className="icon-hover" />
                        </li>
                    ))}
                </ul>

                <time>{time}</time>
            </div>
        </nav>
    );
};
export default Navbar;