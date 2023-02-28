import './button.styles.scss';

export const Button = ({ children, buttonType, ...otherProps }) => {
    
    const BUTTON_CLASSES = {
        'google': 'google-sign-in',
        'inverted': 'inverted', 
    };
    
    return (
        <button className={`button-container ${BUTTON_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}
