export interface Feedback {
  id: string;
  examType: string | null;
  rating: number;
  comment: string;
  createdAt: Date;
  helpful: number;
  notHelpful: number;
}

export interface FeedbackStore {
  feedbacks: Feedback[];
  addFeedback: (feedback: Omit<Feedback, 'id' | 'createdAt' | 'helpful' | 'notHelpful'>) => void;
  voteFeedback: (id: string, isHelpful: boolean) => void;
}