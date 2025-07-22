import { Link } from "react-router-dom";

export const Header = () => {
return (
    <>
        <nav className="pt-4 flex items-center justify-between mb-8 border-b-2 border-gray-300 shadow-lg">
            <div className="ml-4 mb-2 flex ">
                <img src="./img/logo.png" alt="logo" className="max-h-25 mx-3 my-2 "/>
                <h1 className="text-5xl font-bold mx-3 my-7 font-Marcellus">Sphinx Tattoo</h1>
            </div>
            <div className="space-x-6">
                <Link to='/' className="p-3 hover:font-black transition-colors duration-300 ease-in-out font-bold"> Home </Link>
                <Link to='/rituals' className="p-3 hover:font-black transition-colors duration-300 ease-in-out font-bold"> Rituals </Link>
                <Link to='/gallery' className="p-3 hover:font-black transition-colors duration-300 ease-in-out font-bold"> Gallery </Link>
                <Link to='/faq' className="p-3 hover:font-black transition-colors duration-300 ease-in-out font-bold"> FAQ </Link>
                <Link to='/aftercare' className="p-3 hover:font-black transition-colors duration-300 ease-in-out font-bold"> Aftercare </Link>
                <Link to='/contact' className="p-3 hover:font-black transition-colors duration-300 ease-in-out font-bold"> Contact </Link>
            </div>
        </nav>
    </>
);

};

export default Header;