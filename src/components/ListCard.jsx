import { Link } from "react-router-dom"
import Client from "../services/api"


const ListCard = ({ id, name, image, color, price, getAllListings, user }) => {

	const handleDelete = async (id) => {
		await Client.delete(`/listings/${id}`)
		getAllListings()
	}

	console.log(id)
	console.log(user?.id)

	return (
		<div>
			<div key={id} className="group relative">
				<Link to={`/listings/${id}`}>
					<div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
						<img
							src={image}
							alt="picture of product"
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<h3 className="mt-4 text-sm text-gray-700">
						<span className="absolute inset-0" />
						{name}
					</h3>
					<p className="mt-1 text-sm text-gray-500">{color}</p>
					<p className="mt-1 text-sm font-medium text-gray-900">
						${price}
					</p>
				</Link>
			</div>
			{user?.id === id && (
			<button onClick={() => handleDelete(id)}>
				Delete
			</button>
			)}
		</div>
	)
}
export default ListCard
