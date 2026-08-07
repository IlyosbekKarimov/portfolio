import dayjs from "dayjs";
import { useEffect, useState } from "react";

const TICK_INTERVAL = 15 * 1000;

const useClock = (format = "h:mm A") => {
    const [time, setTime] = useState(() => dayjs().format(format));

    useEffect(() => {
        const tick = () => setTime(dayjs().format(format));
        const interval = setInterval(tick, TICK_INTERVAL);

        tick();

        return () => clearInterval(interval);
    }, [format]);

    return time;
};

export default useClock;
