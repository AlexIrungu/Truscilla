import React, { useState } from 'react';

const Research = () => {
  const [activeSection, setActiveSection] = useState('Research');

  const navigationItems = [
    'RESEARCH',
    'EDUCATION', 
    'PUBLICATIONS',
    'PRESENTATIONS',
    'TEACHING',
    'MEDIA',
    'CONTACT'
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'RESEARCH':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-orange-400 mb-8">RESEARCH</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                I am a historian of public health whose research broadly 
                examines historical, social, and cultural understandings of 
                health and disease in African and African American 
                communities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My current book project, "I Can't Breathe: Racism and the 
                Rise of Asthma in Black Urban America," is an intellectual 
                history of medical and cultural perceptions of race and 
                asthma in nineteenth and twentieth century America.
              </p>
            </div>
          </div>
        );

      case 'EDUCATION':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-orange-400 mb-8">EDUCATION</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">PhD, 2019, Sociomedical Sciences, Columbia University</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">MA, 2014, Sociomedical Sciences, Columbia University</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">BA, 2012, History of Science, Harvard University (cum laude)</p>
              </div>
            </div>
          </div>
        );

      case 'PUBLICATIONS':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-orange-400 mb-8">PUBLICATIONS</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Selected publications and scholarly articles will be listed here. 
                This section will showcase peer-reviewed journal articles, book chapters, 
                and other academic contributions to the field of public health history.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-200 pl-4">
                  <p className="text-gray-700 font-medium">Journal Articles</p>
                  <p className="text-gray-600 text-sm">Coming soon...</p>
                </div>
                <div className="border-l-4 border-orange-200 pl-4">
                  <p className="text-gray-700 font-medium">Book Chapters</p>
                  <p className="text-gray-600 text-sm">Coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'PRESENTATIONS':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-orange-400 mb-8">PRESENTATIONS</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Conference presentations, invited talks, and academic lectures 
                will be featured in this section. This includes presentations at 
                national and international conferences in public health, medical 
                history, and African American studies.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Conference Presentations</p>
                  <p className="text-gray-600 text-sm">Details coming soon...</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Invited Lectures</p>
                  <p className="text-gray-600 text-sm">Details coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'TEACHING':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-orange-400 mb-8">TEACHING</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Teaching philosophy and course information will be highlighted here. 
                This includes undergraduate and graduate courses in public health, 
                medical history, and African American studies.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Current Courses</p>
                  <p className="text-gray-600">Course listings coming soon...</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Teaching Philosophy</p>
                  <p className="text-gray-600">Philosophy statement coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'MEDIA':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-orange-400 mb-8">MEDIA</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Media appearances, interviews, and public engagement activities 
                will be showcased here. This includes podcast appearances, 
                newspaper interviews, and public speaking engagements.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium">Podcast Appearances</p>
                    <p className="text-gray-600 text-sm">Coming soon...</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium">Press Coverage</p>
                    <p className="text-gray-600 text-sm">Coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'CONTACT':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-orange-400 mb-8">CONTACT</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Get in touch for collaboration opportunities, speaking engagements, 
                or academic inquiries.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Email</p>
                  <p className="text-gray-600">your.email@university.edu</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Office</p>
                  <p className="text-gray-600">Department of Public Health<br />University Name<br />Address Line 1<br />City, State ZIP</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
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
    <div className="min-h-screen bg-gray-100 flex">
      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Left side - Image and Content */}
        <div className="flex-1 bg-white flex">
          {/* Image Section */}
          <div className="w-80 bg-gray-200 flex items-center justify-center">
            <div className="w-64 h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image Placeholder</span>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-1 p-12 flex items-center">
            <div className="max-w-2xl">
              {renderContent()}
            </div>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="w-64 bg-white border-l border-gray-200 flex flex-col justify-center">
          <nav className="px-8 space-y-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`block text-left text-sm font-medium tracking-wider transition-colors duration-200 ${
                  activeSection === item
                    ? 'text-orange-400'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Research;