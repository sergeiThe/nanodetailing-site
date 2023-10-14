import {ReactNode} from "react";

interface Props {
  icon: ReactNode
  title: string
  content: string
}
const Card = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center py-10 px-5 gap-5 rounded-xl bg-yellow-100 shadow-xl basis-[300px] text-center relative grow">
      <div className="absolute bg-yellow-300 w-full h-full opacity-20 -top-2 -right-2 rounded-xl -z-10">
      </div>
      <span className="text-5xl">{props.icon}</span>
      <h3 className="text-2xl">{props.title}</h3>
      <p className="">{props.content}</p>
    </div>
  )
}

export default Card