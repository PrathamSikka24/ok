import type { Transaction } from "../domain/transaction";
import type { Account } from "../domain/account";

const getAllTransactions = async (): Promise<{ data: Transaction[] }> => {
  const response = await new Promise<{ data: Transaction[] }>((resolve) => {
    const data = [
      {
        id: "1",
        date: new Date("2024-03-01"),
        accountname: "HSBC Bank",
        payee: "Netflix",
        category: "Entertainment",
        payment: -50,
      },
      {
        id: "2",
        date: new Date("2024-03-02"),
        accountname: "Chase Bank",
        payee: "Amazon",
        category: "Shopping",
        payment: -120,
      },
      {
        id: "3",
        date: new Date("2024-03-03"),
        accountname: "Wells Fargo",
        payee: "Apple",
        category: "Electronics",
        payment: -200,
      },
      {
        id: "4",
        date: new Date("2024-03-04"),
        accountname: "Bank of America",
        payee: "Spotify",
        category: "Entertainment",
        payment: -10,
      },
      {
        id: "5",
        date: new Date("2024-03-05"),
        accountname: "HSBC Bank",
        payee: "Adobe",
        category: "Software",
        payment: -50,
      },
      {
        id: "6",
        date: new Date("2024-03-06"),
        accountname: "Chase Bank",
        payee: "Local Cafe",
        category: "Dining",
        payment: -30,
      },
      {
        id: "7",
        date: new Date("2024-03-07"),
        accountname: "Wells Fargo",
        payee: "Gym",
        category: "Health",
        payment: -60,
      },
      {
        id: "8",
        date: new Date("2024-03-08"),
        accountname: "Bank of America",
        payee: "Electric Company",
        category: "Utilities",
        payment: -150,
      },
      {
        id: "9",
        date: new Date("2024-03-09"),
        accountname: "HSBC Bank",
        payee: "Water Supply",
        category: "Utilities",
        payment: -80,
      },
      {
        id: "10",
        date: new Date("2024-03-10"),
        accountname: "Chase Bank",
        payee: "Internet Provider",
        category: "Utilities",
        payment: -60,
      },
      {
        id: "11",
        date: new Date("2024-03-11"),
        accountname: "HSBC Bank",
        payee: "Mortgage",
        category: "Deposit",
        payment: 2000,
      },
      {
        id: "12",
        date: new Date("2024-03-12"),
        accountname: "Chase Bank",
        payee: "House Asset",
        category: "Deposit",
        payment: 1500,
      },
      {
        id: "13",
        date: new Date("2024-03-13"),
        accountname: "HSBC Bank",
        payee: "Salary",
        category: "Deposit",
        payment: 3000,
      },
      {
        id: "14",
        date: new Date("2024-03-14"),
        accountname: "Bank of America",
        payee: "Investment Return",
        category: "Deposit",
        payment: 1200,
      },
      {
        id: "15",
        date: new Date("2024-03-15"),
        accountname: "HSBC Bank",
        payee: "Mortgage",
        category: "Deposit",
        payment: 2200,
      },
      {
        id: "16",
        date: new Date("2024-03-16"),
        accountname: "Chase Bank",
        payee: "House Asset",
        category: "Deposit",
        payment: 1800,
      },
      {
        id: "17",
        date: new Date("2024-03-17"),
        accountname: "Wells Fargo",
        payee: "Salary",
        category: "Deposit",
        payment: 2500,
      },
      {
        id: "18",
        date: new Date("2024-03-18"),
        accountname: "Bank of America",
        payee: "Investment Return",
        category: "Deposit",
        payment: 1300,
      },
      {
        id: "19",
        date: new Date("2024-03-19"),
        accountname: "HSBC Bank",
        payee: "Mortgage",
        category: "Deposit",
        payment: 2100,
      },
      {
        id: "20",
        date: new Date("2024-03-20"),
        accountname: "Chase Bank",
        payee: "House Asset",
        category: "Deposit",
        payment: 1600,
      },
      {
        id: "21",
        date: new Date("2024-03-21"),
        accountname: "Wells Fargo",
        payee: "Salary",
        category: "Deposit",
        payment: 2800,
      },
      {
        id: "22",
        date: new Date("2024-03-22"),
        accountname: "Bank of America",
        payee: "Investment Return",
        category: "Deposit",
        payment: 1500,
      },
      {
        id: "23",
        date: new Date("2024-03-23"),
        accountname: "HSBC Bank",
        payee: "Mortgage",
        category: "Deposit",
        payment: 2300,
      },
      {
        id: "24",
        date: new Date("2024-03-24"),
        accountname: "Chase Bank",
        payee: "House Asset",
        category: "Deposit",
        payment: 1700,
      },
    ];
    resolve({ data });
  });

  return response;
};

const getAllAccounts = async (): Promise<{ data: Account[] }> => {
  const response = await new Promise<{ data: Account[] }>((resolve) => {
    const data = [
      { id: "1", name: "HSBC Bank", balance: 1000 },
      { id: "2", name: "Chase Bank", balance: 2000 },
      { id: "3", name: "Wells Fargo", balance: 3000 },
      { id: "4", name: "Bank of America", balance: 4000 },
    ];
    resolve({ data });
  });

  return response;
};

export { getAllTransactions, getAllAccounts };
