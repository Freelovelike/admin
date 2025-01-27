# BBQ 管理后台功能说明文档

## 1. 统计面板

### 1.1 用户数据统计
- **注册用户总量**：统计一段时间内的注册用户数
- **新增用户数**：每个时间周期(日/周/月)的新增用户数
- **活跃用户数**：进行签到的用户数(日/周/月)
- **用户留存率**
  - 日留存：第二天的用户数量(第一天中出现过的)/第一天的用户数量
  - 7日留存：7天进入的用户留存数量/七天进入用户的总量
  - 30日留存：30天进入的用户留存数量/30天进入用户的总量
- **同时在线人数**
- **bot订阅人数**
- **用户总量**
- **用户登录频率**

### 1.2 游戏与任务统计
- **游戏数据**：每日所有用户游戏次数
- **消费记录**：每笔消费详情
- **任务完成率**
  - 计算方式：该任务完成次数/app总用户量
  - 统计周期：一天、48H、7天

### 1.3 风控管理
- **IP账号数量限制**
  - 示例：限制参数设为2，表示一个IP只能关联2个账号

## 2. 用户管理

### 2.1 查询功能
- 支持查询字段：邀请码、TG账号、用户ID

### 2.2 用户信息
- TG账号
- 邀请码
- 上级信息（邀请码、用户）
- BBQ余额（充值/邀请/任务/游戏获得）

### 2.3 累计数据
- 任务获得BBQ
- 邀请获得BBQ
- 直推返现BBQ
- 世界大战获得BBQ
- 矿机获得BBQ
- 充值BBQ
- 提现BBQ

### 2.4 账户状态
- 禁用权限（黑名单）：拉入黑名单的用户无法提现
- 创建时间

## 3. 任务配置

### 3.1 查询功能
- 支持模糊搜索任务名称

### 3.2 任务信息
- 任务ID
- 任务名称（描述）
- 任务链接
- 任务类型
- 任务奖励
- 任务激活状态
- 创建日期

## 4. 邀请管理

### 4.1 查询统计
- 查询字段：上级邀请码
- 统计功能：拥有此上级邀请码的用户数量

### 4.2 基本信息
- 用户ID
- 邀请码
- 上级邀请码

## 5. 游戏配置

### 5.1 世界大战配置
- 获胜手续费：5%
- 最多支持数量：10000 BBQ
- 最少支持数量：100 BBQ

### 5.2 矿机配置
- **价格设置**
  - 一级矿机：1000 BBQ
- **合成概率**
  - 一级合成二级：25%
  - 二级合成三级：15%
- **产出配置**（每小时）
  - 一级矿机：0.1 BBQ
  - 二级矿机：1 BBQ
  - 三级矿机：354 BBQ
- 放置位解锁情况
- 矿机持有情况（等级、数量）

## 6. 资金管理

### 6.1 充值管理
- **查询统计**
  - 总充值BBQ、TON统计
  - 支持TON/BBQ筛选
- **订单信息**
  - 用户ID
  - 充值订单号
  - 邀请码
  - 充值钱包
  - 哈希地址
  - 代币类型（TON/BBQ）
  - 充值数量
  - 到账BBQ
  - 充值状态（失败/成功）
  - 创建时间

### 6.2 提现管理
- **查询功能**
  - 总提现BBQ统计
  - TON/BBQ筛选
  - 批量审核功能
- **提现信息**
  - 用户ID
  - 提现订单号
  - 提现到账地址
  - 提现BBQ数量
  - 创建时间
  - 提现状态（审核中/未通过/通过）
  - 审核操作（通过/不通过）

## 7. 全局配置
- 最小充值：100 BBQ
- BBQ WAR投票限额
  - 最小：200 BBQ/次
  - 最大：1000 BBQ/次
