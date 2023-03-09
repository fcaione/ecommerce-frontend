import { StarIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import Client from "../services/api"
import { Link, useParams } from "react-router-dom"

const Comments = (props) => {

	let { listingId } = useParams()

	const [toggleAddingComment, setToggleAddingComment] = useState(false)

	const [formValues, setFormValues] = useState({
		content: "",
		listingId,
		userId: props.user?.id,
	})

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const res = await Client.post(
			`/comments/${listingId}/${props.user?.id}`,
			formValues
		)
		setFormValues({ content: "" })
		await props.getListing()
	}

	return props.comments && (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl py-0 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 id="reviews-heading" className="sr-only">
					Reviews
				</h2>
				<h2 className="text-lg font-medium text-gray-900 pb-4">Recent comments</h2>

				<div className="space-y-10 pb-4">
					{props.comments.map((comment) => (
						<div key={comment.id} className="flex flex-col sm:flex-row">
							<div className="order-2 mt-6 sm:mt-0 sm:ml-16">
								<div
									className="mt-3 space-y-6 text-base text-gray-600"
									dangerouslySetInnerHTML={{ __html: comment.content }}
								/>
							</div>

							<Link to={`/profile/${comment.commentOwner?.id}`}>
							<div className="order-1 flex items-center sm:flex-col sm:items-start">
								<img
									src={comment.commentOwner?.profileImage}
									alt={`${comment.commentOwner?.name}.`}
									className="h-12 w-12 rounded-full object-cover"
								/>
								<p className="font-medium text-gray-900">
									{comment.commentOwner?.name}
								</p>
							</div>
							</Link>
						</div>
					))}
				</div>

				{!toggleAddingComment && props.user && (
					<button
						type="submit"
						className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full mt-5"
						onClick={() => setToggleAddingComment(true)}
					>
						Post a Comment
					</button>
				)}

				{toggleAddingComment && (
					<form onSubmit={handleSubmit}>
						<input
							className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							type="text"
							name="content"
							id="content"
							value={formValues.content}
							onChange={handleChange}
						/>
						<button
							className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full mt-5"
							type="submit"
						>
							Submit
						</button>
						<button
							className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full mt-5"
							type="reset"
							onClick={() => setToggleAddingComment(false)}
						>
							Cancel
						</button>
					</form>
				)}
			</div>
		</div>
	)
}
export default Comments
