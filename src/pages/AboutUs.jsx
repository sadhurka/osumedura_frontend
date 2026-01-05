import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import call from "../assets/call.png";

const AboutUs = () => (
  <div className="font-sans min-h-screen w-full max-w-[100vw] m-0 p-0 overflow-x-hidden overflow-y-auto box-border bg-gray-50" style={{fontFamily: "'Roboto', sans-serif"}}>
    {/* Navigation */}
    <header className="bg-[#00B4D8] shadow-sm desktop-main-nav desktop-header">
      <div className="flex justify-center items-center h-[32px]">
        <nav className="flex items-center gap-8 text-sm font-medium text-white ml-[250px]">
          <a href="/" className="mr-[20px] navtop px-3 py-1 rounded hover:bg-[#0EA5A3]/30 transition hover:text-[#FFBB5B]">Home</a>
          <a href="/about" className="mr-[20px] navtop px-3 py-1 rounded hover:bg-[#0EA5A3]/30 transition hover:text-[#FFBB5B]">About Us</a>
          <a href="/contact" className="mr-[20px] navtop px-3 py-1 rounded hover:bg-[#0EA5A3]/30 transition hover:text-[#FFBB5B]">Contact Us</a>
        </nav>
      </div>
    </header>

    {/* Main Content */}
    <main className="flex flex-col items-center justify-center py-12 px-4 w-full">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-gray-700 mb-4 text-center">
          Welcome to our pharmacy! We are dedicated to providing the best healthcare products and services to our community. Our team of experienced pharmacists and staff are here to help you with all your medical needs.
        </p>
        <p className="text-gray-700 mb-4 text-center">
          We believe in personalized care and strive to ensure every customer receives the attention and support they deserve. Thank you for trusting us with your health and wellness.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          <div className="flex-1 bg-blue-50 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
            <p className="text-gray-600">To provide quality healthcare products and exceptional service to our customers.</p>
          </div>
          <div className="flex-1 bg-blue-50 rounded-lg p-4 text-center">
            <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
            <p className="text-gray-600">To be the most trusted pharmacy in the community, promoting health and wellness for all.</p>
          </div>
        </div>
      </div>
    </main>

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

export default AboutUs;
