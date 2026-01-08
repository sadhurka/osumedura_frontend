import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpg";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import search from "../assets/search.png";
import grocery from "../assets/grocery.png";
import customer from "../assets/customer.png";
import delivery from "../assets/delivery.png";
import medicine from "../assets/medicine.png";
import lock from "../assets/lock.png";
import medical from "../assets/medical.png";
import personal from "../assets/personal.png";
import baby from "../assets/baby.png";
import signup from "../assets/signup.png";
import call from "../assets/call.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
// ---------- MOCK DATA AND ASSETS ----------
// MOCK DATA for Products and Articles (kept for completeness)
const MenuIcon = ({ isOpen }) => (
  <img src={isOpen ? close : menu} alt={isOpen ? "Close" : "Menu"} className="w-[35px] h-[35px]" />
);



// ---------- ARTICLE CARD COMPONENT ----------
const ArticleCard = ({ article }) => {
  const handleReadMore = () => {
    window.open(article.blogUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      key={article.id}
      className="mb-[30px] flex flex-col bg-white rounded-2xl shadow-[0_4px_24px_0_rgba(14,165,163,0.10)] hover:shadow-[0_8px_32px_0_rgba(14,165,163,0.18)] transition-all duration-300 flex-1 max-w-[350px] min-w-[250px] w-full overflow-hidden border border-[#e8f7f7] article-card-responsive"
      style={{ height: 410, background: '#fff' }}
    >
      <div className="flex items-center justify-center bg-white rounded-xl mx-[20px] mt-[20px]" style={{ height: 130, overflow: 'hidden', background: '#fff' }}>
        <img src={article.image} alt={article.title} className="object-contain w-auto transition-transform duration-300 hover:scale-105" style={{ maxHeight: '100%', maxWidth: '100%'}} />
      </div>

      <div className="text-[20px] flex-1 flex flex-col justify-between bg-white px-4 mx-[20px] mb-[20px]" style={{background:'#fff'}}>
        <div>
          <h3 className="text-base font-semibold text-[#2c4544] text-center leading-tight mb-[15px] px-3 py-2 min-h-[40px] flex items-center justify-center line-clamp-2">
            {article.title}
          </h3>
          
          {/* Category and Date */}
          <div className="flex items-center justify-center mb-[15px] px-3 py-1 gap-1">
            <span className="text-[#0ea5a3] font-semibold text-[12px] leading-none">
              {article.category}
            </span>
            <span className="mx-[10px] text-gray-400 text-[12px] leading-none">
              {article.date}
            </span>
          </div>

          <div className="flex justify-center items-center mb-[15px] px-3 py-2">
            <span className="bg-[#e8f7f7] text-[#00B4D8] font-semibold text-base px-5 py-2 rounded-full shadow-sm">
              {article.readTime} min read
            </span>
          </div>
        </div>

        <button
          onClick={handleReadMore}
          className="w-[160px] h-[35px] mx-auto text-base font-semibold border-2 border-[#00B4D8] text-[#00B4D8] rounded-lg bg-white hover:bg-[#00B4D8] hover:text-[white] transition-all duration-300 tracking-wide shadow-md px-4"
          style={{ boxShadow: '0 2px 8px 0 rgba(14,165,163,0.10)' }}
        >
          READ MORE
        </button>
      </div>
    </div>
  );
};

// ---------- PAGE ----------
const HomePage = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Static articles data
  const articles = [
    {
      id: 1,
      title: "Here's Why You'll Love Collagen (and Your Skin Will Too)",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=250&fit=crop",
      category: "Beauty • Wellness",
      date: "15 Oct '25",
      readTime: 4,
      blogUrl: "https://www.healthline.com/nutrition/collagen-benefits"
    },
    {
      id: 2,
      title: "The Complete Guide to Vitamins and Supplements",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
      category: "Health • Wellness",
      date: "12 Oct '25",
      readTime: 5,
      blogUrl: "https://www.healthline.com/nutrition/vitamins-and-supplements"
    },
    {
      id: 3,
      title: "How to Build a Consistent Skincare Routine",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=250&fit=crop",
      category: "Skincare • Beauty",
      date: "10 Oct '25",
      readTime: 6,
      blogUrl: "https://www.healthline.com/health/skincare-routine"
    },
    {
      id: 4,
      title: "The Science Behind Immune System Boosters",
      image: "https://images.unsplash.com/photo-1631217314237-0a32370cda03?w=400&h=250&fit=crop",
      category: "Health • Immunity",
      date: "08 Oct '25",
      readTime: 5,
      blogUrl: "https://www.healthline.com/health/immune-system"
    },
    {
      id: 5,
      title: "Natural Remedies for Better Sleep Quality",
      image: "https://images.unsplash.com/photo-1564629238126-2e2eea4e63f2?w=400&h=250&fit=crop",
      category: "Wellness • Sleep",
      date: "05 Oct '25",
      readTime: 4,
      blogUrl: "https://www.healthline.com/health/sleep/natural-remedies"
    },
    {
      id: 6,
      title: "Guide to Baby Care Products: What You Need to Know",
      image: "https://images.unsplash.com/photo-1599909532892-3b56e58c0e5a?w=400&h=250&fit=crop",
      category: "Baby Care • Health",
      date: "01 Oct '25",
      readTime: 7,
      blogUrl: "https://www.healthline.com/health/baby-care"
    }
  ];

  // State for responsive article display
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [articleStartIndex, setArticleStartIndex] = useState(0);

  // Track screen size for responsive article display
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      setArticleStartIndex(0); // Reset to first articles when screen size changes
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine number of articles to display based on screen size
  const getArticlesToShow = () => {
    if (screenSize < 768) return 1; // Small devices: 1 article
    if (screenSize < 1070) return 2; // Medium devices: 2 articles
    return 3; // Large devices: 3 articles
  };

  // Get current articles to display based on screen size and index
  const articlesPerPage = getArticlesToShow();
  const currentArticles = articles.slice(articleStartIndex, articleStartIndex + articlesPerPage);

  // Navigation handlers for articles
  const handleNextArticles = () => {
    const articlesPerPage = getArticlesToShow();
    const maxIndex = articles.length - articlesPerPage;
    setArticleStartIndex((prevIndex) => {
      const newIndex = prevIndex + articlesPerPage;
      return newIndex > maxIndex ? 0 : newIndex; // Loop back to start
    });
  };

  const handlePrevArticles = () => {
    const articlesPerPage = getArticlesToShow();
    const maxIndex = articles.length - articlesPerPage;
    setArticleStartIndex((prevIndex) => {
      const newIndex = prevIndex - articlesPerPage;
      return newIndex < 0 ? maxIndex : newIndex; // Loop to end
    });
  };

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      setArticleStartIndex(0); // Reset to first articles when screen size changes
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
   
    <div className="font-sans min-h-screen w-full max-w-[100vw] m-0 p-0 overflow-x-hidden overflow-y-auto box-border" style={{fontFamily: "'Roboto', sans-serif"}}>
      <section className="w-full max-w-[100vw] overflow-hidden">
    
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

       <div className="w-full flex justify-center items-center bg-[#F6FCFC]">
  <div className="w-full max-w-7xl relative rounded-3xl shadow-xl overflow-hidden min-h-[390px] flex items-center px-6 md:px-10 hero-container">
    <img src={hero} alt="Shopping Cart" className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-80" />

  <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start justify-center pl-[80px] md:pl-[120px] pr-6 min-h-[390px] max-w-[420px] hero-content">
  <h1 className="mb-[-5px] text-[40px] text-[#1A3541] md:text-8xl md:text-[96px] lg:text-[112px] font-light leading drop-shadow-lg hero-title w-[420px] md:w-[420px] lg:w-[420px] text-left">
    Your Trusted Online Pharmacy
  </h1>

  <p className="text-[#1A3541] text-lg text-gray-700 mb-8 drop-shadow opacity-75 hero-subtitle w-[420px] md:w-[420px] lg:w-[420px] text-left">
   Order 100% Genuine Medicines & HealthCare & Wellness Products Online with fast Home Delivery and expert care.
  </p>

  <button className="bg-[#1A3541] hover:bg-[#FFBB5B] h-[40px] w-[120px] text-white font-semibold px-8 py-3 rounded-full text-lg transition" style={{color:'white',border: 'none'}}>
    Order Now
  </button>
</div>

  </div>
</div>
        <div className="w-full bg-[#D9EEF3] overflow-hidden">
          <div className="w-full max-w-7xl mx-auto py-6 px-6 overflow-hidden">
            <div className="h-[80px] flex flex-wrap md:flex-nowrap items-center justify-center services-container">
              <div className="flex items-center gap-[10px]">
                <img src={delivery} alt="Delivery" className="w-12 h-12" />
                <p className="text-base font-extrabold text-[#023E8A] mr-[30px] service-text">Home Delivery</p>
              </div>

              <div className="flex items-center gap-[10px]">
                <img src={lock} alt="Secure Payment" className="w-12 h-12" />
                <p className="text-base font-extrabold text-[#023E8A] mr-[30px]">Pay Securely</p>
              </div>

              <div className="flex items-center gap-[10px]">
                <img src={medicine} alt="Wide Range Of Assortments" className="w-12 h-12" />
                <p className="text-base font-extrabold text-[#023E8A] mr-[30px]">Wide Range Of Assortments</p>
              </div>

              <div className="flex items-center gap-[10px]">
                <img src={customer} alt="Customer Service Support" className="w-12 h-12" />
                <p className="text-base font-extrabold text-[#023E8A] mr-[30px]">Customer Service Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="w-full py-12 overflow-hidden">
        {/* ---------------------------------------------------------------------- */}
        {/* 3. FEATURED CATEGORIES (Corrected images to match design) */}
        {/* ---------------------------------------------------------------------- */}
        <section className="mb-12 text-[#0A7675] flex flex-row flex-wrap gap-8 px-2 justify-center items-start feature-section w-full max-w-[100vw]">
          {/* Medical Devices Card */}
          <div className="flex h-[250px] flex-row w-full max-w-[350px] md:w-[280px] bg-[#9FD8D4] rounded-xl shadow-lg px-[24px] py-[20px] hover:shadow-xl transition overflow-hidden feature-card items-center justify-between" style={{margin: '40px 16px'}}>
            <div className="flex flex-col justify-center space-y-3 w-1/2">
              <h3 className="text-xl px-[5px] md:text-2xl font-bold text-[#1A3541] leading-tight">
                Medical<br />Devices
              </h3>
              <button className="text-white h-[35px] w-[100px] bg-[#1A3541] hover:bg-[#FFBB5B] font-semibold rounded-full transition border-none outline-none flex items-center justify-center" style={{color:'#fff',border:'none'}}>
                Shop Now
              </button>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <img
                src={medical}
                alt="Medical Devices"
                className="w-32 md:w-36 h-auto object-contain opacity-90 z-0"
              />
            </div>
          </div>

          {/* Baby Care Products Card */}
          <div className="flex h-[250px] flex-row w-full max-w-[350px] md:w-[280px] bg-[#C8E6C9] rounded-xl shadow-lg px-[24px] py-[20px] hover:shadow-xl transition overflow-hidden feature-card items-center justify-between" style={{margin: '40px 16px'}}>
            <div className="flex flex-col justify-center space-y-3 w-1/2">
              <h3 className="text-xl px-[5px] md:text-2xl font-bold text-[#1A3541] leading-tight">
                Baby Care<br />Products
              </h3>
              <button className="text-white h-[35px] w-[100px] bg-[#1A3541] hover:bg-[#FFBB5B] font-semibold rounded-full transition border-none outline-none flex items-center justify-center" style={{color:'#fff',border:'none'}}>
                Shop Now
              </button>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <img
                src={baby}
                alt="Baby Care"
                className="w-32 md:w-36 h-auto object-contain opacity-90 z-0"
              />
            </div>
          </div>

          {/* Personal Care Products Card */}
          <div className="flex h-[250px] flex-row w-full max-w-[350px] md:w-[280px] bg-[#FFD4BF] rounded-xl shadow-lg px-[24px] py-[20px] hover:shadow-xl transition overflow-hidden feature-card items-center justify-between" style={{margin: '40px 16px'}}>
            <div className="flex flex-col justify-center space-y-3 w-1/2">
              <h3 className="text-xl px-[5px] md:text-2xl font-bold" style={{color:'#1A3541'}}>
                Personal Care<br />Products
              </h3>
              <button className="text-white h-[35px] w-[100px] bg-[#1A3541] hover:bg-[#FFBB5B] font-semibold rounded-full transition border-none outline-none flex items-center justify-center" style={{color:'#fff',border:'none'}}>
                Shop Now
              </button>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <img
                src={personal}
                alt="Personal Care"
                className="w-32 md:w-36 h-auto object-contain opacity-90 z-0"
              />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 4. FEATURED ARTICLES SECTION - SIMPLIFIED */}
        {/* ---------------------------------------------------------------------- */}

        <section className="py-[30px] mb-[50px] w-full bg-[#D6EEF1] py-8 rounded-2xl mb-12 max-w-7xl mx-auto">
          <h2 className="px-[30px] text-2xl font-bold text-gray-800 mb-6">Latest Articles</h2>
          <div className="flex items-center justify-center gap-[40px] px-[30px] articles-container">
            {/* Left Navigation Button */}
            <button
              onClick={handlePrevArticles}
              className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#00B4D8] text-white font-bold text-2xl flex items-center justify-center hover:bg-[#0090a7] hover:text-white transition shadow-lg hover:shadow-xl article-nav-button"
              title="Previous articles"
            >
              ←
            </button>

            <div className="flex justify-center items-center gap-[30px] flex-1 max-w-full" style={{boxSizing: 'border-box', minHeight: '440px'}}>
              {currentArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={handleNextArticles}
              className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#00B4D8] text-white font-bold text-2xl flex items-center justify-center hover:bg-[#0090a7] hover:text-white transition shadow-lg hover:shadow-xl article-nav-button"
              title="Next articles"
            >
              →
            </button>
          </div>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* 6. NEWSLETTER SIGNUP */}
        {/* ---------------------------------------------------------------------- */}

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
      </main>

      {/* ---------------------------------------------------------------------- */}
      {/* 7. FOOTER */}
      {/* ---------------------------------------------------------------------- */}

    {/* ---------------------------------------------------------------------- */}
      {/* 7. FOOTER - MATCHED TO DESIGN */}
      {/* ---------------------------------------------------------------------- */}
      <footer className="w-full overflow-hidden">
        {/* Main Footer Section */}
        <div className="bg-[#00B4D8] p-[60px] text-white pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-8">
            {/* Logo Row */}
            <div className="mb-12 mx-[60px] flex justify-center">
              <img src={logo} alt="OSUMEDURA PHARMACY" className="h-10 brightness-0 invert my-[30px]" />
            </div>

            <div className="flex flex-wrap gap-8">
              {/* Navigation */}
              <div className="flex-1 min-w-[150px]">
                <h4 className="text-sm font-bold tracking-widest uppercase text-[#003C51] "style={{letterSpacing: '0.15em'}}>NAVIGATION</h4>
                <ul className="list-none text-sm font-semibold opacity-90">
                  <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Medical Devices</a></li>
                  <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Wellness</a></li>
                  <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Personal Care</a></li>
                  <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>About Us</a></li>
                  <li><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Contact Us</a></li>
                </ul>
              </div>

              {/* Information */}
              <div className="flex-1 min-w-[150px]">
                <h4 className="text-sm font-bold mb-6 tracking-widest uppercase text-[#003C51]"  style={{letterSpacing: '0.15em'}}>INFORMATION</h4>
                <ul className="list-none text-sm font-semibold opacity-90">
                  <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Privacy Policy</a></li>
                  <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Loyalty Policy</a></li>
                  <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Personal Care</a></li>
                  <li><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>Terms & Conditions</a></li>
                </ul>
              </div>

              {/* Customer Service */}
              <div className="flex-1 min-w-[150px]">
                <h4 className="text-sm font-bold tracking-widest uppercase text-[#003C51]"  style={{letterSpacing: '0.15em'}}>CUSTOMER SERVICE</h4>
                <ul className="list-none text-sm font-semibold opacity-90">
                  <li className="mb-[5px]"><a href="#" className="text-[white] hover:text-[#FFBB5B] transition-colors tracking-widest" style={{letterSpacing: '0.05em', textDecoration: 'none'}}>FAQ</a></li>
                </ul>
              </div>

              {/* Hotline Card */}
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

              {/* Contact & Socials */}
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

        {/* Bottom Copyright Bar */}
        <div className="bg-[#1A3541] text-[white] py-6">
          <div className="max-w-7xl mx-auto px-[300px] flex md:flex-row justify-between items-center text-[13px] font-bold">
            <p>© 2025. All Rights Reserved</p>
            <p>Concept and Design by jfkjoso</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;