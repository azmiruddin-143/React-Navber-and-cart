
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
const Navber = () => {
    const [active, setactive] = useState(false)
    console.log(active);
    const isactive = () => {
        setactive(!active)
    }



    const routes = [
        { id: 1, path: '/', name: 'Home', },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' },
    ];


    return (
        <div className={`flex justify-between px-6 lg:px-20 my-4 lg:items-center ${!active ? "items-center" : ""} `}>

            <div>
                <h1 className="lg:text-3xl font-bold text-xl">Azmir Uddin</h1>
            </div>
            <div className={`${!active ? "bg-[#000000]  lg:bg-transparent lg:text-black text-white py-2 px-2" : ""} hidden lg:flex `}>

                <div onClick={isactive}>
                    {
                        active ? <CiMenuFries className="lg:hidden" size={25} /> : <RiCloseLargeLine className="lg:hidden " color="red" size={25} />
                    }

                </div>

                <div className={`lg:flex flex-col  ${active ? "hidden" : ""} lg:flex-row gap-14 py-2 px-8`} >

                    {
                        routes.map(page => <li className="list-none pb-4 lg:pb-0" key={page.id}><a href={page.path}>{page.name}</a></li>)
                    }
                </div>
            </div>

            <div className="hidden lg:block"> 
                <button className="bg-[black] text-white py-1 px-6 rounded-md">Sign Up</button>
            </div>

            <div className={`${active ? "bg-[#000000] absolute right-0  lg:bg-transparent  lg:text-black text-white py-2  px-2" : ""}  lg:hidden`}>

                <div onClick={isactive}>
                    {
                        !active ? <CiMenuFries className="lg:hidden" size={25} /> : <RiCloseLargeLine className="lg:hidden" color="red" size={25} />
                    }

                </div>

                <div className={`lg:flex flex-col  ${!active ? "hidden " : ""}  lg:flex-row gap-14 py-2 px-8`} >

                    {
                        routes.map(page => <li className="list-none pb-4 lg:pb-0" key={page.id}><a href={page.path}>{page.name}</a></li>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;