'use client';

import React, { useState } from 'react';
import { Trash2, Share2, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import RiskAssesmentSidebar from './components/RiskAssesmentSidebar';
import RiskAssesmentForm from './components/RiskAssesmentForm';

export default function AddAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <div className="flex flex-col w-full h-full">
      {/* Action buttons */}
      <div className="border-b mb-4">
        <div className="flex justify-between items-center">
          <Link href="/dashboard/targets">
            <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200">
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          </Link>
          
          <div className="flex gap-3 items-center">
            <button 
              className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50"
            >
              <Trash2 size={16} />
              <span>Delete</span>
            </button>
            
            {/* Garis vertikal */}
            <div className="h-8 w-px bg-blue-500"></div>
            
            <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
              <Share2 size={16} />
              <span>Share</span>
            </button>
            
            <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-1">
        <RiskAssesmentSidebar currentStep={currentStep} />
        <RiskAssesmentForm 
          currentStep={currentStep} 
          setCurrentStep={setCurrentStep} 
        />
      </div>
    </div>
  );
}