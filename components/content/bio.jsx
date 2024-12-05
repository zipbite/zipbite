'use client'

import { LuMail, LuGithub, LuUser, LuCheck, LuMusic } from 'react-icons/lu';
import { RiDiscordLine, RiBlueskyLine } from 'react-icons/ri';

export default function Bio(props) {
    return (
        <div className="col-span-1 md:border-r-2 border-zinc-900 border-dashed pr-4">
          <div className="flex flex-col gap-4 items-start text-xs">
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <LuUser size={20} />
                <p className="text-zinc-100 font-semibold">About Me</p>
              </div>
              <p>Self-taught full stack developer with 6+ years experience in web applications. Skilled in HTML, CSS, JavaScript, React, and Node.js, with a passion for learning.</p>
            </div>
            <div className='flex items-center gap-2'>
              <LuMail size={20} />
              <a href="mailto:zipbite@protonmail.com" className="text-zinc-100 font-semibold" target="_blank">zipbite@protonmail.com</a>
            </div>
            <div className='flex items-center gap-2'>
              <RiBlueskyLine size={20} />
              <a href="https://bsky.app/profile/zipbyte.dev" className="text-zinc-100 font-semibold" target="_blank">zipbyte.dev</a>
            </div>
            <div className='flex items-center gap-2'>
              <LuGithub size={20} />
              <a href="https://github.com/zipbite" className="text-zinc-100 font-semibold" target="_blank">@zipbite</a>
            </div>
            <div className='flex items-center gap-2'>
              <RiDiscordLine size={20} />
              <p className="text-zinc-100 font-semibold">zipbite</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='relative'>
                <LuCheck size={20} className='text-emerald-500 absolute top-0 left-0 animate-ping' />
                <LuCheck size={20} className='text-emerald-500' />
              </div>
              <p>Available For Work</p>
            </div>
          </div>
        </div>
    )
}