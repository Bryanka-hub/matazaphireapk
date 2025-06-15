'use client';

import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ScanResult from './components/ScanResult';
import HistoryScan from './components/HistoryScan';

export default function ScanInformationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const targetName = searchParams.get('target') || 'VAStudioDevSecOps';
  const targetUrl = searchParams.get('url') || 'https://VAStudioDevSecOps';
  
  const [activeTab, setActiveTab] = useState<'scan-result' | 'history-scan'>('scan-result');

  const handleBack = () => {
    router.back();
  };

  const handleDelete = () => {
    // Logic untuk delete target
    console.log('Delete target');
  };

  const handleReport = () => {
    // Logic untuk generate report
    console.log('Generate report');
  };

  const handleStop = () => {
    // Logic untuk stop scan
    console.log('Stop scan');
  };

  const handleReScan = () => {
    // Logic untuk rescan
    console.log('ReScan target');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header dengan Back Button dan Action Buttons */}
      <div className="flex items-center justify-between">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-300 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>

          <button
            onClick={handleReport}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-300 hover:bg-blue-50 rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Report
          </button>

          <button
            onClick={handleStop}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
            Stop
          </button>

          <button
            onClick={handleReScan}
            className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            ReScan
          </button>
        </div>
      </div>

      {/* Scan Information Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl text-black font-semibold mb-6">Scan Information :</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Scan Details */}
          <div className="space-y-4">
            <div className="flex">
              <span className="w-32 text-gray-600">Name</span>
              <span className="text-gray-600">:</span>
              <span className="ml-2 text-gray-900">{targetName}</span>
            </div>
            
            <div className="flex">
              <span className="w-32 text-gray-600">Url</span>
              <span className="text-gray-600">:</span>
              <a href={targetUrl} className="ml-2 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {targetUrl}
              </a>
            </div>
            
            <div className="flex">
              <span className="w-32 text-gray-600">Schedule Scan</span>
              <span className="text-gray-600">:</span>
              <span className="ml-2 text-gray-900">Daily</span>
            </div>
            
            <div className="flex">
              <span className="w-32 text-gray-600">Status</span>
              <span className="text-gray-600">:</span>
              <span className="ml-2 text-gray-900 font-semibold">Completed</span>
            </div>
          </div>

          {/* Right side - Chart */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Critical</span>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div className="bg-red-500 h-6 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">High</span>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div className="bg-red-400 h-6 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Moderate</span>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div className="bg-orange-500 h-6 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Low</span>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div className="bg-yellow-500 h-6 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Note</span>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div className="bg-green-500 h-6 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Scale numbers */}
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1</span>
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
              <span>25</span>
              <span>30</span>
              <span>35</span>
              <span>40</span>
              <span>45</span>
              <span>50</span>
              <span>55</span>
              <span>60</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('scan-result')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === 'scan-result'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Scan Result
            </button>
            <button
              onClick={() => setActiveTab('history-scan')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === 'history-scan'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              History Scan
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'scan-result' && <ScanResult />}
          {activeTab === 'history-scan' && <HistoryScan />}
        </div>
      </div>
    </div>
  );
}
