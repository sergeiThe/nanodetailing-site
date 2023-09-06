interface Props {
  id: string;
}

export const Textarea = (props: Props) => {
  return (
    <textarea
      rows={4}
      className="px-2 text-black focus:outline-none bg-white border-[2px] rounded-lg pt-2"
      name={props.id}
      id={props.id}
      placeholder="Hva lurer du på?"
    ></textarea>
  );
};
