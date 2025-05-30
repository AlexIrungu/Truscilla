import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    if (formData.firstName && formData.email && formData.message) {
      console.log('Contact form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-misty-rose py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Info & Image */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-fulvous mb-6 tracking-wide">
                GET IN TOUCH
              </h1>
              <p className="text-taupe-gray text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Have a question or want to work together? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-5 h-5 bg-fulvous rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span className="text-taupe-gray tracking-wide">hello@ijeomakola.com</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-5 h-5 bg-fulvous rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-taupe-gray tracking-wide">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative mt-8">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-64 lg:h-80">
                <div className="w-full h-full bg-gradient-to-br from-sage to-pakistan-green flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-80">Professional Portrait</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-light text-dark-green mb-6 tracking-wide text-center lg:text-left">
              SEND A MESSAGE
            </h2>
            
            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="FIRST NAME *"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-fulvous focus:border-transparent placeholder-gray-500 text-sm tracking-widest"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="LAST NAME"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-fulvous focus:border-transparent placeholder-gray-500 text-sm tracking-widest"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-fulvous focus:border-transparent placeholder-gray-500 text-sm tracking-widest"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="SUBJECT"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-fulvous focus:border-transparent placeholder-gray-500 text-sm tracking-widest"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE *"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-fulvous focus:border-transparent placeholder-gray-500 text-sm tracking-widest resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="w-full bg-fulvous hover:bg-fulvous/90 text-white py-3 px-6 rounded-sm transition-all duration-300 font-medium tracking-widest text-sm disabled:opacity-50 mt-6"
              >
                {isSubmitted ? 'MESSAGE SENT!' : 'SEND MESSAGE'}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="text-center text-pakistan-green font-medium mt-4">
                  Thank you for your message! I'll get back to you soon. 🎉
                </div>
              )}

              {/* Required Fields Note */}
              <p className="text-xs text-taupe-gray text-center mt-4 tracking-wide">
                * Required fields
              </p>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-dark-green tracking-wide mb-4">
              OTHER WAYS TO CONNECT
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 hover:bg-white/60 transition-all duration-300">
              <div className="w-12 h-12 bg-fulvous rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <h4 className="font-medium text-dark-green mb-2">SOCIAL MEDIA</h4>
              <p className="text-taupe-gray text-sm">Follow me on Twitter</p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 hover:bg-white/60 transition-all duration-300">
              <div className="w-12 h-12 bg-fulvous rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h4 className="font-medium text-dark-green mb-2">LINKEDIN</h4>
              <p className="text-taupe-gray text-sm">Professional network</p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 hover:bg-white/60 transition-all duration-300">
              <div className="w-12 h-12 bg-fulvous rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h4 className="font-medium text-dark-green mb-2">PHONE</h4>
              <p className="text-taupe-gray text-sm">Schedule a call</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;