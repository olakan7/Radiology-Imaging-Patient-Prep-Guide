import React, { useState } from 'react';
import { useExamStore } from '../store/useExamStore';
import { useFeedbackStore } from '../store/useFeedbackStore';
import { Star, StarOff } from 'lucide-react';

export const FeedbackForm: React.FC = () => {
  const { selectedExam } = useExamStore();
  const { addFeedback } = useFeedbackStore();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addFeedback({
      examType: selectedExam,
      rating,
      comment,
    });
    setRating(0);
    setComment('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rate your experience
        </label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              onMouseEnter={() => setHoveredRating(value)}
              onMouseLeave={() => setHoveredRating(0)}
              className="focus:outline-none"
            >
              {value <= (hoveredRating || rating) ? (
                <Star className="w-6 h-6 text-yellow-400" />
              ) : (
                <StarOff className="w-6 h-6 text-gray-300" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700"
        >
          Your feedback
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Share your experience and suggestions..."
        />
      </div>

      <button
        type="submit"
        disabled={rating === 0 || !comment.trim()}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Submit Feedback
      </button>

      {submitted && (
        <div className="text-green-600 text-center">
          Thank you for your feedback!
        </div>
      )}
    </form>
  );
};