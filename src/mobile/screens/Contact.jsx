import { profile, socials } from "#constants";
import MobileAppWrapper from "#hoc/MobileAppWrapper";
import { AppHeader } from "#mobile";
import { SOCIAL_ICONS } from "#mobile/icons";
import { ChevronRight } from "lucide-react";

const handleOf = (link) => {
    try {
        const { hostname, pathname } = new URL(link);

        return `${hostname.replace(/^www\./, "")}${pathname.replace(/\/$/, "")}`;
    } catch {
        return link;
    }
};

const Contact = () => {
    return (
        <>
            <AppHeader title="Contact" subtitle="Got an idea, a bug to squash, or just want to talk tech?" />

            <div className="app-body">
                <div className="profile-card">
                    <img src={profile.avatar} alt={profile.name} />

                    <div>
                        <strong>{profile.name}</strong>
                        <small>{profile.role}</small>
                    </div>
                </div>

                <ul className="row-group">
                    {socials.map(({ id, text, gradient, link }) => {
                        const Icon = SOCIAL_ICONS[text];

                        return (
                            <li key={id}>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <span className="thumb tint" style={{ backgroundImage: gradient }}>
                                        <Icon size={20} />
                                    </span>

                                    <span className="meta">
                                        <strong>{text}</strong>
                                        <small>{handleOf(link)}</small>
                                    </span>

                                    <ChevronRight size={20} className="chevron" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

const ContactScreen = MobileAppWrapper(Contact, 'contact');

export default ContactScreen;
