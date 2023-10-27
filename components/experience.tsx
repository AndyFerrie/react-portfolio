"use client";

import { experiencesData } from "@/lib/data";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./experience-element";

export default function Experience() {
    return (
        <section
            className="my-20 flex w-full scroll-mt-28 flex-col items-center justify-center gap-10"
            id="experience"
        >
            <VerticalTimeline lineColor="#e4e4e7">
                {experiencesData.map((item, index) => {
                    return <TimelineElement key={index} item={item} />;
                })}
            </VerticalTimeline>
        </section>
    );
}
