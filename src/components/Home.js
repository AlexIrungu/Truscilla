import React from 'react';
import { Play } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-amber-100 rounded-lg overflow-hidden shadow-lg">
                  {/* Placeholder for the professional photo */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
                    <div className="text-center text-amber-700">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <p className="text-sm">Professional Photo Here</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-amber-600"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-amber-600"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-light text-amber-700 mb-8 tracking-wide">
                WELCOME TO TRUELOVE
              </h1>
              
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p className="text-lg">
                  I am a historian of race and medicine, a digital content creator, 
                  and a champion for Black women's health, education, and empowerment. 
                  At the core of my varied passions is creating a world where Black women 
                  around the world can confidently and joyfully pursue their wildest dreams.
                </p>
                
                <p className="text-lg">
                  Welcome to my corner of the internet!
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 mb-12">
                <div className="text-3xl font-light text-amber-600 italic">
                  TrueLove
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-amber-700 text-white px-8 py-3 rounded hover:bg-amber-800 transition-colors uppercase tracking-wider text-sm font-medium">
                  Research
                </button>
                <button className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors uppercase tracking-wider text-sm font-medium">
                  Advocacy
                </button>
                <button className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors uppercase tracking-wider text-sm font-medium">
                  Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* About Section */}
      <section className="py-16 px-6 bg-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left Side - About Content */}
            <div className="bg-stone-100 p-8 lg:p-12 rounded-lg shadow-lg relative">
              {/* Photo */}
              <div className="absolute top-8 left-8 w-32 h-40 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full flex items-center justify-center text-orange-700">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="ml-40 mt-8">
                <h2 className="text-4xl font-light text-orange-600 mb-8 italic">about</h2>
                <h3 className="text-2xl font-light text-stone-700 mb-6 tracking-wide">IJEOMA</h3>
                
                <p className="text-stone-600 leading-relaxed mb-8">
                  I'm a lot of things - a scholar, a writer, a content creator, 
                  an entrepreneur, a food and decor lover, a wife, a sister, 
                  a daughter, and a mom. And that's just scratching the 
                  surface! Take a deep dive into my world.
                </p>

                <button className="bg-orange-700 text-white px-8 py-3 rounded hover:bg-orange-800 transition-colors uppercase tracking-wider text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Newsletter Signup */}
            <div className="bg-stone-300 p-8 lg:p-12 rounded-lg shadow-lg relative">
              {/* Close button */}
              <button className="absolute top-4 right-4 w-8 h-8 bg-orange-700 text-white rounded-full flex items-center justify-center hover:bg-orange-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Photo */}
              <div className="w-48 h-56 bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg overflow-hidden shadow-md mb-8 mx-auto">
                <div className="w-full h-full flex items-center justify-center text-stone-600">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-light text-stone-100 mb-2 tracking-wider">JOIN THE</h3>
                <h2 className="text-3xl font-light text-stone-100 mb-8 tracking-wider">NEWSLETTER FAMILY</h2>

                <form className="space-y-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="FIRST NAME"
                      className="w-full bg-transparent border-b-2 border-stone-100 pb-2 text-stone-100 placeholder-stone-100 focus:outline-none focus:border-orange-300 transition-colors"
                    />
                    <span className="absolute right-0 bottom-2 text-orange-300">*</span>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-transparent border-b-2 border-stone-100 pb-2 text-stone-100 placeholder-stone-100 focus:outline-none focus:border-orange-300 transition-colors"
                    />
                    <button 
                      type="submit"
                      className="absolute right-0 bottom-1 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Blog Posts Section */}
      <section className="py-16 px-6 bg-stone-50 relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-9xl lg:text-[12rem] font-light text-stone-200 tracking-wider opacity-50">
            MOST POPULAR
          </h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl font-light text-orange-600 italic mr-8">posts</div>
              <div className="text-2xl font-light text-stone-700 tracking-wide">
                150+ BLACK OWNED HOME DECOR BRANDS
              </div>
            </div>
          </div>

          {/* Scrollable Posts Container */}
          <div className="relative">
            {/* Scroll Buttons */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-stone-50 transition-colors">
              <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-stone-50 transition-colors">
              <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Posts Grid */}
            <div className="overflow-x-auto scrollbar-hide px-12">
              <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                
                {/* Post 1 - Home Decor */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                    {/* Room Interior Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-20 bg-green-400 rounded-lg shadow-md relative">
                        {/* Sofa representation */}
                        <div className="absolute top-2 left-4 w-6 h-4 bg-green-600 rounded"></div>
                        <div className="absolute top-2 right-4 w-6 h-4 bg-green-600 rounded"></div>
                        <div className="absolute bottom-2 left-2 right-2 h-3 bg-green-500 rounded"></div>
                      </div>
                      {/* Wall art frames */}
                      <div className="absolute top-8 left-8 w-8 h-6 bg-white border-2 border-stone-300 rounded-sm"></div>
                      <div className="absolute top-8 left-18 w-8 h-6 bg-white border-2 border-stone-300 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-stone-800 mb-2">HOME DECOR</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Discover beautiful Black-owned home decor brands that will transform your space with style and elegance.
                    </p>
                  </div>
                </div>

                {/* Post 2 - Professional/Library */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 relative overflow-hidden">
                    {/* Library/Office Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Bookshelf */}
                      <div className="w-24 h-32 bg-amber-600 rounded-lg relative">
                        <div className="absolute top-2 left-1 right-1 h-2 bg-amber-800 rounded"></div>
                        <div className="absolute top-6 left-1 right-1 h-2 bg-amber-700 rounded"></div>
                        <div className="absolute top-10 left-1 right-1 h-2 bg-amber-800 rounded"></div>
                        <div className="absolute top-14 left-1 right-1 h-2 bg-amber-700 rounded"></div>
                      </div>
                      {/* Person silhouette */}
                      <div className="absolute bottom-8 right-12 w-12 h-16 bg-amber-700 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-stone-800 mb-2">HISTORY OF RACE AND RACISM</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Exploring the complex history of race and racism through scholarly research and accessible content.
                    </p>
                  </div>
                </div>

                {/* Post 3 - Motherhood/Personal */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-rose-100 to-rose-200 relative overflow-hidden">
                    {/* Personal/Motherhood Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Coffee mug */}
                      <div className="w-8 h-10 bg-rose-600 rounded-b-lg relative">
                        <div className="absolute -right-1 top-2 w-2 h-3 border-2 border-rose-600 rounded-full"></div>
                      </div>
                      {/* Book */}
                      <div className="w-12 h-8 bg-rose-700 rounded ml-4 relative">
                        <div className="absolute top-1 left-1 right-1 h-0.5 bg-rose-200 rounded"></div>
                        <div className="absolute top-3 left-1 right-1 h-0.5 bg-rose-200 rounded"></div>
                      </div>
                      {/* Heart symbol */}
                      <div className="absolute top-8 right-8 text-rose-400 text-2xl">♥</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-stone-800 mb-2">HOW I BALANCE IT ALL — MOTHERHOOD</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Real talk about balancing motherhood, career, and personal growth as a Black woman.
                    </p>
                  </div>
                </div>

                {/* Post 4 - Additional Content */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Writing/Research placeholder */}
                      <div className="w-16 h-20 bg-purple-600 rounded relative">
                        <div className="absolute top-2 left-2 right-2 h-1 bg-purple-200 rounded"></div>
                        <div className="absolute top-5 left-2 right-2 h-1 bg-purple-200 rounded"></div>
                        <div className="absolute top-8 left-2 right-2 h-1 bg-purple-200 rounded"></div>
                      </div>
                      {/* Pen */}
                      <div className="absolute bottom-12 right-16 w-1 h-8 bg-purple-800 rounded rotate-45"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-stone-800 mb-2">RESEARCH & ADVOCACY</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Deep dives into research that matters and advocacy work that creates lasting change.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <button className="bg-orange-700 text-white px-8 py-3 rounded hover:bg-orange-800 transition-colors uppercase tracking-wider text-sm font-medium">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      <section>
         <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-light text-gray-600 tracking-wider uppercase mb-2">
                YOUTUBE
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                I create vlogs, tutorials, and chit chat videos about my home decor adventures, my beauty tips and tricks, my travels, and more!
              </p>
            </div>
            
            <button className="bg-stone-300 hover:bg-stone-400 text-gray-700 px-8 py-3 text-sm font-medium tracking-wider uppercase transition-colors duration-300">
              WATCH MORE
            </button>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative">
            {/* Main Title Overlay */}
            <div className="absolute top-8 left-8 z-10">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-4 shadow-lg">
                <h3 className="text-2xl font-light text-gray-800 tracking-wide">
                  BASEMENT & LIVING<br />ROOM TOUR
                </h3>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-96">
              {/* Basement Room */}
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-full h-full flex flex-col justify-between p-6">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-10 bg-orange-600 rounded mb-4 mx-auto"></div>
                          <div className="w-20 h-6 bg-orange-500 rounded mb-3 mx-auto"></div>
                          <div className="grid grid-cols-4 gap-1 mb-4">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="w-4 h-4 bg-orange-700 rounded-sm"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-4 bg-amber-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Living Room */}
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-full h-full flex flex-col justify-between p-6">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-center space-y-3">
                          <div className="w-16 h-12 bg-gray-400 rounded mx-auto"></div>
                          <div className="w-12 h-8 bg-gray-500 rounded mx-auto"></div>
                          <div className="w-20 h-3 bg-amber-400 rounded mx-auto"></div>
                          <div className="flex justify-center space-x-2">
                            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                            <div className="w-8 h-6 bg-gray-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute bottom-4 right-4">
              <button className="w-14 h-14 bg-stone-300 hover:bg-stone-400 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 group">
                <Play className="w-6 h-6 text-gray-700 ml-1 group-hover:text-gray-800" fill="currentColor" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 tracking-wider uppercase">
                COZY BASEMENT MEDIA ROOM - LIVING ROOM TOUR | THE KOLA HOME
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-light text-stone-700 mb-8">
            Empowering Black Women Through Research & Advocacy
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Join me on this journey as we explore the intersection of history, health, 
            and empowerment. Together, we can create lasting change and build a 
            community where every Black woman can thrive.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;