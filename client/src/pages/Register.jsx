import { useState, useContext } from 'react';
import googleicon from '../assets/google.svg'
import facebookicon from '../assets/facebook.svg'
import githubicon from '../assets/github.svg'
import { RiHome4Line } from "react-icons/ri";
import { RiHome4Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { MyContext } from '../Context';
import axios from 'axios';
//import registervid from '../assets/videos/vid1.mp4'

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { LoginUser } = useContext(MyContext);

  const registerQuery = async (name, email, password) => {

    try {
      const response = await axios.post('http://localhost:3001/api/auth/register',
        { name, email, password });
      const result = await response.data;
      LoginUser(result.user, result.token)
    } catch (error) {
      console.log(error.response.data.message)
    }

  }

  const handleRegister = (e) => {
    registerQuery(name, email, password);
    e.preventDefault();
  }
  return (
    <div className='bg-[#F5F5F5]'>
      <div className='flex '>
        <div className='max-w-[730px]'>
          <video className=' hidden md:flex h-screen  object-cover' src={""} autoPlay loop muted />
        </div>

        <div className=' ml-[40px] w-full h-screen  flex-col  items-center p-4'>
          <Link to='/' ><h1 className=' ml-[55px] md:ml-0 group flex hover:underline text-[#2E2E2E] font-bold text-[18px] mt-2 mb-[150px]'>
            <span className=' flex mr-1 '>
              <RiHome4Line className=' flex group-hover:hidden ' size={26} />
              <RiHome4Fill className=' hidden group-hover:flex' size={26} />
            </span> Home</h1></Link>
          <form className='  items-center md:items-start flex flex-col max-w-[600px] w-full mt-[-5rem] '>
            <div className=' pb-8  w-[350px]' >
              <p className='  flex justify-center  text-[26px] font-bold   text-[#2E2E2E]'>Sign Up to Carsale</p>
            </div>
            <div className='  w-[350px] flex justify-center  py-2'>
              <div className=' mx-4 py-2 px-2 shadow-lg  hover:scale-110 duration-200 rounded-lg cursor-pointer '>
                <img src={googleicon} style={{ width: '40px', height: '40px' }} alt="" />
              </div>
              <div className=' mx-4 py-2 px-2 shadow-lg  hover:scale-110 duration-200 rounded-lg cursor-pointer '>
                <img src={facebookicon} style={{ width: '40px', height: '40px' }} alt="" />
              </div>
              <div className=' mx-4 py-2 px-2 shadow-lg  hover:scale-110 duration-200 rounded-lg cursor-pointer '>
                <img src={githubicon} style={{ width: '40px', height: '40px' }} alt="" />
              </div>
            </div>
            <div class="flex items-center justify-center w-[350px] my-7 ">
              <div class="w-full h-px bg-[#2E2E2E]"></div>
              <p className=' font-medium px-3 text-[#2E2E2E] text-nowrap pb-[3px]'>Sign Up via Email</p>
              <div class="w-full h-px bg-[#2E2E2E]"></div>
            </div>
            <div className=' mb-3 flex flex-col'>
              <label className=' ml-1 font-medium' htmlFor='name'>Name</label>
              <input onChange={(e) => setName(e.target.value)}
                className=' w-[350px] border-2 rounded-lg border-[#2E2E2E]  p-2 bg-white' type="text" placeholder='Name' name='name' />
            </div>
            <div className=' mb-3 flex flex-col'>
              <label className=' ml-1 font-medium' htmlFor='name'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} className=' w-[350px] border-2 rounded-lg border-[#2E2E2E]  p-2 bg-white' type="email" name="email" placeholder='Enter Email...' />
            </div>
            <div className=' mb-3 flex flex-col'>
              <label className=' ml-1 font-medium' htmlFor="password">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} className=' w-[350px] border-2 rounded-lg border-[#2E2E2E]  p-2 bg-white' type="password" name="password" placeholder='Enter password' />

              <button onClick={(e) => handleRegister(e)}
                className=' text-[17px]  flex justify-center border-2
               border-[#F7C213] bg-[#F7C213] w-[350px]
                rounded-md font-medium mt-9  py-[8px] text-[#2E2E2E]
                 hover:bg-[#F5F5F5] hover:border-2 hover:border-[#2E2E2E]'>
                Register
              </button>
              <p className=' ml-1 text-sm py-1'>Already have an account?, then <Link to="/login" className=' underline'>Login</Link> </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register