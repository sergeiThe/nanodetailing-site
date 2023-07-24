import { useEffect, useState } from "react";

interface Props {
    delay?: number;
    value: string;
}

export const useDebounce = (props: Props) => {
    const [debouncedValue, setDebouncedValue] = useState<string>();

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                setDebouncedValue(props.value);
            },
            props.delay ? props.delay : 500
        );

        return () => {
            clearTimeout(timeout);
        };
    });

    return debouncedValue;
};
