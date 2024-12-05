import { ShowOnDesktop, ShowOnMobile } from '@/components/displays';
import { LuMail, LuGithub, LuUser, LuCheck } from 'react-icons/lu';
import { RiDiscordLine } from 'react-icons/ri';

export default function Home() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col relative h-72">
        <div className="h-72 w-full absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60 z-10" />
          <img src="/header.jpg" layout="fill" className="object-center object-cover absolute inset-0 w-full h-72 rounded z-0" />
      </div>
      <div className="flex items-center -mt-12 ml-8 md:ml-14 z-20">
        <ShowOnDesktop>
          <img src="/pfp.jpg" className="border-4 border-zinc-950 rounded-full relative z-10 w-32 h-32 object-center object-cover" />
        </ShowOnDesktop>
        <div className="flex flex-col md:ml-6 gap-2">
          <div className="flex flex-col">
            <p className="font-bold text-zinc-100 text-lg">Zipbyte</p>
            <p className="font-semibold text-sm">@zipbyte</p>
          </div>
          <p className="text-zinc-300 text-sm">I'm a developer, designer, and creator. I make things for the web.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-5 gap-12 md:gap-4 mt-12 pl-8 space-x-2">
        <div className="col-span-1 md:border-r-2 border-zinc-900 border-dashed pr-4">
          <div className="flex flex-col gap-4 items-start text-xs">
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <LuUser size={20} />
                <p className="text-zinc-100 font-semibold">About Me</p>
              </div>
              <p>Self-taught full stack developer with 6+ years experience in responsive websites. Skilled in HTML, CSS, JavaScript, React, and Node.js, with a passion for learning.</p>
            </div>
            <div className='flex items-center gap-2'>
              <LuMail size={20} />
              <a href="mailto:zipbite@protonmail.com" className="text-zinc-100 font-semibold" target="_blank">zipbite@protonmail.com</a>
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
              <p className="text-zinc-100 font-semibold">Zipbyte</p>
              <p className="text-sm">My personal portfolio, the current site you're visiting!</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-zinc-100 font-semibold">Animux</p>
              <p className="text-sm">Anime forums where you can meet likeminded people and participate in community activities & more!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
