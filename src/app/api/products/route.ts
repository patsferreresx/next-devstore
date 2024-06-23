import data from './data.json'

export async function GET() {
  // retorna todos os produtos (http://localhost:3000/api/products)
  return Response.json(data.products)
}
