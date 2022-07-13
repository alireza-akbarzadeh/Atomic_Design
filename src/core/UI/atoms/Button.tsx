
interface Props {
    label?: string
}
const Button = <PROPS extends Props, >({label, ...rest}: PROPS): JSX.Element => {
    return (
        <button {...rest}>{label}</button>
    )
}
export default Button;