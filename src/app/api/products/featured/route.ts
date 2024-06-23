import data from '../data.json'

export async function GET() {
  // retorna os produtos com featured = true (http://localhost:3000/api/products/featured)
  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}
