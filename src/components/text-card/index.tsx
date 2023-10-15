interface  Props {
  title: string
  content: string
}
const TextCard = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 px basis-[400px] grow bg-white rounded-xl p-5">
      <h3>{props.title}</h3>
      <p className="py-2">
        {props.content}
      </p>
    </div>
  )
}

export default TextCard