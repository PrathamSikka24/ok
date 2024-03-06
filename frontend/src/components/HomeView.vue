<template>
  <div class="flex justify-center flex-1 h-full overflow-auto">
    <div class="w-full h-full flex items-center justify-center">
      <table class="w-[60%] h-[50%] text-left bg-custom-text shadow-2xl rounded-lg overflow-hidden">
        <thead class="bg-custom-blue text-white">
          <tr>
            <th class="px-6 py-2 font-bold uppercase tracking-wider">Category</th>
            <th class="px-6 py-2 font-bold uppercase tracking-wider">Budgeted</th>
            <th class="px-6 py-2 font-bold uppercase tracking-wider">Spent</th>
            <th class="px-6 py-2 font-bold uppercase tracking-wider">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(total, category) in totalsByCategory" :key="category" class="border-t">
            <td class="px-6 py-2">{{ category }}</td>
            <td class="px-6 py-2">
              <input
                type="number"
                v-model.number="budgetedAmounts[category]"
                class="form-input rounded-md shadow-sm w-full border border-custom-text px-2"
              >
            </td>
            <td class="px-6 py-2">{{ total.spent.toFixed(2) }}</td>
            <td :class="{'text-red-500': (budgetedAmounts[category] - total.spent) < 0, 'text-green-500': (budgetedAmounts[category] - total.spent) >= 0}"
                class="px-6 py-2">
              {{ (budgetedAmounts[category] - total.spent).toFixed(2) }}
            </td>
          </tr>
        </tbody>
        <tfoot class="bg-custom-blue text-white">
          <tr>
            <th class="px-6 py-2 font-bold uppercase tracking-wider">Total</th>
            <th class="px-6 py-2 font-bold uppercase tracking-wider">{{ totalBudgeted.toFixed(2) }}</th>
            <th class="px-6 py-2 font-bold uppercase tracking-wider">{{ totalSpent.toFixed(2) }}</th>
            <th class="px-6 py-2 font-bold uppercase tracking-wider">{{ totalBalance.toFixed(2) }}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { inject, ref, computed } from 'vue';

export default {
  setup() {
    const injectedTransactions = inject('transactions');
    const transactions = injectedTransactions.value;
    const budgetedAmounts = ref({});

    const getRandomBudgetedAmount = () => {
      return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    };

    const initBudgetedAmounts = () => {
      transactions.forEach((transaction) => {
        const category = transaction.category;
        if (!(category in budgetedAmounts.value)) {
          budgetedAmounts.value[category] = getRandomBudgetedAmount();
        }
      });
    };

    initBudgetedAmounts();

    const totalsByCategory = computed(() => {
      const totals = {};
      transactions.forEach((transaction) => {
        const amount = parseFloat(transaction.amount);
        const category = transaction.category;
        if (!totals[category]) {
          totals[category] = { spent: 0 };
        }
        totals[category].spent += amount;
      });
      return totals;
    });

    const totalBudgeted = computed(() => {
      return Object.values(budgetedAmounts.value).reduce((acc, amount) => acc + amount, 0);
    });

    const totalSpent = computed(() => {
      return Object.values(totalsByCategory.value).reduce((acc, total) => acc + total.spent, 0);
    });

    const totalBalance = computed(() => {
      return totalBudgeted.value - totalSpent.value;
    });

    return {
      transactions,
      budgetedAmounts,
      totalsByCategory,
      totalBudgeted,
      totalSpent,
      totalBalance
    };
  }
};
</script>
