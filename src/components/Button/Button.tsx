interface ButtonProps {
    id: string;
    label: string;
    handleClick: any;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    icon?: any;
    styles?: object;
}

const Button = (props: ButtonProps) => {

    const { id, label, type, handleClick, disabled, className, icon, loading, styles } = props;
    const classes = `${className ? className : ''}`

    return (
        <>
            <button id={id} type={type} className={classes} onClick={handleClick} disabled={disabled || loading} style={styles}>

                {icon
                    ? <img src={icon} alt="Button icon" className="button__icon" />
                    : ""
                }

                <span className="button__lable">{loading ? 'Loading...' : label}</span>

            </button>
        </>
    )
};

export default Button;