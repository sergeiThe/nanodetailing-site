"use client";
import LinkExternal from "@/components/link-external/LinkExternal";
import {Button} from "@/shared/ui/button/Button";
import {Form} from "@/shared/ui/form/Form";
import {Input} from "@/shared/ui/form/Input";
import {Label} from "@/shared/ui/form/Label";
import {Textarea} from "@/shared/ui/form/Textarea";
import emailjs from "@emailjs/browser";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {BsFillTelephoneFill, BsMessenger} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";
import {BiCurrentLocation} from "react-icons/bi";

// TODO: Add contact information
const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_te8odrw",
        "template_mapsgnw",
        e.target as HTMLFormElement,
        "xhZxJ0D-bhia6zE1u"
      )
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((res) => {
        setIsError(true);
      });
  };

  return (
    <div className="py-10">
      {!isSuccess && (
        <Form variant="primary" onSubmit={handleSubmit} className="mx-auto">
          <p className="border-b-2 mb-5">Har du spørsmål eller ønsker du å bestille, ikke nøl med å ta kontakt med
            oss!</p>
          <Label htmlFor="navn" text="Navn"/>
          <Input id="navn" name="navn" type="text" required/>

          <Label htmlFor="epost" text="E-post"/>
          <Input id="epost" name="epost" type="email" required/>

          <Label htmlFor="telefon" text="Telefon"/>
          <Input id="telefon" name="telefon" type="text"/>

          <Label htmlFor="beskjed" text="Beskjed"/>
          <Textarea id="beskjed"/>

          <Button
            text={isLoading ? "Sender..." : "Send"}
            variant="primary"
            disabled={isLoading}
          />
          {isError && (
            <div className="py-5 flex gap-2">
              <p className="text-red-500">
                Beklager, men det har skjedd et eller annet med skemaet at det
                ikke fungerte som det skulle... Vennligst prøv å nå oss via
                messenger eller evt. telefon.
              </p>
              <span>
                <LinkExternal
                  className="text-red-500 hover:text-red-300 cursor-pointer text-5xl"
                  linkContent={<BsMessenger/>}
                  href="http://m.me/NanoDetailingAS"
                />
              </span>
            </div>
          )}
          <div className="flex gap-2 items-center pt-5">
            <span>
            <BiCurrentLocation/>
            </span>
            <div>
              Vestre Rosten 102, Trondheim 7075
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span>
            <BsFillTelephoneFill/>
            </span>
            <div>
              +47 405 90 005
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span>
            <AiFillMail/>
            </span>
            <div>
              post@nanodetailing.no
            </div>
          </div>
        </Form>
      )}
      {isSuccess && (
        <div className="text-center text-5xl py-24 text-red-700">
          Takk! Du hører fra oss snarest mulig
        </div>
      )}
    </div>
  );
};

export default ContactForm;
