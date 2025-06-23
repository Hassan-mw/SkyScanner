import React from 'react'

const page = () => {
  return (
<div className="min-h-[200vh] bg-slate-900">
  {/* Simulate full-page content */}
  <div className="h-20 bg-slate-800 text-white flex items-center justify-center">Navbar</div>

  <div className="grid grid-cols-8 min-h-[500px]">
    {/* Left */}
    <div className="bg-green-400 col-span-2">
      Left Sidebar
    </div>

    {/* Middle (has its own scroll) */}
    <div className="bg-blue-400 col-span-4 h-[500px] overflow-y-auto">
      <div className="p-4">
        {[...Array(100)].map((_, i) => (
          <p key={i}>Line {i + 1}</p>
        ))}
      </div>
    </div>

    {/* Right */}
    <div className="bg-red-400 col-span-2">
      Right Sidebar
    </div>
  </div>

  <div className="h-96 bg-slate-800 text-white flex items-center justify-center">
    Footer / More content
  </div>
</div>


  )
}

export default page