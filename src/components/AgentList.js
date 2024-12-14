import React from 'react';
import { ReactComponent as LogoSvg } from './Sound-Wave.svg';
import { ReactComponent as SettingsSvg } from './icons8-settings.svg';
import { ReactComponent as CartSvg } from './reshot-icon-calendar-RTYJNSX56M.svg';
import { ReactComponent as OtherSvg } from './svgviewer-output.svg';

const AgentList = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="w-16 bg-white text-white flex flex-col items-center py-4">
      <div
        onClick={() => setSelectedOption('Select Voice')}
        className={`cursor-pointer mb-6 ${selectedOption === 'Select Voice' ? 'bg-purple-300 rounded-md' : 'bg-white'}`}
      >
        <LogoSvg className="w-12 h-12" />
      </div>
      <div
        onClick={() => setSelectedOption('Settings')}
        className={`cursor-pointer mb-6 ${selectedOption === 'Settings' ? 'bg-purple-300 rounded-md' : 'bg-white'}`}
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
  );
};

export default AgentList;
