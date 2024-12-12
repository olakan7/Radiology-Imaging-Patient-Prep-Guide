import React from 'react';
import { useExamStore } from '../store/useExamStore';
import { NOTIFICATION_TIMES, requestNotificationPermission } from '../services/notificationService';
import { Bell, BellOff, Check, X } from 'lucide-react';

export const ReminderSettings: React.FC = () => {
  const { reminders, toggleReminders } = useExamStore();

  const handleToggleReminders = async () => {
    if (!reminders) {
      const granted = await requestNotificationPermission();
      if (granted) {
        toggleReminders();
      }
    } else {
      toggleReminders();
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Appointment Reminders</h3>
        <button
          onClick={handleToggleReminders}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          {reminders ? (
            <>
              <Bell className="w-5 h-5 text-blue-600" />
              <span className="text-sm">Reminders On</span>
            </>
          ) : (
            <>
              <BellOff className="w-5 h-5 text-gray-600" />
              <span className="text-sm">Reminders Off</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-2">
        {NOTIFICATION_TIMES.map(({ minutes, label }) => (
          <div
            key={minutes}
            className="flex items-center space-x-2 text-gray-600"
          >
            {reminders ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <X className="w-4 h-4 text-gray-400" />
            )}
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};