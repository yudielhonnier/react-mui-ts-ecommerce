import { getFunction } from 'firebaseSDK';
import servicesRepository from 'firebaseSDK/repositories/services';

class ServicesServices {
  /*Return service by id */
  async getById(id) {
    return servicesRepository.getById(id);
  }
}

const servicesServices = new ServicesServices();

export default servicesServices;
