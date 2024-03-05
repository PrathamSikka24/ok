<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Transaction } from '../domain/transaction';

export default defineComponent({
  props: {
    showModal: Boolean,
  },
  emits: ['update:showModal', 'add-transaction'],
  setup(props, { emit }) {
    const newTransaction = ref<Transaction>({
      id: '',
      date: new Date(),
      accountname: '',
      payee: '',
      category: '',
      payment: 0,
    });

    const paymentType = ref('');

    const submitForm = () => {
      if (paymentType.value === 'deposit') {
        newTransaction.value.payment = Math.abs(newTransaction.value.payment);
      } else {
        newTransaction.value.payment = -Math.abs(newTransaction.value.payment);
      }

      emit('add-transaction', newTransaction.value);
      closeModal();
    };

    const closeModal = () => emit('update:showModal', false);

    return { newTransaction, submitForm, closeModal, paymentType };
  },
});
</script>

<template>
  <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10" @click.self="closeModal">
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Add New Transaction</h3>
      <form @submit.prevent="submitForm">
        <!-- Payee Dropdown -->
        <div class="mt-2">
          <select v-model="newTransaction.payee" class="mt-1 block w-full" required>
            <option disabled value="">Select Payee</option>
            <option>Netflix</option>
            <option>Amazon</option>
            <option>Apple</option>
            <option>Spotify</option>
            <option>Adobe</option>
            <option>Local Cafe</option>
            <option>Gym</option>
            <option>Electric Company</option>
            <option>Water Supply</option>
            <option>Internet Provider</option>
            <option>Mortgage</option>
            <option>House Asset</option>
            <option>Salary</option>
            <option>Investment Return</option>
          </select>
        </div>
        <!-- Category Dropdown -->
        <div class="mt-2">
          <select v-model="newTransaction.category" class="mt-1 block w-full" required>
            <option disabled value="">Select Category</option>
            <option>Entertainment</option>
            <option>Shopping</option>
            <option>Electronics</option>
            <option>Dining</option>
            <option>Health</option>
            <option>Utilities</option>
            <option>Deposit</option>
          </select>
        </div>
        <!-- Type (Payment/Deposit) Dropdown -->
        <div class="mt-2">
          <select v-model="paymentType" class="mt-1 block w-full" required>
            <option disabled value="">Select Type</option>
            <option value="payment">Payment</option>
            <option value="deposit">Deposit</option>
          </select>
        </div>
        <!-- Amount Input -->
        <div class="mt-2">
          <input v-model.number="newTransaction.payment" type="number" placeholder="Amount" class="mt-1 block w-full" required>
        </div>
        <!-- Date Input -->
        <div class="mt-2">
          <input v-model="newTransaction.date" type="date" class="mt-1 block w-full" required>
        </div>
        <!-- Bank Dropdown -->
        <div class="mt-2">
          <select v-model="newTransaction.accountname" class="mt-1 block w-full" required>
            <option disabled value="">Select Bank</option>
            <option>HSBC Bank</option>
            <option>Chase Bank</option>
            <option>Wells Fargo</option>
            <option>Bank of America</option>
          </select>
        </div>
        <div class="mt-4">
          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Add Transaction
          </button>
        </div>
      </form>
      <div class="mt-2">
        <button @click="closeModal" class="text-sm text-gray-600 hover:text-gray-900">Cancel</button>
      </div>
    </div>
  </div>
</template>
