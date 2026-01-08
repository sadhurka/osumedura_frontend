import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import search from "../assets/search.png";
import grocery from "../assets/grocery.png";
import delivery from "../assets/delivery.png";
import medicine from "../assets/medicine.png";
import lock from "../assets/lock.png";
import customer from "../assets/customer.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import call from "../assets/call.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import signup from "../assets/signup.png";
import next from "../assets/next.png";
import medical from "../assets/medical.png";
import hero from "../assets/hero.jpg";
import personal from "../assets/personal.png";


const MenuIcon = ({ isOpen }) => (
  <img src={isOpen ? close : menu} alt={isOpen ? "Close" : "Menu"} className="w-[35px] h-[35px]" />
);

const AboutUs = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

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
            <span className="text-[white] text-sm font-bold">0</span>
          </div>
        </div>
        <div className="w-full flex justify-center mt-3">
          <div className="relative w-full max-w-md">
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
                <input id="search-input" name="search" type=" text" placeholder="Search here" className="search1 px-[20px] py-2 w-[600px] h-[29px] rounded-full bg-white text-[#0EA5A3] border border-[#DFF2F6] focus:outline-none focus:ring-2 focus:ring-[#0EA5A3] text-sm shadow "/>
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
                        <img src={medical} alt="medical-sample" className="w-full h-56 object-contain img-responsive" />
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
                        <img src={hero} alt="wellness-sample" className="w-full h-56 object-contain img-responsive" />
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
                        <li><a href="#personal-care/skin-care" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Skin Care</a></li>
                        <li><a href="#personal-care/hair-care" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Hair Care</a></li>
                        <li><a href="#personal-care/oral-care" className="text-white text-lg font-extrabold uppercase hover:text-[#FFD6F6] no-underline">Oral Care</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="mega-panel-image w-2/3 pointer-events-none flex items-center justify-center">
                    <div className="w-full pr-6">
                      <div className="bg-white rounded shadow-lg overflow-hidden">
                        <img src={personal} alt="personal-sample" className="w-full h-56 object-contain img-responsive" />
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


      {/* Main Content - Figma Design */}
      <main className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex m-[20px] max-[1070px]:mx-4 max-[1070px]:mb-6 items-center gap-2 mb-8 text-[#00B4D8] font-medium">
            <Link to="/" className="text-[#1A3541] text-[13px] no-underline">HOME</Link>
            <img src={next} className="p-[5px] w-[17px]"/>
            <span className="text-[#1A3541] text-[13px]">ABOUT US</span>
          </div>
          
          <div className="mb-16 w-[800px] max-[1070px]:w-full max-[1070px]:px-4 mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl max-[1070px]:text-3xl max-[768px]:text-2xl mt-[60px] max-[1070px]:mt-[30px] font-bold text-[#003C51] text-[40px]">About Us</h1>
            <p className="text-gray-700 mt-[30px] text-[#0A5A5B] text-[18px] md:text-lg mb-4 text-justify font-semibold">
              At Osumedura Pharmacy, we are committed to providing trusted healthcare solutions with a personal touch. Since our founding, we’ve focused on offering high quality medicines, wellness products, and expert guidance to help our customers live healthier, happier lives.
            </p>
            <p className="text-gray-700 text-[18px] text-[#0A5A5B] md:text-lg mb-4 text-justify font-semibold">
              Our team of skilled pharmacists and friendly staff work tirelessly to ensure every prescription is filled with care and every customer receives the attention they deserve. Whether you’re looking for prescription medications, wellness essentials, vitamins, or holistic care, we’re here to help you make informed, confident choices for the health of those you love.
            </p>
            <p className="text-gray-700 text-[18px] text-[#0A5A5B] md:text-lg text-justify font-semibold">
              We believe in building long-term relationships with our customers by combining modern pharmaceutical practices with warm, compassionate service.
            </p>
          </div>

          <div className="my-[80px] max-[1070px]:my-[40px] w-full overflow-hidden">
                   <div className="w-full max-w-7xl mx-auto py-6 px-6 max-[1070px]:px-4 overflow-hidden">
                     <div className="h-[80px] max-[1070px]:h-auto max-[1070px]:flex-col max-[1070px]:gap-4 flex flex-wrap md:flex-nowrap items-center justify-center services-container">
                       <div className="flex items-center gap-[10px] max-[1070px]:justify-center max-[1070px]:w-full max-[1070px]:mb-2">
                         <img src={delivery} alt="Delivery" className="w-12 h-12 max-[1070px]:w-10 max-[1070px]:h-10" />
                         <p className="text-base max-[1070px]:text-sm font-extrabold text-[#023E8A] mr-[30px] max-[1070px]:mr-0 service-text">Home Delivery</p>
                       </div>
         
                       <div className="flex items-center gap-[10px] max-[1070px]:justify-center max-[1070px]:w-full max-[1070px]:mb-2">
                         <img src={lock} alt="Secure Payment" className="w-12 h-12 max-[1070px]:w-10 max-[1070px]:h-10" />
                         <p className="text-base max-[1070px]:text-sm font-extrabold text-[#023E8A] mr-[30px] max-[1070px]:mr-0">Pay Securely</p>
                       </div>
         
                       <div className="flex items-center gap-[10px] max-[1070px]:justify-center max-[1070px]:w-full max-[1070px]:mb-2">
                         <img src={medicine} alt="Wide Range Of Assortments" className="w-12 h-12 max-[1070px]:w-10 max-[1070px]:h-10" />
                         <p className="text-base max-[1070px]:text-sm font-extrabold text-[#023E8A] mr-[30px] max-[1070px]:mr-0">Wide Range Of Assortments</p>
                       </div>
         
                       <div className="flex items-center gap-[10px] max-[1070px]:justify-center max-[1070px]:w-full">
                         <img src={customer} alt="Customer Service Support" className="w-12 h-12 max-[1070px]:w-10 max-[1070px]:h-10" />
                         <p className="text-base max-[1070px]:text-sm font-extrabold text-[#023E8A] mr-[30px] max-[1070px]:mr-0">Customer Service Support</p>
                       </div>
                     </div>
                   </div>
                 </div>

     
            
              <section className="bg-gradient-to-r from-[#D5F4F4] to-[#E8F9F9] rounded-2xl p-6 max-[1070px]:p-4 flex max-[1070px]:flex-col items-center justify-center gap-8 max-[1070px]:gap-6 mb-12 w-full max-w-none mx-0 px-4 max-[1070px]:px-4 newsletter-section"> {/* Removed centered max-width to eliminate left gap */}
                        <div className="w-48 h-48 max-[1070px]:w-32 max-[1070px]:h-32 max-[1070px]:order-2 flex-shrink-0">
                          <img
                            src={signup}
                            alt="Signup"
                            className="w-full h-full object-contain"
                          />
                        </div>
              
                        <div className="text-center max-[1070px]:order-1">
                          <h3 className="text-[30px] max-[1070px]:text-xl font-bold text-gray-900 mb-6 max-[1070px]:mb-4">
                            Sign Up Today
                          </h3>
              
                          <form className="flex max-[1070px]:flex-col gap-3 max-[1070px]:gap-3 items-center justify-center">
                            <input
                              type="email"
                              placeholder="Enter your email address"
                              className="h-[35px] w-[240px] max-[1070px]:w-full px-[20px] mx-[20px] max-[1070px]:mx-0 px-6 py-3 border border-gray-300 rounded-full w-96 max-[1070px]:w-full border-none text-sm focus:ring-2 focus:ring-[#12A7A6] focus:border-[#12A7A6] focus:outline-none"
                            />
              
                          <button
                            className="text-[white] h-[35px] w-[100px] max-[1070px]:w-full bg-[#1A3541] hover:bg-[#FFBB5B] text-white font-semibold rounded-full transition border-none outline-none flex items-center justify-center"
                            type="submit"
                          >
                           Subscribe
                          </button>
                          </form>
                        </div>
                      </section>
        </div>
      </main>
           

    {/* Footer */}
    <footer className="w-full overflow-hidden mt-12">
      <div className="bg-[#00B4D8] p-[60px] max-[1070px]:p-8 text-white pt-16 max-[1070px]:pt-8 pb-12 max-[1070px]:pb-8">
        <div className="max-w-7xl mx-auto px-8 max-[1070px]:px-4">
          <div className="mb-12 max-[1070px]:mb-8 mx-[60px] max-[1070px]:mx-0 flex justify-center">
            <img src={logo} alt="OSUMEDURA PHARMACY" className="h-10 brightness-0 invert my-[30px] max-[1070px]:my-4" />
          </div>
          <div className="flex flex-wrap max-[1070px]:flex-col gap-8 max-[1070px]:gap-6">
            <div className="flex-1 min-w-[150px] max-[1070px]:min-w-full">
              <h4 className="text-sm font-bold tracking-widest uppercase text-[#003C51] "style={{letterSpacing: '0.15em'}}>NAVIGATION</h4>
              <ul className="list-none text-sm font-semibold opacity-90">
                <li className="mb-[5px]"><Link to="/" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Home</Link></li>
                <li className="mb-[5px]"><Link to="/about" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>About Us</Link></li>
                <li><Link to="/contact" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Contact Us</Link></li>
              </ul>
            </div>
            <div className="flex-1 min-w-[150px] max-[1070px]:min-w-full">
              <h4 className="text-sm font-bold mb-6 max-[1070px]:mb-4 tracking-widest uppercase text-[#003C51]"  style={{letterSpacing: '0.15em'}}>INFORMATION</h4>
              <ul className="list-none text-sm font-semibold opacity-90">
                <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Privacy Policy</a></li>
                <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Loyalty Policy</a></li>
                <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Personal Care</a></li>
                <li><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="flex-1 min-w-[150px] max-[1070px]:min-w-full">
              <h4 className="text-sm font-bold tracking-widest uppercase text-[#003C51]"  style={{letterSpacing: '0.15em'}}>CUSTOMER SERVICE</h4>
              <ul className="list-none text-sm font-semibold opacity-90">
                <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors tracking-widest" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>FAQ</a></li>
              </ul>
            </div>
            <div className="flex justify-center max-[1070px]:justify-center md:justify-start max-[1070px]:w-full">
              <div className="bg-[#FCFBF4] w-[180px] max-[1070px]:w-full max-[1070px]:max-w-[300px] pt-[40px] max-[1070px]:pt-6 h-[230px] max-[1070px]:h-auto max-[1070px]:pb-4 overflow-hidden flex flex-col shadow-lg rounded-[12px]">
                <div className="p-4 flex flex-col items-start pl-[20px] max-[1070px]:items-center max-[1070px]:text-center">
                  <span className="text-[13px] pb-[5px] text-gray-500 font-medium mb-2">Call our hotline</span>
                  <span className="text-[#28A5A3] font-bold text-sm">+94 756 721 2372</span>
                  <span className="text-[#28A5A3] font-bold text-sm">+94 756 721 2372</span>
                </div>
                <img 
                  src={call} 
                  alt="Customer Support" 
                  className="w-full pt-[42px] max-[1070px]:pt-4 h-24 max-[1070px]:h-16 object-cover object-top "
                />
              </div>
            </div>
            <div className="relative flex flex-col max-[1070px]:items-center md:items-start px-[40px] max-[1070px]:px-0 pt-[30px] max-[1070px]:pt-6 max-[1070px]:w-full max-[1070px]:text-center">
              <div className="flex space-x-[5px] mb-4 relative max-[1070px]:justify-center">
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
              <div className="max-[1070px]:text-center md:text-left relative">
                <p className="text-[white] text-sm font-medium text-gray-700">Contact Us</p>
                <p className="text-[white] text-sm text-gray-500">No 139/A, Dharmapala Mawatha, <br/>Colombo 07, Sri Lanka </p>
                <a href="mailto:onlinesds@sunshigs.lk" className="text-[white] text-sm text-[#28A5A3] hover:underline">onlinesds@sunshigs.lk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A3541] text-[white] py-6 max-[1070px]:py-4">
        <div className="max-w-7xl mx-auto px-[300px] max-[1070px]:px-4 flex max-[1070px]:flex-col max-[1070px]:gap-2 max-[1070px]:text-center md:flex-row justify-between items-center text-[13px] max-[1070px]:text-xs font-bold">
          <p>© 2025. All Rights Reserved</p>
          <p>Concept and Design by jfkjoso</p>
        </div>
      </div>
    </footer>

  </div>
  );
}

export default AboutUs;