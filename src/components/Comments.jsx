import { StarIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import Client from "../services/api"
import { useParams } from "react-router-dom"

const Comments = (props) => {
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ")
	}

    let { listingId } = useParams()

	const [toggleAddingComment, setToggleAddingComment] = useState(false)

	const [formValues, setFormValues] = useState({
		content: "",
        listingId,
        userId: props.user?.id
	})

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await Client.post(`/comments/${listingId}/${props.user.id}`, formValues)
        setFormValues({ content: ""})
        props.getListing()
      }

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl py-0 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-lg font-medium text-gray-900">
					Recent comments
				</h2>
				<div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
					{props.comments?.map((comment) => (
						<div
							key={comment.id}
							className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
						>
							<div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
								<div className="flex items-center xl:col-span-1">
									<div className="flex items-center">
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={classNames(
													comment.rating > rating
														? "text-yellow-400"
														: "text-gray-200",
													"h-5 w-5 flex-shrink-0"
												)}
												aria-hidden="true"
											/>
										))}
									</div>
									<p className="ml-3 text-sm text-gray-700">
										{comment.rating}
										<span className="sr-only">
											{" "}
											out of 5 stars
										</span>
									</p>
								</div>

								<div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
									<h3 className="text-sm font-medium text-gray-900">
										{comment.title}
									</h3>

									<div
										className="mt-3 space-y-6 text-sm text-gray-500"
										dangerouslySetInnerHTML={{
											__html: comment.content,
										}}
									/>
								</div>
							</div>

							<div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
								<p className="font-medium text-gray-900">
									{comment.author}
								</p>
								<time
									dateTime={comment.datetime}
									className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
								>
									{comment.date}
								</time>
							</div>
						</div>
					))}
				</div>

				{!toggleAddingComment && (
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
