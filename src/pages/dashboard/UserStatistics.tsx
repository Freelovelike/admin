import React from 'react';

const UserStatistics: React.FC = () => {
  return (
    <div className="user-statistics">
      <h2>用户数据统计</h2>
      <div className="statistics-cards">
        <div className="card">
          <h3>注册用户总量</h3>
          {/* 添加数据展示 */}
        </div>
        <div className="card">
          <h3>新增用户数</h3>
          {/* 添加数据展示 */}
        </div>
        <div className="card">
          <h3>活跃用户数</h3>
          {/* 添加数据展示 */}
        </div>
        <div className="card">
          <h3>用户留存率</h3>
          {/* 添加数据展示 */}
        </div>
        <div className="card">
          <h3>同时在线人数</h3>
          {/* 添加数据展示 */}
        </div>
        <div className="card">
          <h3>bot订阅人数</h3>
          {/* 添加数据展示 */}
        </div>
      </div>
    </div>
  );
};

export default UserStatistics; 