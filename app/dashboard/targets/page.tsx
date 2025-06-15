'use client';

import { Check, Download, Info, Share2, Trash2, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

interface TargetData {
  name: string;
  address: string;
  description: string;
  scanDate: string;
  scanStatus: 'Not Scanned' | 'Completed';
  riskRate: 'Low' | 'Medium' | 'Critical' | '-';
}

export default function TargetsPage() {
  // Data dummy untuk tabel targets
  const [targets, setTargets] = useState<TargetData[]>([
    {
      name: 'VAStudioDevSecOps',
      address: 'https://VAStudioDevSecOps',
      description: '-',
      scanDate: '-',
      scanStatus: 'Not Scanned',
      riskRate: '-'
    },
    {
      name: 'VAStudioDevSecOps',
      address: 'https://VAStudioDevSecOps',
      description: '-',
      scanDate: '-',
      scanStatus: 'Not Scanned',
      riskRate: '-'
    },
    {
      name: 'VAStudioDevSecOps',
      address: 'https://VAStudioDevSecOps',
      description: 'Cek vulnerabilities',
      scanDate: '01-02-2025, 18:30',
      scanStatus: 'Completed',
      riskRate: 'Medium'
    },
    {
      name: 'VAStudioDevSecOps',
      address: 'https://VAStudioDevSecOps',
      description: 'Cek vulnerabilities',
      scanDate: '01-02-2025, 18:30',
      scanStatus: 'Completed',
      riskRate: 'Low'
    },
    {
      name: 'VAStudioDevSecOps',
      address: 'https://VAStudioDevSecOps',
      description: 'Cek vulnerabilities',
      scanDate: '01-02-2025, 18:30',
      scanStatus: 'Completed',
      riskRate: 'Critical'
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
    } else if (selectedItems.length > 0) {
      // Jika beberapa item sudah dipilih tapi tidak semua, kosongkan selection
      setSelectedItems([]);
    } else {
      setSelectedItems(targets.map((_, index) => index));
    }
  };

  // Cek apakah checkbox header dalam keadaan indeterminate
  const isIndeterminate = selectedItems.length > 0 && selectedItems.length < targets.length;

  // Render risk rate badge based on level
  const renderRiskBadge = (risk: string) => {
    if (risk === '-') return <span>-</span>;
    
    return (
      <div className="flex items-center">
        <span className={`w-2 h-2 rounded-full ${
          risk === 'Low' ? 'bg-yellow-500' : 
          risk === 'Medium' ? 'bg-orange-500' : 
          'bg-purple-800'
        } mr-2`}></span>
        <span className={`${
          risk === 'Low' ? 'text-yellow-500' : 
          risk === 'Medium' ? 'text-orange-500' : 
          'text-purple-800'
        }`}>{risk}</span>
      </div>
    );
  };

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  const totalEntries = 10; // Total data yang ada

  // State untuk dropdown filter Risk Rate dan Scan Status
  const [isRiskFilterOpen, setIsRiskFilterOpen] = useState(false);
  const [selectedRisks, setSelectedRisks] = useState<string[]>([]);
  const [isScanStatusFilterOpen, setIsScanStatusFilterOpen] = useState(false);
  const [selectedScanStatuses, setSelectedScanStatuses] = useState<string[]>([]);
  const [isScanDateFilterOpen, setIsScanDateFilterOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('Maret 2025');
  const [startDate, setStartDate] = useState<number | null>(10);
  const [endDate, setEndDate] = useState<number | null>(17);
  const [dateSelectionMode, setDateSelectionMode] = useState<'start' | 'end'>('start');

  // Toggle risk filter selection
  const toggleRiskFilter = (risk: string, e: React.MouseEvent | React.ChangeEvent<HTMLInputElement>) => {
    // Prevent event from bubbling up to parent elements
    e.stopPropagation();
    setSelectedRisks(prev => 
      prev.includes(risk) 
        ? prev.filter(item => item !== risk) 
        : [...prev, risk]
    );
  };

  // Toggle scan status filter selection
  const toggleScanStatusFilter = (status: string, e: React.MouseEvent | React.ChangeEvent<HTMLInputElement>) => {
    // Prevent event from bubbling up to parent elements
    e.stopPropagation();
    setSelectedScanStatuses(prev => 
      prev.includes(status) 
        ? prev.filter(item => item !== status) 
        : [...prev, status]
    );
  };

  // Handle date selection
  const handleDateClick = (date: number, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (dateSelectionMode === 'start') {
      setStartDate(date);
      setDateSelectionMode('end');
    } else {
      // Ensure end date is after start date
      if (startDate !== null && date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
      setDateSelectionMode('start');
    }
  };

  // Check if a date is in the selected range
  const isInDateRange = (date: number) => {
    if (startDate === null || endDate === null) return false;
    return date >= startDate && date <= endDate;
  };

  // Close dropdowns when clicking outside
  const closeDropdowns = () => {
    setIsRiskFilterOpen(false);
    setIsScanStatusFilterOpen(false);
    setIsScanDateFilterOpen(false);
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
            className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50"
            disabled={selectedItems.length === 0}
          >
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
          
          {/* Garis vertikal merah */}
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

      {/* Table */}
      <div className="rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <th className="px-6 py-3 text-left">
                <div className="relative">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4" 
                    checked={selectedItems.length === targets.length && targets.length > 0}
                    ref={el => {
                      if (el) {
                        el.indeterminate = isIndeterminate;
                      }
                    }}
                    onChange={toggleSelectAll}
                  />
                  {isIndeterminate && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-2 h-0.5 bg-gray-500"></div>
                    </div>
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name Targets
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer relative"
                onClick={() => {
                  setIsScanDateFilterOpen(!isScanDateFilterOpen);
                  setIsRiskFilterOpen(false);
                  setIsScanStatusFilterOpen(false);
                }}
              >
                Scan Date
                <button className="ml-1 inline-flex">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isScanDateFilterOpen && (
                  <div className="absolute mt-2 bg-white border border-gray-200 shadow-lg rounded-md p-3 z-10 w-72" onClick={e => e.stopPropagation()}>
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-medium">{selectedMonth}</div>
                      <div className="flex space-x-2">
                        <button className="p-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="p-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mb-2 text-center">
                      {dateSelectionMode === 'start' ? 'Pilih tanggal awal' : 'Pilih tanggal akhir'}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      <div className="text-gray-500">M</div>
                      <div className="text-gray-500">T</div>
                      <div className="text-gray-500">W</div>
                      <div className="text-gray-500">T</div>
                      <div className="text-gray-500">F</div>
                      <div className="text-gray-500">S</div>
                      <div className="text-gray-500">S</div>
                      
                      {/* Hari-hari dalam bulan */}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => (
                        <div 
                          key={day} 
                          className={`w-8 h-8 flex items-center justify-center cursor-pointer ${
                            startDate === day ? 'rounded-full border-2 border-blue-500' : 
                            endDate === day ? 'bg-blue-500 text-white rounded-full' : 
                            isInDateRange(day) ? 'bg-blue-50' : ''
                          }`}
                          onClick={(e) => handleDateClick(day, e)}
                        >
                          {day}
                        </div>
                      ))}
                      
                      {/* Hari-hari bulan berikutnya */}
                      {[1, 2, 3, 4].map((day) => (
                        <div 
                          key={`next-${day}`} 
                          className="w-8 h-8 flex items-center justify-center text-gray-400"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer relative"
                onClick={() => {
                  setIsScanStatusFilterOpen(!isScanStatusFilterOpen);
                  setIsRiskFilterOpen(false);
                  setIsScanDateFilterOpen(false);
                }}
              >
                Scan Status
                <button className="ml-1 inline-flex">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isScanStatusFilterOpen && (
                  <div className="absolute mt-2 bg-white border border-gray-200 shadow-lg rounded-md p-3 z-10 w-48" onClick={e => e.stopPropagation()}>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="status-not-scanned" 
                          className="mr-2"
                          checked={selectedScanStatuses.includes('Not Scanned')}
                          onChange={(e) => toggleScanStatusFilter('Not Scanned', e)}
                        />
                        <label htmlFor="status-not-scanned" className="flex items-center">
                          <span>Not Scanned</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="status-completed" 
                          className="mr-2"
                          checked={selectedScanStatuses.includes('Completed')}
                          onChange={(e) => toggleScanStatusFilter('Completed', e)}
                        />
                        <label htmlFor="status-completed" className="flex items-center">
                          <span>Completed</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer relative"
                onClick={() => {
                  setIsRiskFilterOpen(!isRiskFilterOpen);
                  setIsScanStatusFilterOpen(false);
                  setIsScanDateFilterOpen(false);
                }}
              >
                Risk Rate
                <button className="ml-1 inline-flex">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isRiskFilterOpen && (
                  <div className="absolute mt-2 bg-white border border-gray-200 shadow-lg rounded-md p-3 z-10 w-48" onClick={e => e.stopPropagation()}>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="risk-note" 
                          className="mr-2"
                          checked={selectedRisks.includes('Note')}
                          onChange={(e) => toggleRiskFilter('Note', e)}
                        />
                        <label htmlFor="risk-note" className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                          <span>Note</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="risk-low" 
                          className="mr-2"
                          checked={selectedRisks.includes('Low')}
                          onChange={(e) => toggleRiskFilter('Low', e)}
                        />
                        <label htmlFor="risk-low" className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                          <span>Low</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="risk-moderate" 
                          className="mr-2"
                          checked={selectedRisks.includes('Moderate')}
                          onChange={(e) => toggleRiskFilter('Moderate', e)}
                        />
                        <label htmlFor="risk-moderate" className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                          <span>Moderate</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="risk-high" 
                          className="mr-2"
                          checked={selectedRisks.includes('High')}
                          onChange={(e) => toggleRiskFilter('High', e)}
                        />
                        <label htmlFor="risk-high" className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                          <span>High</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="risk-critical" 
                          className="mr-2"
                          checked={selectedRisks.includes('Critical')}
                          onChange={(e) => toggleRiskFilter('Critical', e)}
                        />
                        <label htmlFor="risk-critical" className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-purple-800 mr-2"></span>
                          <span>Critical</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                History
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {targets.map((target, index) => (
              <tr 
                key={index} 
                className={`hover:bg-blue-200 ${selectedItems.includes(index) ? 'bg-blue-200' : ''}`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4"
                    checked={selectedItems.includes(index)}
                    onChange={() => toggleSelectItem(index)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {target.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                  <a href={target.address} target="_blank" rel="noopener noreferrer">
                    {target.address}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {target.description}
                  {target.description !== '-' && (
                    <Info size={16} className="inline-block ml-2 text-gray-400" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {target.scanDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {target.scanStatus === 'Not Scanned' ? (
                    <span className="px-3 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 shadow-sm border border-yellow-200">
                      <X size={14} className="mr-1" />
                      Not Scanned
                    </span>
                  ) : (
                    <span className="px-3 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 shadow-sm border border-green-200">
                      <Check size={14} className="mr-1" />
                      Completed
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {renderRiskBadge(target.riskRate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link href="/dashboard/targets/detail">
                    <button className={`px-3 py-1 border rounded-md cursor-pointer text-xs ${
                      selectedItems.includes(index) 
                        ? 'bg-blue-500 text-white border-blue-500' 
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
    </div>
  );
}