
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Youtube, } from "lucide-react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: "home",
      title: "HELLO AND SAFE JOURNEY!",
      content: `In the Igbo language, Ijeoma means safe journey, or literally, to go well. I believe that life is much more about the journey than the destination and that our purpose is to continue learning about ourselves and one another as we journey through life. My name has inspired me to take risks, pursue dreams, and live joyfully and confidently in the life I've been given. This space is a collection of all the different adventures I'm currently on. Click right and left to scroll through and learn more. Thanks for joining me!`,
      signature: "IJEOMA",
      type: "welcome",
      imagePlaceholder: "Portrait of Ijeoma - Welcome image",
    },
    {
      id: "work-with-me",
      title: "WORK WITH ME",
      content: `I am available for speaking, consulting, and research collaboration, particularly around racial health disparities, Black women in higher education, and how scholars can leverage social media to share their research. I am also open to digital content creation and collaboration with mission-aligned brands and organizations. For all collaboration inquiries and speaking invitations, please reach out via the contact form.`,
      type: "info",
      imagePlaceholder: "Professional headshot - Work with me",
      portfolioItems: [
        "Speaking engagement example 1",
        "Collaboration example 2", 
        "Research project example 3"
      ]
    },
    {
      id: "content-creation",
      title: "CONTENT CREATION",
      content: `I have been creating digital content since 2010 when I started recording videos on YouTube under the name "Klassy Kinks," as a way to chronicle my natural hair journey. Since then I have expanded my storytelling to include written, photo, and video content on a range of topics including beauty, style, travel, and lifestyle, as well as personal essays, and reach a multi-platform audience of over 200,000 people around the world. I have also produced digital content in partnership with more than 200 small businesses and large multinational companies, including Procter & Gamble, Uber, Sephora, Best Buy, and the American Heart Association.

Whether I'm talking about my latest style, beauty, or home decor favorites, how to choose the right Ph.D. program, or the humbling aspects of being a toddler mom, everything I share is geared towards empowering other women to live joyfully and confidently in the pursuit of their dreams.`,
      buttonText: "EXPLORE THE BLOG",
      type: "content",
      imagePlaceholder: "Content creation setup - Camera and lifestyle",
    },
    {
      id: "impact",
      title: "IMPACT",
      content: `In addition to scholarly research and blogging, I create online and offline communities for Black women, centered around two of my lifelong loves — travel and higher education.

The Safe Journey Retreat is an annual women's empowerment conference and group travel adventure on the African continent, while Cohort Sistas is a digital nonprofit that supports Black women pursuing doctoral education.`,
      buttonText1: "RETREAT",
      buttonText2: "COHORT SISTAS", 
      type: "impact",
      imagePlaceholder: "Ijeoma in professional setting - Impact work",
    },
    {
      id: "social-media",
      title: "SOCIAL MEDIA",
      content: `Come hang out with me on your favorite social media platform! I'm most active on Instagram but Twitter is beginning to win me over.`,
      type: "social",
      imagePlaceholder: "Social media portrait - Ijeoma smiling",
    },
    {
      id: "contact",
      title: "LET'S CONNECT",
      content: `Feel free to email with questions, suggestions, collaboration ideas, and speaking and consulting inquiries.`,
      type: "contact",
      imagePlaceholder: "Professional contact image",
    },
    {
      id: "newsletter",
      title: "KEEP IN TOUCH", 
      content: `Sign up to receive the Safe Journey Scoop, a bi-monthly newsletter with personal and professional updates!`,
      type: "newsletter",
      imagePlaceholder: "Newsletter signup image",
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Horizontal scroll handler
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      isScrolling = true;
      setIsAutoPlaying(false);

      if (e.deltaX > 10 || e.deltaY > 10) {
        // Scroll right/down - next slide
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (e.deltaX < -10 || e.deltaY < -10) {
        // Scroll left/up - previous slide
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 500);
    };

    const handleKeyDown = (e) => {
      setIsAutoPlaying(false);
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const renderSlideContent = (slide) => {
    const baseClasses = "min-h-screen flex items-center justify-center";
    
    switch (slide.type) {
      case "welcome":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-orange-50 to-pink-50`}>
            <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <h1 className="text-3xl lg:text-4xl font-light text-orange-700 mb-8 text-center tracking-wide">
                    {slide.title}
                  </h1>
                  <div className="text-gray-700 leading-relaxed text-center space-y-4">
                    {slide.content.split(". ").map((sentence, i) => (
                      <p key={i}>
                        {sentence}{i < slide.content.split(". ").length - 1 ? "." : ""}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <div className="text-2xl font-light text-orange-600 tracking-widest">
                      {slide.signature}
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-full max-w-md h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="text-center text-orange-600 p-4">
                    <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👋</span>
                    </div>
                    <p className="text-sm font-medium">{slide.imagePlaceholder}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "info":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-orange-50 to-pink-100`}>
            <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-md h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="text-center text-orange-600 p-4">
                    <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <p className="text-sm font-medium">{slide.imagePlaceholder}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h1 className="text-3xl lg:text-4xl font-light text-orange-700 mb-8 tracking-wide">
                  {slide.title}
                </h1>
                <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
                  <p>{slide.content}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {slide.portfolioItems?.map((item, i) => (
                    <div key={i} className="bg-orange-100 p-4 rounded text-center text-sm text-orange-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "content":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-pink-50 to-orange-50`}>
            <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h1 className="text-3xl lg:text-4xl font-light text-orange-700 mb-8 tracking-wide">
                  {slide.title}
                </h1>
                <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
                  {slide.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded tracking-wider text-sm font-medium transition-colors">
                  {slide.buttonText}
                </button>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="text-center text-orange-600 p-4">
                    <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">📸</span>
                    </div>
                    <p className="text-sm font-medium">{slide.imagePlaceholder}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "impact":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-orange-100 to-pink-50`}>
            <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-md h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="text-center text-orange-600 p-4">
                    <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <p className="text-sm font-medium">{slide.imagePlaceholder}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h1 className="text-3xl lg:text-4xl font-light text-orange-700 mb-8 tracking-wide">
                  {slide.title}
                </h1>
                <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
                  <p>{slide.content}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded tracking-wider text-sm font-medium transition-colors">
                    {slide.buttonText1}
                  </button>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded tracking-wider text-sm font-medium transition-colors">
                    {slide.buttonText2}
                  </button>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded text-center">
                    <Instagram className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-xs text-orange-700">INSTAGRAM</p>
                    <p className="text-xs text-gray-600">FOLLOW ALONG</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded text-center">
                    <span className="text-orange-600 text-lg">@</span>
                    <p className="text-xs text-orange-700">@COHORTSISTAS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "social":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-orange-50 to-pink-50`}>
            <div className="container mx-auto px-8">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-orange-600 text-white p-8 rounded-lg shadow-lg mb-8">
                  <div className="w-32 h-32 bg-orange-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <div className="text-center text-orange-600 p-4">
                      <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <p className="text-sm font-medium">{slide.imagePlaceholder}</p>
                    </div>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-light mb-4 tracking-wide">
                    {slide.title}
                  </h1>
                  <p className="text-orange-100 leading-relaxed">
                    {slide.content}
                  </p>
                  <div className="flex justify-center space-x-6 mt-6">
                    <Instagram className="w-6 h-6 text-orange-100 hover:text-white cursor-pointer transition-colors" />
                    <Facebook className="w-6 h-6 text-orange-100 hover:text-white cursor-pointer transition-colors" />
                    <Twitter className="w-6 h-6 text-orange-100 hover:text-white cursor-pointer transition-colors" />
                    <Youtube className="w-6 h-6 text-orange-100 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-pink-50 to-orange-50`}>
            <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-md h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="text-center text-orange-600 p-4">
                    <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">💌</span>
                    </div>
                    <p className="text-sm font-medium">{slide.imagePlaceholder}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h1 className="text-3xl lg:text-4xl font-light text-orange-700 mb-4 tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {slide.content}
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="NAME"
                      className="border-b border-orange-200 bg-transparent pb-2 text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className="border-b border-orange-200 bg-transparent pb-2 text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="REASON FOR CONTACTING"
                    className="w-full border-b border-orange-200 bg-transparent pb-2 text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                  <textarea
                    placeholder="MESSAGE"
                    rows="4"
                    className="w-full border-b border-orange-200 bg-transparent pb-2 text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:outline-none resize-none"
                  ></textarea>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded tracking-wider text-sm font-medium transition-colors">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        );

      case "newsletter":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-orange-100 to-pink-100`}>
            <div className="container mx-auto px-8">
              <div className="max-w-2xl mx-auto">
                <div className="bg-pink-200 rounded-lg p-8 shadow-lg text-center">
                  <div className="w-32 h-32 bg-pink-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <div className="text-center text-pink-600 p-4">
                      <div className="w-16 h-16 bg-pink-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <p className="text-sm font-medium">{slide.imagePlaceholder}</p>
                    </div>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-light text-pink-800 mb-4 tracking-wide">
                    {slide.title}
                  </h1>
                  <p className="text-pink-700 leading-relaxed mb-8">
                    {slide.content}
                  </p>
                  <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="text"
                      placeholder="FIRST NAME"
                      className="flex-1 border-b border-pink-300 bg-transparent pb-2 text-pink-800 placeholder-pink-500 focus:border-pink-600 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className="flex-1 border-b border-pink-300 bg-transparent pb-2 text-pink-800 placeholder-pink-500 focus:border-pink-600 focus:outline-none"
                    />
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                      →
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light text-gray-800">
              IJEOMA<span className="italic text-orange-600">Kola</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 text-sm tracking-wider">
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">ABOUT</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">RESEARCH</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">COHORT SISTAS</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">BLOG</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">SUBSCRIBE</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">CONTACT</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-orange-600 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-600 hover:text-orange-600 cursor-pointer transition-colors" />
              <Pinterest className="w-5 h-5 text-gray-600 hover:text-orange-600 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-orange-600 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-orange-600 cursor-pointer transition-colors" />
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-medium cursor-pointer">
                S
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="relative h-screen pt-16">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0">
              {renderSlideContent(slide)}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-40"
        >
          <ChevronLeft className="w-6 h-6 text-orange-600" />
        </button>
        <button
          onClick={nextSlide}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-40"
        >
          <ChevronRight className="w-6 h-6 text-orange-600" />
        </button>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 z-40">
          <div className="container mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Current Slide Label */}
              <div className="text-sm text-orange-600 font-medium tracking-wider uppercase">
                {slides[currentSlide].id.replace("-", " ")}
              </div>
              
              {/* Progress Bar */}
              <div className="flex-1 mx-8">
                <div className="relative h-1 bg-gray-200 rounded">
                  <div 
                    className="absolute top-0 left-0 h-full bg-orange-600 rounded transition-all duration-700"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? "bg-orange-600 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Instructions */}
        <div className="fixed top-20 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm z-40">
          Scroll horizontally or use arrow keys
        </div>
      </main>
    </div>
  );
};

export default About;