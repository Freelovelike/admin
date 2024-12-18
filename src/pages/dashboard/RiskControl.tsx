import React from 'react';

const RiskControl: React.FC = () => {
  return (
    <div className="risk-control">
      <h2>风控管理</h2>
      <div className="control-panel">
        <div className="form-group">
          <label>IP账号数量限制</label>
          <input type="number" placeholder="请输入IP限制数量" />
          <p className="help-text">设置限制参数为2，表示一个IP只能关联2个账号</p>
        </div>
        {/* 添加更多风控设置 */}
      </div>
    </div>
  );
};

export default RiskControl; 