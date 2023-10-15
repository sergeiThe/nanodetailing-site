"use client"
import Image from "next/image";
import {motion as m} from "framer-motion"

interface Props {
    title: string;
    image?: string;
    videoUrl?: string;
}

const SecondaryPageMainSection = (props: Props) => {
    return (
        <m.div
          initial={{opacity: 0}}
          animate={{opacity:1}}
          transition={{duration: 0.4, ease: "easeOut", delay: 0.2}}
          className="bg-opacity-0 h-80 pt-10 flex flex-col justify-center gap-10 items-center relative">
            {props.image && (
                <Image
                    src={`/images/${props.image}`}
                    fill
                    alt="bg"
                    className="-z-10 brightness-[20%]"
                    style={{ objectFit: "cover" }}
                    priority
                />
            )}
            {props.videoUrl && (
                <iframe
                    className="absolute top-0 left-0 -z-10"
                    width="100%"
                    height="100%"
                    src={props.videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
            <h1 className="text-center text-white text-5xl">{props.title}</h1>
        </m.div>
    );
};

export default SecondaryPageMainSection;
