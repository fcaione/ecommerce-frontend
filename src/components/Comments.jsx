import { StarIcon } from "@heroicons/react/20/solid"

const Comments = (props) => {
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ")
	}

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-lg font-medium text-gray-900">
					Recent comments
				</h2>
				<div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
					{console.log(props)}
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
			</div>
		</div>
	)
}
export default Comments
