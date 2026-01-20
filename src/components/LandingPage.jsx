import React from 'react';
import { Book, Archive, Eye, EyeOff } from 'lucide-react';
import Garden from './Garden';
import { GARDEN_STAGES } from './Garden';

const LandingPage = ({ 
  timerDuration, 
  setTimerDuration, 
  startTimer, 
  setCurrentView, 
  consecutiveDays, 
  stageName,
  previewMode,
  setPreviewMode,
  previewStage,
  setPreviewStage,
  currentStage,
  isDeveloperMode
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Book className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Secret Place Garden</h1>
          <p className="text-sm text-gray-600 italic">
            "Our resting place is anointed and flourishing, like a green forest meadow bathed in light."
          </p>
          <p className="text-xs text-gray-500 mt-2">- Song of Solomon 1:16 TPT</p>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fellowship Duration
          </label>
          <input
            type="range"
            min="30"
            max="120"
            step="15"
            value={timerDuration}
            onChange={(e) => setTimerDuration(parseInt(e.target.value))}
            className="w-full"
          />
          <p className="text-2xl font-bold text-emerald-600 mt-2">{timerDuration} minutes</p>
        </div>

        <button
          onClick={startTimer}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Enter Your Secret Place
        </button>

        <button
          onClick={() => setCurrentView('archive')}
          className="w-full mt-3 bg-gray-100 text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
        >
          <Archive className="w-5 h-5" />
          View Archive
        </button>

        <div className="mt-6 p-4 bg-emerald-50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-700 font-medium">Your Garden Progress</p>
            {isDeveloperMode && (
                <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                previewMode 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {previewMode ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              {previewMode ? 'Preview ON' : 'Preview'}
            </button>
            )}
          </div>
          
          {previewMode ? (
            <>
              <div className="mb-4">
                <Garden stage={previewStage} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <button
                  onClick={() => setPreviewStage(Math.max(0, previewStage - 1))}
                  disabled={previewStage === 0}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setPreviewStage(Math.min(8, previewStage + 1))}
                  disabled={previewStage === 8}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
                >
                  Next →
                </button>
              </div>
              <p className="text-sm font-bold text-purple-600">Stage {previewStage + 1}: {GARDEN_STAGES[previewStage].name}</p>
              <p className="text-xs text-gray-500 mt-1">
                Unlocks at {GARDEN_STAGES[previewStage].days === Infinity ? '150+' : GARDEN_STAGES[previewStage].days} days
              </p>
            </>
          ) : (
            <>
              <p className="text-3xl font-bold text-emerald-600">{consecutiveDays} Days</p>
              <p className="text-xs text-gray-600 mt-1">{stageName}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;