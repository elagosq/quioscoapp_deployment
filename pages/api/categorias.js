import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prima = new PrismaClient();
  const categorias = await prima.categoria.findMany({
    include: {
      productos: true, 
    }
  })

  res.status(200).json(categorias)
}

