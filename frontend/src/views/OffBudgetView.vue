<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import type { Ref } from "vue";
import type { Transaction } from "../domain/transaction";
import TransactionsTable from "../components/TransactionsTable.vue";
import AddTransaction from "../components/AddTransaction.vue";

export default defineComponent({
  components: {
    TransactionsTable,
    AddTransaction,
  },
  setup() {
    const transactions = inject<Ref<Array<Transaction>>>("transactions");
    const showModal = ref(false);

    const handleAddTransaction = (newTransaction: Transaction) => {
      console.log(newTransaction);
    };
    return { transactions, showModal, handleAddTransaction };
  },
});
</script>

<template>
  <div class="flex flex-col flex-1 p-4">
    <h2 class="text-xl font-bold mb-4">Off-Budget Accounts</h2>
    <button
      class="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="showModal = true"
    >
      Add New Transaction
    </button>
    <AddTransaction
      v-model:showModal="showModal"
      @add-transaction="handleAddTransaction"
    />
    <div v-if="transactions">
      <TransactionsTable
        :budget="'off-budgeted'"
        :transactions="transactions"
      />
    </div>
  </div>
</template>
