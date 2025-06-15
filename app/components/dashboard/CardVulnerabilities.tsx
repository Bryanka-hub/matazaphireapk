'use client';

import { ApexOptions } from 'apexcharts';
import { Info } from 'lucide-react';
import dynamic from 'next/dynamic';

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
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        const label = w.globals.labels[dataPointIndex];
        return `
          <div style="
            color: #1e40af;
            font-size: 13px;
            font-weight: 600;
            background: white;
            padding: 6px 10px;
            border-radius: 6px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          ">
            ● ${label}: ${value}
          </div>`;
      }
    }
  };

  const chartSeries = [{
    name: 'Vulnerabilities',
    data: [65, 50, 75, 35, 15] // Note, Low, Moderate, High, Critical
  }];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-black">Vulnerabilities Response</h2>
        <Info size={18} className="text-black" />
      </div>

      <div className="flex items-center justify-center" style={{ height: '250px' }}>
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
