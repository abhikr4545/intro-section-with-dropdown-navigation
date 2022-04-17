import LearnMoreButton from './LearnMoreButton';
import clientAudioPhile from '../images/client-audiophile.svg';
import clientDataBiz from '../images/client-databiz.svg';
import clientMaker from '../images/client-maker.svg';
import clientMeet from '../images/client-meet.svg';

const Hero = () => {
  return (
    <section className="font-epilogue container">
      <div className='md:flex md:justify-between md:items-center md:flex-row-reverse'>
        {/* Image Section Start */}
        <div className={`bg-hero-mobile md:bg-hero-desktop bg-no-repeat bg-cover w-screen h-[75vw] md:w-[25vw] md:h-[35vw] mt-6`}></div>
        {/* Image Section End */}
        {/* Description Start */}
        <div className='text-center md:text-left md:flex-1 mt-6 md:mt-0'>
          {/* Info start */}
          <div className=''>
            <h1 className='text-7xl font-semibold md:max-w-[480px] md:mt-20'>Make remote work</h1>
            <p className='text-mediumGray text-base max-w-[340px] md:max-w-[461px] mx-auto mt-4 md:mt-16 md:mx-0'>
              Get your team in sync, no matter your location.Streamline processes, create team rituals, and watch productivity soar.
            </p>
            <LearnMoreButton />
          </div>
          {/* Company Tags Start */}
        <div className='flex justify-between items-center md:items-center mt-12 px-4 md:px-0 md:max-w-[450px]'>
          <img className='w-20 h-auto' src={clientDataBiz} alt="databiz" />
          <img className='w-20 h-auto' src={clientAudioPhile} alt="audiophile" />
          <img className='w-20 h-auto' src={clientMeet} alt="meet" />
          <img className='w-20 h-auto' src={clientMaker} alt="maker" />
        </div>
        {/* Company Tags End */}
          {/* Info end */}
        </div>
        
        {/* Description End */}
      </div>
    </section>
  )
}

export default Hero