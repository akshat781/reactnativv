import {useRouter} from "next/router"
import {useRef} from "react"
import Option from "./Option"
import {
    BellIcon,
    ChatIcon,
    CheveronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    XIcon,
    MicrophoneIcon,
    SearchIcon
  } from "@heroicons/react/solid";
const Header = () => {
    const router =useRouter()
    const inputRef= useRef()
    const search=(e)=>{
e.preventDefault();
const term = inputRef.current.value;

router.push(`/search?term=${term}`)
    }
    return (
        <div className="flex items-center  py-3">
            <div className="flex items-center space-x-2 ">
                <img onClick={()=>router.push('/')}className="h-8 md:h-10 ml-5 mr-3 cursor-pointer" src="https://www.freepnglogos.com/uploads/google-logo-png-hd-11.png" />
                </div>
            <div className="flex items-center ml-10 space-x-2 px-3 py-2 rounded-lg shadow-md sm:flex-grow  mr-5 border md:max-w-lg lg:max-w-xl">
                <input  ref={inputRef} onClick={search}  className="outline-none flex-grow" type="text" />
<XIcon onClick={(e)=>inputRef.current.value=""} className="h-5 cursor-pointer text-gray-300" />


<MicrophoneIcon className="h-5 hidden text-blue-400"/>

<SearchIcon onClick={search}  className="h-5  cursor-pointer text-blue-500"/> 

            </div>
            
            <div className="ml-auto mr-5">
                <img  className="h-10 w-10 rounded-full "src="https://s.yimg.com/fz/api/res/1.2/uOhm8o0J01vBXJnhB0wu0g--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTMzMA--/https://s.yimg.com/zb/imgv1/3ca0a65d-b3fb-31d5-b14d-5de7609bb580/t_500x300 "/>
            </div>



        </div>
      
    )
}

export default Header
