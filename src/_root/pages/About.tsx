import { AboutBlocks } from "@/constants"

const About = () => {
  return (
    <section className="size-full bg-color3 pt-24 pb-10 px-2 xl:pt-36">
      <div className="space-y-8 md:w-[90%] xl:w-4/5 m-auto">
        {AboutBlocks.map((block, index) => (
          <div className={`md:flex bg-color2 rounded-[50px] xl:max-h-[400px] ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={index}>
            <div className="p-4 rounded-t-[50px] space-y-2 md:w-1/2 flex flex-col justify-center">
              <h2 className="font-cinzel text-2xl font-semibold xl:text-3xl">{block.title}</h2>
              <p className="font-montserrat text-base">{block.text}</p>
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