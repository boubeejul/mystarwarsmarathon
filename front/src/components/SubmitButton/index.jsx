import { SubmitButton } from "./style"

export function Button(props) {
    return (
        <SubmitButton tabIndex={0} type="submit" role="button">{props.text}</SubmitButton>
    )
}