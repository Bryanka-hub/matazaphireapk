import React from 'react';

interface SimpanConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function SimpanConfirmation({ isOpen, onClose, onConfirm }: SimpanConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Apakah Anda yakin ingin menyimpan data ini?
          </h3>
          
          <p className="text-sm text-gray-600 mb-6">
            Pastikan seluruh informasi telah diisi dengan benar sebelum melanjutkan.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            
            <button
              onClick={onConfirm}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Ya, Simpan Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
