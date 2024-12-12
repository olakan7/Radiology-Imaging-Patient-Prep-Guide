import React from 'react';
import { useFeedbackStore } from '../store/useFeedbackStore';
import { format } from 'date-fns';
import { ThumbsUp, ThumbsDown, Star } from 'lucide-react';

export const FeedbackList: React.FC = () => {
  const { feedbacks, voteFeedback } = useFeedbackStore();

  if (feedbacks.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500">
        No feedback yet. Be the first to share your experience!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`w-4 h-4 ${
                      index < feedback.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {format(new Date(feedback.createdAt), 'PPp')}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => voteFeedback(feedback.id, true)}
                className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600"
              >
                <ThumbsUp className="w-4 h-4" />
                <span>{feedback.helpful}</span>
              </button>
              <button
                onClick={() => voteFeedback(feedback.id, false)}
                className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600"
              >
                <ThumbsDown className="w-4 h-4" />
                <span>{feedback.notHelpful}</span>
              </button>
            </div>
          </div>
          <p className="text-gray-700">{feedback.comment}</p>
          {feedback.examType && (
            <div className="mt-2">
              <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded">
                {feedback.examType.toUpperCase()}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};