import React, { PureComponent } from 'react'

export class sidebar2 extends PureComponent {
  render() {
  return (
    <div className="w-1/4 bg-gray-300 shadow-md">
      {this.props.selectedOption === 'Select Voice' && (
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
          <div className="p-4 overflow-y-auto h-full">
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
                      {voice === 'Mark' || voice === 'Sam' ? 'Male' : 'Female'}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}



}

export default sidebar2