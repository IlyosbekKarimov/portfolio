import { locations, profile } from "#constants";
import MobileAppWrapper from "#hoc/MobileAppWrapper";
import { AppHeader } from "#mobile";
import useMobileStore from "#store/mobile";
import { ChevronRight, Images } from "lucide-react";

const details = locations.about.children.find((child) => child.fileType === "txt");

const About = () => {
    const { openApp } = useMobileStore();

    return (
        <>
            <AppHeader title="About" subtitle={details?.subtitle} />

            <div className="app-body">
                <div className="profile-card">
                    <img src={profile.avatar} alt={profile.name} />

                    <div>
                        <strong>{profile.name}</strong>
                        <small>{profile.role}</small>
                    </div>
                </div>

                <div className="prose">
                    {details?.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {details?.image ? <img src={details.image} alt={details.subtitle} className="hero" /> : null}

                <ul className="row-group">
                    <li>
                        <button type="button" onClick={() => openApp("gallery")}>
                            <span className="thumb tint" style={{ backgroundImage: "linear-gradient(160deg, #fbbf24 0%, #f43f5e 100%)" }}>
                                <Images size={20} />
                            </span>

                            <span className="meta">
                                <strong>Gallery</strong>
                                <small>Photos and project shots</small>
                            </span>

                            <ChevronRight size={20} className="chevron" />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

const AboutScreen = MobileAppWrapper(About, 'about');

export default AboutScreen;
