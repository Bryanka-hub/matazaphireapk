'use client';

import React from 'react';
import { Info } from 'lucide-react';

interface ScanData {
  taskName: string;
  address: string;
  startDate: string;
  status: 'Completed' | 'In Progress' | 'Failed';
  vulnerabilities: {
    note: number;
    low: number;
    moderate: number;
    high: number;
    critical: number;
  };
}

const CardLatestScan = () => {
  // Data dummy untuk tabel
  const scanData: ScanData[] = [
    {
      taskName: 'VAStudioDevSecOps',
      address: 'https://StudioDevSecOps.com',
      startDate: '07-10-2025, 13:21',
      status: 'Completed',
      vulnerabilities: {
        note: 1,
        low: 2,
        moderate: 11,
        high: 0,
        critical: 0
      }
    },
    {
      taskName: 'VAStudioDevSecOps',
      address: 'https://StudioDevSecOps.com',
      startDate: '07-10-2025, 13:21',
      status: 'Completed',
      vulnerabilities: {
        note: 1,
        low: 2,
        moderate: 11,
        high: 0,
        critical: 0
      }
    },
    {
      taskName: 'VAStudioDevSecOps',
      address: 'https://StudioDevSecOps.com',
      startDate: '07-10-2025, 13:21',
      status: 'Completed',
      vulnerabilities: {
        note: 1,
        low: 2,
        moderate: 11,
        high: 0,
        critical: 0
      }
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 flex items-center border-b gap-4">
        <h2 className="text-lg font-medium text-gray-700">Latest Scan</h2>
        <Info size={18} className="text-black" />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Scan Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                Vulnerabilities
                <Info size={14} className="text-gray-400 ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                History
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {scanData.map((scan, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {scan.taskName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                  <a href={scan.address} target="_blank" rel="noopener noreferrer">
                    {scan.address}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {scan.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {scan.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-1">
                    <span className="w-6 h-6 rounded-full bg-[#8bc34a] flex items-center justify-center text-white text-xs">
                      {scan.vulnerabilities.note}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#ffeb3b] flex items-center justify-center text-white text-xs">
                      {scan.vulnerabilities.low}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#ff9800] flex items-center justify-center text-white text-xs">
                      {scan.vulnerabilities.moderate}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#e53935] flex items-center justify-center text-white text-xs">
                      {scan.vulnerabilities.high}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#9c27b0] flex items-center justify-center text-white text-xs">
                      {scan.vulnerabilities.critical}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t text-right">
        <button className="text-sm text-blue-500 hover:underline">
          View All
        </button>
      </div>
    </div>
  );
};

export default CardLatestScan;