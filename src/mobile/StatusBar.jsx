import { useClock } from "#hooks";
import useMobileStore from "#store/mobile";
import clsx from "clsx";
import { BatteryFull, Wifi } from "lucide-react";

const SIGNAL_BARS = [5, 8, 11, 14];

const StatusBar = () => {
    const { activeApp } = useMobileStore();
    const time = useClock("H:mm");

    return (
        <div id="status-bar" className={clsx(activeApp ? "on-light" : "on-dark")}>
            <time>{time}</time>

            <span className="island" />

            <div className="indicators">
                <span className="signal" aria-hidden="true">
                    {SIGNAL_BARS.map((height) => (
                        <i key={height} style={{ height }} />
                    ))}
                </span>

                <Wifi size={15} strokeWidth={2.75} />
                <BatteryFull size={24} strokeWidth={1.5} />
            </div>
        </div>
    );
};

export default StatusBar;
