import FirebaseBase from '@/firebase/repositories/FirebaseBase';
import { createUserCollectionReference } from '../factory/UserFactory';
import User from '@/modules/auth/models/User';

class UserRepository extends FirebaseBase<User> {
  constructor() {
    super(createUserCollectionReference());
  }
}

const userRepository = new UserRepository();

export default userRepository;
