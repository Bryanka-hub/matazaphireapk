'use client';

import { ChevronDown, Download, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ScanDailyModal, { ScanFormData } from './components/scanDaily';

interface ScanData {
  name: string;
  url: string;
  schedule: 'Daily' | 'Weekly' | 'Monthly';
  lastScan: string;
  status: 'Not Scanned' | 'Queued' | 'Scanning' | 'Completed' | 'Failed';
}

export default function ScansPage() {
  const [scans, setScans] = useState<ScanData[]>([
    {
      name: 'Web1',
      url: 'https://Websatu.com',
      schedule: 'Daily',
      lastScan: '25-06-2025 (23:00)',
      status: 'Not Scanned'
    },
    {
      name: 'Web2',
      url: 'https://Webdua.com',
      schedule: 'Weekly',
      lastScan: '05-06-2025 (23:00)',
      status: 'Queued'
    },
    {
      name: 'Web3',
      url: 'https://Webtiga.com',
      schedule: 'Monthly',
      lastScan: '01-06-2025 (23:00)',
      status: 'Scanning'
    },
    {
      name: 'Web4',
      url: 'https://Webempat.com',
      schedule: 'Daily',
      lastScan: '23-06-2025 (23:00)',
      status: 'Completed'
    }
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const [isScheduleFilterOpen, setIsScheduleFilterOpen] = useState(false);
  const [isStatusFilterOpen, setIsStatusFilterOpen] = useState(false);
  const [selectedSchedules, setSelectedSchedules] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const toggleSelectItem = (index: number) => {
    setSelectedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === scans.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(scans.map((_, index) => index));
    }
  };

  const handleScanSubmit = (data: ScanFormData) => {
    const newScan: ScanData = {
      name: data.taskName,
      url: data.targetAsset,
      schedule: data.scanFrequency as 'Daily' | 'Weekly' | 'Monthly',
      lastScan: new Date().toLocaleDateString('en-GB') + ' (' + new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) + ')',
      status: 'Queued'
    };
    setScans(prev => [newScan, ...prev]);
  };

  const toggleScheduleFilter = (schedule: string) => {
    setSelectedSchedules(prev => 
      prev.includes(schedule) 
        ? prev.filter(item => item !== schedule) 
        : [...prev, schedule]
    );
  };

  const toggleStatusFilter = (status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) 
        ? prev.filter(item => item !== status) 
        : [...prev, status]
    );
  };

  const renderStatusBadge = (status: ScanData['status']) => {
    switch (status) {
      case 'Not Scanned':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
            Tidak di-scan
          </span>
        );
      case 'Queued':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-800">
            Diantrekan
          </span>
        );
      case 'Scanning':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
            Sedang di-scan
          </span>
        );
      case 'Completed':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800">
            Selesai di-scan
          </span>
        );
      case 'Failed':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded bg-red-100 text-red-800">
            Gagal
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header dan Action buttons */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">SCANS</h1>
        
        <div className="flex gap-3 items-center">
          <button 
            className={`flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50 ${selectedItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={selectedItems.length === 0}
          >
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
          
          <div className="h-8 w-px bg-gray-300"></div>
          
          <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
            <Download size={16} />
            <span>Export</span>
          </button>

          {/* <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
            <StopCircle size={16} />
            <span>Stop</span>
          </button> */}

          {/* <button 
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => setIsScanModalOpen(true)}
          >
            <Play size={16} />
            <span>Scan</span>
          </button> */}
        </div>
      </div>

      {/* Table with enhanced hover and selection effects */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={selectedItems.length === scans.length && scans.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name Assets
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center relative">
                  Schedule
                  <button 
                    className="ml-1 focus:outline-none"
                    onClick={() => {
                      setIsScheduleFilterOpen(!isScheduleFilterOpen);
                      setIsStatusFilterOpen(false);
                    }}
                  >
                    <ChevronDown size={16} className="text-gray-400" />
                  </button>
                  {isScheduleFilterOpen && (
                    <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
                      {['Daily', 'Weekly', 'Monthly'].map((schedule) => (
                        <div key={schedule} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                          <input
                            type="checkbox"
                            id={`schedule-${schedule}`}
                            className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            checked={selectedSchedules.includes(schedule)}
                            onChange={() => toggleScheduleFilter(schedule)}
                          />
                          <label htmlFor={`schedule-${schedule}`} className="text-sm text-gray-700">
                            {schedule}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Scan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center relative">
                  Status
                  <button 
                    className="ml-1 focus:outline-none"
                    onClick={() => {
                      setIsStatusFilterOpen(!isStatusFilterOpen);
                      setIsScheduleFilterOpen(false);
                    }}
                  >
                    <ChevronDown size={16} className="text-gray-400" />
                  </button>
                  {isStatusFilterOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
                      {['Not Scanned', 'Queued', 'Scanning', 'Completed', 'Failed'].map((status) => (
                        <div key={status} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                          <input
                            type="checkbox"
                            id={`status-${status}`}
                            className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            checked={selectedStatuses.includes(status)}
                            onChange={() => toggleStatusFilter(status)}
                          />
                          <label htmlFor={`status-${status}`} className="text-sm text-gray-700">
                            {status === 'Not Scanned' ? 'Tidak di-scan' : 
                             status === 'Queued' ? 'Diantrekan' :
                             status === 'Scanning' ? 'Sedang di-scan' :
                             status === 'Completed' ? 'Selesai di-scan' : 'Gagal'}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {scans.map((scan, index) => (
              <tr 
                key={index} 
                className={`${selectedItems.includes(index) ? 'bg-blue-100' : 'hover:bg-blue-50'} transition-colors duration-150`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedItems.includes(index)}
                    onChange={() => toggleSelectItem(index)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {scan.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                  <a href={scan.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-600">
                    {scan.url}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {scan.schedule}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {scan.lastScan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {renderStatusBadge(scan.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link href={`/dashboard/scans/detail?id=${index}`}>
                    <button className={`px-3 py-1 border rounded-md text-xs transition-colors duration-150 ${
                      selectedItems.includes(index) 
                        ? 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600' 
                        : 'border-blue-500 text-blue-500 hover:bg-blue-50'
                    }`}>
                      Detail
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing 1-5 of 10 entries
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 text-gray-500 rounded-md hover:bg-gray-50 flex items-center">
            <span>Previous</span>
          </button>
          
          <button className="px-3 py-1 border border-blue-500 bg-blue-500 text-white rounded-md">
            1
          </button>
          
          <button className="px-3 py-1 border border-gray-300 text-gray-500 rounded-md">
            ...
          </button>
          
          <button className="px-3 py-1 border border-gray-300 text-gray-500 rounded-md">
            15
          </button>
          
          <button className="px-3 py-1 border border-gray-300 text-gray-500 rounded-md hover:bg-gray-50 flex items-center">
            <span>Next</span>
          </button>
        </div>
      </div>
      
      {/* Modal Scan */}
      <ScanDailyModal 
        isOpen={isScanModalOpen}
        onClose={() => setIsScanModalOpen(false)}
        onSubmit={handleScanSubmit}
      />
    </div>
  );
}