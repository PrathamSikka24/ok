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
  <div class="flex flex-col flex-1 gap-4 p-4 h-full overflow-auto">
    <h2 class="text-3xl font-bold">Off-Budget Accounts</h2>
    <button
      class="w-fit flex items-center justify-center gap-2 bg-custom-blue text-white px-4 py-2 rounded-lg hover:bg-custom-text"
      @click="showModal = true"
    >
      <span class=" text-2xl -mt-1">&#43; </span>
      <span>Add New Transaction</span>
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
