import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/theme-context";

interface TimelineElementProps {
    item: {
        date: string;
        icon: React.ReactNode;
        title: string;
        location: string;
        description: string;
    };
}

export default function TimelineElement({ item }: TimelineElementProps) {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { theme } = useTheme();

    return (
        <div ref={ref} className="vertical-timeline-element">
            <VerticalTimelineElement
                contentStyle={{
                    background:
                        theme === "light"
                            ? "#F3F4F6"
                            : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                    borderRight:
                        theme === "light"
                            ? "0.4rem solid #9CA3AF"
                            : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                    background:
                        theme === "light"
                            ? "white"
                            : "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem,",
                }}
                visible={inView}
            >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {item.description}
                </p>
            </VerticalTimelineElement>
        </div>
    );
}
