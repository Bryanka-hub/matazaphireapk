'use client';

import { ApexOptions } from 'apexcharts';
import { Info } from 'lucide-react';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CardSeverity = () => {
  // Data untuk chart
  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut' as const,
    },
    colors: ['#9c27b0', '#e53935', '#ff9800', '#ffeb3b', '#8bc34a'],
    labels: ['Critical', 'High', 'Moderate', 'Low', 'Note'],
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            total: {
              show: true,
              fontSize: '20px',
              fontWeight: 600,
              color: '#333',
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    },
    tooltip: {
      enabled: true,
      
      style: {
        fontSize: '12px',
        fontFamily: 'inherit',
        
      },
      
      y: {
        formatter: function(val: number) {
          return val.toString(); // Menampilkan nilai tanpa format tambahan
        }
      }
    }
  };

  const chartSeries = [25, 45, 85, 98, 48]; // Critical, High, Moderate, Low, Note

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-black">Severity Vulnerabilities in Number</h2>
        <Info size={18} className="text-gray-400" />
      </div>
      
      <div className="flex items-center justify-center" style={{ height: '250px' }}>
        <ApexChart 
          options={chartOptions}
          series={chartSeries}
          type="donut"
          height={200}
          width="100%"
        />
      </div>
    </div>
  );
};

export default CardSeverity;