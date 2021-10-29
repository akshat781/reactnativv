const ResultData = ({result}) => {
    return (
        <div className="max-w-3xl lg:ml-[120px] ml-10 ">
            <div className="flex space-x-2">
            <p> About {result.searchInformation?.formattedTotalResults}</p>
            <p> result({result.searchInformation?.formattedSearchTime} seconds)</p>
            </div>
        
            {
                result.items?.map((res)=>(
                    <div key={res.link}>
<div className="flex flex-col mt-2 ">
    <a className="text-sm font-semibold line-clamp-1 md:line-clamp-1" href={res.link}>

        {res.formattedUrl}
    </a>
    <a className="text-blue-600 text-lg font-semibold" href={res.link}>
        {res.title}
    </a>
    <p className=" mb-3 line-clamp-2 font-semibold">{res.snippet}</p>
</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ResultData
