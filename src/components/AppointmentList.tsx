import React from 'react';
import { useExamStore } from '../store/useExamStore';
import { format } from 'date-fns';
import { Calendar, MapPin, Trash2, Bell, Building2 } from 'lucide-react';

export const AppointmentList: React.FC = () => {
  const { appointments, removeAppointment } = useExamStore();

  if (appointments.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500">
        No appointments scheduled
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>
                  {format(appointment.date, 'PPP')} at{' '}
                  {format(appointment.date, 'p')}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Building2 className="w-4 h-4" />
                <span>{appointment.imagingCenter}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{appointment.location}</span>
              </div>
              {appointment.notes && (
                <p className="text-sm text-gray-500">{appointment.notes}</p>
              )}
            </div>
            <button
              onClick={() => removeAppointment(appointment.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};