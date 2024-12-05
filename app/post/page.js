'use client';

import { LuCalendarClock, LuUser } from 'react-icons/lu'
import { useRouter } from 'next/navigation'

export default function Post() {
    const router = useRouter();
    return (
        <section className="flex flex-col mb-32">
        <div className="flex flex-col relative h-72">
        <button onClick={() => router.back()} className="border-2 border-zinc-100 text-zinc-100 text-xs font-bold uppercase hover:text-zinc-950 hover:bg-zinc-100 transition-all duration-150 ease-linear px-8 py-1.5 rounded z-30 w-max my-6 mx-12">Go Back</button>
            <div className="h-72 w-full absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60 z-10" />
            <img src="/post.jpg" layout="fill" className="object-center object-cover absolute inset-0 w-full h-72 rounded-b z-0" />
        </div>
        <div className='flex flex-col gap-8 -mt-10 z-30'>
            <div className="flex flex-wrap gap-4 items-center justify-between px-12">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl uppercase font-bold text-zinc-100">Post Title</h3>
                </div>
                <div className="flex items-center gap-8">
                    <div className='flex items-center gap-2'>
                        <LuUser size={16} className='text-zinc-100' />
                        <small className="text-sm font-semibold">zipbyte</small>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LuCalendarClock size={16} className='text-zinc-100' />
                        <small className="text-sm font-semibold">12/05 - 2024</small>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 px-12'>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient hendrerit sed curabitur massa lacus. Platea molestie amet porttitor integer etiam tristique. Afermentum fames praesent nulla tempor eu netus bibendum. Cursus feugiat placerat est posuere nullam porta senectus. Per blandit inceptos et euismod, mollis pulvinar etiam. At placerat ad curae; lobortis felis nibh. Consequat proin cras eget conubia non curabitur orci commodo. Suscipit semper purus est per interdum. Mus tortor finibus vel dictum imperdiet.</p>

                <p>Ante mi erat ultricies inceptos consequat quis nisi. Potenti hendrerit dictum aliquam libero lacus tortor egestas ad. Aliquam dignissim per non duis consectetur vivamus. Amet hendrerit tempor tempus himenaeos, sodales nullam. Hendrerit euismod aliquet venenatis sed ut sollicitudin. Ullamcorper vulputate dictumst ultrices dis iaculis convallis semper. Aptent sollicitudin elementum taciti purus fermentum aliquam tortor. Fermentum feugiat sociosqu ut eleifend rutrum. Pharetra conubia cubilia dui faucibus taciti primis nisi himenaeos. Mus vestibulum rhoncus elit proin massa nec aliquet felis.</p>

                <div className="flex flex-col justify-center relative h-32">
                    <h3 className="z-30 px-12 text-white font-bold uppercase text-xl self-end">Lorem Ipsum</h3>
                    <div className="h-32 w-full absolute inset-0 bg-gradient-to-l from-zinc-950 via-zinc-950/90 to-zinc-950/80 z-10" />
                    <img src="/postspacer.png" layout="fill" className="object-center object-cover absolute inset-0 w-full h-32 rounded z-0" />
                </div>

                <p>Ac vivamus et rhoncus luctus morbi magna. Elementum finibus ac amet vehicula curae bibendum consequat vehicula. Odio ante lectus nec venenatis a commodo. Fringilla risus placerat fames diam mattis at ad. Sed lectus mi dapibus rhoncus scelerisque luctus. Vivamus faucibus efficitur nam; erat morbi erat. Aliquet montes pharetra eu velit diam elementum vulputate. Luctus euismod enim hac vulputate orci; laoreet tempus. Risus phasellus integer dictum congue molestie venenatis proin blandit.</p>

                <p>Ridiculus dignissim turpis himenaeos aptent fringilla natoque nec. Vivamus primis gravida elementum tempor natoque. Suscipit finibus dignissim torquent mollis ad, egestas curabitur semper diam. Amet sollicitudin sit habitasse enim cras fringilla viverra. Ultricies interdum nunc ridiculus porta duis risus. Pulvinar diam arcu torquent, habitasse blandit malesuada. Id mi etiam sem vestibulum non. Finibus gravida feugiat consequat molestie habitant litora leo. Ad vitae magna inceptos pretium mi dignissim metus.</p>

                <p>Tellus taciti vitae ante ac eget enim consectetur. Magna gravida tincidunt auctor; sagittis arcu molestie. Ornare urna et feugiat vestibulum tincidunt. Arcu praesent egestas nullam magna luctus primis dictum fringilla. Augue nulla taciti imperdiet curae aenean etiam nostra eros. Proin dolor magnis turpis nam tellus. Netus id luctus accumsan porttitor rutrum sodales.</p>
            </div>
        </div>
        </section>
    );
}
