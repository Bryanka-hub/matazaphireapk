'use client';

import { Check, Download, Share2, Trash2, X, Edit, ChevronDown, StopCircle, Play } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import CreateSchedule from './components/CreateSchedule';
import DeleteConfirmation from './components/DeleteConfirmation';
import { useRouter } from 'next/navigation';

interface TargetData {
  name: string;
  url: string;
  riskCategory: 'Low' | 'Moderate' | 'High' | 'Critical';
  createBy: 'Admin' | 'User';
  status: 'Not Scanned' | 'Queued' | 'Scanning' | 'Completed';
  schedule: string;
}

export default function TargetsPage() {
  const router = useRouter();

  // Data dummy untuk tabel sesuai foto
  const [targets, setTargets] = useState<TargetData[]>([
    {
      name: 'Web1',
      url: 'https://Websatu.com',
      riskCategory: 'Low',
      createBy: 'Admin',
      status: 'Not Scanned',
      schedule: '-'
    },
    {
      name: 'Web2',
      url: 'https://Webdua.com',
      riskCategory: 'Moderate',
      createBy: 'User',
      status: 'Queued',
      schedule: '28-06-2025 (23:00)'
    },
    {
      name: 'Web3',
      url: 'https://Webtiga.com',
      riskCategory: 'High',
      createBy: 'Admin',
      status: 'Scanning',
      schedule: '25-06-2025 (19:00)'
    },
    {
      name: 'Web 4',
      url: 'https://Webempat.com',
      riskCategory: 'Critical',
      createBy: 'Admin',
      status: 'Completed',
      schedule: '13-06-2025 (20:00)'
    }
  ]);

  // State untuk checkbox selection
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Handle checkbox selection
  const toggleSelectItem = (index: number) => {
    setSelectedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  // Handle select all
  const toggleSelectAll = () => {
    if (selectedItems.length === targets.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(targets.map((_, index) => index));
    }
  };

  // State untuk dropdown filter
  const [isRiskFilterOpen, setIsRiskFilterOpen] = useState(false);
  const [selectedRisks, setSelectedRisks] = useState<string[]>([]);
  const [isStatusFilterOpen, setIsStatusFilterOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  // Toggle filter functions
  const toggleRiskFilter = (risk: string) => {
    setSelectedRisks(prev => 
      prev.includes(risk) 
        ? prev.filter(item => item !== risk) 
        : [...prev, risk]
    );
  };

  const toggleStatusFilter = (status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) 
        ? prev.filter(item => item !== status) 
        : [...prev, status]
    );
  };

  // Render risk category badge
  const renderRiskBadge = (risk: TargetData['riskCategory']) => {
    switch (risk) {
      case 'Low':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-400 text-white">
            Low
          </span>
        );
      case 'Moderate':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-500 text-white">
            Moderate
          </span>
        );
      case 'High':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-500 text-white">
            High
          </span>
        );
      case 'Critical':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-600 text-white">
            Critical
          </span>
        );
      default:
        return null;
    }
  };

  // Render status badge
  const renderStatusBadge = (status: TargetData['status']) => {
    switch (status) {
      case 'Not Scanned':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center gap-1">
            <X size={12} />
            Tidak di-scan
          </span>
        );
      case 'Queued':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center gap-1">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            Diantrekan
          </span>
        );
      case 'Scanning':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Sedang di-scan
          </span>
        );
      case 'Completed':
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center gap-1">
            <Check size={12} />
            Selesai di-scan
          </span>
        );
      default:
        return null;
    }
  };

  // State untuk modal
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState<TargetData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Handle klik action button
  const handleActionClick = (target: TargetData) => {
    setSelectedTarget(target);
    setIsScheduleModalOpen(true);
  };

  // Handle klik delete button
  const handleDeleteClick = () => {
    if (selectedItems.length > 0) {
      setIsDeleteModalOpen(true);
    }
  };

  // Handle konfirmasi delete
  const handleDeleteConfirm = () => {
    // Logic untuk delete selected items
    const newTargets = targets.filter((_, index) => !selectedItems.includes(index));
    setTargets(newTargets);
    setSelectedItems([]);
    setIsDeleteModalOpen(false);
    
    console.log(`Deleted ${selectedItems.length} items`);
  };

  // Handle scan button click
  const handleScanClick = () => {
    if (selectedItems.length > 0) {
      // Navigate ke scan information page dengan data target pertama yang dipilih
      const firstSelectedTarget = targets[selectedItems[0]];
      router.push(`/dashboard/targets/scanInformation?target=${encodeURIComponent(firstSelectedTarget.name)}&url=${encodeURIComponent(firstSelectedTarget.url)}`);
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Action buttons */}
      <div className="flex justify-between items-center">
        <Link href="/dashboard/targets/addAssessment">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            <span className="text-xl font-bold">+</span>
            <span>Add Assets</span>
          </button>
        </Link>
        
        <div className="flex gap-3 items-center">
          <button 
            onClick={handleDeleteClick}
            className={`flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-md ${
              selectedItems.length === 0 
                ? 'opacity-50 cursor-not-allowed bg-gray-50' 
                : 'hover:bg-red-50'
            }`}
            disabled={selectedItems.length === 0}
          >
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
          
          <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
            <Download size={16} />
            <span>Export</span>
          </button>
          
          <button 
            className={`flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-md ${
              selectedItems.length === 0 
                ? 'opacity-50 cursor-not-allowed bg-gray-50' 
                : 'hover:bg-blue-50'
            }`}
            disabled={selectedItems.length === 0}
          >
            <StopCircle size={16} />
            <span>Stop</span>
          </button>
          
          <button 
            onClick={handleScanClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
              selectedItems.length > 0 
                ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600' 
                : 'border border-blue-500 text-blue-500 hover:bg-blue-50'
            }`}
          >
            <Play size={16} />
            <span>Scan</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
                  <input 
                    type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedItems.length === targets.length && targets.length > 0}
                    onChange={toggleSelectAll}
                  />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name Assets
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Url / Ip
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center relative">
                  Risk Category
                  <button 
                    className="ml-1 focus:outline-none"
                onClick={() => {
                      setIsRiskFilterOpen(!isRiskFilterOpen);
                      setIsStatusFilterOpen(false);
                }}
              >
                    <ChevronDown size={16} className="text-gray-400" />
                </button>
                  {isRiskFilterOpen && (
                    <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
                      {['Low', 'Moderate', 'High', 'Critical'].map((risk) => (
                        <div key={risk} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                          <input
                            type="checkbox"
                            id={`risk-${risk}`}
                            className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            checked={selectedRisks.includes(risk)}
                            onChange={() => toggleRiskFilter(risk)}
                          />
                          <label htmlFor={`risk-${risk}`} className="text-sm text-gray-700">
                            {risk}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Create by
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center relative">
                  Status
                  <button 
                    className="ml-1 focus:outline-none"
                onClick={() => {
                      setIsStatusFilterOpen(!isStatusFilterOpen);
                  setIsRiskFilterOpen(false);
                }}
              >
                    <ChevronDown size={16} className="text-gray-400" />
                </button>
                  {isStatusFilterOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
                      {['Not Scanned', 'Queued', 'Scanning', 'Completed'].map((status) => (
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
                             status === 'Completed' ? 'Selesai di-scan' : status}
                        </label>
                      </div>
                      ))}
                    </div>
                  )}
                  </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Schedule
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {targets.map((target, index) => (
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
                  {target.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                  <a href={target.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-600">
                    {target.url}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {renderRiskBadge(target.riskCategory)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {target.createBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {renderStatusBadge(target.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {target.schedule}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button 
                    onClick={() => handleActionClick(target)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <Edit size={16} />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing 1-5 of 10 entries
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span className="ml-1 cursor-pointer">Previous</span>
          </button>
          
          <button className="px-3 py-1 cursor-pointer border border-blue-500 bg-blue-500 text-white rounded-md">
            1
          </button>
          
          <button className="px-3 py-1 cursor-pointer border border-gray-300 text-gray-500 rounded-md">
            ...
          </button>
          
          <button className="px-3 py-1 cursor-pointer border border-gray-300 text-gray-500 rounded-md">
            15
          </button>
          
          <button className="px-3 cursor-pointer py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 flex items-center">
            <span className="mr-1">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Create Schedule */}
      <CreateSchedule
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        targetData={selectedTarget ? {
          name: selectedTarget.name,
          url: selectedTarget.url
        } : undefined}
      />

      {/* Modal Delete Confirmation */}
      <DeleteConfirmation
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        selectedCount={selectedItems.length}
      />
    </div>
  );
}