import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../react-dragon-news-auth/src/assets/qZone1.png'
import qZone2 from '../../../react-dragon-news-auth/src/assets/qZone2.png'
import qZone3 from '../../../react-dragon-news-auth/src/assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            
            <div className='p-4 mb-6'>
            <h2 className="text-2xl">Login with </h2>
            <button className='btn btn-outline w-full'>
                <FaGoogle></FaGoogle>
                Google
            </button>
            <button className='btn my-2 btn-outline w-full'>
                <FaGithub></FaGithub>
                Github
            </button>
            </div>
            
            <div className='p-4 mb-6 '>
            <h2 className="text-2xl">Find Us On </h2>
            <a className='p-2 border rounded-t-lg flex items-center gap-2' href=""> <FaFacebook></FaFacebook> Facebook</a>
            <a className='p-2 border-x  flex items-center gap-2' href=""> <FaTwitter></FaTwitter> Twitter</a>
            <a className='p-2 border rounded-b-lg flex items-center gap-2' href=""> <FaInstagram></FaInstagram> Instagram</a>
            </div>


            <div className='p-4 mb-6 '>
            <h2 className="text-2xl">Q Zone </h2>
           <img  src= {qZone1} alt="" />
           <img className='my-5' src= {qZone2} alt="" />
           <img src= {qZone3} alt="" />
            </div>





        </div>
    );
};

export default RightSideNav;