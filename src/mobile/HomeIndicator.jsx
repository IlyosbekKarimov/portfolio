import useMobileStore from "#store/mobile";
import clsx from "clsx";

const HomeIndicator = () => {
    const { activeApp, closeApp } = useMobileStore();

    return (
        <button
            type="button"
            id="home-indicator"
            className={clsx(activeApp ? "on-light" : "on-dark")}
            aria-label="Back to home screen"
            disabled={!activeApp}
            onClick={closeApp}
        >
            <span />
        </button>
    );
};

export default HomeIndicator;
