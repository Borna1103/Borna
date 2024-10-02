import data from '../public/projects.json';

export default function Projects() {
    return (
        <div className='rounded-2xl borderp-6 border-zinc-100 border-zinc-700/40 bg-gray-800 p-10 overflow-y-auto no-scrollbar project'>
            <div className='flex flex-col gap-16'>
                {data.map((project) => (
                <div className='group relative flex flex-col items-start'>
                    <time className='relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5'>
                        <span className='absolute inset-y-0 left-0 flex items-center'>
                            <span className='h-4 w-0.5 rounded-full bg-zinc-500'></span>
                        </span>
                        {project.time}
                    </time>

                    <h2 className='text-base font-semibold tracking-tight text-white'>
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-700/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl "></div>
                        <a href={project.link} target='_blank'>
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">{project.name}</span>
                        </a> 
                    </h2>
                    <p className='text-sm text-zinc-500'>{project.tools}</p>
                    <p className='relative z-10 mt-2 text-sm text-zinc-400'>{project.about}</p>

                    <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                        View project
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                            <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
