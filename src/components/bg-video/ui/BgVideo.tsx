"use client"
import { ReactNode } from "react";
import {motion as m} from "framer-motion"
interface Props {
    content: ReactNode;
    url: string;
}

const BgVideo = (props: Props) => {
    return (
        <m.div
          initial={{opacity: 0}}
          animate={{opacity:1}}
          transition={{duration: 1, ease: "easeOut", delay: 0.2}}
          className="overflow-hidden sm:h-[400px] h-[300px] flex items-center">
            <div
                className="relative overflow-hidden sm:min-w-full min-w-[200%] -translate-x-1/2 left-1/2  
            mx-auto min-h-full sm:pt-[57%] pt-[70%] bg-black bg-opacity-80"
            >
                <iframe
                    className="absolute top-0 left-0 -z-20 w-full h-full brightness-[30%]"
                    width="100%"
                    height="100%"
                    src={props.url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
                    {props.content}
                </div>
            </div>
        </m.div>
    );
};

export default BgVideo;
