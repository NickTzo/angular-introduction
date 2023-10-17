export interface Person {
  id?: number;
  givenName: string;
  surName: string;
  age: number;
  email: string;
  // address?: string;   // το ? το κανει optional
  address: string;
  photoURL?: string;
}
