import { getCollection } from 'firebaseSDK';
import FirebaseBase from 'firebaseSDK/repositories/FirebaseBase';

class UserRepository extends FirebaseBase {
  constructor() {
    super(getCollection('user'));
  }
}

const userRepository = new UserRepository();

export default userRepository;
