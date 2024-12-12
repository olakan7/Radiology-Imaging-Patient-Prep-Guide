import { ExamPrep } from '../types/exam';

export const examData: ExamPrep[] = [
  {
    type: 'mri',
    name: 'Magnetic Resonance Imaging (MRI)',
    description: 'A non-invasive imaging technique that uses magnetic fields and radio waves to create detailed images of organs and tissues.',
    duration: '30-60 minutes',
    cost: {
      min: 1200,
      max: 3000,
      withInsurance: {
        min: 200,
        max: 500
      }
    },
    instructions: [
      {
        id: '1',
        title: 'Remove Metal Objects',
        description: 'Remove all metal objects including jewelry, watches, and clothing with metal fasteners.',
        timeframe: 'Before exam'
      },
      {
        id: '2',
        title: 'Fasting Requirements',
        description: 'Do not eat or drink anything except water for 4-6 hours before the exam.',
        timeframe: '4-6 hours before'
      },
      {
        id: '3',
        title: 'Medication',
        description: 'Take your regular medications as prescribed unless instructed otherwise.',
        timeframe: 'As scheduled'
      }
    ],
    procedureSteps: [
      {
        title: 'Getting Started',
        description: 'You\'ll change into a hospital gown and lie on a padded table that slides into the MRI machine. The technologist will ensure you\'re comfortable with pillows and blankets.'
      },
      {
        title: 'During the Scan',
        description: 'The machine will make loud knocking sounds as it captures images. You\'ll be given earplugs or headphones. It\'s important to lie still during the scanning process.'
      },
      {
        title: 'Communication',
        description: 'You\'ll have a call button to communicate with the technologist, who will check on you regularly through an intercom system.'
      }
    ],
    faqs: [
      {
        question: 'Is MRI painful?',
        answer: 'No, MRI is completely painless. However, you may hear loud knocking sounds during the scan.'
      },
      {
        question: 'How long does it take?',
        answer: 'Most MRI exams take between 30-60 minutes, depending on the area being scanned.'
      },
      {
        question: 'Can I have an MRI if I\'m claustrophobic?',
        answer: 'Yes, but let your doctor know beforehand. They may prescribe anti-anxiety medication or recommend an open MRI machine.'
      }
    ]
  },
  {
    type: 'ct',
    name: 'Computed Tomography (CT)',
    description: 'A computerized X-ray imaging procedure that creates detailed cross-sectional images of the body.',
    duration: '15-30 minutes',
    cost: {
      min: 800,
      max: 2500,
      withInsurance: {
        min: 100,
        max: 400
      }
    },
    instructions: [
      {
        id: '1',
        title: 'Fasting',
        description: 'Do not eat or drink for 4 hours before the exam if contrast material will be used.',
        timeframe: '4 hours before'
      },
      {
        id: '2',
        title: 'Clothing',
        description: 'Wear comfortable, loose-fitting clothing. Metal objects may affect the CT images.',
        timeframe: 'Day of exam'
      },
      {
        id: '3',
        title: 'Medications',
        description: 'Inform your doctor of all medications you\'re taking, especially if you have diabetes.',
        timeframe: 'Before exam'
      }
    ],
    procedureSteps: [
      {
        title: 'Preparation',
        description: 'You may need to change into a hospital gown and remove any metal objects.'
      },
      {
        title: 'Positioning',
        description: 'You\'ll lie on a table that moves through the CT scanner, which looks like a large doughnut.'
      },
      {
        title: 'Scanning',
        description: 'The table will move slowly through the scanner while it takes images. You\'ll need to lie still.'
      }
    ],
    faqs: [
      {
        question: 'Is a CT scan safe?',
        answer: 'CT scans use X-rays, which involve radiation exposure. However, the benefits typically outweigh the risks.'
      },
      {
        question: 'Will I feel anything during the scan?',
        answer: 'The scan itself is painless. If contrast material is used, you may feel a warm sensation.'
      },
      {
        question: 'How should I prepare?',
        answer: 'Follow your doctor\'s instructions about eating and drinking. Wear comfortable clothing without metal.'
      }
    ]
  },
  {
    type: 'ultrasound',
    name: 'Ultrasound',
    description: 'A medical imaging technique that uses high-frequency sound waves to create images of the inside of the body.',
    duration: '20-45 minutes',
    cost: {
      min: 200,
      max: 1000,
      withInsurance: {
        min: 50,
        max: 200
      }
    },
    instructions: [
      {
        id: '1',
        title: 'Fasting',
        description: 'For abdominal ultrasounds, do not eat or drink for 8-12 hours before the exam.',
        timeframe: '8-12 hours before'
      },
      {
        id: '2',
        title: 'Bladder',
        description: 'For pelvic ultrasounds, you may need to arrive with a full bladder.',
        timeframe: '1 hour before'
      },
      {
        id: '3',
        title: 'Clothing',
        description: 'Wear loose, comfortable clothing that allows easy access to the area being examined.',
        timeframe: 'Day of exam'
      }
    ],
    procedureSteps: [
      {
        title: 'Preparation',
        description: 'A gel will be applied to your skin to help transmit the sound waves.'
      },
      {
        title: 'During the Exam',
        description: 'A transducer will be moved over your skin to capture images.'
      },
      {
        title: 'Completion',
        description: 'The gel will be wiped off and you can resume normal activities.'
      }
    ],
    faqs: [
      {
        question: 'Is ultrasound safe?',
        answer: 'Yes, ultrasound is very safe and doesn\'t use radiation.'
      },
      {
        question: 'Will it hurt?',
        answer: 'No, ultrasound exams are painless. You may feel slight pressure from the transducer.'
      },
      {
        question: 'How should I prepare?',
        answer: 'Preparation depends on the type of ultrasound. Follow your doctor\'s specific instructions.'
      }
    ]
  },
  {
    type: 'xray',
    name: 'X-Ray',
    description: 'A quick imaging test that uses small amounts of radiation to produce images of the inside of your body.',
    duration: '5-15 minutes',
    cost: {
      min: 100,
      max: 500,
      withInsurance: {
        min: 20,
        max: 100
      }
    },
    instructions: [
      {
        id: '1',
        title: 'Clothing',
        description: 'Wear comfortable clothing without metal fasteners, jewelry, or other metal items.',
        timeframe: 'Day of exam'
      },
      {
        id: '2',
        title: 'Inform Staff',
        description: 'Tell the technologist if you are or might be pregnant.',
        timeframe: 'Before exam'
      },
      {
        id: '3',
        title: 'Remove Objects',
        description: 'Remove any jewelry, eyeglasses, or metal objects from the area being X-rayed.',
        timeframe: 'Before exam'
      }
    ],
    procedureSteps: [
      {
        title: 'Positioning',
        description: 'You\'ll be positioned based on the area being examined.'
      },
      {
        title: 'During the X-Ray',
        description: 'You\'ll need to stay still while the X-ray is taken. You may be asked to hold your breath.'
      },
      {
        title: 'Completion',
        description: 'Multiple views may be taken from different angles.'
      }
    ],
    faqs: [
      {
        question: 'Is an X-ray safe?',
        answer: 'X-rays use very low doses of radiation. The benefits usually outweigh any risks.'
      },
      {
        question: 'How long does it take?',
        answer: 'Most X-rays take only a few minutes to complete.'
      },
      {
        question: 'Do I need to prepare?',
        answer: 'Usually no special preparation is needed. Just remove any metal objects from the area being X-rayed.'
      }
    ]
  }
];