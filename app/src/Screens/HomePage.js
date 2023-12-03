import NavBar from '../Components/NavBar';
import AboutUs from '../Components/AboutUs';
import Ellipse from '../Components/Ellipse';

function HomePage() {
    return (
        <div className='bg-gray-300'>
            <div className='bg-white '>
                <NavBar />
            </div>
            <div className='flex'>
                <div className='w-6/12'>
                    <AboutUs />
                </div>
                <div className='w-6/12'>
                    <Ellipse />
                </div>
            </div>
        </div>

    );

}

export default HomePage;