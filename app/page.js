'use client';

import { Content, FlexBox, ShowOnDesktop, ShowOnMobile } from "@/components/layouts";
import { Text, TitleSM } from "@/components/typography";
import Image from "next/image";

export default function Home() {
  return (
    <Content padding="py-16">
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <div className="flex flex-col z-0">
          {/* Make a background image that has a faded overlay, make it wide on mobile and tall on desktop next to the text */}
          <div className="relative w-full h-72 md:h-auto sm:w-48">
            <div className="absolute top-0 left-0 sm:w-48 w-full h-full bg-gradient-to-l from-zinc-950 to-zinc-950/80 z-10" />
            <div className="relative sm:w-48 w-full h-full z-0 rounded overflow-hidden">
              <ShowOnDesktop>
                <Image 
                  src="/avatar.jpg"
                  alt="Avatar"
                  objectFit="cover"
                  width={200}
                  height={100}
                  className="rounded w-full h-72 object-cover object-top"
                />
              </ShowOnDesktop>
              <ShowOnMobile>
                <Image 
                  src="/avatar.jpg"
                  alt="Avatar"
                  objectFit="cover"
                  width={1000}
                  height={200}
                  className="rounded w-full h-full object-cover object-center"
                />
              </ShowOnMobile>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-zinc-400 z-10 max-w-4xl sm:-space-x-10">
          <TitleSM className="text-zinc-200 sm:-ml-16">Hi, I'm Zipbyte</TitleSM>
          <Text>
            I'm a software engineer with a passion for building web applications. I have experience working with
            JavaScript, React, Node.js, and other technologies. I'm always looking for new opportunities to
            learn and grow.
          </Text>
          <Text>
            I'm currently working on a few side projects and looking for new opportunities. If you're interested in
            working together, feel free to reach out.
          </Text>
          <Text>
            The website is still a <span className="italic text-zinc-200">work in progress</span>, so please excuse the mess. I'm working on adding more content and
            features, so stay tuned for updates.
          </Text>
        </div>
      </div>
    </Content>
  );
}
