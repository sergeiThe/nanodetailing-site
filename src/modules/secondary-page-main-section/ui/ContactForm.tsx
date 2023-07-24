"use client";
import { Button } from "@/shared/ui/button/Button";
import { Form } from "@/shared/ui/form/Form";
import { Input } from "@/shared/ui/form/Input";
import { Label } from "@/shared/ui/form/Label";
import { Textarea } from "@/shared/ui/form/Textarea";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ContactForm = () => {
    const [formSent, setFormSent] = useState<boolean>(false);

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_te8odrw",
                "template_mapsgnw",
                e.target as HTMLFormElement,
                "xhZxJ0D-bhia6zE1u"
            )
            .then((res) => {
                setFormSent(true);
                setTimeout(() => {
                    // redirect
                    router.push("/");
                }, 1000);
            });
    };

    return (
        <div className="py-10">
            {!formSent && (
                <Form
                    variant="primary"
                    onSubmit={handleSubmit}
                    className="mx-auto"
                >
                    <Label htmlFor="navn" text="Navn" />
                    <Input id="navn" name="navn" type="text" required />

                    <Label htmlFor="epost" text="E-post" />
                    <Input id="epost" name="epost" type="email" required />

                    <Label htmlFor="telefon" text="Telefon" />
                    <Input id="telefon" name="telefon" type="text" />

                    <Label htmlFor="beskjed" text="Beskjed" />
                    <Textarea id="beskjed" />

                    <Button text="Send" variant="primary" />
                </Form>
            )}
            {formSent && <div className="">Takk!</div>}
        </div>
    );
};

export default ContactForm;
