import {Button} from "@/shared/ui/button/Button";


interface Props {
  title: string
  content?: string
  discount?: number
  list?: string[]
  imgSrc?: string
  buttonCb: () => void
  warning?: string
}

// TODO: Add img
const OfferCard = (props: Props) => {
  return <div className="bg-gradient-to-bl from-slate-900 to-slate-700 p-5 rounded-2xl relative basis-1 grow items-center justify-center text-center flex flex-col shadow-lg shadow-green-400">
    {props.discount && 
    <span className="bg-green-600 text-white text-xl absolute -right-3 top-3 rotate-45 w-20 rounded-full font-bold px-2 whitespace-nowrap text-center">{`${props.discount} %`}</span>
    }
    <h3 className="text-white text-2xl">{props.title}</h3>
    {props.list?.map(item => {
      return <span className="font-bold text-green-400 text-xl my-1" key={item}>{item}</span>
    })}
    <p className="text-white">{props.content}</p>
    <Button variant={"primary"} text={`Gå til ${props.title.toLowerCase()}`} onClick={props.buttonCb}/>
    {
      props.warning && <span className={"text-yellow-500 font-bold pt-2"}>{props.warning}</span>
    }
  </div>


}

export default OfferCard
