'use client';

import React from 'react';
import { ArrowLeft, Trash2, Share2, Download } from 'lucide-react';
import Link from 'next/link';

export default function TargetDetailPage() {
  return (
    <div className="p-4 space-y-6">
      {/* Header with Back button and Action buttons */}
      <div className="flex justify-between items-center">
        <Link href="/dashboard/targets" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>
        
        <div className="flex gap-3 items-center">
          <button className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50">
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
          
          {/* Garis vertikal */}
          <div className="h-8 w-px bg-blue-500"></div>
          
          <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
            <Share2 size={16} />
            <span>Share</span>
          </button>
          
          <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Target Name */}
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
        <h1 className="text-xl font-semibold text-black">VAStudioDevSecOps</h1>
      </div>

      {/* Target Details */}
      <div className="bg-white p-6 rounded-lg shadow-sm text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex">
              <div className="w-32 font-medium">Hostname</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>VAStudioDevSecOps</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">URL</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span className="text-blue-500">https://VAStudioDevSecOps</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Address (IPv4)</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span className="text-blue-500">192.168.187.2</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Address (IPv6)</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>2A02:4780:16:28C8:6D9A:8549:CA53</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Description</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
              </div>
            </div>
            
            <div className="ml-32 text-sm text-gray-700">
              <p>VAStudioDevSecOps adalah sebuah platform internal yang digunakan untuk melakukan proses Vulnerability Assessment secara terintegrasi dalam lingkungan DevSecOps. Sistem ini dirancang untuk membantu tim keamanan dalam mengidentifikasi, memonitor, dan menganalisis potensi celah keamanan (vulnerabilities) pada aplikasi maupun infrastruktur yang sedang dikembangkan. Platform ini mengintegrasikan metode pemindaian otomatis dan manual untuk memastikan keamanan dari setiap tahapan siklus pengembangan perangkat lunak (SDLC). Informasi yang ditampilkan mencakup alamat IP, penyedia layanan hosting, reputasi jaringan, dan lokasi geospasial yang relevan untuk keperluan audit dan investigasi keamanan.</p>
            </div>
          </div>
          
          {/* Middle Column */}
          <div className="space-y-4">
            <div className="flex">
              <div className="w-32 font-medium">IP Version</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>5</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Reverse</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>-</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Net Name</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>HOSTINGER-HOSTING</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Net Range</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>192.168.187.2/24</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Org Name</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>AS-HOSTINGER</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Abuse Contact</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span className="text-blue-500">Abuse@ipco.com</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium text-blue-500">Fingerprinting</div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Ports</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>443</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium text-blue-500">Geolocation</div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">CC</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>SG</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">City</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>Singapore</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Country</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>Singapore</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Region</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>North West</span>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex">
              <div className="w-32 font-medium text-blue-500">Reputation</div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Reputation</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>VAStudioDevSecOps</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">As Name</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>AS-HOSTINGER CY</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">As Number</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>47583</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Is Announced</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>True</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">RDA Count</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>2</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">RDA Validity</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>Valid</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Route</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>192.168.187.2/24</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-32 font-medium">Route Name</div>
              <div className="flex items-center">
                <span className="mr-1">:</span>
                <span>-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}