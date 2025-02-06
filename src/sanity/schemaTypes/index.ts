import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import order from './order'
import productReference from './productReference'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, order, productReference],
}
