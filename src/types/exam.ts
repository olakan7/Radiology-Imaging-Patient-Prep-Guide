export type ExamType = 'mri' | 'ct' | 'ultrasound' | 'xray';

export interface CostRange {
  min: number;
  max: number;
  withInsurance?: {
    min: number;
    max: number;
  };
}

export interface Instruction {
  id: string;
  title: string;
  description: string;
  timeframe: string;
}

export interface ProcedureStep {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ExamPrep {
  type: ExamType;
  name: string;
  description: string;
  duration: string;
  cost: CostRange;
  instructions: Instruction[];
  procedureSteps: ProcedureStep[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface Appointment {
  id: string;
  examType: ExamType;
  date: Date;
  imagingCenter: string;
  location: string;
  notes?: string;
}