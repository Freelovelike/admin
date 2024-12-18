import MainLayout from "@/layouts/MainLayout";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// 懒加载组件
const Dashboard = lazy(() => import("@/pages/dashboard/"));
const UserStatistics = lazy(() => import("@/pages/dashboard/UserStatistics"));
const GameStatistics = lazy(() => import("@/pages/dashboard/GameStatistics"));
const RiskControl = lazy(() => import("@/pages/dashboard/RiskControl"));

const UserManagement = lazy(() => import("@/pages/user"));
const UserList = lazy(() => import("@/pages/user/UserList"));
const UserDetail = lazy(() => import("@/pages/user/UserDetail"));

const TaskManagement = lazy(() => import("@/pages/task"));
const TaskList = lazy(() => import("@/pages/task/TaskList"));

const InviteManagement = lazy(() => import("@/pages/invite"));
const InviteList = lazy(() => import("@/pages/invite/InviteList"));

const GameManagement = lazy(() => import("@/pages/game"));
const BBQWar = lazy(() => import("@/pages/game/BBQWar"));
const Mining = lazy(() => import("@/pages/game/Mining"));

const FinanceManagement = lazy(() => import("@/pages/finance"));
const Deposit = lazy(() => import("@/pages/finance/Deposit"));
const Withdrawal = lazy(() => import("@/pages/finance/Withdrawal"));

const Settings = lazy(() => import("@/pages/settings"));
const Login = lazy(() => import("@/pages/login"));

export type CustomRouteObject = RouteObject & {
  meta?: {
    title: string;
    icon?: string;
    hidden?: boolean;
  };
  children?: CustomRouteObject[];
};

export const routes: CustomRouteObject[] = [
  {
    path: "/",
    element: <Login />,
    meta: {
      title: "登录",
      hidden: true,
    },
  },
  {
    path: "/admin",
    element: <MainLayout />,
    meta: {
      title: "管理后台",
    },
    
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        meta: {
          title: "统计面板",
          icon: "dashboard",
        },
        children: [
          {
            path: "/user-statistics",
            element: <UserStatistics />,
            meta: {
              title: "用户数据统计",
              icon: "user",
            },
          },
          {
            path: "/game-statistics",
            element: <GameStatistics />,
            meta: {
              title: "游戏与任务统计",
              icon: "game",
            },
          },
          {
            path: "/risk-control",
            element: <RiskControl />,
            meta: {
              title: "风控管理",
              icon: "security",
            },
          },
        ],
      },
      {
        path: "/user",
        element: <UserManagement />,
        meta: {
          title: "用户管理",
          icon: "user-group",
        },
        children: [
          {
            path: "/list",
            element: <UserList />,
            meta: {
              title: "用户列表",
              icon: "list",
            },
          },
          {
            path: "/detail/:id",
            element: <UserDetail />,
            meta: {
              title: "用户详情",
              icon: "detail",
              hidden: true,
            },
          },
        ],
      },
      {
        path: "/task",
        element: <TaskManagement />,
        meta: {
          title: "任务配置",
          icon: "task",
        },
        children: [
          {
            path: "/list",
            element: <TaskList />,
            meta: {
              title: "任务列表",
              icon: "list",
            },
          },
        ],
      },
      {
        path: "/invite",
        element: <InviteManagement />,
        meta: {
          title: "邀请管理",
          icon: "share",
        },
        children: [
          {
            path: "/list",
            element: <InviteList />,
            meta: {
              title: "邀请列表",
              icon: "list",
            },
          },
        ],
      },
      {
        path: "/game",
        element: <GameManagement />,
        meta: {
          title: "游戏配置",
          icon: "game",
        },
        children: [
          {
            path: "/bbq-war",
            element: <BBQWar />,
            meta: {
              title: "界大战配置",
              icon: "war",
            },
          },
          {
            path: "/mining",
            element: <Mining />,
            meta: {
              title: "矿机配置",
              icon: "mining",
            },
          },
        ],
      },
      {
        path: "finance",
        element: <FinanceManagement />,
        meta: {
          title: "资金管理",
          icon: "money",
        },
        children: [
          {
            path: "deposit",
            element: <Deposit />,
            meta: {
              title: "充值管理",
              icon: "deposit",
            },
          },
          {
            path: "withdrawal",
            element: <Withdrawal />,
            meta: {
              title: "提现管理",
              icon: "withdrawal",
            },
          },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
        meta: {
          title: "全局配置",
          icon: "setting",
        },
      },
    ],
  },
]; 