'use client';

import { ShowOnDesktop, ShowOnMobile } from '@/components/displays';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Projects from '@/components/content/projects';
import Bio from '@/components/content/bio';
import Posts from '@/components/content/posts';
import { LuMusic } from 'react-icons/lu';

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
    <section className="flex flex-col mb-32">
      <div className="flex flex-col relative h-72">
        <div className="h-72 w-full absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60 z-10" />
          <img src="/header.jpg" layout="fill" className="object-center object-cover absolute inset-0 w-full h-72 rounded-b z-0" />
      </div>
      <div className='flex items-start justify-between'>
        <div className="flex items-center -mt-12 ml-8 lg:ml-14 z-20">
          <ShowOnDesktop>
            <img src="/pfp.jpg" className={`ring-2 ring-offset-2 ring-offset-zinc-950 ${song && song.isPlaying ? 'ring-emerald-400' : 'ring-red-500'} rounded-full relative z-10 w-32 h-32 object-center object-cover`} />
          </ShowOnDesktop>
          <div className="flex flex-col lg:ml-6 gap-2">
            <div className="flex flex-col">
              <p className="font-bold text-zinc-100 text-lg">Zipbyte</p>
              <p className="font-semibold text-sm">@zipbyte</p>
            </div>
            <p className="text-zinc-300 text-sm">I'm a developer, designer, and creator. I make things for the web.</p>
          </div>
        </div>
        {song && song.isPlaying && (
          <ShowOnDesktop>
            <Link target="_blank" href={song.songUrl} className='group z-20 px-4 py-2 flex flex-col gap-1 -mt-7 mr-8 lg:ml-14'>
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
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-4 mt-12 pl-8 space-x-2 w-full">
        <Bio />
        <div className='flex flex-col col-span-4 gap-8 w-full'>
          <Projects />
          <div className='border-b-2 border-zinc-900 border-dashed' />
          <Posts />
        </div>
      </div>
    </section>
  );
}
