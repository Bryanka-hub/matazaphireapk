'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Info } from 'lucide-react';
import { ApexOptions } from 'apexcharts';

// Import ApexCharts secara dinamis karena ini komponen client-side
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CardVulnerabilities = () => {
  // Data untuk chart
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar' as const,
      toolbar: {
        show: false
      }
    },
    colors: ['#9c27b0', '#e53935', '#ff9800', '#ffeb3b', '#8bc34a'],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
        distributed: true,
        borderRadius: 3
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Note', 'Low', 'Moderate', 'High', 'Critical'],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: true
      }
    },
    grid: {
      show: false
    },
    legend: {
      show: true
    }
  };

  const chartSeries = [{
    name: 'Vulnerabilities',
    data: [65, 50, 75, 35, 15] // Note, Low, Moderate, High, Critical
  }];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-700">Vulnerabilities Response</h2>
        <Info size={18} className="text-gray-400" />
      </div>
      
      <div className="flex items-center justify-center" style={{ height: '250px' }}>
        {/* @ts-ignore */}
        <ApexChart 
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={300}
          width={500}
        />
      </div>
      
      
    </div>
  );
};

export default CardVulnerabilities;