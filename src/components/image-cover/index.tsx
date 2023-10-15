import Image from "next/image";

interface Props {
  imgPath: string
  alt: string
  height: string
}
const ImageCover = (props: Props) => {
  const style = `relative w-full ${props.height}`
  return (
    <div className={style}>
      <Image
        alt={props.alt}
        fill
        style={{objectFit: "cover"}}
        src={props.imgPath}
        quality={75}
        priority
      />
    </div>
  )
}

export default ImageCover