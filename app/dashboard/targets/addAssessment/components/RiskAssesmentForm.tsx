'use client';

import React from 'react';
import Step1AboutAssets from './steps/Step1AboutAssets';
import Step2ThreatAgentFactors from './steps/Step2ThreatAgentFactors';
import Step3VulnerabilityFactors from './steps/Step3VulnerabilityFactors';
import Step4TechnicalImpactFactors from './steps/Step4TechnicalImpactFactors';
import Step5BusinessImpactFactors from './steps/Step5BusinessImpactFactors';

interface RiskAssesmentFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export default function RiskAssesmentForm({ 
  currentStep, 
  setCurrentStep 
}: RiskAssesmentFormProps) {
  
  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1AboutAssets />;
      case 2:
        return <Step2ThreatAgentFactors />;
      case 3:
        return <Step3VulnerabilityFactors />;
      case 4:
        return <Step4TechnicalImpactFactors />;
      case 5:
        return <Step5BusinessImpactFactors />;
      default:
        return <Step1AboutAssets />;
    }
  };

  return (
    <div className="w-full h-full p-6 bg-white rounded-lg ml-4 text-gray-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          {currentStep === 1 && 'About Assets'}
          {currentStep === 2 && 'Threat Agent Factors'}
          {currentStep === 3 && 'Vulnerability Factors'}
          {currentStep === 4 && 'Technical Impact Factors'}
          {currentStep === 5 && 'Business Impact Factors'}
        </h2>
      </div>
      
      <div className="mb-8">
        {renderStepContent()}
      </div>
      
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-4 py-2 rounded ${
            currentStep === 1 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Back
        </button>
        
        <button
          onClick={nextStep}
          className={`px-4 py-2 rounded ${
            currentStep === 5
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {currentStep === 5 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}