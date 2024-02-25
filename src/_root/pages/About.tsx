import { AboutBlocks } from "@/constants"

const About = () => {
  return (
    <section className="size-full bg-color3 pt-24 pb-10 px-2 xl:pt-36 md:px-10 xl:px-20">
      <div className="space-y-8">
        {AboutBlocks.map((block, index) => (
          <div className={`md:flex bg-color2 rounded-[50px] h-fit ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={index}>
            <div className=" p-5 rounded-t-[50px] space-y-2 md:w-1/2">
              <h2 className="font-cinzel text-2xl font-semibold xl:text-4xl">{block.title}</h2>
              <p className="font-montserrat text-base xl:text-xl">{block.text}</p>
            </div>
            <img
              src={block.image}
              alt="image"
              className={` w-full md:w-1/2 object-cover rounded-b-[50px] min-h-[400px] object-center ${index % 2 === 0 ? 'md:rounded-l-none md:rounded-r-[50px]' : 'md:rounded-r-none md:rounded-l-[50px]'
                }`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default About