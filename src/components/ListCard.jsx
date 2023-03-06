import { Link } from "react-router-dom"

const ListCard = (props) => {
	return (
		<div key={props.id} className="group relative">
			<Link to={`/listings/${props.id}`}>
				<div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
					<img
						src={props.image}
						alt="picture of product"
						className="h-full w-full object-cover object-center"
					/>
          {console.log(props.image)}
				</div>
				<h3 className="mt-4 text-sm text-gray-700">
						<span className="absolute inset-0" />
						{props.name}
				</h3>
				<p className="mt-1 text-sm text-gray-500">{props.color}</p>
				<p className="mt-1 text-sm font-medium text-gray-900">
					${props.price}
				</p>
			</Link>
		</div>
	)
}
export default ListCard
