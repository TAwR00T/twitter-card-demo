import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'light' ? 'light' : 'dark');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'fa');
  const [searchActive, setSearchActive] = useState(false);
  
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);
  
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const toggleLanguage = () => {
    setLanguage(language === 'fa' ? 'en' : 'fa');
  };
  
  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };
  
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="container">
            <nav className="navbar">
              <Link to="/" className="logo">T4WR00T</Link>
              
              <ul className="nav-links">
                <li><Link to="/" className="active">{language === 'fa' ? 'صفحه اصلی' : 'Home'}</Link></li>
                <li><Link to="/articles">{language === 'fa' ? 'مقالات' : 'Articles'}</Link></li>
                <li><Link to="/blog">{language === 'fa' ? 'وبلاگ' : 'Blog'}</Link></li>
                <li><Link to="/about">{language === 'fa' ? 'درباره من' : 'About Me'}</Link></li>
                <li><Link to="/contact">{language === 'fa' ? 'تماس با من' : 'Contact'}</Link></li>
              </ul>
              
              <div className="nav-actions">
                <button id="lang-toggle" className="lang-toggle" title={language === 'fa' ? 'تغییر زبان' : 'Change Language'} onClick={toggleLanguage}>
                  <img id="current-flag" className="flag-svg" 
                    src={language === 'fa' ? "https://flagcdn.com/w40/ir.png" : "https://flagcdn.com/w40/us.png"} 
                    alt={language === 'fa' ? 'فارسی' : 'English'} />
                </button>
                
                <button id="theme-toggle" className="theme-toggle" onClick={toggleTheme}>
                  <i className={`fas fa-${theme === 'light' ? 'sun' : 'moon'}`}></i>
                </button>
                
                <button id="search-toggle" className="search-toggle" onClick={toggleSearch}>
                  <i className="fas fa-search"></i>
                </button>
                
                <button id="mobile-menu-btn" className="mobile-menu-btn">
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </nav>
          </div>
          
          {searchActive && (
            <div id="search-container" className="search-container active">
              <div className="container">
                <form className="search-form">
                  <input type="text" className="search-input" placeholder={language === 'fa' ? 'جستجو در سایت...' : 'Search the site...'} />
                  <button type="submit" className="search-btn">{language === 'fa' ? 'جستجو' : 'Search'}</button>
                </form>
              </div>
            </div>
          )}
        </header>

        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="content-container">
                  <div className="bio-section">
                    <div className="profile-image">
                      <img src="https://raw.githubusercontent.com/TAwR00T/image/main/photo_2025-03-14_12-40-50%20(2).jpg" alt={language === 'fa' ? 'علی محمدی' : 'Ali Mohammadi'} />
                    </div>
                    <h1 className="hero-title" dangerouslySetInnerHTML={{
                      __html: language === 'fa' 
                        ? 'سلام، من <span>T4WR00T</span> هستم'
                        : '<span style="white-space: nowrap;">Hello, I am <span>T4WR00T</span></span>'
                    }} />
                    <div className="hero-description" dangerouslySetInnerHTML={{
                      __html: language === 'fa' 
                        ? `<p><strong>معمار سیستم‌های امنیتی هوشمند</strong> و <strong>پژوهشگر</strong> در حوزه فناوری‌های نوظهور با بیش از <em>یک دهه تجربه</em> در طراحی زیرساخت‌های دفاعی نسل آینده.</p>
                          <p>تخصص من شامل <span class="highlight">هوش مصنوعی</span>، <span class="highlight">رمزنگاری پسا-کوانتومی</span> و <strong>سیستم‌های امنیتی پیشرفته</strong> است که در پروژه‌های <em>رابط عصبی-کامپیوتری</em> و <em>همزادهای دیجیتال</em> به کار گرفته‌ام.</p>
                          <p>مسیر حرفه‌ای‌ام از <strong>مهندسی معکوس</strong> و توسعه کرنل‌های سفارشی آغاز شد و در حوزه‌های <span class="highlight">دفاع سایبری</span> و طراحی سیستم‌های خودترمیم‌شونده تکامل یافت.</p>`
                        : `<p><strong>Intelligent Security Systems Architect</strong> and <strong>Researcher</strong> in emerging technologies with over <em>a decade of experience</em> in designing next-generation defense infrastructures.</p>
                          <p>My expertise includes <span class="highlight">Artificial Intelligence</span>, <span class="highlight">Post-Quantum Cryptography</span>, and <strong>Advanced Security Systems</strong> that I've applied in <em>Brain-Computer Interface</em> and <em>Digital Twin</em> projects.</p>
                          <p>My professional journey began with <strong>Reverse Engineering</strong> and custom kernel development, evolving into <span class="highlight">Cyber Defense</span> and self-healing system design.</p>`
                    }} />
                    <div className="hero-cta">
                      <a href="#" className="cta-button" dangerouslySetInnerHTML={{
                        __html: language === 'fa' 
                          ? 'داستان من <i class="fas fa-arrow-left"></i>'
                          : 'My Story <i class="fas fa-arrow-right"></i>'
                      }} />
                    </div>
                  </div>
                  
                  <div className="hero-image">
                    <div className="hero-image-wrapper">
                      <div className="hero-overlay"></div>
                      <span className="hero-badge">
                        {language === 'fa' ? 'معمار امنیت سایبری و هوش مصنوعی' : 'Cybersecurity & AI Architect'}
                      </span>
                      <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3840&q=100" alt={language === 'fa' ? 'طراحی و توسعه وب' : 'Web Design and Development'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/articles" element={<div></div>} />
          <Route path="/blog" element={<div></div>} />
          <Route path="/about" element={<div></div>} />
          <Route path="/contact" element={<div></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
