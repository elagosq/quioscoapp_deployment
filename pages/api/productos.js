import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prima = new PrismaClient();
  const productos = await prima.producto.findMany({
    where:{
	  categoriaId: 1	
	}
  })
  
  res.status(200).json(productos)
}

