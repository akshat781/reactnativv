
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
const Option = ({Icon,title}) => {
    return (
        <div className="  flex flex-row ml-5 justify-center items-center mt-3  lg:max-w-2xl md:text-sm lg:text-base  text-xs ">
        {Icon}
           <p>{title}</p>
           
        </div>
         
    )
}

export default Option
