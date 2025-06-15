'use client';

import { Pencil, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User';
  permissions: {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
  };
}

export default function SettingsPage() {
  // Data dummy untuk tabel users
  const [users, setUsers] = useState<UserData[]>([
    {
      id: 1,
      name: 'Administrator',
      email: 'admin@admin.com',
      role: 'Admin',
      permissions: {
        create: true,
        read: true,
        update: true,
        delete: true
      }
    }
  ]);

  // State untuk modal
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  
  // State untuk new user
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'User' as 'Admin' | 'User',
    permissions: {
      create: false,
      read: true,
      update: true,
      delete: false
    }
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (currentUser) {
      setCurrentUser(prev => ({
        ...prev!,
        [name]: value
      }));
    } else {
      setNewUser(prev => ({
        ...prev,
        [name]: value as 'Admin' | 'User'
      }));
    }
  };

  // Handle permission change
  const handlePermissionChange = (permission: keyof UserData['permissions']) => {
    if (currentUser) {
      setCurrentUser(prev => ({
        ...prev!,
        permissions: {
          ...prev!.permissions,
          [permission]: !prev!.permissions[permission]
        }
      }));
    } else {
      setNewUser(prev => ({
        ...prev,
        permissions: {
          ...prev.permissions,
          [permission]: !prev.permissions[permission]
        }
      }));
    }
  };

  // Handle submit form tambah user
  const handleAddUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUserWithId = {
      ...newUser,
      id: users.length + 1
    };
    setUsers(prev => [...prev, newUserWithId]);
    setNewUser({
      name: '',
      email: '',
      role: 'User',
      permissions: {
        create: false,
        read: true,
        update: true,
        delete: false
      }
    });
    setIsAddUserModalOpen(false);
  };

  // Handle submit form edit user
  const handleEditUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser) {
      setUsers(prev => 
        prev.map(user => 
          user.id === currentUser.id ? currentUser : user
        )
      );
      setIsEditModalOpen(false);
      setCurrentUser(null);
    }
  };

  // Handle edit user
  const handleEditUser = (user: UserData) => {
    setCurrentUser(user);
    setIsEditModalOpen(true);
  };

  // Handle delete user
  const handleDeleteUser = (id: number) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header dan tombol Add User */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Setting</h1>
        <button 
          onClick={() => setIsAddUserModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add User
        </button>
      </div>

      {/* Tabel Users */}
      <div className="rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEditUser(user)}
                      className="text-blue-500 hover:text-blue-700 p-1"
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </button>
                    <button 
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Add User */}
      {isAddUserModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">Create New User Account</h2>
              <button 
                onClick={() => setIsAddUserModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleAddUserSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Role</label>
                  <select
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                
                {/* Permissions Section */}
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="create-permissions"
                      checked={newUser.permissions.create}
                      onChange={() => handlePermissionChange('create')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="create-permissions" className="ml-2 block text-sm font-medium text-gray-900">
                      Create Permissions
                    </label>
                  </div>
                  
                  <div className="ml-6 space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="create"
                        checked={newUser.permissions.create}
                        onChange={() => handlePermissionChange('create')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="create" className="ml-2 block text-sm text-gray-900">
                        Create
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="read"
                        checked={newUser.permissions.read}
                        onChange={() => handlePermissionChange('read')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="read" className="ml-2 block text-sm text-gray-900">
                        Read
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="update"
                        checked={newUser.permissions.update}
                        onChange={() => handlePermissionChange('update')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="update" className="ml-2 block text-sm text-gray-900">
                        Update
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="delete"
                        checked={newUser.permissions.delete}
                        onChange={() => handlePermissionChange('delete')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="delete" className="ml-2 block text-sm text-gray-900">
                        Delete
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAddUserModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit User */}
      {isEditModalOpen && currentUser && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">Edit User Account</h2>
              <button 
                onClick={() => {
                  setIsEditModalOpen(false);
                  setCurrentUser(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleEditUserSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={currentUser.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={currentUser.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Role</label>
                  <select
                    name="role"
                    value={currentUser.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                
                {/* Permissions Section */}
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="edit-create-permissions"
                      checked={currentUser.permissions.create || currentUser.permissions.read || 
                              currentUser.permissions.update || currentUser.permissions.delete}
                      onChange={() => {}}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="edit-create-permissions" className="ml-2 block text-sm font-medium text-gray-900">
                      Create Permissions
                    </label>
                  </div>
                  
                  <div className="ml-6 space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="edit-create"
                        checked={currentUser.permissions.create}
                        onChange={() => handlePermissionChange('create')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="edit-create" className="ml-2 block text-sm text-gray-900">
                        Create
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="edit-read"
                        checked={currentUser.permissions.read}
                        onChange={() => handlePermissionChange('read')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="edit-read" className="ml-2 block text-sm text-gray-900">
                        Read
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="edit-update"
                        checked={currentUser.permissions.update}
                        onChange={() => handlePermissionChange('update')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="edit-update" className="ml-2 block text-sm text-gray-900">
                        Update
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="edit-delete"
                        checked={currentUser.permissions.delete}
                        onChange={() => handlePermissionChange('delete')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="edit-delete" className="ml-2 block text-sm text-gray-900">
                        Delete
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setCurrentUser(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}