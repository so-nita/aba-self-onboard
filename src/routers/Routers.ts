// routers.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { InvoiceIcon, DashboardIcon, ReportIcon, ProjectIcon, AdminIcon, SettingIcon, SupportIcon } from '../icons';
import {
  Admin,
  Invoice,
  Report,
  Project,
  Support,
  // Setting,
  StoreDetail,
  SocialMedia,
  PaymentMethod,
  UsersList
} from '../components/pages/index';

import Dashboard from '../components/pages/Dashboard.vue'; // Adjust the path based on your structure
import { NotFoundPage } from '../components/pages/ExceptionHandlerPages/index';
import { StoreIcon, UserIcon, CreditCardIcon, CircleFadingPlus } from 'lucide-vue-next'


// Export route records for Vue Router
export const routeRecords: RouteRecordRaw[] = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/invoices', name: 'Invoices', component: Invoice },
  { path: '/report', name: 'Report', component: Report },
  { path: '/project', name: 'Project', component: Project },
  { path: '/support', name: 'Support', component: Support },
  // { path: '/settings', name: 'Settings', component: Setting },
  { path: '/settings/store-detail', name: 'StoreDetail', component: StoreDetail },
  { path: '/settings/social-media', name: 'SocialMedia', component: SocialMedia },
  { path: '/settings/payment-method', name: 'PaymentMethod', component: PaymentMethod },
  { path: '/settings/users-list', name: 'Users List', component: UsersList },

  // Link Page
  // { path: 'https://merchant.payway.com.kh/self-register/', name: 'self-register', component=null },

  // Catch-all route for 404
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage, meta: { breadcrumb: 'Not Found' } },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
    // component: window.location.href("https://example.com/new-url"),
  },
];

import { images } from '../assets';

// Export sidebar data (navMain, extra, user)
export const routers = {
  user: {
    title: 'Hello',
    email: 'm@example.com',
    // avatar: '/avatars/shadcn.jpg',
    avatar: images.logo
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/', // This should be '/'; path is already defined in routes
      icon: DashboardIcon,
      isActive: true,
      items: null,
    },
    {
      title: 'Projects',
      url: '/project',
      icon: ProjectIcon,
      isActive: false,
      items: null,
    },
    {
      title: 'Reports',
      url: '/report',
      icon: ReportIcon,
      isActive: false,
      items: null,
    },
    {
      title: 'Admin',
      url: '/admin',
      icon: AdminIcon,
      isActive: false,
      items: null,
    },
  ],
  extra: [
    {
      title: 'Invoices',
      url: '/invoice',
      icon: InvoiceIcon,
      isActive: false,
      items: [],
    },
    {
      title: 'Supports',
      url: '/support',
      icon: SupportIcon,
      isActive: false,
      items: [],
    },
    {
      title: 'Settings',
      // url: '/settings',
      icon: SettingIcon,
      isActive: false,
      items: [
        { title: 'Store Detail', path: '/settings/store-detail', icon: StoreIcon },
        { title: 'Social Media', path: '/settings/social-media', icon: CircleFadingPlus },
        { title: 'Payment Method', path: '/settings/payment-method', icon: CreditCardIcon },
        { title: 'Users List', path: '/settings/users-list', icon: UserIcon },
      ],
    },
  ],
};

export default createRouter({
  history: createWebHistory(),
  routes: routeRecords, // Ensure this includes all routes
});
