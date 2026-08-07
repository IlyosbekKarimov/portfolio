import { techStack } from "#constants";
import MobileAppWrapper from "#hoc/MobileAppWrapper";
import { AppHeader } from "#mobile";
import { Check } from "lucide-react";

const totalTechnologies = techStack.reduce((total, { items }) => total + items.length, 0);

const Skills = () => {
    return (
        <>
            <AppHeader title="Skills" subtitle={`${techStack.length} categories · ${totalTechnologies} technologies`} />

            <div className="app-body">
                <ul className="stack-list">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="card">
                            <div className="card-head">
                                <span className="badge">
                                    <Check size={13} strokeWidth={3.5} />
                                </span>
                                <h3>{category}</h3>
                            </div>

                            <ul className="chips">
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const SkillsScreen = MobileAppWrapper(Skills, 'skills');

export default SkillsScreen;
