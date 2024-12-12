import { create } from 'zustand';
import { ExamType, Appointment } from '../types/exam';

interface ExamProgress {
  completedSteps: string[];
  selectedExam: ExamType | null;
  reminders: boolean;
  appointments: Appointment[];
}

interface ExamStore extends ExamProgress {
  setSelectedExam: (examType: ExamType | null) => void;
  toggleStep: (stepId: string) => void;
  toggleReminders: () => void;
  resetProgress: () => void;
  addAppointment: (appointment: Omit<Appointment, 'id'>) => void;
  removeAppointment: (id: string) => void;
  updateAppointment: (appointment: Appointment) => void;
}

export const useExamStore = create<ExamStore>((set) => ({
  completedSteps: [],
  selectedExam: null,
  reminders: false,
  appointments: [],

  setSelectedExam: (examType) => set({ selectedExam: examType }),
  
  toggleStep: (stepId) =>
    set((state) => ({
      completedSteps: state.completedSteps.includes(stepId)
        ? state.completedSteps.filter((id) => id !== stepId)
        : [...state.completedSteps, stepId],
    })),

  toggleReminders: () => set((state) => ({ reminders: !state.reminders })),
  
  resetProgress: () => set({ completedSteps: [], reminders: false }),

  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [
        ...state.appointments,
        { ...appointment, id: crypto.randomUUID() },
      ],
    })),

  removeAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.filter((apt) => apt.id !== id),
    })),

  updateAppointment: (appointment) =>
    set((state) => ({
      appointments: state.appointments.map((apt) =>
        apt.id === appointment.id ? appointment : apt
      ),
    })),
}));