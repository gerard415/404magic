import Aura from '@/assets/logos/Aura.svg';
import Swiss from '@/assets/logos/Swiss.svg';
import Springfield from '@/assets/logos/Springfield.svg';
import Hamilton from '@/assets/logos/Hamilton.svg';
import Delaware from '@/assets/logos/delaware.svg';

const logos = {
    Aura,
    Swiss,
    Springfield,
    Hamilton,
    delaware: Delaware
};

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='bg-secondary container-layout pt-20 pb-4'>
        <div className='flex flex-col items-center justify-between'>
            <div className='space-y-6'>
               {/* Headline & Description */}
                <div className='flex-center flex-col text-center'>
                    <h1 className="mb-6">
                        Turn <span className="text-primary">Broken</span> Links <br className='hidden sm:block' /> 
                        Into Engaging Experiences
                    </h1>
                    <p className=" md:text-lg text-[#333f3c] max-w-2xl mx-auto">
                        404magic helps you build stunning, brand-aligned 404 pages in minutes—track,
                        redirect, and engage users who've hit a dead end.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className='flex-center gap-4'>
                    <button className="btn-primary-100">Start for free</button>
                    <button className="btn-primary-200 border border-gray-300">Browse Templates</button>
                </div> 
            </div>
            

            {/* Partner Logos */}
            <div className="w-full mt-20 flex flex-col items-center text-sm text-[#9E9E9E] space-y-4">
                <p className="font-bold">Chosen by</p>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
                    {Object.entries(logos).map(([name, src]) => (
                        <img key={name} src={src} alt={name} className="h-4" />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero