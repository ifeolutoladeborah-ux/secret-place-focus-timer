import React from 'react';
import { Archive } from 'lucide-react';
import Garden from './Garden';

const ArchiveView = ({ 
  setCurrentView, 
  currentStage, 
  consecutiveDays, 
  journalEntries, 
  voiceNotes 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Archive className="w-7 h-7 text-emerald-600" />
              The Archive
            </h2>
            <button
              onClick={() => setCurrentView('landing')}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300"
            >
              Close
            </button>
          </div>

          <div className="mb-6">
            <Garden stage={currentStage} />
            <p className="text-center mt-4 text-gray-600">
              {consecutiveDays} days of faithful fellowship
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Journal Entries</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {journalEntries.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No entries yet</p>
              ) : (
                journalEntries.slice().reverse().map((entry) => (
                  <div key={entry.id} className="p-4 bg-emerald-50 rounded-xl">
                    <p className="text-xs text-gray-500 mb-2">
                      {new Date(entry.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700">{entry.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Voice Notes</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {voiceNotes.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No recordings yet</p>
              ) : (
                voiceNotes.slice().reverse().map((note) => (
                  <div key={note.id} className="p-4 bg-emerald-50 rounded-xl">
                    <p className="text-xs text-gray-500 mb-2">
                      {new Date(note.date).toLocaleDateString()}
                    </p>
                    <audio src={note.url} controls className="w-full" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveView;