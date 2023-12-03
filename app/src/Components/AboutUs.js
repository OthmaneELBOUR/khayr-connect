import { NavLink } from 'react-router-dom';

function AboutUs() {
    return (
        <section className='pt-14 pl-16'>
            <div>
                <h2 className='text-black text-2xl not-italic font-thin mb-4'>ABOUT US</h2>
                <article className='w-96'>
                    <h3 className='text-black text-4xl not-italic font-bold mb-6'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h3>
                    <div className='text-black text-xl not-italic font-light w-80'>
                        <p>
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </article>
            </div>
            <div className='w-40 ml-14 mt-14 mb-20'>
                <NavLink to='/login'>
                    <div className="text-base not-italic font-normal text-white border-black rounded-full border-2 shadow-xl  bg-blue-800 border-blue-800 px-6 hover:bg-blue-700 hover: border-blue-700 hover:shadow-blue-700">
                        Nous Rejoindre
                    </div>
                </NavLink>
            </div>
        </section>
    );
}

export default AboutUs;