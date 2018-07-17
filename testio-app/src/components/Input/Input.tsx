import * as React from 'react';

interface IProps {
    value: string;
    onChange: (value: string) => any;
}

class FormInput extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    public render() {
        const {
            value
        } = this.props;

        return (
            <input
                onChange={this.onChange}
                value={value}
            />
        );
    }

    private onChange(event: any) {
        this.props.onChange(event.target.value);
    }
}

export default FormInput;
