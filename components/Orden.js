import { formatearDinero } from "@/helpers"
import axios from "axios"
import { toast } from 'react-toastify'
import Image from "next/image"

const Orden = ({orden}) => {
  const {id,nombre,total,pedido} =  orden
  console.log(pedido)

  const completarOrden = async () => {
	try {
	  await axios.post(`/api/ordenes/${id}`)
	  toast.success('Order Lista')
	} catch (error) {
	  toast.error('Hubo un Error')
	}
  }

  return (
  <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Order: {id}</h3>
	  <p className="text-lg font-bold">Clientes :{nombre}</p>
	  <div>
        {pedido.map(platillo => (
			<div key={platillo.id} className="py-3 flex border-b last-of-type:border-0 items-center">
              <div className="w-32">
                <Image 
				  width={400}
				  height={500}
				  src={`/assets/img/${platillo.imagen}.jpg`}
				  alt={`Imagen platillo ${platillo.nombre}`}
				/>
			  </div>
			  <div className="p-5 space-y-2">
				<h4 className="text-xl font-bold text-amber-500">{platillo.nombre}</h4>
				<p className="text-lg font-bold">{platillo.cantidad}</p>
			  </div> 
			</div>
		))} 
	  </div>
	  <div className="md:flex md:items-center md:justify-between my-10">
         <p className="mt-5 font-black text-4xl text-amber-500 ">
           Total a Pagar: {formatearDinero(total)} 
		 </p>
		 <button
		  type="button"
		  className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
		  onClick={completarOrden}
		 >
          Completar Order
		 </button>
	  </div>
	</div>
  )
}

export default Orden