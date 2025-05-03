'use client';

import React from 'react';

export default function Step4TechnicalImpactFactors() {
  return (
    <div className="space-y-4">
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Loss of Confidentiality</label>
        <select className="w-full p-2 border rounded">
          <option value="">Select level</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Loss of Integrity</label>
        <select className="w-full p-2 border rounded">
          <option value="">Select level</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Loss of Availability</label>
        <select className="w-full p-2 border rounded">
          <option value="">Select level</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Loss of Accountability</label>
        <select className="w-full p-2 border rounded">
          <option value="">Select level</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
    </div>
  );
}