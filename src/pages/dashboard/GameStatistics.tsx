import React from 'react';

const GameStatistics: React.FC = () => {
  return (
    <div className="game-statistics">
      <h2>游戏与任务统计</h2>
      <div className="statistics-cards">
        <div className="card">
          <h3>每日游戏次数</h3>
          {/* 添加数据展示 */}
        </div>
        <div className="card">
          <h3>消费记录</h3>
          {/* 添加数据展示 */}
        </div>
        <div className="card">
          <h3>任务完成率</h3>
          {/* 添加数据展示 */}
        </div>
      </div>
    </div>
  );
};

export default GameStatistics; 