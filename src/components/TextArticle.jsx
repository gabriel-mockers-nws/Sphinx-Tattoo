import PropTypes from 'prop-types';

export default function TextArticle ({ 
    title, 
    children,
}) 
    {
    return (
        <div className="mx-15 my-10">
            <h4 className="text-2xl font-semibold mb-5 font-Marcellus  ">{title}</h4>
            <div className="text-base leading-7 mb-4 ml-3 mt-5">{children}</div>
        </div>
    );
};

TextArticle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}