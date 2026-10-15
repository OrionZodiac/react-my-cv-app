import React from 'react'

export default function Home({ pname, colorLinkNavBar }) {
  return (
    <>
      {/* {Menu} */}
      <div className="w-full flex justify-between items-center px-20 pt-5">
        {/* {logo webname on left} */}
        <div>
          <span className="text-[#00ff90] text-3xl font-bold">{'>_'}</span>
          <span className="text-yellow-50 text-3xl font-bold">ApisiT SAU</span>
        </div>
        {/* {menu on right} */}
        <div className="flex gap-5">
            <a href="/" className = "text-white" style={{color: pname == 'h' ? colorLinkNavBar : '#FFFFFF'}}>Home</a>
            <a href="/about" className="text-white" style={{color: pname == 'a' ? colorLinkNavBar : '#FFFFFF'}}>About</a>
            <a href="/contact" className="text-white" style={{color: pname == 'c' ? colorLinkNavBar : '#FFFFFF'}}>Contact</a>
            <a href="/portfolio" className="text-white border-2 border-white px-4 py-1 rounded-2xl" style={{color: pname == 'p' ? colorLinkNavBar : '#FFFFFF'}}>Let'Talk</a>
        </div>
      </div>
    </>
  )
}
