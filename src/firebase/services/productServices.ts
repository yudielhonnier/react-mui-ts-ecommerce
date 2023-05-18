import productRepository from '@/firebase/repositories/products';
import Product from '@/modules/home/models/Product';

class ProductServices {
  /**
   * Update product
   */
  async update(id: string, data: Product) {
    return productRepository.update(id, data);
  }
  /**
   * Create product
   */
  async create(product: Product) {
    return productRepository.create({
      ...product,
      reference: '0',
      'creation-date': new Date().toJSON(),
    });
  }
  /**
   * Delete product by ID attribute
   */
  async delete(id: string) {
    return productRepository.delete(id);
  }
  /**
   * Return all products
   * @returns Array
   */
  async getAll() {
    return productRepository.getAll();
  }

  async getByID(id: string) {
    return productRepository.getById(id);
  }
  /**
   * Return products, limit by parameter count'
   * @param count
   * @returns Array
   */
  async getFirstToList(count = 10) {
    return productRepository.getWithLimitOrderBy(count, 'reference', true);
  }
  async getLastToList(count = 10) {
    return productRepository.getWithLimitOrderBy(count, 'reference', false);
  }

  async getOrderByDate(count: number) {
    return productRepository.getWithLimitOrderBy(count, 'creation-date', true);
  }
}

const productServices = new ProductServices();

export default productServices;
