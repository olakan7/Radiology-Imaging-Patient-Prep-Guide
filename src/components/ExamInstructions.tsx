import React from 'react';
import { useExamStore } from '../store/useExamStore';
import { examData } from '../data/examData';
import { CheckCircle, Circle, DollarSign } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';
import { AppointmentList } from './AppointmentList';
import { ReminderSettings } from './ReminderSettings';

export const ExamInstructions: React.FC = () => {
  const { selectedExam, completedSteps, toggleStep } = useExamStore();
  const exam = examData.find((e) => e.type === selectedExam);

  if (!exam) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">{exam.name}</h2>
        <p className="text-gray-600 mb-4">{exam.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">Cost Estimate</span>
            </div>
            <p className="text-gray-800">
              Without Insurance: {formatCurrency(exam.cost.min)} - {formatCurrency(exam.cost.max)}
            </p>
            {exam.cost.withInsurance && (
              <p className="text-green-600">
                With Insurance: {formatCurrency(exam.cost.withInsurance.min)} - {formatCurrency(exam.cost.withInsurance.max)}
              </p>
            )}
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-600 mb-2">Duration</h3>
            <p className="text-gray-800">{exam.duration}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Preparation Instructions</h3>
          {exam.instructions.map((instruction) => (
            <div
              key={instruction.id}
              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <button
                onClick={() => toggleStep(instruction.id)}
                className="mt-1"
              >
                {completedSteps.includes(instruction.id) ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div>
                <h4 className="font-medium">{instruction.title}</h4>
                <p className="text-gray-600">{instruction.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {instruction.timeframe}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Schedule Reminders</h2>
          <AppointmentForm />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Scheduled Reminders</h2>
          <AppointmentList />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Reminder Settings</h2>
        <ReminderSettings />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Procedure Steps</h2>
        <div className="space-y-4">
          {exam.procedureSteps.map((step, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {exam.faqs.map((faq, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};