'use client';

import { Calendar, ChevronDown, X } from 'lucide-react';
import React, { useState } from 'react';

interface CreateScheduleProps {
  isOpen: boolean;
  onClose: () => void;
  targetData?: {
    name: string;
    url: string;
  };
}

export default function CreateSchedule({ isOpen, onClose, targetData }: CreateScheduleProps) {
  const [formData, setFormData] = useState({
    taskName: targetData?.name || '',
    targetAsset: targetData?.url || '',
    scanFrequency: 'Daily',
    startDate: '',
    endDate: '',
    startTime: '00:00',
    timeFormat: 'AM',
    notes: ''
  });

  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Schedule created:', formData);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-xl flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-800">Create Schedule</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-6">Fill in the data below to add a schedule</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Task Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Name
            </label>
            <input
              type="text"
              value={formData.taskName}
              onChange={(e) => handleInputChange('taskName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="VAStudioDevSecOps"
            />
          </div>

          {/* Target Asset */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Asset (URL/IP)
            </label>
            <input
              type="text"
              value={formData.targetAsset}
              onChange={(e) => handleInputChange('targetAsset', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-blue-500"
              placeholder="https://VAStudioDevSecOps"
            />
          </div>

          {/* Scan Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Scan Frequency
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsFrequencyOpen(!isFrequencyOpen)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between text-black"
              >
                <span>{formData.scanFrequency}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              
              {isFrequencyOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {['Daily', 'Weekly', 'Monthly'].map((freq) => (
                    <div
                      key={freq}
                      onClick={() => {
                        handleInputChange('scanFrequency', freq);
                        setIsFrequencyOpen(false);
                      }}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-black"
                    >
                      {freq}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
              </div>
              <span className="flex items-center text-gray-400">→</span>
              <div className="flex-1">
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
              </div>
            </div>
          </div>

          {/* Start Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-black">
              Start Time
            </label>
            <div className="flex gap-2">
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => handleInputChange('startTime', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black"
              />
              <select
                value={formData.timeFormat}
                onChange={(e) => handleInputChange('timeFormat', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
              
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-black">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none text-black"
              placeholder="Add any notes..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}