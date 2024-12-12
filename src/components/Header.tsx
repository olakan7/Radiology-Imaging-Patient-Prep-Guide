import React from 'react';
import { useExamStore } from '../store/useExamStore';
import { ArrowLeft, Bell, BellOff, FileX } from 'lucide-react';

export const Header: React.FC = () => {
  const { selectedExam, setSelectedExam, reminders, toggleReminders } = useExamStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {selectedExam && (
              <button
                onClick={() => setSelectedExam(null)}
                className="mr-4 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <div className="flex items-center space-x-3">
              <FileX className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Radiology Imaging Patient Prep Guide</h1>
                <p className="text-sm text-gray-500">Your Complete Preparation Assistant</p>
              </div>
            </div>
          </div>
          <button
            onClick={toggleReminders}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            {reminders ? (
              <Bell className="w-5 h-5 text-blue-600" />
            ) : (
              <BellOff className="w-5 h-5 text-gray-600" />
            )}
            <span className="text-sm">
              {reminders ? 'Reminders On' : 'Reminders Off'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};