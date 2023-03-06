import { Link } from "react-router-dom"

const ListCard = (props) => {
	return (
		<div key={props.id} className="group relative">
			<Link to={`/listing/${props.id}`}>
				<div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
					<img
						src="https://media-photos.depop.com/b1/8603949/1459213852_14ecfa9f104e46a995f732c5bdcfcc0a/P0.jpg"
						alt="picture of product"
						className="h-full w-full object-cover object-center"
					/>
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
