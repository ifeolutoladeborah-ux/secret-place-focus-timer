import React, { useState, useEffect, useRef } from 'react';
import LandingPage from './components/LandingPage';
import FocusView from './components/FocusView';
import CelebrationView from './components/CelebrationView';
import ArchiveView from './components/ArchiveView';
import { GARDEN_STAGES } from './components/Garden';
import './storageUtils';

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [timerDuration, setTimerDuration] = useState(30);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [consecutiveDays, setConsecutiveDays] = useState(0);
  const [journalEntries, setJournalEntries] = useState([]);
  const [voiceNotes, setVoiceNotes] = useState([]);
  const [currentJournal, setCurrentJournal] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [focusWarning, setFocusWarning] = useState(false);
  const [isDeveloperMode, setIsDeveloperMode] = useState(true); // Set to false for production
  const [previewMode, setPreviewMode] = useState(false);
  const [previewStage, setPreviewStage] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const daysData = await window.storage.get('consecutive-days');
        const entriesData = await window.storage.get('journal-entries');
        const voiceData = await window.storage.get('voice-notes');
        
        if (daysData) setConsecutiveDays(parseInt(daysData.value) || 0);
        if (entriesData) setJournalEntries(JSON.parse(entriesData.value) || []);
        if (voiceData) setVoiceNotes(JSON.parse(voiceData.value) || []);
      } catch (error) {
        console.log('First time user or loading error');
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isTimerActive) {
        setFocusWarning(true);
        setIsTimerActive(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isTimerActive]);

  useEffect(() => {
    let interval;
    if (isTimerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeRemaining]);

  const getCurrentStage = () => {
    for (let i = 0; i < GARDEN_STAGES.length; i++) {
      if (consecutiveDays < GARDEN_STAGES[i].days) {
        return i;
      }
    }
    return GARDEN_STAGES.length - 1;
  };

  const handleTimerComplete = async () => {
    setIsTimerActive(false);
    const newDays = consecutiveDays + 1;
    setConsecutiveDays(newDays);
    await window.storage.set('consecutive-days', newDays.toString());
    setCurrentView('celebration');
  };

  const startTimer = () => {
    setTimeRemaining(timerDuration * 60);
    setIsTimerActive(true);
    setFocusWarning(false);
    setCurrentView('focus');
  };

  const saveJournalEntry = async () => {
    if (!currentJournal.trim()) return;
    
    const entry = {
      id: Date.now(),
      text: currentJournal,
      date: new Date().toISOString()
    };
    
    const updated = [...journalEntries, entry];
    setJournalEntries(updated);
    await window.storage.set('journal-entries', JSON.stringify(updated));
    setCurrentJournal('');
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        const note = {
          id: Date.now(),
          url: audioUrl,
          date: new Date().toISOString()
        };
        
        const updated = [...voiceNotes, note];
        setVoiceNotes(updated);
        await window.storage.set('voice-notes', JSON.stringify(updated));
        
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentStage = previewMode ? previewStage : getCurrentStage();
  const stageName = GARDEN_STAGES[currentStage].name;

  if (currentView === 'landing') {
    return (
      <LandingPage
        timerDuration={timerDuration}
        setTimerDuration={setTimerDuration}
        startTimer={startTimer}
        setCurrentView={setCurrentView}
        consecutiveDays={consecutiveDays}
        currentStage={currentStage}
        stageName={stageName}
        previewMode={previewMode}
        setPreviewMode={setPreviewMode}
        previewStage={previewStage}
        setPreviewStage={setPreviewStage}
        isDeveloperMode={isDeveloperMode}
      />

    );
  }

  if (currentView === 'focus') {
    return (
      <FocusView
        focusWarning={focusWarning}
        setFocusWarning={setFocusWarning}
        timeRemaining={timeRemaining}
        formatTime={formatTime}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        setCurrentView={setCurrentView}
        currentJournal={currentJournal}
        setCurrentJournal={setCurrentJournal}
        saveJournalEntry={saveJournalEntry}
        isRecording={isRecording}
        startRecording={startRecording}
        stopRecording={stopRecording}
        voiceNotes={voiceNotes}
      />
    );
  }

  if (currentView === 'celebration') {
    return (
      <CelebrationView
        consecutiveDays={consecutiveDays}
        currentStage={currentStage}
        setCurrentView={setCurrentView}
      />
    );
  }

  if (currentView === 'archive') {
    return (
      <ArchiveView
        setCurrentView={setCurrentView}
        currentStage={currentStage}
        consecutiveDays={consecutiveDays}
        journalEntries={journalEntries}
        voiceNotes={voiceNotes}
      />
    );
  }

  return null;
};

export default App;