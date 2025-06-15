import CardLatestScan from "@/app/components/dashboard/CardLatestScan";
import CardSeverity from "@/app/components/dashboard/CardSeverity";
import CardVulnerabilities from "@/app/components/dashboard/CardVulnerabilities";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Semua Card dalam satu baris */}
      <div className="grid grid-cols-12 gap-6">
        {/* Card 1 - Most Vulnerable Web (lebih lebar) */}
        <div className="col-span-12 md:col-span-6 bg-white rounded-lg shadow p-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Most Vulnerable Web</h1>
            <div className="mt-2 flex space-x-4 flex-col">
              <p className="text-md text-gray-600">
                IP Address: <span className="text-blue-500 font-bold">192.168.10.101</span>
              </p>
              <p className="text-md text-gray-600">
                Port: <span className="font-bold">1010</span>
              </p>
            </div>
          </div>
          <Image 
            src="/icons/icMostVulnerable.svg" 
            alt="Most Vulnerable Web icon" 
            width={100} 
            height={50} 
          />
        </div>

        {/* Card 2 - Total Vulnerabilities */}
        <div className="col-span-12 md:col-span-3 bg-white rounded-lg shadow">
          <div className="bg-blue-500 h-3 w-full mb-4 rounded"></div>
          <div className="px-6 flex flex-col justify-center items-center">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Total Vulnerabilities</h2>
            <p className="text-4xl font-bold text-gray-800">450</p>
          </div>
        </div>
        
        {/* Card 3 - Total Targets */}
        <div className="col-span-12 md:col-span-3 bg-white rounded-lg shadow">
          <div className="bg-blue-500 h-3 w-full mb-4 rounded"></div>
          <div className="px-6 flex flex-col justify-center items-center">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Total Targets</h2>
            <p className="text-4xl font-bold text-gray-800">450</p>
          </div>
        </div>
      </div>

      {/* Card 4 & 5 - Charts dalam satu baris */}
      <div className="grid grid-cols-12 gap-6">
        {/* Card 4 - Severity Vulnerabilities in Number */}
        <div className="col-span-12 md:col-span-5">
          <CardSeverity />
        </div>

        {/* Card 5 - Vulnerabilities Response */}
        <div className="col-span-12 md:col-span-7">
          <CardVulnerabilities />
        </div>
      </div>

      {/* Card 6 - Latest Scan */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <CardLatestScan />
        </div>
      </div>
    </div>
  );
}