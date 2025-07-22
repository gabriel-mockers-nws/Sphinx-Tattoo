import proptypes from 'prop-types'; 
import { Link } from 'react-router-dom';

export default function Button({ 
    href, 
    children, 
    className = '', 
    isexternal = false, 
    ...props}) {
    const basestyle = `bg-[#426778] hover:bg-[#bd893a] text-white, font-bold rounded-lg px-4 py-4 text-center transition-colors duration-300 ease-in-out ${className}`;

    if(href) {
        if(isexternal) {
            return (
                <button
                href={href}
                className={basestyle}
                {...props}>
                    {children}
                </button>
            );
        } else {
            return (
                <button>
                    <Link 
                    to={href}
                    className={basestyle}
                    {...props}>
                        {children}
                    </Link>
                </button>
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
    href: proptypes.string,
    children: proptypes.node.isRequired,
    className: proptypes.string,
    isexternal: proptypes.bool,
};
