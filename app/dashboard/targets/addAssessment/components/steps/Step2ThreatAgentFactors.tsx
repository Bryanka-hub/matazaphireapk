'use client';

import React from 'react';

export default function Step2ThreatAgentFactors() {
  return (
    <div className="space-y-4">
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Skill Level</label>
        <select className="w-full p-2 border rounded">
          <option value="">Select skill level</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Motive</label>
        <select className="w-full p-2 border rounded">
          <option value="">Select motive</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Opportunity</label>
        <select className="w-full p-2 border rounded">
          <option value="">Select opportunity</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Size</label>
        <select className="w-full p-2 border rounded">
          <option value="">Select size</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
    </div>
  );
}