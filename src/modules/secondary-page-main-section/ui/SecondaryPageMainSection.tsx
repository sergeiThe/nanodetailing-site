import Image from "next/image";

interface Props {
    title: string;
    image: string;
}

const SecondaryPageMainSection = (props: Props) => {
    return (
        <div className=" bg-opacity-0 h-80 pt-10 flex flex-col justify-center gap-10 items-center relative">
            <Image
                src={`/images/${props.image}`}
                fill
                alt="bg"
                className="-z-10 brightness-[20%]"
                style={{ objectFit: "cover" }}
            />
            <h1 className="text-center text-white text-5xl">{props.title}</h1>
        </div>
    );
};

export default SecondaryPageMainSection;
