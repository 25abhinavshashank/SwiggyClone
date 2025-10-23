function GenerateShimmer(){
    return (
        <>
        <div className="max-w-[280px] mb-2 rounded-2xl border-gray-100">
            <div className="w-70 h-45 rounded-xl bg-gray-300 "></div>
            <div className="h-6 w-[95%] mx-auto mt-3 bg-gray-300 "></div>
            <div className="h-6 w-[95%] mx-auto mt-3 bg-gray-300 "></div>
            <div className="h-6 w-[95%] mx-auto mt-3 bg-gray-300  "></div>
        </div>
        </>
    )
}


export default function Shimmer(){
    const ShimmerArr=Array(16).fill(null);

    return(
        <div>
       <div className="w-[80%] mx-auto mt-8 text-center bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
    <p className="text-gray-700 text-lg font-medium">
    If you’re unable to see the restaurants after <span className="font-semibold">3–4 seconds</span>, 
    please take temporary access from the proxy server.
  </p>
  <a
    href="https://cors-anywhere.herokuapp.com/corsdemo"
    target="_blank"
    // rel="noopener noreferrer"
    className="inline-block mt-3 text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors duration-200"
  >
    CLICK HERE
  </a>
  <p className="text-gray-700 text-lg font-medium">
    Then Reload the page.
  </p>
</div>
        <div className="flex flex-wrap w-[80%] mx-auto mt-10 gap-5">

           {ShimmerArr.map((ele,idx)=><GenerateShimmer key={idx}/>)}       

        

        </div>
        </div>
    )
}