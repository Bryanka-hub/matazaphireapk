import { Bell, Search } from 'lucide-react';
import Image from 'next/image';
import Navbar from './navbar/Navbar';

interface UserProps {
  name: string;
  email: string;
}

const User = ({ name, email }: UserProps) => {
  return (
    <div className="flex items-center space-x-2 bg-white rounded-3xl px-4 py-2">
      <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
        <Image 
          src="/images/profile.png" 
          alt="User profile" 
          width={32} 
          height={32} 
          className="object-cover"
        />
      </div>
      <div className="text-sm">
        <p className="font-medium text-gray-700">{name}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
};

export default function Header() {
  return (
    <header className=" shadow-md py-3 px-4">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Logo dan Navbar */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Mata Zaphire Logo" 
              width={50} 
              height={50} 
              priority
            />
          </div>
          
          {/* Navbar */}
          <Navbar />
        </div>
        
        {/* Search dan User Profile */}
        <div className="flex items-center space-x-4 ">
          {/* Search */}
          <div className="relative ">
            <button className="p-2 bg-white rounded-full shadow-lg flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700">
              <Search size={20} />
            </button>
          </div>
          
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 bg-white rounded-full shadow-lg flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
          </div>
          
          {/* User Profile */}
          <User name="ADMIN JARKOM" email="admin@gmail.com" />
        </div>
      </div>
    </header>
  );
}