"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:example@email.com">
                    example@email.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col"
                action={async (formData) => {
                    await sendEmail(formData);
                }}
            >
                <input
                    className="h-14 rounded-lg borderBlack px-4"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                ></textarea>
                <SubmitBtn />
            </form>
        </motion.section>
    );
}
