import Image from "next/image";

interface Props {
  imgPath: string
}
const Review = (props: Props) => {
  return (
    <div className="relative basis-[150px] md:basis-[200px] basis-[100px] shrink grow">
      <Image
        alt="reviews"
        fill
        style={{objectFit: "contain"}}
        src={props.imgPath}
        quality={75}
        priority
        className=""
      />
    </div>
  )
}

export default Review