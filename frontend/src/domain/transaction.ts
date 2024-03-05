export interface Transaction {
  id: string;
  date: Date;
  accountname: string;
  payee: string;
  category: string;
  payment: number;
}
