'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  icon: React.ReactNode;
}

const NavItem = ({ label, href, isActive = false, icon }: NavItemProps) => {
  return (
    <Link 
      href={href}
      className={`px-4 py-2 rounded-3xl text-sm font-medium flex items-center gap-2 ${
        isActive 
          ? 'bg-[#0D88E2] text-white rounded-3xl' 
          : 'text-gray-700 hover:bg-gray-100 rounded-3xl'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default function Navbar() {
  // Menggunakan usePathname untuk mendapatkan path URL saat ini
  const pathname = usePathname();
  
  // Menentukan menu aktif berdasarkan pathname
  const getActiveMenu = (path: string) => {
    if (path === '/dashboard') return 'dashboard';
    if (path.includes('/dashboard/targets')) return 'targets';
    if (path.includes('/dashboard/scans')) return 'scans';
    if (path.includes('/dashboard/report')) return 'report';
    if (path.includes('/dashboard/setting')) return 'setting';
    return 'dashboard'; // default
  };
  
  const activeMenu = getActiveMenu(pathname);
  
  return (
    <nav className="flex items-center space-x-1 bg-[#FFFFFF] rounded-3xl">
      <NavItem 
        label="Dashboard" 
        href="/dashboard" 
        isActive={activeMenu === 'dashboard'} 
        icon={<Image src="/icons/icDashboard.svg" width={18} height={18} alt="Dashboard icon" />}
      />
      <NavItem 
        label="Targets" 
        href="/dashboard/targets" 
        isActive={activeMenu === 'targets'} 
        icon={<Image src="/icons/icTarget.svg" width={18} height={18} alt="Target icon" />}
      />
      <NavItem 
        label="Scans" 
        href="/dashboard/scans" 
        isActive={activeMenu === 'scans'} 
        icon={<Image src="/icons/icScan.svg" width={18} height={18} alt="Scan icon" />}
      />
      <NavItem 
        label="Report" 
        href="/dashboard/report" 
        isActive={activeMenu === 'report'} 
        icon={<Image src="/icons/icReport.svg" width={18} height={18} alt="Report icon" />}
      />
      <NavItem 
        label="Setting" 
        href="/dashboard/setting" 
        isActive={activeMenu === 'setting'} 
        icon={<Image src="/icons/icSetting.svg" width={18} height={18} alt="Setting icon" />}
      />
    </nav>
  );
}