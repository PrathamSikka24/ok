<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";
import type { Transaction } from "../domain/transaction";

export default defineComponent({
  props: {
    assetName: {
      type: String,
    },
    budget: {
      type: String,
    },
    bankName: {
      type: String,
    },
    transactions: {
      type: Array as PropType<Transaction[]>,
      required: true,
    },
  },
  setup(props) {
    const filteredTransactions = computed(() => {
      if(props.assetName){
        return props.transactions.filter(
          (transaction) => transaction.payee === props.assetName
        );
      }
      if (props.budget === 'budgeted') {
        return props.transactions.filter(
          (transaction) => transaction.payment < 0
        );
      } else if (props.budget === 'off-budgeted') {
        return props.transactions.filter(
          (transaction) => transaction.payment >= 0
        ); 
      } else if (props.bankName) {
        return props.transactions.filter(
          (transaction) => transaction.accountname === props.bankName
        );
      } else {
        return props.transactions;
      }
    });

    const formatDate = (date: string | Date): string => {
      return new Date(date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
    };

    const formatCurrency = (amount: number) => {
      return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    };

    return { filteredTransactions, formatDate, formatCurrency };
  },
});
</script>

<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg flex-1">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="py-3 px-6">Date</th>
          <th scope="col" class="py-3 px-6">Account Name</th>
          <th scope="col" class="py-3 px-6">Payee</th>
          <th scope="col" class="py-3 px-6">Category</th>
          <th scope="col" class="py-3 px-6">Payments</th>
          <th scope="col" class="py-3 px-6">Deposits</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="transaction in filteredTransactions"
          :key="transaction.id"
          class="bg-white border-b hover:bg-gray-50"
        >
          <td class="py-4 px-6">{{ formatDate(transaction.date) }}</td>
          <td class="py-4 px-6">{{ transaction.accountname }}</td>
          <td class="py-4 px-6">{{ transaction.payee }}</td>
          <td class="py-4 px-6">{{ transaction.category }}</td>
          <td
            class="py-4 px-6"
            v-if="transaction.payment < 0"
            :class="{ 'text-red-500': true }"
          >
            {{ Math.abs(transaction.payment) }}
          </td>
          <td class="py-4 px-6" v-else></td>
          <td
            class="py-4 px-6"
            v-if="transaction.payment >= 0"
            :class="{ 'text-green-500': true }"
          >
            {{ transaction.payment }}
          </td>
          <td class="py-4 px-6" v-else></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
