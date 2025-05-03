'use client';

import React from 'react';

interface RiskAssesmentSidebarProps {
  currentStep: number;
}

export default function RiskAssesmentSidebar({ currentStep }: RiskAssesmentSidebarProps) {
  const steps = [
    { id: 1, title: 'About Assets' },
    { id: 2, title: 'Threat Agent Factors' },
    { id: 3, title: 'Vulnerability Factors' },
    { id: 4, title: 'Technical Impact Factors' },
    { id: 5, title: 'Business Impact Factors' },
  ];

  return (
    <div className="w-72 h-full bg-white p-6 rounded-lg shadow-sm text-gray-700">
      <h2 className="text-xl font-bold mb-8">Risk Assessment</h2>
      <div className="flex flex-col">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            <div className="flex items-start mb-8">
              {/* Circle with number */}
              <div className="relative">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep === step.id || currentStep > step.id
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.id}
                </div>
                
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div 
                    className={`absolute top-10 left-1/2 w-0.5 h-12 -translate-x-1/2 ${
                      currentStep > step.id 
                        ? 'bg-blue-500' 
                        : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
              
              {/* Step title */}
              <div className="ml-4">
                <span 
                  className={`font-bold text-base ${
                    currentStep === step.id || currentStep > step.id
                      ? 'text-black' 
                      : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}