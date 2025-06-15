import React from 'react';

interface AsetSerupaProps {
  isOpen: boolean;
  onClose: () => void;
  onDeleteAsset: () => void;
}

export default function AsetSerupa({ isOpen, onClose, onDeleteAsset }: AsetSerupaProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
            Aset serupa telah terdeteksi !
          </h3>

          {/* Warning box */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 text-left">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-orange-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-orange-800 mb-1">⚠ Warning</p>
                <p className="text-sm text-orange-700">
                  Data aset yang Anda masukkan sudah tersedia di sistem. Silakan periksa kembali informasi yang diinput agar tidak terjadi duplikasi.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            
            <button
              onClick={onDeleteAsset}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
