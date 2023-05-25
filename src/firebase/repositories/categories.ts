import { getCollection } from '@/firebase';
import FirebaseBase from '@/firebase/repositories/FirebaseBase';
import { DocumentData } from 'firebase/firestore';
import { createCategoryCollectionReference } from '../factory/CategoryFactory';
import { Category } from '@/types/models/Category';

class CategoryRepository extends FirebaseBase<Category> {
  constructor() {
    super(createCategoryCollectionReference());
  }
}

const categoryRepository = new CategoryRepository();

export default categoryRepository;
