<template>
  <nav class="bg-purple-600 text-white h-fit">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col justify-between">
        <div class="flex flex-col space-x-4">
          <div class="flex items-center py-5 px-2">
            <img
              src="./icons/devzero_logo.png"
              alt="Logo"
              class="h-8 w-8 mr-2"
            />
            <h1 class="text-3xl font-bold font-sans">
              Dev<span class="font-light">Zero</span>
            </h1>
          </div>
          <div class="hidden md:flex flex-col items-center space-x-1">
            <RouterLink
              to="/"
              class="py-5 px-3 rounded hover:bg-purple-700 transition duration-300"
              >Budget</RouterLink
            >
            <RouterLink
              to="/all-accounts"
              class="py-5 px-3 rounded hover:bg-purple-700 transition duration-300"
              >All Accounts</RouterLink
            >
            <RouterLink
              to="/budgeted-accounts"
              class="py-5 px-3 rounded hover:bg-purple-700 transition duration-300"
              >Budgeted Accounts</RouterLink
            >
          </div>
        </div>
        <div class="hidden md:flex flex-col items-center space-x-1">
          <div
            v-for="bank in banks"
            :key="bank.name"
            class="text-sm font-semibold py-5 px-3"
          >
            <RouterLink
              :to="`/account/${bank.name}`"
              class="py-5 px-3 rounded hover:bg-purple-700 transition duration-300"
            >
              <span>{{ bank.name }}: </span
              ><span class="text-green-300">{{
                bank.balance.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              }}</span>
            </RouterLink>
          </div>
        </div>
        <RouterLink
          to="/off-budget-accounts"
          class="py-5 px-3 rounded hover:bg-purple-700 transition text-center duration-300"
          >Off-Budget Accounts
        </RouterLink>
        <div class="hidden md:flex flex-col items-center space-x-1 mt-4">
          <div
            v-for="asset in offBudget"
            :key="asset"
            class="text-sm font-semibold py-5 px-3"
          >
            <RouterLink
              :to="`/asset/${asset}`"
              class="py-5 px-3 rounded hover:bg-purple-700 transition duration-300"
            >
              {{ asset }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { RouterLink } from "vue-router";

interface Bank {
  name: string;
  balance: number;
}

export default defineComponent({
  setup() {
    const banks: Bank[] = inject("banks") ?? [];
    const offBudget = ref([
      "Mortgage",
      "Investment Return",
      "Salary",
      "House Asset",
    ]);

    return { banks, offBudget };
  },
});
</script>
