'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, X } from 'lucide-react';

interface ScanDailyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ScanFormData) => void;
}

export interface ScanFormData {
    taskName: string;
    targetAsset: string;
    scanFrequency: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    sensorId: string;
    notes: string;
    daysOfWeek?: string[];
}

const ScanDailyModal: React.FC<ScanDailyModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState<ScanFormData>({
        taskName: '',
        targetAsset: '',
        scanFrequency: 'Daily',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        sensorId: '',
        notes: '',
        daysOfWeek: []
    });

    const [isFrequencyDropdownOpen, setIsFrequencyDropdownOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectFrequency = (frequency: string) => {
        setFormData(prev => ({
            ...prev,
            scanFrequency: frequency,
            daysOfWeek: frequency === 'Weekly' ? prev.daysOfWeek : []
        }));
        setIsFrequencyDropdownOpen(false);
    };

    const handleDayChange = (day: string) => {
        setFormData(prev => {
            const currentDays = prev.daysOfWeek || [];
            
            if (currentDays.includes(day)) {
                return {
                    ...prev,
                    daysOfWeek: currentDays.filter(d => d !== day)
                };
            } else {
                return {
                    ...prev,
                    daysOfWeek: [...currentDays, day]
                };
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-opacity-5 backdrop-blur-sm flex items-center justify-center z-50 text-gray-700">
            <div className="bg-[#EEF7FF] rounded-lg shadow-lg w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <Calendar className="mr-2 text-gray-600" size={20} />
                        <h2 className="text-xl font-bold">Create Schedule</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X size={20} />
                    </button>
                </div>

                <p className="text-gray-600 text-sm mb-6">Fill in the data below to add a schedule.</p>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
                            <input
                                type="text"
                                name="taskName"
                                value={formData.taskName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md bg-white"
                                placeholder="VAStudioDevSecOps"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Target Asset (URL/IP)</label>
                            <input
                                type="text"
                                name="targetAsset"
                                value={formData.targetAsset}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Scan Frequency</label>
                            <div className="relative">
                                <div
                                    className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md flex justify-between items-center cursor-pointer"
                                    onClick={() => setIsFrequencyDropdownOpen(!isFrequencyDropdownOpen)}
                                >
                                    <span>{formData.scanFrequency}</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                {isFrequencyDropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                        <ul>
                                            <li
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleSelectFrequency('Daily')}
                                            >
                                                Daily
                                            </li>
                                            <li
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleSelectFrequency('Weekly')}
                                            >
                                                Weekly
                                            </li>
                                            <li
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleSelectFrequency('Monthly')}
                                            >
                                                Monthly
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {formData.scanFrequency === 'Weekly' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Day of Week</label>
                                <div className="flex flex-wrap gap-2">
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                        <div key={day} className="flex items-center">
                                            <div 
                                                className={`flex items-center justify-center w-6 h-6 rounded border ${
                                                    (formData.daysOfWeek || []).includes(day) 
                                                    ? 'bg-blue-500 border-blue-500 text-white' 
                                                    : 'border-gray-300 bg-white'
                                                } cursor-pointer`}
                                                onClick={() => handleDayChange(day)}
                                            >
                                                {(formData.daysOfWeek || []).includes(day) && (
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12l5 5 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="ml-2 text-sm">{day}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                            <div className="flex items-center space-x-2 text-gray-700">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 bg-white text-gray-700"
                                        placeholder=""
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => e.target.type = 'text'}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <Calendar size={16} className="text-gray-400" />
                                    </div>
                                </div>

                                <span className="text-gray-500">→</span>

                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 bg-white"
                                        placeholder=""
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => e.target.type = 'text'}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <Calendar size={16} className="text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                            <div className="flex items-center space-x-2">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        name="startTime"
                                        value={formData.startTime || "00 : 00 AM"}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 bg-white"
                                        onFocus={(e) => {
                                            e.target.type = 'time';
                                            if (!formData.startTime) e.target.value = '';
                                        }}
                                        onBlur={(e) => {
                                            e.target.type = 'text';
                                            if (!e.target.value) e.target.value = "00 : 00 AM";
                                        }}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <button type="button" className="text-gray-400">
                                            <Clock size={16} />
                                        </button>
                                    </div>
                                </div>

                                <span className="text-gray-500">→</span>

                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        name="endTime"
                                        value={formData.endTime || "00 : 00 AM"}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 bg-white"
                                        onFocus={(e) => {
                                            e.target.type = 'time';
                                            if (!formData.endTime) e.target.value = '';
                                        }}
                                        onBlur={(e) => {
                                            e.target.type = 'text';
                                            if (!e.target.value) e.target.value = "00 : 00 AM";
                                        }}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <button type="button" className="text-gray-400">
                                            <Clock size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sensor ID</label>
                            <input
                                type="text"
                                name="sensorId"
                                value={formData.sensorId}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                                rows={2}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors uppercase font-medium"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ScanDailyModal;