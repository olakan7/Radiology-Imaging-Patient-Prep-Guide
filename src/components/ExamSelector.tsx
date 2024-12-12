import React from 'react';
import { useExamStore } from '../store/useExamStore';
import { examData } from '../data/examData';
import { ExamType } from '../types/exam';
import { ScanFace, Syringe, Stethoscope, FileX } from 'lucide-react';

const examIcons = {
  mri: ScanFace,
  ct: Syringe,
  ultrasound: Stethoscope,
  xray: FileX,
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const ExamSelector: React.FC = () => {
  const { setSelectedExam } = useExamStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {examData.map((exam) => {
        const Icon = examIcons[exam.type];
        return (
          <button
            key={exam.type}
            onClick={() => setSelectedExam(exam.type)}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <Icon className="w-8 h-8 text-blue-600" />
              <div className="text-left">
                <h3 className="text-lg font-semibold">{exam.name}</h3>
                <p className="text-sm text-gray-600">{exam.duration}</p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-600">
                    Without Insurance: {formatCurrency(exam.cost.min)} - {formatCurrency(exam.cost.max)}
                  </p>
                  {exam.cost.withInsurance && (
                    <p className="text-sm text-green-600">
                      With Insurance: {formatCurrency(exam.cost.withInsurance.min)} - {formatCurrency(exam.cost.withInsurance.max)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};