import React from 'react';
import Icon from '../elements/Icon';

const FormField = ({
    id,
    fieldData: {
        validation,
        valid,
        errorMessage,
        icon,
        element,
        config,
        value
    },
    change
}) => {
    const renderError = () => {
        let error;

        if (validation && !valid && errorMessage) {
            error = <div className="form__error">{errorMessage}</div>;
        } else {
            error = null;
        }
        return error;
    };

    const renderIcon = () =>
        icon ? <Icon name={id} className="form__icon" /> : null;

    const renderTemplate = () => {
        let fieldTemplate;

        switch (element) {
            case 'input':
                fieldTemplate = (
                    <div className="form__block">
                        <div className="form__input-container">
                            {renderIcon()}
                            <input
                                id={id}
                                className="form__input"
                                {...config}
                                value={value}
                                onBlur={e => change({ e, id, blur: true })}
                                onChange={e => change({ e, id })}
                            />
                        </div>
                        {renderError()}
                    </div>
                );
                break;
            default:
                fieldTemplate = null;
        }
        return fieldTemplate;
    };

    return renderTemplate();
};

export default FormField;
