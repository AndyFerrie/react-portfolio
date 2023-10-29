import React from "react";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Container } from "@react-email/container";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Body } from "@react-email/body";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

export default function ContactFormEmail({
    message,
    senderEmail,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You recieved the following message from the
                                contact form
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>
                                The sender&apos;s email is: {senderEmail}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
