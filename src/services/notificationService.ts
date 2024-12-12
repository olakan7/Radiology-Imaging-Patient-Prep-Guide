import { Appointment } from '../types/exam';
import { differenceInMinutes, addMinutes, format } from 'date-fns';

export const NOTIFICATION_TIMES = [
  { minutes: 24 * 60, label: '1 day before', sound: 'notification-1.mp3' },
  { minutes: 60, label: '1 hour before', sound: 'notification-2.mp3' },
  { minutes: 30, label: '30 minutes before', sound: 'notification-3.mp3' },
  { minutes: 15, label: '15 minutes before', sound: 'notification-4.mp3' },
  { minutes: 5, label: '5 minutes before', sound: 'urgent-notification.mp3' },
];

const playNotificationSound = (soundFile: string) => {
  const audio = new Audio(`/sounds/${soundFile}`);
  audio.play().catch(error => console.error('Error playing notification sound:', error));
};

export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  const permission = await Notification.requestPermission();
  return permission === 'granted';
};

export const scheduleAppointmentReminders = (appointment: Appointment) => {
  if (!('Notification' in window) || Notification.permission !== 'granted') {
    return;
  }

  NOTIFICATION_TIMES.forEach(({ minutes, sound }) => {
    const notificationTime = addMinutes(new Date(appointment.date), -minutes);
    const now = new Date();

    if (notificationTime > now) {
      const timeoutMs = notificationTime.getTime() - now.getTime();
      setTimeout(() => {
        playNotificationSound(sound);
        new Notification(`Upcoming ${appointment.examType.toUpperCase()} Appointment`, {
          body: `Your appointment at ${appointment.imagingCenter} is in ${minutes} minutes.\nLocation: ${appointment.location}\nTime: ${format(appointment.date, 'PPp')}`,
          icon: '/notification-icon.png',
          badge: '/badge-icon.png',
          vibrate: [200, 100, 200],
          requireInteraction: true,
        });
      }, timeoutMs);
    }
  });
};

export const sendEquipmentAlert = (examType: string, message: string) => {
  if (Notification.permission === 'granted') {
    playNotificationSound('equipment-alert.mp3');
    new Notification(`${examType} Equipment Alert`, {
      body: message,
      icon: '/alert-icon.png',
      badge: '/alert-badge.png',
      vibrate: [100, 50, 100, 50, 100],
      requireInteraction: true,
    });
  }
};