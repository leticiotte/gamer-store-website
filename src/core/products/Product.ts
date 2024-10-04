import Priceable from './Priceable';
import Specification from './Specification';

export default interface Product extends Priceable {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  videoReview: string;
  rating: number;
  tags: string[];
  specifications: Specification;
}
