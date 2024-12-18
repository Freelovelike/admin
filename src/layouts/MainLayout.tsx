import { ChevronDown, ChevronUp, Gamepad2, Home, ListTodo, Share2, UserCog, Users } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './MainLayout.css';

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

const MainLayout: React.FC = () => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['main', 'games']);

  const menuItems: MenuItem[] = [
    {
      label: '主要',
      icon: <Home className="icon" size={18} />,
      children: [
        { label: '用户管理', path: '/users', icon: <Users className="icon" size={18} /> },
        { label: '任务配置', path: '/tasks', icon: <ListTodo className="icon" size={18} /> },
        { label: '邀请管理', path: '/invites', icon: <Share2 className="icon" size={18} /> },
      ],
    },
    {
      label: '游戏配置',
      icon: <Gamepad2 className="icon" size={18} />,
      children: [
        { label: 'BBQ WAR', path: '/games/bbq-war' },
        { label: 'BBQ MINING', path: '/games/bbq-mining' },
      ],
    },
    { label: '管理员', path: '/admin', icon: <UserCog className="icon" size={18} /> },
  ];

  const toggleMenu = (menuLabel: string) => {
    setExpandedMenus(prev =>
      prev.includes(menuLabel)
        ? prev.filter(item => item !== menuLabel)
        : [...prev, menuLabel]
    );
  };

  const renderMenuItem = (item: MenuItem, isChild = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedMenus.includes(item.label);

    if (hasChildren) {
      return (
        <div key={item.label} className="menu-item">
          <button
            onClick={() => toggleMenu(item.label)}
            className="menu-button"
          >
            <span className="menu-button-content">
              {item.icon}
              <span>{item.label}</span>
            </span>
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {isExpanded && (
            <div className="submenu">
              {item.children.map(child => renderMenuItem(child, true))}
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        key={item.label}
        to={item.path || '#'}
        className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
      >
        {item.icon}
        <span>{item.label}</span>
      </NavLink>
    );
  };

  return (
    <div className="layout">
      <div className="layout-container">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            {menuItems.map(item => renderMenuItem(item))}
          </nav>
        </aside>
        
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout; 