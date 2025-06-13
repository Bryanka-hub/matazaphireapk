'use client';

import { ChevronDown } from 'lucide-react';

interface ScanData {
  name: string;
  url: string;
  schedule: string;
  lastScan: string;
  status: 'Tidak di-scan' | 'Diantrekan' | 'Completed';
}

const CardLatestScan = () => {
  // Data dummy untuk tabel sesuai screenshot
  const scanData: ScanData[] = [
    {
      name: 'VAStudioDevSecOps',
      url: 'https://VAStudioDevSecOps',
      schedule: 'Daily',
      lastScan: '25-06-2025 (23:00)',
      status: 'Tidak di-scan'
    },
    {
      name: 'VAStudioDevSecOps',
      url: 'https://VAStudioDevSecOps',
      schedule: 'Weekly',
      lastScan: '05-06-2025 (23:00)',
      status: 'Diantrekan'
    }
  ];

  // Fungsi untuk menentukan warna status
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Tidak di-scan':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Diantrekan':
        return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'Completed':
        return 'bg-green-50 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 flex items-center border-b gap-4">
        <h2 className="text-lg font-medium text-gray-700">Latest Scan</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name Assets
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                Schedule
                <ChevronDown size={14} className="ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Scan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                Status
                <ChevronDown size={14} className="ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {scanData.map((scan, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {scan.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                  <a href={scan.url} target="_blank" rel="noopener noreferrer">
                    {scan.url}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {scan.schedule}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {scan.lastScan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-sm font-medium rounded-md border ${getStatusStyle(scan.status)}`}>
                    {scan.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t text-right">
        <button className="text-sm text-blue-500 hover:underline">
          View All
        </button>
      </div>
    </div>
  );
};

export default CardLatestScan;