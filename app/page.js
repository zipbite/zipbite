'use client';

import { ShowOnDesktop, ShowOnMobile } from '@/components/displays';
import { useState, useEffect } from 'react';
import { LuMail, LuGithub, LuUser, LuCheck, LuMusic } from 'react-icons/lu';
import { RiDiscordLine, RiBlueskyLine } from 'react-icons/ri';
import Link from 'next/link';

export default function Home() {
  // Fetch the currently playing song
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      const response = await fetch('/api/spotify');
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setSong(data);
      console.log(data);
    };

    fetchSong();
  }, []);
  return (
    <section className="flex flex-col">
      <div className="flex flex-col relative h-72">
        <div className="h-72 w-full absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60 z-10" />
          <img src="/header.jpg" layout="fill" className="object-center object-cover absolute inset-0 w-full h-72 rounded z-0" />
      </div>
      <div className='flex items-start justify-between'>
        <div className="flex items-center -mt-12 ml-8 md:ml-14 z-20">
          <ShowOnDesktop>
            <img src="/pfp.jpg" className={`ring-2 ring-offset-2 ring-offset-zinc-950 ${song && song.isPlaying ? 'ring-emerald-400' : 'ring-red-500'} rounded-full relative z-10 w-32 h-32 object-center object-cover`} />
          </ShowOnDesktop>
          <div className="flex flex-col md:ml-6 gap-2">
            <div className="flex flex-col">
              <p className="font-bold text-zinc-100 text-lg">Zipbyte</p>
              <p className="font-semibold text-sm">@zipbyte</p>
            </div>
            <p className="text-zinc-300 text-sm">I'm a developer, designer, and creator. I make things for the web.</p>
          </div>
        </div>
        {song && song.isPlaying && (
          <ShowOnDesktop>
            <Link target="_blank" href={song.songUrl} className='group z-20 px-4 py-2 flex flex-col gap-1 -mt-7 mr-8 md:ml-14'>
              <div className='flex items-center justify-between'>
                <div className='relative z-20 -mt-4'>
                  <LuMusic size={20} className='rounded-full text-xs text-emerald-500 absolute z-30 animate-ping' />
                  <LuMusic size={20} className='rounded-full text-xs text-emerald-500 absolute z-20' />
                </div>
                <p className='z-20 font-bold uppercase text-xs text-emerald-500 self-end'>Listening to</p>
              </div>
              <div className='z-20 flex gap-3 bg-zinc-950 border-b-2 border-emerald-500 pl-1.5 pr-20 py-1.5 rounded-md'>
                <img src={song.albumImageUrl} className="z-20 w-10 h-10 object-cover rounded group-hover:grayscale transition-all duration-300 ease-in-out" />
                <div className='z-20 flex flex-col justify-center'>
                  <p className='z-20 text-zinc-100 font-semibold text-sm max-w-32 truncate'>{song.title}</p>
                  <p className='z-20 text-zinc-300 text-xs max-w-32 truncate'>{song.artist}</p>
                </div>
              </div>
            </Link>
          </ShowOnDesktop>
        )}
      </div>
      <div className="grid md:grid-cols-5 gap-12 md:gap-4 mt-12 pl-8 space-x-2">
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
              <LuCheck size={20} className='text-emerald-500' />
              <p>Available For Work</p>
            </div>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className='flex items-center gap-2'>
                <p className="text-zinc-100 font-semibold">Zipbyte</p>
                <span className='bg-zinc-900 rounded text-[0.65rem] uppercase font-bold tracking-wide px-3 py-0.5 text-amber-500'>In Development</span>
              </div>
              <p className="text-sm">My personal portfolio, the current site you're visiting!</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className='flex items-center gap-2'>
                <p className="text-zinc-100 font-semibold">Animux</p>
                <span className='bg-zinc-900 rounded text-[0.65rem] uppercase font-bold tracking-wide px-2 py-0.5 text-rose-500'>TBA</span>
              </div>
              <p className="text-sm">Anime forums where you can meet likeminded people and participate in community activities & more!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
