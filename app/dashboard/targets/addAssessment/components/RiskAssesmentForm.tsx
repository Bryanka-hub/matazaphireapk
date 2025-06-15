'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Step1AboutAssets from './steps/Step1AboutAssets';
import Step2ThreatAgentFactors from './steps/Step2ThreatAgentFactors';
import Step3VulnerabilityFactors from './steps/Step3VulnerabilityFactors';
import Step4TechnicalImpactFactors from './steps/Step4TechnicalImpactFactors';
import Step5BusinessImpactFactors from './steps/Step5BusinessImpactFactors';
import SimpanConfirmation from './SimpanConfirmation';
import AsetSerupa from './AsetSerupa';

interface RiskAssesmentFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export default function RiskAssesmentForm({
  currentStep,
  setCurrentStep
}: RiskAssesmentFormProps) {
  const router = useRouter();
  
  // State untuk modal
  const [showSimpanConfirmation, setShowSimpanConfirmation] = useState(false);
  const [showAsetSerupa, setShowAsetSerupa] = useState(false);

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

  // Handle submit button click (bukan form submit)
  const handleSubmitClick = () => {
    // Munculin modal konfirmasi simpan
    setShowSimpanConfirmation(true);
  };

  // Handle konfirmasi simpan dari modal
  const handleConfirmSimpan = () => {
    setShowSimpanConfirmation(false);
    
    // Simulasi cek duplikasi data
    // Aku set random buat simulasi (50% chance ada duplikasi)
    const isDuplicate = Math.random() > 0.5;
    
    if (isDuplicate) {
      // Kalau ada duplikasi, munculin modal aset serupa
      setShowAsetSerupa(true);
    } else {
      // Kalau ga ada duplikasi, langsung simpan dan redirect
      console.log('Assessment submitted successfully');
      router.push('/dashboard/targets');
    }
  };

  // Handle delete asset dari modal aset serupa
  const handleDeleteAsset = () => {
    setShowAsetSerupa(false);
    console.log('Asset deleted, proceeding with save');
    // Lanjutkan proses simpan setelah delete
    router.push('/dashboard/targets');
  };

  // Handle close modal
  const handleCloseModal = () => {
    setShowSimpanConfirmation(false);
    setShowAsetSerupa(false);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return <Step1AboutAssets />;
      case 2: return <Step2ThreatAgentFactors />;
      case 3: return <Step3VulnerabilityFactors />;
      case 4: return <Step4TechnicalImpactFactors />;
      case 5: return <Step5BusinessImpactFactors />;
      default: return <Step1AboutAssets />;
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

      <div className="mb-8">{renderStepContent()}</div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
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

        {currentStep === 5 ? (
          <button
            type="button"
            onClick={handleSubmitClick}
            className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={nextStep}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            Next
          </button>
        )}
      </div>

      {/* Modal Komponens */}
      <SimpanConfirmation
        isOpen={showSimpanConfirmation}
        onClose={handleCloseModal}
        onConfirm={handleConfirmSimpan}
      />

      <AsetSerupa
        isOpen={showAsetSerupa}
        onClose={handleCloseModal}
        onDeleteAsset={handleDeleteAsset}
      />
    </div>
  );
}
