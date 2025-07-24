import PropTypes from 'prop-types';
import Button from './Button';

export default function Hero({ title, }) {
    return (
        <>
            <div className="hero min-h-[60vh] bg-[url(./assets/img/hero-bg.png)] bg-cover bg-no-repeat bg-center mb-15 p-25 w-full h-full text-white border-b-2 flex items-center justify-between">
                <div className='pl-2'>
                    <h1 className="text-6xl font-bold mb-4 font-Cormorant">{title}</h1>
                </div>

                <div className='pr-2'>
                    <Button>Walk-ins jeden Samstag</Button>
                </div>
            </div>
        </>
    );
}

Hero.propTypes = {
    title: PropTypes.node.isRequired,
};
