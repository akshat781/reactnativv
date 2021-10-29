import Head from 'next/head'
import Middle from "../components/Middle";
import Footer from "../components/Footer";
import {
  BellIcon,
  ChatIcon,
  CheveronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="flex flex-row justify-between items-center ml-5 mr-5 px-5 py-5 bg-white "> 
  <div className=" flex space-x-4 ">
  <p>About</p>
  <p>Store</p>
  </div>
  <div  className="flex space-x-4 items-center">
  <p>Gmail</p>
  <p>Images</p>
  <ViewGridIcon className="h-5  "/>
  <img  className="h-10 w-9 rounded-full"  src="https://s.yimg.com/fz/api/res/1.2/uOhm8o0J01vBXJnhB0wu0g--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTMzMA--/https://s.yimg.com/zb/imgv1/3ca0a65d-b3fb-31d5-b14d-5de7609bb580/t_500x300 "/>
  
  </div>

  </div>

    <Middle />
   
    

    </div>
     
    
  )
}
