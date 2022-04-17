import { useState } from 'react';
import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import closeMenu from '../images/icon-close-menu.svg';
import downArrow from '../images/icon-arrow-down.svg';
import upArrow from '../images/icon-arrow-up.svg';
import todoIcon from '../images/icon-todo.svg';
import calendarIcon from '../images/icon-calendar.svg';
import remindersIcon from '../images/icon-reminders.svg';
import planningIcon from '../images/icon-planning.svg';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(true);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);


  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  const handleFeatureClick = () => {
    setShowFeatures(!showFeatures)
  }

  const handleCompanyClick = () => {
    setShowCompany(!showCompany)
  }

  return (
    <nav className="font-epilogue text-lg text-mediumGray px-3 py-4 md:text-base flex justify-between md:items-center md:px-16 md:py-4">
      <div className="md:flex md:justify-between md:items-center md:space-x-12">
        {/* Logo Start */}
        <div className='md:cursor-pointer'>
          <img src={ logo } alt="Snap Logo" />
        </div>
        {/* Logo End */}
        {/* Nav Links Start */}
        <div className={`fixed pl-6 md:pl-0 md:relative md:h-auto md:w-auto md:flex md:items-baseline bg-almostWhite md:bg-white space-y-4 md:space-y-0 md:space-x-10 md:right-0
          h-screen pt-20 md:pt-0 w-[60vw] ${showMenu ? "-right-full" : "right-0"} transition-all duration-500 ease-in-out top-0 z-10 md:z-auto
        `}>
        <div className="">
        {/* Features Start */}
          <div className="flex items-center md:pl-5 md:relative md:cursor-pointer md:hover:text-almostBlack" onClick={handleFeatureClick}>
            Features
            <img src={showFeatures ? upArrow : downArrow} alt="down-arrow" className='pl-3 pb-0.5' />
          </div>
          <ul className={`text-mediumGray pl-5 space-y-3 md:absolute md:shadow-2xl md:p-4 md:rounded-lg  md:left-[-20px] md:top-[30px] md:bg-almostWhite ${showFeatures ? "md:block" : "md:hidden"} ${showFeatures ? "h-36" : "h-0" } md:h-auto transition-[height] duration-500 ease-in-out overflow-hidden md:my-0`}>
            <li className="flex items-center">
              <img className="pr-2" src={todoIcon} alt= "Todo-Icon"/>
              Todo List
            </li>
            <li className="flex items-center">
              <img className="pr-2" src={calendarIcon} alt= "Calendar-Icon"/>
              Calendar
            </li>
            <li className="flex items-center">
              <img className="pr-3" src={remindersIcon} alt= "Reminder-Icon"/>
              Reminders
            </li>
            <li className="flex items-center">
              <img className="pr-2" src={planningIcon} alt= "Planning-Icon"/>
              Planning
            </li>
          </ul>
        </div>
        {/* Features End */}
        {/* Company Start */}
        <div className="md:cursor-pointer">
          <div>
            <div className="text-mediumGray flex items-center md:cursor-pointer md:hover:text-almostBlack" onClick={handleCompanyClick}>
              Company
              <img className='pl-3' src={showCompany ? upArrow :  downArrow} alt="down-arrow" />
            </div>
            <ul className={`text-mediumGray space-y-4 pl-5 md:absolute md:space-y-2 md:shadow-2xl md:rounded-lg md:bg-almostWhite md:p-4 md:left-[150px] md:top-[40px] ${showCompany ? "md:block" : "md:hidden"} md:h-auto transition-[height] duration-500 ease-in-out overflow-hidden md:my-0 ${showCompany ? "h-[120px]" : "h-0"}`}>
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        {/* Company End */}
        <div className="md:cursor-pointer md:hover:text-almostBlack">Career</div>
          <div className="md:cursor-pointer md:hover:text-almostBlack">About</div>
        </div>
        <div className="md:hidden absolute top-4 right-4" onClick={handleClick}>
          <img src={menu} alt="" />
        </div>
        <div className={`md:hidden fixed top-4 z-10 transition-all duration-500 ease-in-out ${showMenu ? "-right-full" : "right-4"}`} onClick={handleClick}>
          <img src={closeMenu} alt="" />
        </div>
      </div>
      {/* Nav Links End */}
      {/* Login And Register Start */}
      <div className="hidden md:flex md:items-center">
        <div className="md:mr-6 md:cursor-pointer md:hover:text-almostBlack">Login</div>
        <div className="border-2 border-mediumGray w-fit rounded-lg py-2 px-3 md:cursor-pointer md:hover:text-almostBlack md:hover:border-almostBlack">
          Register
        </div>
      </div>
      {/* Login And Register End */}
      
    </nav>
  )
}

export default Navbar;