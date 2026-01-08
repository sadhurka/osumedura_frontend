import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import call from "../assets/call.png";
import grocery from "../assets/grocery.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import signup from "../assets/signup.png";
import next from "../assets/next.png";
import email from "../assets/email.png";
import locationIcon from "../assets/location1.png";
import phone1 from "../assets/phone1.png";

const Contact = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState(null);

  const toggleMobileNav = () => setMobileNavOpen((s) => !s);

  const MenuIcon = ({ isOpen }) => (
    <img src={isOpen ? close : menu} alt={isOpen ? "Close" : "Menu"} className="w-[28px] h-[28px]" />
  );
 
  return (
    <div className="font-sans min-h-screen w-full max-w-[100vw] m-0 p-0 overflow-x-hidden overflow-y-auto box-border bg-gray-50" style={{fontFamily: "'Roboto', sans-serif"}}>
    {/* Mobile header: only visible below 1070px */}
    <header className="mobile-header bg-[#00B4D8] px-4 pt-3 pb-3 w-full shadow-md md:hidden block">
      <div className="flex items-center justify-between w-full mb-4">
        <button
          type="button"
          className="p-2 bg-transparent border-none text-white"
          aria-label="Toggle navigation menu"
          onClick={toggleMobileNav}
        >
          <MenuIcon isOpen={mobileNavOpen} />
        </button>
        <div className="flex-1 flex justify-center">
          <img src={logo} alt="OSUMEDURA PHARMACY" className="h-36 md:h-9 logo1" style={{objectFit:'contain', maxHeight: '150px'}} />
        </div>
        <div className="flex items-center gap-2">
          <img src={grocery} alt="Cart" className="w-[35px] h-[35px] mobile-cart" />
          <span className="text-white text-sm font-bold">0</span>
        </div>
      </div>
      <div className="w-full flex justify-center mt-3">
        <div className="relative w-full">
          <input id="search-input-mobile" name="search" type="text" placeholder="Search here" className="search1 px-5 py-2 w-full rounded-full bg-white text-[#0EA5A3] border border-[#DFF2F6] focus:outline-none focus:ring-2 focus:ring-[#0EA5A3] text-base shadow" />
        </div>
      </div>
    </header>

    <header className="bg-[#00B4D8] text-[white] text-xs h-[27px] desktop-header hidden md:block">
      <div className="w-full py-2 flex flex-row-reverse items-center gap-6" style={{ color: '#0EA5A3', fontWeight:'700'}}>
        <div className="flex items-center gap-6 text-white" style={{padding: '4px 8px',backgroundColor:'white', color: '#00B4D8 ', fontWeight:'700'}}>
          <span><img src={phone} alt="Phone" className="inline-block w-4 h-4 mr-2 m-auto mb-[-2px]" /> +94 76 733 3377  +94 76 733 3377</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="navtop hover:text-[#FFBB5B]">My Account</a>
          <span className="pr-[5px] pl-[5px]" style={{color: 'white'}}>|</span>
          <a href="#" className="navtop hover:text-[#FFBB5B]">Location </a>
          <img src={location} alt="Location" className="pr-[8px] pl-[8px] inline-block w-2 h-2"/>
        </div>
      </div>
    </header>

    {/* Logo Bar with Search */}
    <header className="bg-[#00B4D8]/70 text-white shadow-sm desktop-header hidden md:block">
      <div className="w-full py-4 flex justify-between items-center gap-6 logo-search-row">
        <a href="#"><img src={logo} alt="OSUMEDURA PHARMACY" className="h-10 mx-[60px] logo" /></a>

        <div className="flex-1 max-w-2xl text-center">
          <div className="relative">
              <input id="search-input" name="search" type=" text" placeholder="Search here" className="search1 px-[20px] py-2 w-[600px] h-[29px] rounded-full bg-white text-[#0EA5A3] border border-[#DFF2F6] focus:outline-none focus:ring-2 focus:ring-[#0EA5A3] text-sm shadow " style={{paddingRight: '50px'}}/>
          </div>
        </div>

        <div className="flex items-center gap-4 mx-[40px]">
         
           <div className="flex items-center gap-4">
              <a href="#" className="navtop hover:text-[#FFBB5B]">Sign In </a>
              <span className="pr-[5px] pl-[5px]" style={{color: 'white'}}>|</span>
              <img src={grocery} alt="grocery" className="pr-[8px] pl-[8px] inline-block w-[33px] h-[20px]"/>
              <a href="#" className="navtop">0 </a>
              <button
                type="button"
                className="ml-2 p-1 rounded border border-white mobile-hamburger"
                aria-label="Toggle navigation menu"
                onClick={toggleMobileNav}
              >
                <MenuIcon />
              </button>
           </div>
        </div>
      </div>
    </header>

    {/* Navigation Links */}
    <header className="bg-[#00B4D8] shadow-sm desktop-main-nav desktop-header hidden md:block">
      <div className="flex justify-center items-center h-[32px]">
        <nav className="flex items-center gap-8 text-sm font-medium text-white ml-[250px]">
          <div className="relative group ml-[-150px]">
            <a href="#" className="px-3 py-1 rounded hover:text-[#FFBB5B] transition flex items-center navtop group">Medical Devices
              <span className="ml-1 block">
                <span className="block group-hover:hidden">▾</span>
                <span className="hidden group-hover:block">▴</span>
              </span>
            </a>
              <div className="mega-panel absolute left-[-280px] top-[26px] h-[65vh] w-[80vw] min-h-[320px] max-w-[1200px] max-h-[500px] bg-[#00B4D8] text-white shadow-2xl border-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-row p-12 gap-12 items-stretch pointer-events-none group-hover:pointer-events-auto">
                <div className="mega-panel-nav w-1/3 pointer-events-auto flex">
                  <nav className="w-full flex flex-col justify-center">
                    <ul className="space-y-6">
                      <li><a href="#medical-devices/first-aid" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">First Aid</a></li>
                      <li><a href="#medical-devices/health-devices" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Health Devices</a></li>
                      <li><a href="#medical-devices/supports-braces" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Supports &amp; Braces</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="mega-panel-image w-2/3 pointer-events-none flex items-center justify-center">
                  <div className="w-full pr-6">
                    <div className="bg-white rounded shadow-lg overflow-hidden">
                      <img src={logo} alt="medical-sample" className="w-full h-56 object-contain img-responsive" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="relative group">
            <a href="#" className="mx-[10px] navtop px-3 py-1 rounded hover:text-[#FFBB5B] transition flex items-center group">Wellness
              <span className="ml-1 block">
                <span className="block group-hover:hidden">▾</span>
                <span className="hidden group-hover:block">▴</span>
              </span>
            </a>
              <div className="mega-panel absolute left-[-380px] top-[26px] h-[65vh] w-[80vw] min-h-[320px] max-w-[1200px] max-h-[500px] bg-[#00B4D8] text-white shadow-2xl border-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-row p-12 gap-12 items-stretch pointer-events-none group-hover:pointer-events-auto">
                <div className="mega-panel-nav w-1/3 pointer-events-auto flex">
                  <nav className="w-full flex flex-col justify-center">
                    <ul className="space-y-6">
                      <li><a href="#wellness/vitamins" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Vitamins</a></li>
                      <li><a href="#wellness/supplements" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Supplements</a></li>
                      <li><a href="#wellness/immunity" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Immunity</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="mega-panel-image w-2/3 pointer-events-none flex items-center justify-center">
                  <div className="w-full pr-6">
                    <div className="bg-white rounded shadow-lg overflow-hidden">
                      <img src={logo} alt="wellness-sample" className="w-full h-56 object-contain img-responsive" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="relative group">
            <a href="#" className="mr-[10px] navtop px-3 py-1 rounded hover:text-[#FFBB5B] transition flex items-center group">Personal Care
              <span className="ml-1 block">
                <span className="block group-hover:hidden">▾</span>
                <span className="hidden group-hover:block">▴</span>
              </span>
            </a>
              <div className="mega-panel absolute left-[-480px] top-[26px] h-[65vh] w-[80vw] min-h-[320px] max-w-[1200px] max-h-[500px] bg-[#00B4D8] text-white shadow-2xl border-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-row p-12 gap-12 items-stretch pointer-events-none group-hover:pointer-events-auto">
                <div className="mega-panel-nav w-1/3 pointer-events-auto flex">
                  <nav className="w-full flex flex-col justify-center">
                    <ul className="space-y-6">
                      <li><a href="#personal-care/nourishment" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Nourishment</a></li>
                      <li><a href="#personal-care/accessories" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Accessories</a></li>
                      <li><a href="#personal-care/skin-care" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Skin Care</a></li>
                      <li><a href="#personal-care/hand-foot" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Hand &amp; Foot Care</a></li>
                      <li><a href="#personal-care/body-care" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Body Care</a></li>
                      <li><a href="#personal-care/womens" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Womens Personal Care</a></li>
                      <li><a href="#personal-care/oral-care" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Oral Care</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="mega-panel-image w-2/3 pointer-events-none flex items-center justify-center">
                  <div className="w-full pr-6">
                    <div className="bg-white rounded shadow-lg overflow-hidden">
                      <img src={logo} alt="personal-sample" className="w-full h-56 object-contain img-responsive" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <Link to="/about" className="mr-[20px] navtop px-3 py-1 rounded hover:bg-[#0EA5A3]/30 transition hover:text-[#FFBB5B]">About Us</Link>
          <Link to="/contact" className="mr-[20px] navtop px-3 py-1 rounded hover:bg-[#0EA5A3]/30 transition hover:text-[#FFBB5B]">Contact Us</Link>
          <a href="#" className="navtop flex items-center justify-center w-[180px] h-[32px] bg-[#1A3541] px-4 rounded hover:bg-[#FFBB5B] transition">Prescription Upload</a>
        </nav>
      </div>
    </header>

    {/* Mobile navigation panel */}
    {mobileNavOpen && (
      <div className="md:hidden bg-[#00B4D8] text-white px-6 py-4 space-y-3">
        <nav className="text-sm font-medium space-y-3">
          <div>
            <p className="font-semibold">Medical Devices</p>
            <ul className="pl-4 text-xs space-y-1">
              <li>First Aid</li>
              <li>Health Devices</li>
              <li>Supports & Braces</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Wellness</p>
            <ul className="pl-4 text-xs space-y-1">
              <li>Vitamins</li>
              <li>Supplements</li>
              <li>Immunity</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Personal Care</p>
            <ul className="pl-4 text-xs space-y-1">
              <li>Skin Care</li>
              <li>Hair Care</li>
              <li>Oral Care</li>
            </ul>
          </div>
          <Link to="/about" className="block navtop text-xs">About Us</Link>
          <Link to="/contact" className="block navtop text-xs">Contact Us</Link>
          <a href="#" className="block navtop text-xs mt-1 py-1 text-center bg-[#1A3541] rounded">Prescription Upload</a>
        </nav>
      </div>
    )}

    {/* Main Content */}
    <main className="w-full">
      <div className="flex m-[20px] max-[1070px]:mx-4 max-[1070px]:mb-6 items-center gap-2 mb-8 text-[#00B4D8] font-medium">
            <Link to="/" className="text-[#1A3541] text-[13px] no-underline">HOME</Link>
            <img src={next} className="p-[5px] w-[17px]"/>
            <span className="text-[#1A3541] text-[13px]">CONTACT</span>
      </div>
     
 

    </main>

    {/* Pharmacy Contact Form Section */}
    <div className="contact-page">
      <section className="contact-section">
        <div className="contact-left p-12 font-['Roboto',sans-serif]">
          <h2 className="text-[#1A3541] font-semibold text-[44px] mb-4 font-['Roboto',sans-serif] leading-tight">Get in touch</h2>
          <p className="text-gray-600 text-[13px] mb-8 leading-[1.7] pr-4 font-['Roboto',sans-serif] font-semibold">
            We're here to help! Reach out to Osumedura Pharmacy for all your healthcare needs. Our dedicated team is ready to assist you with prescriptions, wellness advice, and quality pharmaceutical products.
          </p>
          <ul className="list-none p-0 mb-10 space-y-4">
            <li className="flex items-center text-gray-700 text-[13px] font-['Roboto',sans-serif] font-semibold">
              <span className="flex  items-center justify-center flex-shrink-0 mr-5 w-10 h-10">
                <img src={locationIcon} alt="Location" width={24} style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(47%) saturate(2105%) hue-rotate(200deg) brightness(93%) contrast(91%)' }} />
              </span>
              <span className="leading-[1.8] font-['Roboto',sans-serif] font-semibold">
                No 139/A, Dharmapala Mawatha, Colombo 07, Sri Lanka
              </span>
            </li>
            <li className="flex items-center text-gray-700 text-[13px] font-['Roboto',sans-serif] font-semibold">
              <span className="flex my-[10px] items-center justify-center flex-shrink-0 mr-5 w-10 h-10">
                <img src={phone1} alt="Phone" width={20} style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(47%) saturate(2105%) hue-rotate(200deg) brightness(93%) contrast(91%)' }} />
              </span>
              <span className="leading-[1.8] font-['Roboto',sans-serif] font-semibold">
                +94 76 733 3377<br />+94 76 733 3377
              </span>
            </li>
           
            <li className="flex items-center text-gray-700 text-[13px] font-['Roboto',sans-serif] font-semibold">
              <span className="flex items-center justify-center flex-shrink-0 mr-5 w-10 h-10">
                <img src={email} alt="Email" width={24} style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(47%) saturate(2105%) hue-rotate(200deg) brightness(93%) contrast(91%)' }} />
              </span>
              <span className="leading-[1.8] font-['Roboto',sans-serif] font-semibold">
                info@osumedurapharmacy.com
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <h4 className="text-[#1A3541] font-bold uppercase text-[11px] mb-4 tracking-[0.15em] font-['Roboto',sans-serif]">Follow us</h4>
            <div className="social-icons flex gap-3">
              <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition" aria-label="Facebook">
                <img src={facebook} alt="Facebook" className="w-5" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition" aria-label="Twitter">
                <img src={twitter} alt="Twitter" className="w-5" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition" aria-label="Instagram">
                <img src={instagram} alt="Instagram" className="w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right p-12 font-['Roboto',sans-serif]">
          <h2 className="text-[#1A3541] font-semibold text-[44px] mb-2 font-['Roboto',sans-serif] leading-tight">Your Details</h2>
          <p className="text-gray-600 text-[13px] mb-8 leading-[1.7] font-['Roboto',sans-serif] font-semibold">
            Let Us Know How to get back to you
          </p>
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block font-bold text-[#1A3541] uppercase text-[10px] mb-2 tracking-[0.1em] font-['Roboto',sans-serif]">NAME :</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Full Name" 
                required 
                className="w-full bg-[#5BCBCC] border-none rounded text-white placeholder-white/90 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all px-5 py-3 text-[14px] font-['Roboto',sans-serif] font-normal" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-bold text-[#1A3541] uppercase text-[10px] mb-2 tracking-[0.1em] font-['Roboto',sans-serif]">EMAIL ADDRESS :</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email" 
                required 
                className="w-full bg-[#5BCBCC] border-none rounded text-white placeholder-white/90 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all px-5 py-3 text-[14px] font-['Roboto',sans-serif] font-normal" 
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-bold text-[#1A3541] uppercase text-[10px] mb-2 tracking-[0.1em] font-['Roboto',sans-serif]">SUBJECT :</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject" 
                required 
                className="w-full bg-[#5BCBCC] border-none rounded text-white placeholder-white/90 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all px-5 py-3 text-[14px] font-['Roboto',sans-serif] font-normal" 
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-bold text-[#1A3541] uppercase text-[10px] mb-2 tracking-[0.1em] font-['Roboto',sans-serif]">COMMENT / QUESTION :</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                placeholder="Question" 
                required 
                className="w-full bg-[#5BCBCC] border-none rounded text-white placeholder-white/90 resize-y focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all px-5 py-3 text-[14px] min-h-[120px] font-['Roboto',sans-serif] font-normal"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-[#1A3541] text-white border-none rounded font-bold uppercase cursor-pointer self-start hover:bg-[#FFBB5B] transition-all shadow-md py-3 px-8 text-[12px] mt-2 font-['Roboto',sans-serif] tracking-[0.1em]"
            >
              SEND
            </button>
          </form>
        </div>
      </section>
    </div>

      <section className="bg-gradient-to-r from-[#D5F4F4] to-[#E8F9F9] rounded-2xl p-6 flex items-center justify-center gap-8 mb-12 max-w-7xl mx-auto px-6 newsletter-section"> {/* Added max-w-7xl and px-6 for centering/padding */}
               <div className="w-48 h-48 flex-shrink-0">
                 <img
                   src={signup}
                   alt="Signup"
                   className="w-full h-full object-contain"
                 />
               </div>
     
               <div className="text-center">
                 <h3 className="text-[30px] font-bold text-gray-900 mb-6">
                   Sign Up Today
                 </h3>
     
                 <form className="flex gap-3 items-center justify-center">
                   <input
                     type="email"
                     placeholder="Enter your email address"
                     className="h-[35px] w-[240px] px-[20px] mx-[20px] px-6 py-3 border border-gray-300 rounded-full w-96 border-none text-sm focus:ring-2 focus:ring-[#12A7A6] focus:border-[#12A7A6] focus:outline-none"
                   />
     
                 <button
                   className="text-[white] h-[35px] w-[100px] bg-[#1A3541] hover:bg-[#FFBB5B] text-white font-semibold rounded-full transition border-none outline-none flex items-center justify-center"
                   type="submit"
                 >
                  Subscribe
                 </button>
                 </form>
               </div>
             </section>
    {/* Footer */}
    <footer className="w-full overflow-hidden mt-12">
      <div className="bg-[#00B4D8] p-[60px] text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12 mx-[60px] flex justify-center">
            <img src={logo} alt="OSUMEDURA PHARMACY" className="h-10 brightness-0 invert my-[30px]" />
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="flex-1 min-w-[150px]">
              <h4 className="text-sm font-bold tracking-widest uppercase text-[#003C51] "style={{letterSpacing: '0.15em'}}>NAVIGATION</h4>
              <ul className="list-none text-sm font-semibold opacity-90">
                <li className="mb-[5px]"><Link to="/" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Home</Link></li>
                <li className="mb-[5px]"><Link to="/about" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>About Us</Link></li>
                <li><Link to="/contact" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Contact Us</Link></li>
              </ul>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h4 className="text-sm font-bold mb-6 tracking-widest uppercase text-[#003C51]"  style={{letterSpacing: '0.15em'}}>INFORMATION</h4>
              <ul className="list-none text-sm font-semibold opacity-90">
                <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Privacy Policy</a></li>
                <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Loyalty Policy</a></li>
                <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Personal Care</a></li>
                <li><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h4 className="text-sm font-bold tracking-widest uppercase text-[#003C51]"  style={{letterSpacing: '0.15em'}}>CUSTOMER SERVICE</h4>
              <ul className="list-none text-sm font-semibold opacity-90">
                <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors tracking-widest" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>FAQ</a></li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="bg-[#FCFBF4] w-[180px] pt-[40px] h-[230px] overflow-hidden flex flex-col shadow-lg rounded-[12px]">
                <div className="p-4 flex flex-col items-start pl-[20px]">
                  <span className="text-[13px] pb-[5px] text-gray-500 font-medium mb-2">Call our hotline</span>
                  <span className="text-[#28A5A3] font-bold text-sm">+94 756 721 2372</span>
                  <span className="text-[#28A5A3] font-bold text-sm">+94 756 721 2372</span>
                </div>
                <img 
                  src={call} 
                  alt="Customer Support" 
                  className="w-full pt-[42px] h-24 object-cover object-top "
                />
              </div>
            </div>
            <div className="relative flex flex-col md:items-start px-[40px] pt-[30px]">
              <div className="flex space-x-[5px] mb-4 relative">
                <a href="#" className="bg-white rounded-full p-2 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition">
                  <img src={facebook} alt="Facebook" className="w-5" />
                </a>
                <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition">
                  <img src={twitter} alt="Twitter" className="w-5" />
                </a>
                <a href="#" className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition">
                  <img src={instagram} alt="Instagram" className="w-5" />
                </a>
              </div>
              <div className=" md:text-left relative">
                <p className="text-[white] text-sm font-medium text-gray-700">Contact Us</p>
                <p className="text-[white] text-sm text-gray-500">No 139/A, Dharmapala Mawatha, <br/>Colombo 07, Sri Lanka </p>
                <a href="mailto:onlinesds@sunshigs.lk" className="text-[white] text-sm text-[#28A5A3] hover:underline">onlinesds@sunshigs.lk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A3541] text-[white] py-6">
        <div className="max-w-7xl mx-auto px-[300px] flex md:flex-row justify-between items-center text-[13px] font-bold">
          <p>© 2025. All Rights Reserved</p>
          <p>Concept and Design by jfkjoso</p>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default Contact;
