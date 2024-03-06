<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import type { Ref } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Topbar from "./components/Topbar.vue";
import { getAllAccounts, getAllTransactions } from './http/api';
import type { Transaction } from './domain/transaction';
import type { Account } from './domain/account';

const transactions: Ref<Transaction[]> = ref([]);
const banks: Ref<Account[]> = ref([]);

provide('transactions', transactions);
provide('banks', banks);

onMounted(async () => {
  const transactionsData = await getAllTransactions();
  const banksData = await getAllAccounts();
  transactions.value = transactionsData.data;
  banks.value = banksData.data;
});

</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="w-full">
      <Topbar />
    </div>
    <div v-if="transactions.length != 0 && banks.length != 0" class="flex flex-1 overflow-auto">
      <Navbar /> 
      <RouterView />
    </div>
  </div>
</template>
