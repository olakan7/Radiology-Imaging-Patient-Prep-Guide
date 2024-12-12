import React, { useState } from 'react';
import { useExamStore } from '../store/useExamStore';
import { format } from 'date-fns';
import { Calendar, MapPin, Clock, Building2 } from 'lucide-react';
import { scheduleAppointmentReminders } from '../services/notificationService';

export const AppointmentForm: React.FC = () => {
  const { selectedExam, addAppointment, reminders } = useExamStore();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [imagingCenter, setImagingCenter] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  if (!selectedExam) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateTime = new Date(`${date}T${time}`);
    
    const appointment = {
      examType: selectedExam,
      date: dateTime,
      imagingCenter,
      location,
      notes,
    };

    const newAppointment = addAppointment(appointment);

    if (reminders) {
      scheduleAppointmentReminders(newAppointment);
    }

    // Reset form
    setDate('');
    setTime('');
    setImagingCenter('');
    setLocation('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <div className="mt-1 relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Time
        </label>
        <div className="mt-1 relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Imaging Center Name
        </label>
        <div className="mt-1 relative">
          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            required
            value={imagingCenter}
            onChange={(e) => setImagingCenter(e.target.value)}
            placeholder="Enter imaging center name"
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <div className="mt-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter imaging center address"
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Any special instructions or notes"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Schedule Appointment
      </button>
    </form>
  );
};