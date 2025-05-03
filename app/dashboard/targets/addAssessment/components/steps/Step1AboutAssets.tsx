'use client';

import React from 'react';

export default function Step1AboutAssets() {
  return (
    <div className="space-y-4">
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter asset name"
        />
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">URL</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter URL"
        />
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Enter description"
        />
      </div>
    </div>
  );
}