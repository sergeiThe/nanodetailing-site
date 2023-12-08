import {Button} from "@/shared/ui/button/Button";


interface Props {
  title: string
  content?: string
  discount: number
  imgSrc?: string
  buttonCb: () => void
}

// TODO: Add img
const OfferCard = (props: Props) => {
  return <div className="bg-gradient-to-bl from-slate-900 to-slate-700 p-5 rounded-2xl relative basis-1 grow items-center justify-center text-center flex flex-col shadow-lg shadow-red-500">
    <span className="bg-red-700 text-white absolute -right-3 top-3 rotate-45 w-20 rounded-full font-bold px-2 whitespace-nowrap text-center">{`${props.discount} %`}</span>
    <h3 className="text-white text-2xl">{props.title}</h3>
    <p className="text-white">{props.content}</p>
    <Button variant={"primary"} text={"Se mer info"} onClick={props.buttonCb}/>
  </div>


}

export default OfferCard