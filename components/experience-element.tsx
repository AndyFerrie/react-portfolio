import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

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

    return (
        <div ref={ref} className="vertical-timeline-element">
            <VerticalTimelineElement
                contentStyle={{
                    background: "#F3F4F6",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                    borderRight: "0.4rem solid #9CA3AF",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                    background: "white",
                    fontSize: "1.5rem,",
                }}
                visible={inView}
            >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
                    {item.description}
                </p>
            </VerticalTimelineElement>
        </div>
    );
}
