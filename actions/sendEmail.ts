"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "andy.ferrie@hotmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            text: message as string,
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
};
