interface InputProps {
    id: string;
    type: "text" | "password";
    handleChange: any;
    label?: string;
    value?: any;
    disabled?: boolean;
    placeholder?: string;
    error?: string;
    className?: string;
    style?: object;
    tabIndex?: number;
    autocomplete?: string;
    icon?: any;
}

const Input = (props: InputProps) => {

    const { id,
        label,
        value,
        disabled,
        icon,
        type,
        placeholder,
        autocomplete,
        error,
        handleChange,
        className,
        style,
        tabIndex,
    } = props;

    const changeHandler = (e: any) => {
        handleChange(e.target.value);
    }

    return (
        <>
            {label && <label htmlFor={id} className="input__lable">{label}</label>}
            <div className={error ? `${className} error` : className}>

                {icon && <img src={icon} alt="Input icon" className="input__icon" />}

                <input
                    id={id}
                    type={type}
                    value={value}
                    disabled={disabled}
                    onChange={changeHandler}
                    className="input__field"
                    placeholder={placeholder}
                    style={style}
                    autoComplete={autocomplete}
                    spellCheck="false"
                    autoCorrect="off"
                    tabIndex={tabIndex}
                />
            </div>
        </>
    )
};

export default Input;