import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BankAccountView from '../views/BankAccountView.vue';
import AssetView from '../views/AssetView.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/all-accounts',
      name: 'all-accounts',
      component: () => import('../views/AllAccountsView.vue')
    },
    {
      path: '/budgeted-accounts',
      name: 'budgeted-accounts',
      component: () => import('../views/BudgetedView.vue')
    },
    {
      path: '/off-budget-accounts',
      name: 'off-budget-accounts',
      component: () => import('../views/OffBudgetView.vue')
    },
    {
      path: '/account/:bankName',
      name: 'bank-account',
      component: BankAccountView,
      props: true
    },
    {
      path: '/asset/:assetName',
      name: 'asset-name',
      component: AssetView,
      props: true
    }
  ]
});

export default router;
