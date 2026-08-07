import useMobileStore from "#store/mobile";
import { ChevronLeft } from "lucide-react";

const AppHeader = ({ title, subtitle, backLabel = "Home", action = null }) => {
    const { stack, popScreen, closeApp } = useMobileStore();
    const canGoBack = stack.length > 0;

    return (
        <header className="app-header">
            <div className="bar">
                <button type="button" className="back" onClick={() => (canGoBack ? popScreen() : closeApp())}>
                    <ChevronLeft size={24} strokeWidth={2.5} />
                    <span>{canGoBack ? "Back" : backLabel}</span>
                </button>

                {action}
            </div>

            <h1>{title}</h1>
            {subtitle ? <p>{subtitle}</p> : null}
        </header>
    );
};

export default AppHeader;
