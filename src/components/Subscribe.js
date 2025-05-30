import React, { useState } from 'react';

const Subscribe = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Handle form submission here
    if (firstName && email) {
      console.log('Form submitted:', { firstName, email });
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFirstName('');
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-misty-rose">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96 lg:h-[500px]">
              {/* Image placeholder - replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-sage to-pakistan-green flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-80">Woman with coffee & laptop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-fulvous mb-6 tracking-wide">
                SUBSCRIBE TO MY NEWSLETTER
              </h1>
              <p className="text-taupe-gray text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Join the newsletter family to receive monthly updates + exclusive content!
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              <div>
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-fulvous focus:border-transparent placeholder-gray-500 text-sm tracking-widest"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-fulvous focus:border-transparent placeholder-gray-500 text-sm tracking-widest"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="w-full bg-fulvous hover:bg-fulvous/90 text-white py-3 px-6 rounded-sm transition-all duration-300 font-medium tracking-widest text-sm disabled:opacity-50"
              >
                {isSubmitted ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
              </button>
            </div>

            {isSubmitted && (
              <div className="text-center text-pakistan-green font-medium">
                Thank you for subscribing! 🎉
              </div>
            )}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Subscribe;