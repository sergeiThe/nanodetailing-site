interface Props {
    text: string;
    id: string;
}

export const Checkbox = (props: Props) => {
    return (
        <div className="flex gap-1 items-center">
            <input type="checkbox" id={props.id} />
            <label htmlFor={props.id} className="mb-[2px] select-none">
                {props.text}
            </label>
        </div>
    );
};
