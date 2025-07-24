import PropTypes from 'prop-types';

export default function Article ({
    titre,
    reverse = false,
    images,
    children

}) {
    return (
        <>
            <div className= {`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-15 my-10 mx-4 md:mx-35`}>
                <div className='w-full md:w-[40%] flex justify-center my-20 overflow-visible'>
                    <img 
                    src={images}
                    alt={titre}
                    className='h-[30vh] w-[60vh] object-cover rounded-lg shadow-lg ' />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-center md:text-left font-Marcellus">{titre}</h3>
                    <div className='text-base leading-7 mb-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

Article.propTypes = {
    titre: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    images: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}