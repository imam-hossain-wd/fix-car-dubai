
import productsData from '../../../data/productData.json';
import ProductDetailsPage from '@/pages/ProductPage/ProductDetailsPage'


export default async function ServiceDetails({ params }) {
  const products = productsData.products.find(
    (s) => s.slug === params.slug
  ) 

  if (!products) {
    return notFound()
  }

  return <ProductDetailsPage products={products} />
}