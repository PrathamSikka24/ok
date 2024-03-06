import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import BankAccountView from '../components/BankAccountView.vue';
import AssetView from '../components/AssetView.vue'; 

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
      component: () => import('../components/AllAccountsView.vue')
    },
    {
      path: '/budgeted-accounts',
      name: 'budgeted-accounts',
      component: () => import('../components/BudgetedView.vue')
    },
    {
      path: '/off-budget-accounts',
      name: 'off-budget-accounts',
      component: () => import('../components/OffBudgetView.vue')
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
