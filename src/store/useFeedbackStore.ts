import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Feedback, FeedbackStore } from '../types/feedback';

export const useFeedbackStore = create<FeedbackStore>()(
  persist(
    (set) => ({
      feedbacks: [],
      
      addFeedback: (feedback) =>
        set((state) => ({
          feedbacks: [
            ...state.feedbacks,
            {
              ...feedback,
              id: crypto.randomUUID(),
              createdAt: new Date(),
              helpful: 0,
              notHelpful: 0,
            },
          ],
        })),

      voteFeedback: (id, isHelpful) =>
        set((state) => ({
          feedbacks: state.feedbacks.map((feedback) =>
            feedback.id === id
              ? {
                  ...feedback,
                  helpful: isHelpful
                    ? feedback.helpful + 1
                    : feedback.helpful,
                  notHelpful: !isHelpful
                    ? feedback.notHelpful + 1
                    : feedback.notHelpful,
                }
              : feedback
          ),
        })),
    }),
    {
      name: 'radiology-feedback',
    }
  )
);