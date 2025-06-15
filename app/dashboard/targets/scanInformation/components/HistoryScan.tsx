'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface ScanHistory {
  date: string;
  time: string;
  status: 'Completed';
}

export default function HistoryScan() {
  const scanHistory: ScanHistory[] = [
    { date: '24/04/2025', time: '08:00:00 AM', status: 'Completed' },
    { date: '25/04/2025', time: '08:00:00 AM', status: 'Completed' },
    { date: '26/04/2025', time: '08:00:00 AM', status: 'Completed' },
    { date: '27/04/2025', time: '08:00:00 AM', status: 'Completed' },
    { date: '28/04/2025', time: '08:00:00 AM', status: 'Completed' },
    { date: '29/04/2025', time: '08:00:00 AM', status: 'Completed' },
    { date: '01/05/2025', time: '08:00:00 AM', status: 'Completed' },
    { date: '02/05/2025', time: '08:00:00 AM', status: 'Completed' },
    { date: '03/05/2025', time: '08:00:00 AM', status: 'Completed' }
  ];

  return (
    <div className="bg-blue-500 text-white">
      {/* Header */}
      <div className="px-6 py-3">
        <div className="font-medium">History Schedule</div>
      </div>

      {/* Content */}
      <div className="bg-white text-gray-900 p-6">
        <div className="grid grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-6">
            {scanHistory.slice(0, 3).map((scan, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-sm font-medium text-gray-600 mb-2">{scan.date}</div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <div className="text-xs text-gray-500 mt-1">{scan.time}</div>
                <div className="text-xs text-gray-700 mt-1">{scan.status}</div>
                {index < 2 && <div className="w-px h-8 bg-blue-500 mt-2"></div>}
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {scanHistory.slice(3, 6).map((scan, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-sm font-medium text-gray-600 mb-2">{scan.date}</div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <div className="text-xs text-gray-500 mt-1">{scan.time}</div>
                <div className="text-xs text-gray-700 mt-1">{scan.status}</div>
                {index < 2 && <div className="w-px h-8 bg-blue-500 mt-2"></div>}
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {scanHistory.slice(6, 9).map((scan, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-sm font-medium text-gray-600 mb-2">{scan.date}</div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <div className="text-xs text-gray-500 mt-1">{scan.time}</div>
                <div className="text-xs text-gray-700 mt-1">{scan.status}</div>
                {index < 2 && <div className="w-px h-8 bg-blue-500 mt-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
