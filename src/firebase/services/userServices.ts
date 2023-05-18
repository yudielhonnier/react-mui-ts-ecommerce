import { getFunction } from '@/firebase';
import userRepository from '@/firebase/repositories/user';

//todo: finish this method
class UserServices {
  // /**
  //  * Update user in collection
  //  */
  // async update(id, data) {
  //   return userRepository.update(id, data);
  // }
  // /**
  //  * Update user by cloud function
  //  * @param idLoginUser
  //  * @param userData
  //  * @returns Promise
  //  */
  // async updateCF(idLoginUser, userData) {
  //   const updateCall = getFunction('userUpdate');
  //   return updateCall({ idLoginUser, userData });
  // }
  // /**
  //  * Create user in collection
  //  */
  // async create(user) {
  //   return userRepository.create(user);
  // }
  // /**
  //  * Create user in collection with specific id
  //  */
  // async createWithId(id, user) {
  //   return userRepository.createWithID(id, user);
  // }
  // /**
  //  * Create user by cloud function
  //  * @param idLoginUser
  //  * @param userData
  //  * @returns Promise
  //  */
  // async createCF(idLoginUser, userData) {
  //   const createCall = getFunction('userCreate');
  //   return createCall({ idLoginUser, userData });
  // }
  // /**
  //  * Delete user by ID attribute
  //  */
  // async delete(id) {
  //   return this.update(id, { delete: true });
  // }
  /**
   * Return all user
   * @returns Array
   */
  async getAll() {
    return userRepository.getAll();
  }
  // /**
  //  * Return users, limit by parameter count'
  //  * @param count
  //  * @returns Array
  //  */
  // async getFirstToList(count = 10) {
  //   return userRepository.getWithLimitOrderBy(count, 'createdAt', true);
  // }
  // /**
  //  * Return user by id
  //  * @param id
  //  * @returns user
  //  */
  // async getById(id) {
  //   return userRepository.getById(id);
  // }
}

const userServices = new UserServices();

export default userServices;
