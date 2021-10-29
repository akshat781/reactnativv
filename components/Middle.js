import {useRef} from "react"
import {useRouter} from "next/router"
import {
    BellIcon,
    ChatIcon,
    CheveronDownIcon,
    SearchIcon,
    MicrophoneIcon,
    UserGroupIcon,
    ViewGridIcon,
  } from "@heroicons/react/solid";
  import search from "../pages/search"
const Middle = () => {
const searchInputRef=  useRef(null)
const router =useRouter()
const search=(e)=>{
e.preventDefault();
const term = searchInputRef.current.value;
if(!term) return;
router.push(`/search?term=${term}`)
}
    return (
        
        <div div className="max-w-md mx-auto ">
           
            <img className="h-30 w-30 px-10  mt-20" src="https://www.freepnglogos.com/uploads/google-logo-png-hd-11.png"/>
<div className="flex ml-5 mr-5 px-3 py-2 rounded-lg  justify-between border border-l-0 border-r-0 mt-5 hover:shadow-md  ">
    <SearchIcon className="h-5 text-gray-500"/>
    <input ref={searchInputRef}  onClick={search}className="flex-grow outline-none ml-3" type="text" />
    <MicrophoneIcon className="h-5"/>
    
</div>

    
        <div className="flex flex-col justify-center items-center space-y-4 mt-5 sm:flex-row  sm:space-x-4 ">
        <button  onClick={search} className="bg-gray-100 h-10 w-36 px-5 sm:mt-4 cursor-pointer ">Google Search</button>
        <button className="bg-gray-100 h-10 px-5 w-40 cursor-pointer">I'm feeling lucky</button>
    </div>
    </div>
    )
}

export default Middle

