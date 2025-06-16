'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode; // Tambahkan prop untuk icon aktif
}

const NavItem = ({ label, href, isActive = false, icon, activeIcon }: NavItemProps) => {
  return (
    <Link 
      href={href}
      className={`px-4 py-2 rounded-3xl text-sm font-medium flex items-center gap-2 transition-colors duration-300 ${
        isActive 
          ? 'bg-[#0D88E2] text-white shadow-md shadow-blue-400' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {/* Gunakan activeIcon jika tersedia dan item aktif */}
      {isActive && activeIcon ? activeIcon : icon}
      <span>{label}</span>
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  
  const getActiveMenu = (path: string) => {
    if (path === '/dashboard') return 'dashboard';
    if (path.includes('/dashboard/targets')) return 'targets';
    if (path.includes('/dashboard/scans')) return 'scans';
    if (path.includes('/dashboard/report')) return 'report';
    if (path.includes('/dashboard/setting')) return 'setting';
    return 'dashboard';
  };
  
  const activeMenu = getActiveMenu(pathname);
  
  return (
    <nav className="flex items-center space-x-1 bg-white rounded-3xl p-1 shadow-lg">
      <NavItem 
        label="Dashboard" 
        href="/dashboard" 
        isActive={activeMenu === 'dashboard'} 
        icon={<Image src="/icons/icDashboard.svg" width={18} height={18} alt="Dashboard icon" />}
        activeIcon={<Image src="/icons/icDashboardActive.svg" width={18} height={18} alt="Dashboard active icon" />}
      />
      <NavItem 
        label="Targets" 
        href="/dashboard/targets" 
        isActive={activeMenu === 'targets'} 
        icon={<Image src="/icons/icTarget.svg" width={18} height={18} alt="Target icon" />}
        activeIcon={<Image src="/icons/icTargetActive.svg" width={18} height={18} alt="Target active icon" />}
      />
      <NavItem 
        label="Scans" 
        href="/dashboard/scans" 
        isActive={activeMenu === 'scans'} 
        icon={<Image src="/icons/icScan.svg" width={18} height={18} alt="Scan icon" />}
        activeIcon={<Image src="/icons/icScanActive.svg" width={18} height={18} alt="Scan active icon" />}
      />
      <NavItem 
        label="Report" 
        href="/dashboard/report" 
        isActive={activeMenu === 'report'} 
        icon={<Image src="/icons/icReport.svg" width={18} height={18} alt="Report icon" />}
        activeIcon={
          // Versi putih untuk icon Report saat aktif
          <div className="filter brightness-0 invert">
            <Image src="/icons/icReport.svg" width={18} height={18} alt="Report active icon" />
          </div>
        }
      />
      <NavItem 
        label="Setting" 
        href="/dashboard/setting" 
        isActive={activeMenu === 'setting'} 
        icon={<Image src="/icons/icSetting.svg" width={18} height={18} alt="Setting icon" />}
        activeIcon={
          // Versi putih untuk icon Setting saat aktif
          <div className="filter brightness-0 invert">
            <Image src="/icons/icSetting.svg" width={18} height={18} alt="Setting active icon" />
          </div>
        }
      />
    </nav>
  );
}