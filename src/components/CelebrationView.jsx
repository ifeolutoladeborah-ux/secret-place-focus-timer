import React from 'react';
import Garden from './Garden';
import { GARDEN_STAGES } from './Garden';

const CelebrationView = ({ consecutiveDays, currentStage, setCurrentView }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-emerald-600 mb-4">Well Done! 🌱</h1>
        <p className="text-xl text-gray-700 mb-8">
          Day {consecutiveDays} Complete
        </p>
        
        <Garden stage={currentStage} />
        
        <div className="mt-8 p-6 bg-emerald-50 rounded-2xl">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {GARDEN_STAGES[currentStage].name}
          </h3>
          <p className="text-gray-600">
            Your spiritual garden continues to flourish through consistent fellowship.
          </p>
        </div>

        <button
          onClick={() => setCurrentView('landing')}
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-semibold text-lg"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default CelebrationView;