import React from 'react';

const UserList: React.FC = () => {
  return (
    <div className="user-list">
      <div className="search-bar">
        <input type="text" placeholder="邀请码" />
        <input type="text" placeholder="TG账号" />
        <input type="text" placeholder="用户ID" />
        <button>搜索</button>
      </div>
      
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>用户ID</th>
              <th>TG账号</th>
              <th>邀请码</th>
              <th>上级邀请码</th>
              <th>BBQ余额</th>
              <th>累计任务获得BBQ</th>
              <th>累计邀请获得BBQ</th>
              <th>累计直推返现BBQ</th>
              <th>累计世界大战获得BBQ</th>
              <th>累计矿机获得BBQ</th>
              <th>累计充值BBQ</th>
              <th>累计提现BBQ</th>
              <th>黑名单状态</th>
              <th>创建时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {/* 用户数据列表 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList; 