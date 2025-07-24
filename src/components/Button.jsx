import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

export default function Button({ 
    href, 
    children, 
    className = '', 
    isExternal = false, 
    ...props}) {
    const basestyle = `bg-[#426778] hover:bg-[#bd893a] text-white hover:text-black font-bold rounded-lg px-8 py-8 text-center transition-colors duration-300 ease-in-out ${className}`;

    if(href) {
        if(isExternal) {
            return (
                <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className={basestyle}
                {...props}>
                    {children}
                </a>
            );
        } else {
            return (
                    <Link 
                    to={href}
                    className={basestyle}
                    {...props}>
                        {children}
                    </Link>
            );
        };
    };
    return (
        <button
        className={basestyle}
        {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isExternal: PropTypes.bool,
};
