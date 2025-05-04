'use client';

import React from 'react';

export default function Step5BusinessImpactFactors() {
  return (
    <div className="space-y-4">
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Kerusakan Finansial</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="1">Memiliki kerugian kurang dari biaya kegiatan proyek perbaikan celah keamanan aplikasi [1]</option>
          <option value="3">Memiliki kerugian yang berpengaruh kecil terhadap pendapatan tahunan ( PNBP) [3]</option>
          <option value="7">Memiliki kerugian yang berpengaruh signifikan terhadap pendapatan tahunan (PNBP) [7]</option>
          <option value="9">Memiliki kerugian yang menyebabkan hilangnya pendapatan tahunan (PNBP) [9]</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Kerusakan Reputasi</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="1">Kerusakan minimal [1]</option>
          <option value="4">kehilangan akun utama [4]</option>
          <option value="5">kehilangan reputasi kinerja dari sebuah Kementerian [5]</option>
          <option value="9">kerusakan pada nama baik Kementerian [9]</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Ketidakpatuhan</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="2">Pelanggaran kecil [2]</option>
          <option value="5">Pelanggaran besar dengan bukti yang jelas dan terdapat peraturan/perundangan terkait [5]</option>
          <option value="7">Pelanggaran besar dengan bukti yang tidak jelas dan kemungkinan belum tersedianya peraturan/perundangan terkait [7]</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Pelanggaran Privasi</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="3">Satu individu [3]</option>
          <option value="5">Ratusan orang (100-999) [5]</option>
          <option value="7">Ribuan orang (1000-1000000) [7]</option>
          <option value="9">Jutaan orang ('{'>'}'1000000) [9]</option>
        </select>
      </div>
    </div>
  );
}