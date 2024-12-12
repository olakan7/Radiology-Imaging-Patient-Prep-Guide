import React from 'react';
import { useExamStore } from './store/useExamStore';
import { Header } from './components/Header';
import { ExamSelector } from './components/ExamSelector';
import { ExamInstructions } from './components/ExamInstructions';

function App() {
  const { selectedExam } = useExamStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedExam ? <ExamInstructions /> : <ExamSelector />}
      </main>
    </div>
  );
}

export default App;