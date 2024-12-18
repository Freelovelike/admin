import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const UserManagement: React.FC = () => {
  return (
    <div className="user-management">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default UserManagement; 