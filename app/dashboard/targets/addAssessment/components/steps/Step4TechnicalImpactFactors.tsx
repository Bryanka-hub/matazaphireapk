'use client';

import React from 'react';

export default function Step4TechnicalImpactFactors() {
  return (
    <div className="space-y-4">
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Technical Impact Factors (Loss of Confidentiality)</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="2">Sedikit (&lt;2) dari data informational (berisi data informasi yang confidential) terekspos [2]</option>
          <option value="6">Banyak (&gt;2) dari data informational (berisi data informasi yang tidak confidential) terekspos [6]</option>
          <option value="7">Banyak (&gt;2) dari data informational (berisi data informasi yang confidential) terekspos [7]</option>
          <option value="9">Seluruh data terekspos (akses penuh terhadap data) [9]</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Hilang nya Prinsip Integritas</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="1">Sedikit (&lt;2) dari data corrupt dengan tingkat ringan [1]</option>
          <option value="3">Sedikit (&lt;2) dari data corrupt dengan tingkat ringberat [3]</option>
          <option value="5">Banyak (&gt;2) dari data corrupt dengan tingkat ringan [5]</option>
          <option value="7">Banyak (&gt;2) dari data corrupt dengan tingkat berat [7]</option>
          <option value="9">Semua data corrupt/rusak total [9]</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Hilang nya Prinsip Ketersediaan akses</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="1">Jumlah gangguan sedikit (&lt;2) pada layanan sekunder [1]</option>
          <option value="5">Jumlah gangguan sedikit (&lt;2) pada layanan utama [5]</option>
          <option value="7">Jumlah gangguan banyak (&gt;2) pada layanan utama [7]</option>
          <option value="9">Seluruh layanan hilang [9]</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Kehilangan akuntabilitas</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="1">Penyerang dan vektor serangan dapat dilacak [1]</option>
          <option value="7">Penyerang dan vektor serangan mungkin dapat dilacak [7]</option>
          <option value="9">Penyerang dan vektor serangan tidak dapat dilacak (anonim) [9]</option>
        </select>
      </div>
    </div>
  );
}