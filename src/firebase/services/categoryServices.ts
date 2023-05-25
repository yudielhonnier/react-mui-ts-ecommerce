import categoryRepository from '@/firebase/repositories/categories';
import { Category } from '@/types/models/Category';

class CategoryServices {
  /**
   * Update category
   */
  async update(id: string, data: Category) {
    return categoryRepository.update(id, data);
  }
  /**
   * Create category
   */
  async create(category: Category) {
    return categoryRepository.create({
      ...category,
      reference: '0',
      'creation-date': new Date().toJSON(),
    });
  }
  /**
   * Delete category by ID attribute
   */
  async delete(id: string) {
    return categoryRepository.delete(id);
  }
  /**
   * Return all categorys
   * @returns Array
   */
  async getAll() {
    return categoryRepository.getAll();
  }

  async getByID(id: string) {
    return categoryRepository.getById(id);
  }
  /**
   * Return categorys, limit by parameter count'
   * @param count
   * @returns Array
   */
  async getFirstToList(count = 10) {
    return categoryRepository.getWithLimitOrderBy(count, 'reference', true);
  }
  async getLastToList(count = 10) {
    return categoryRepository.getWithLimitOrderBy(count, 'reference', false);
  }

  async getOrderByDate(count: number) {
    return categoryRepository.getWithLimitOrderBy(count, 'creation-date', true);
  }
}

const categoryServices = new CategoryServices();

export default categoryServices;
