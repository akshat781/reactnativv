import Header from "../components/Header"
import Option from "../components/Option"
import {API_KEY,CONTEXT_KEY} from "../Key"
import Response from "../Response"
import {
    BellIcon,
    ChatIcon,
    CheveronDownIcon,
    FolderIcon,
    PlayIcon,
DotsVerticalIcon,
    BookmarkIcon,
    NewspaperIcon,
    SearchIcon
  } from "@heroicons/react/outline";
  import ResultData from "../components/ResultData";
const Search = ({result}) => {
    console.log(result);
    return (
        <div >
            <head>
                <title>Search result</title>
            </head>
            <Header />
            <div className="flex  items-center  lg:ml-[90px]  py-2 ">
                
                <Option Icon={<SearchIcon className="h-5 text-blue-400"/>} title="All"/>
            <Option Icon={<FolderIcon className="h-5"/>} title="News"/>
            <Option Icon={<PlayIcon className="h-5"/>} title="Videos"/>
            <Option Icon={<NewspaperIcon className="h-5"/>} title="Images"/>
            <Option Icon={<BookmarkIcon className="h-5"/>} title="Books"/>
            <Option Icon={<DotsVerticalIcon className="h-5"/>} title="More"/>    
            
     
           
         
            
            </div>
            <hr className=""></hr>
            <ResultData result={result} />
            
        </div>
    )
}

export default Search;


export async function getServerSideProps(context){
    const dummydata= true;
    const data = dummydata?Response:await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).
    then((res)=>res.json());

    return{
props:{
    result:data,
}
    }
}
