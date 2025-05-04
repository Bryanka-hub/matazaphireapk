'use client';

import React from 'react';

export default function Step2ThreatAgentFactors() {
  return (
    <div className="space-y-4">
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Keterampilan Teknis</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="1">Tidak diperlukan ketrampilan teknis [1]</option>
          <option value="3">Diperlukan ketrampilan teknis menengah [3]</option>
          <option value="5">Diperlukan ketrampilan teknis lanjut [5]</option>
          <option value="6">Diperlukan ketrampilan teknis programming dan jaringan [6]</option>
          <option value="9">Diperlukan ketrampilan security pentester [9]</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Motif</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="1">Tidak ada reward [1]</option>
          <option value="4">Kemungkinan mendapatkan reward [4]</option>
          <option value="9">Mendapatkan reward tinggi [9]</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Sumber daya dan peluang</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Diperlukan Akses penuh atau sumber daya mahal [0]</option>
          <option value="4">Diperlukan akses dan sumber daya khusus [4]</option>
          <option value="7">Diperlukan sebagian akses dan sumber daya biasa [7]</option>
          <option value="9">Tidak Diperlukan akses dan sumber daya apapun [9]</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-medium mb-1">Besaran lingkup jumlah threat agents</label>
        <select className="w-full p-2 border rounded">
          <option value="0">Tidak berlaku [0]</option>
          <option value="2">System Administrators [2]</option>
          <option value="4">Pengguna Intranet [4]</option>
          <option value="5">Rekanan (eksternal) [5]</option>
          <option value="6">User Terauntentikasi [6]</option>
          <option value="9">Pengguna Internet anonim [9]</option>
        </select>
      </div>
    </div>
  );
}