'use client';

import React from 'react';

interface Vulnerability {
  name: string;
  severity: 'High' | 'Medium';
}

export default function ScanResult() {
  const vulnerabilities: Vulnerability[] = [
    {
      name: 'Absence of Anti-CSRF tokens',
      severity: 'High'
    },
    {
      name: 'Content Security Policy (CSP) Header Not Set',
      severity: 'High'
    },
    {
      name: 'Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)',
      severity: 'Medium'
    },
    {
      name: 'Server Leaks Version Information via "Server" HTTP Response Header Field',
      severity: 'Medium'
    }
  ];

  const getSeverityBadge = (severity: 'High' | 'Medium') => {
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full text-white ${
        severity === 'High' ? 'bg-red-500' : 'bg-orange-500'
      }`}>
        {severity}
      </span>
    );
  };

  return (
    <div className="bg-blue-500 text-white">
      {/* Header */}
      <div className="px-6 py-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="font-medium">Vulnerabilities</div>
          <div className="font-medium text-center">Severity</div>
          <div className="font-medium text-center">Detail</div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white text-gray-900">
        {vulnerabilities.map((vuln, index) => (
          <div key={index} className="px-6 py-4 border-b border-gray-200 last:border-b-0">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-sm">{vuln.name}</div>
              <div className="text-center">
                {getSeverityBadge(vuln.severity)}
              </div>
              <div className="text-center">
                <button className="px-3 py-1 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
