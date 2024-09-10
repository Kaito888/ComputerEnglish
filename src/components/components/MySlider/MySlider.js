import useIDGenerator from "../../../modules/components/useIDGenerator";

export default function MySlider({ type = 'range', text, min, max, onInput, value }) {
    const id = useIDGenerator('slider');
    return (
        <>
            <input
                type={type}
                min={min}
                max={max}
                id={id}
                defaultValue={value}
                onInput={(event) => onInput(event.target.value)}
            />
            <label htmlFor={id}>{text}</label>
        </>
    )
}