import data from '../data/projects.json';

export default function Projects() {
    return (
        <div className='rounded-2xl borderp-6 border-zinc-100 border-zinc-700/40 bg-gray-800 overflow-y-auto no-scrollbar project'>
            <h2 className="flex text-base font-semibold tracking-tight text-white pt-5 pl-8 pb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                    <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                    <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                </svg>

                <span className="ml-3">Projects</span>
            </h2>

            <div className='flex flex-col gap-16 pt-5 p-10'>
                {data.map((project) => (
                <div key={project.id} className='group relative flex flex-col items-start'>
                    <time className='relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5'>
                        <span className='absolute inset-y-0 left-0 flex items-center'>
                            <span className='h-4 w-0.5 rounded-full bg-zinc-500'></span>
                        </span>
                        {project.time}
                    </time>

                    <h2 className='text-base font-semibold tracking-tight text-white'>
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-700/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl "></div>
                        <a href={project.link} target='_blank' rel="noreferrer">
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
