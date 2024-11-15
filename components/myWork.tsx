import data from "../data/work.json";
import Image from 'next/image';
import React from 'react';
import gbcs from 'public/images/gbcs.png';
import triton from 'public/images/triton.jpg'
import tys from 'public/images/tysCreative.jpeg'
export default function Work() {


    return (
        <div className='rounded-2xl borderp-6 border-zinc-100 border-zinc-700/40 bg-gray-800 p-6 pl-8 overflow-y-auto no-scrollbar work'>
            <h2 className="flex text-base font-semibold tracking-tight text-white">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                    <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className=" fill-zinc-100/10 stroke-zinc-500"></path>
                    <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-500"></path>
                </svg>

                <span className="ml-3">Work</span>
            </h2>

            <ol className="mt-6 space-y-4">
               {data.map((work) => {
                 let companyVariable
                 if (work.logo === '/gbcs.png') {
                    companyVariable = gbcs;
                    } else if (work.logo === '/triton.jpg') {
                    companyVariable = triton;
                    }
                    else if (work.logo === '/tysCreative.jpeg'){
                        companyVariable = tys;
                    }
                    else{
                        companyVariable = gbcs
                    }
                return (
                <li key={work.id} className="flex gap-4">
                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
                        <Image alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="rounded-full h-7 w-7 bg-transparent" src={companyVariable}/>
                    </div> 
                    <div className="flex flex-auto flex-wrap gap-x-2">
                        <h2 className="w-full flex-none text-sm font-medium text-zinc-100">{work.name}</h2>
                        <h2 className="text-xs text-zinc-400">{work.position}</h2>
                        <time className="ml-auto text-xs text-zinc-500">{work.time}</time>
                    </div>
                </li>
               )})} 
            </ol>
        </div>
    )
}