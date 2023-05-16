import image from '../assets/webdev.png';

function Home() {
  return (
    <div className="bg-[#1F0A3A] w-full min-h-screen grid grid-cols-1 sm:gap-12 md:flex md:items-center md:justify-between lg:justify-center lg:gap-24 px-5">
    <div className="flex justify-center items-center w-full md:w-fit mt-[-70px] md:mt-[-160px] lg:mt-[-100px]">
      <img
        src={image}
        alt="Picture of the author"
        className="image-long w-[300px] h-[200px] md:w-[400px] md:h-[280px] lg:w-[500px]"
      />
    </div>
    <div className="animate-charcter flex justify-center text-white mt-[-100px] md:mt-[-160px] lg:mt-[-100px] md:text-xl lg:text-[27px] whitespace-nowrap">
      <div className='flex flex-col gap-2'>
        <span>Hello, I am Luka Barbakadze</span>
        <span>I am a Web Developer</span>
      </div>
    </div>
  </div>
  )
}

export default Home;
