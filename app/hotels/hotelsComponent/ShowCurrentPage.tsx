import Link from "next/link"

function ShowCurrentPage({country}) {
    return (
        <div className="flex flex-col space-y-2 w-full">
        <div className="flex items-start justify-start space-x-2 w-full pb-6">
           <div className="flex items-center justify-center space-x-4 font-semibold"> <Link href="/" className="text-blue-600 border-b border-white  hover:border-blue-800">Home</Link> <div className="text-slate-600"><ion-icon name="caret-forward-outline"></ion-icon></div></div>
           <div className="flex items-center justify-center space-x-4 font-semibold"> <Link href="/hotels" className="text-blue-600 border-b border-white  hover:border-blue-800">Hotels</Link> <div className="text-slate-600"><ion-icon name="caret-forward-outline"></ion-icon></div></div>
            <div className="text-blue-600  font-semibold">{country}</div>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-between w-full space-y-3 sm:space-y-0 sm:space-x-8 font-base  text-slate-900">
       <div className="flex sm:flex-col sm:space-x-0 space-x-3 lg:flex-row lg:sm:space-x-3">
     <div className="text-sm text-slate-700"><ion-icon name="search-outline"></ion-icon></div>
      <div className="text-sm text-slate-700">Find the best {country} hotel for your dates, search by price or preferences</div>
      </div>
      <div className="flex sm:flex-col sm:space-x-0 space-x-3 lg:flex-row  lg:sm:space-x-3">
      <div className="text-sm text-slate-700"><ion-icon name="pricetag-outline"></ion-icon></div>
    <div className="text-sm text-slate-700">Compare hotel deals across hundreds of providers, all in one place</div>
       </div>
          <div className="flex sm:flex-col sm:space-x-0 space-x-3 lg:flex-row lg:sm:space-x-3 ">
      <div className="text-sm text-slate-700"><ion-icon name="bed-outline"></ion-icon></div>
      <div className="text-sm text-slate-700">Look out for {country} hotels with free cancellation or excellent ratings</div>
        </div>
        </div>
        </div>
    )
}

export default ShowCurrentPage
