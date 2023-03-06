import Header from "../components/Header"
import Footer from "../components/Footer"

const About = () => {
  const posts = [
    {
      id: 1,
      title: 'Freddy Caione',
      href: 'https://www.linkedin.com/in/frederickcaione/',
      description: '',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1062764461024358555/1082313913091240016/IMG_1055.jpeg',
      date: 'Mar 06, 2023',
      datetime: 'Mar 06, 2023',
      author: {
        name: 'LinkedIn',
        imageUrl:
          'https://cdn-user-icons.flaticon.com/95365/95365319/1678113940573.svg?token=exp=1678114841~hmac=f2593a83d5957c5ac18342b7edc23e87',
      },
    },
    {
      id: 2,
      title: 'Anatoliy Agadzhanov',
      href: 'https://www.linkedin.com/in/anatoliy-agadzhanov/',
      description: '',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1063524576904101899/1082346422613053470/Screenshot_2023-03-06_at_11.55.51_AM.png',
      date: 'Mar 06, 2023',
      datetime: 'Mar 06, 2023',
      author: {
        name: 'LinkedIn',
        imageUrl:
          'https://cdn-user-icons.flaticon.com/95365/95365319/1678113940573.svg?token=exp=1678114841~hmac=f2593a83d5957c5ac18342b7edc23e87',
      },
    },
    {
      id: 3,
      title: 'Hyun Bin Yim',
      href: 'https://www.linkedin.com/in/hyunbinyim/',
      description: '',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1062764461024358555/1082388587682746398/hbpic.jpeg',
      date: 'Mar 06, 2023',
      datetime: 'Mar 06, 2023',
      author: {
        name: 'LinkedIn',
        imageUrl:
          'https://cdn-user-icons.flaticon.com/95365/95365319/1678113940573.svg?token=exp=1678114841~hmac=f2593a83d5957c5ac18342b7edc23e87',
      },
    },
    // More posts...
  ]


  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Us</h2>
            <p className="mt-12 text-xl leading-8 text-gray-600">
            We are a team of experienced web developers who specialize in creating innovative, user-friendly digital solutions. We use the latest tools and technologies to create responsive, visually stunning websites tailored to meet our clients' unique needs. We value collaboration, communication, and creativity, and work closely with our clients to ensure their goals and objectives are met. Our mission is to help businesses establish a strong online presence and reach their target audience through effective web solutions. Contact us today to learn more.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About