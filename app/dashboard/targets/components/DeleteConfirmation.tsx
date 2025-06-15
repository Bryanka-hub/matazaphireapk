'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface DeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedCount: number;
}

export default function DeleteConfirmation({ 
  isOpen, 
  onClose, 
  onConfirm, 
  selectedCount 
}: DeleteConfirmationProps) {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-sm mx-4 shadow-xl text-center">
        {/* Icon Sampah dengan background circle merah */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <Image
              src="/icons/icSampah.png"
              alt="Delete Icon"
              width={24}
              height={24}
              className="brightness-0 invert"
            />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Apakah Anda yakin ingin menghapus asset ini?
        </h2>
        
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          Pastikan seluruh informasi telah diisi dengan benar sebelum melanjutkan.
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
