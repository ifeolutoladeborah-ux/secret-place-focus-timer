import React from 'react';
import { Play, Pause, X, AlertCircle, FileText, Mic, Check } from 'lucide-react';

const FocusView = ({
  focusWarning,
  setFocusWarning,
  timeRemaining,
  formatTime,
  isTimerActive,
  setIsTimerActive,
  setCurrentView,
  currentJournal,
  setCurrentJournal,
  saveJournalEntry,
  isRecording,
  startRecording,
  stopRecording,
  voiceNotes
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 p-4">
      {focusWarning && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 animate-pulse">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">Stay focused! Timer paused.</span>
          <button onClick={() => setFocusWarning(false)} className="ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Fellowship Time</h2>
            <div className="text-4xl font-bold text-emerald-600">
              {formatTime(timeRemaining)}
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setIsTimerActive(!isTimerActive)}
              className="flex-1 bg-emerald-500 text-white py-3 rounded-xl font-medium hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
            >
              {isTimerActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isTimerActive ? 'Pause' : 'Resume'}
            </button>
            <button
              onClick={() => setCurrentView('landing')}
              className="px-6 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all"
            >
              Exit
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              Journal
            </h3>
            <textarea
              value={currentJournal}
              onChange={(e) => setCurrentJournal(e.target.value)}
              placeholder="Write your thoughts and prayers..."
              className="w-full h-64 p-4 border-2 border-gray-200 rounded-xl resize-none focus:border-emerald-500 focus:outline-none"
            />
            <button
              onClick={saveJournalEntry}
              className="w-full mt-3 bg-emerald-500 text-white py-2 rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              Save Entry
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Mic className="w-5 h-5 text-emerald-600" />
              Voice Notes
            </h3>
            <div className="flex flex-col items-center justify-center h-64">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                  isRecording 
                    ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                    : 'bg-emerald-500 hover:bg-emerald-600'
                }`}
              >
                <Mic className="w-12 h-12 text-white" />
              </button>
              <p className="mt-4 text-gray-600">
                {isRecording ? 'Recording...' : 'Tap to record'}
              </p>
            </div>
            <div className="mt-4 max-h-32 overflow-y-auto">
              {voiceNotes.slice(-3).reverse().map((note) => (
                <div key={note.id} className="mb-2">
                  <audio src={note.url} controls className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusView;