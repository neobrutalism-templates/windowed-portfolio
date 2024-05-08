import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Page() {
  const PROJECTS = [
    {
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project1.png',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project2.png',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Project 3',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project3.png',
      repoUrl: 'https://github.com',
    },
    {
      name: 'Project 4',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project4.png',
      repoUrl: 'https://github.com',
    },
  ]

  return (
    <>
      {PROJECTS.map((project, id) => {
        return (
          <div
            className="w600:px-[30px] w400:px-5 border-b-4 border-r-4 border-b-black border-r-black bg-bg p-8 py-10"
            key={id}
          >
            <div className="w800:w-full mx-auto w-3/4">
              <AspectRatio ratio={2 / 1}>
                <img
                  className="w-full rounded-base border-2 border-black shadow-base"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

              <div className="mt-6">
                <h2 className="w700:text-2xl w450:text-xl text-3xl font-bold">
                  {project.name}
                </h2>

                <p className="w450:text-base mt-5 text-lg">
                  {project.description}
                </p>

                <div className="w400:text-sm mt-8 grid grid-cols-2 gap-5 text-base">
                  <a
                    className="cursor-pointer rounded-base border-2 border-black bg-main px-4 py-2 text-center uppercase shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                  <a
                    className="cursor-pointer rounded-base border-2 border-black bg-main px-4 py-2 text-center uppercase shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
