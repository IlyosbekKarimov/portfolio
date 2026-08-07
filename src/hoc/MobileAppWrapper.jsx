import useMobileStore from "#store/mobile";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const DISMISS_DISTANCE = 110;

const MobileAppWrapper = (Component, appId) => {
    const Wrapped = (props) => {
        const { activeApp, closeApp } = useMobileStore();
        const isOpen = activeApp === appId;
        const ref = useRef(null);
        const hasMounted = useRef(false);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return () => {};

            if (isOpen) {
                gsap.set(el, { display: "flex" });
                gsap.fromTo(el, { scale: 0.9, opacity: 0, y: 40 }, { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' });
            } else if (hasMounted.current) {
                gsap.to(el, { scale: 0.92, opacity: 0, y: 32, duration: 0.28, ease: 'power2.in', onComplete: () => gsap.set(el, { display: "none" }) });
            } else {
                gsap.set(el, { display: "none" });
            }

            hasMounted.current = true;
        }, [isOpen]);

        // Pulling the header down flings the app back to the home screen, the way an iOS sheet dismisses.
        useGSAP(() => {
            const el = ref.current;
            if (!el) return () => {};

            const [instance] = Draggable.create(el, {
                type: "y",
                trigger: el.querySelector(".app-header"),
                bounds: { minY: 0, maxY: window.innerHeight },
                dragClickables: false,
                onDragEnd() {
                    if (this.y > DISMISS_DISTANCE) return closeApp();

                    gsap.to(el, { y: 0, duration: 0.35, ease: 'power3.out' });
                },
            });

            return () => instance.kill();
        }, []);

        return (
            <section id={`app-${appId}`} ref={ref} className="mobile-app">
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `MobileAppWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
};

export default MobileAppWrapper;
