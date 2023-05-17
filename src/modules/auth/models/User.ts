import { DocumentData } from 'firebase/firestore';

export default interface User extends DocumentData {
  id: string;
  email: string;
  claims: string[];
}
