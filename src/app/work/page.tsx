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
            className="text-foreground bg-bg w600:px-[30px] w400:px-5 border-r-4 border-b-4 border-r-black border-b-black p-8 py-10"
            key={id}
          >
            <div className="w800:w-full mx-auto w-3/4">
              <AspectRatio
                className="rounded-base shadow-shadow -bottom-[2px]! border-2 border-black"
                ratio={2 / 1}
              >
                <img
                  className="rounded-base w-full"
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
                    className="border-border text-main-foreground shadow-shadow rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center uppercase transition-all hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                  <a
                    className="border-border text-main-foreground shadow-shadow rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center uppercase transition-all hover:shadow-none"
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
