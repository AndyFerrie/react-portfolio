"use client";

import { experiencesData } from "@/lib/data";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./experience-element";
import SectionHeading from "./section-heading";

export default function Experience() {
    return (
        <section className="scroll-mt-28 mb-28 sm:mb-40" id="experience">
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor="#e4e4e7">
                {experiencesData.map((item, index) => {
                    return <TimelineElement key={index} item={item} />;
                })}
            </VerticalTimeline>
        </section>
    );
}
