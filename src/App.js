import React, { useState } from 'react';
import { ReactComponent as LogoSvg } from './Sound-Wave.svg'; // Use ReactComponent import for SVG
import { ReactComponent as SettingsSvg } from './icons8-settings.svg';
import { ReactComponent as CartSvg } from './reshot-icon-calendar-RTYJNSX56M.svg';
import { ReactComponent as OtherSvg } from './svgviewer-output.svg';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('Select Voice');

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Primary Sidebar */}
      <div className="w-16 bg-white text-white flex flex-col items-center py-4">
        {/* Logo */}
        <div
          onClick={() => setSelectedOption('Select Voice')}
          className={`cursor-pointer mb-6 ${selectedOption === 'Select Voice' ? 'bg-purple-300 rounded-md' : 'bg-white'}`}
        >
          <LogoSvg className="w-12 h-12" />
        </div>
        <div
          onClick={() => setSelectedOption('Settings')}
          className={`cursor-pointer mb-6 ${selectedOption === 'Settings' ? 'bg-purple-300 rounded-md ' : 'bg-white'}`}
        >
          <SettingsSvg className="w-12 h-12" />
        </div>
        <div
          onClick={() => setSelectedOption('Cart')}
          className={`cursor-pointer mb-6 ${selectedOption === 'Cart' ? 'bg-purple-300 rounded-md' : 'bg-white'}`}
        >
          <CartSvg className="w-12 h-12" />
        </div>
        <div
          onClick={() => setSelectedOption('Other')}
          className={`cursor-pointer ${selectedOption === 'Other' ? 'bg-purple-300 rounded-md' : 'bg-white'}`}
        >
          <OtherSvg className="w-12 h-12" />
        </div>
      </div>

      {/* Secondary Sidebar */}
      <div className="w-1/4 bg-gray-300 shadow-md">
        {selectedOption === 'Select Voice' && (
          <div>
            <div className="p-4 border-b">
              <div className="text-black text-2xl font-bold flex items-center justify-center">
                Select Voice
              </div>
              <input
                type="text"
                placeholder="Search Voice/Language"
                className="mt-2 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="p-4 overflow-y-auto h-full ">
              {['English', 'Spanish', 'French'].map((language, index) => (
                <div key={index} className="mb-4">
                  <div className="font-semibold text-gray-700 mb-2">
                    {language}
                  </div>
                  {['Marie', 'Sarah', 'Mark', 'Sam'].map((voice, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 mb-1 bg-purple-100 rounded cursor-pointer hover:bg-purple-200 font-bold text-black hover:scale-105 transition-all duration-300"
                    >
                      <span>{voice}</span>
                      <span className="text-sm text-black border-2 rounded px-2 border-purple-600 bg-purple-500 hover:scale-105 transition-all duration-300">
                        {voice === 'Mark' || voice === 'Sam'
                          ? 'Male'
                          : 'Female'}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedOption === 'Settings' && (
          <div className="p-4">
            <div className="w-1/4 bg-white shadow-md">
              <div className="p-4 border-b">
                <div className="text-purple-600 text-2xl font-bold flex items-center">
                  <span className="material-icons mr-2">Settings</span>
                
                </div>
              </div>

              <div className="p-4 overflow-y-auto h-full">
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Playback Speed
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    defaultValue="1"
                    className="w-full"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Volume
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    defaultValue="50"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pitch
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    defaultValue="1"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedOption === 'Cart' && (
          <div className="p-4">
            <h2 className="text-2xl font-bold text-purple-600">Cart</h2>
            <p className="mt-2 text-gray-600">Your cart is empty.</p>
          </div>
        )}

        {selectedOption === 'Other' && (
          <div className="p-4">
            <h2 className="text-2xl font-bold text-purple-600">Other</h2>
            <p className="mt-2 text-gray-600">
              Additional content or features can go here.
            </p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-purple-600 text-white py-4 px-6 text-xl font-bold">
          Agent Name
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-black text-2xl font-bold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter agent name"
              className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-black text-2xl font-bold mb-2">Prompt</label>
            <textarea
              placeholder="Enter your prompt here"
              rows="6"
              className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
