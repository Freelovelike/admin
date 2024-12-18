import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="user-detail">
      <h2>用户详情</h2>
      <div className="detail-content">
        <div className="basic-info">
          <h3>基本信息</h3>
          <div className="info-item">
            <label>用户ID：</label>
            <span>{id}</span>
          </div>
          <div className="info-item">
            <label>TG账号：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>邀请码：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>上级邀请码：</label>
            <span></span>
          </div>
        </div>

        <div className="bbq-info">
          <h3>BBQ信息</h3>
          <div className="info-item">
            <label>BBQ余额：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>累计任务获得：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>累计邀请获得：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>累计直推返现：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>累计世界大战获得：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>累计矿机获得：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>累计充值：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>累计提现：</label>
            <span></span>
          </div>
        </div>

        <div className="account-status">
          <h3>账户状态</h3>
          <div className="info-item">
            <label>黑名单状态：</label>
            <span></span>
          </div>
          <div className="info-item">
            <label>创建时间：</label>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail; 