import { SlidesCatalog } from "@/constants"
import { Parallax } from "react-parallax"


const Catalog = () => {
  return (
    <div>
      {SlidesCatalog.map((slide, index) => (
        <Parallax strength={800} bgImage={slide.url} bgClassName='object-cover' key={index}>
          <div className='h-screen flex items-center justify-center cursor-pointer'>
            <div className="bg-white/75 w-96 h-32 flex items-center justify-center rounded-xl">
              <h2 className="font-bold text-2xl font-montserrat">{slide.title}</h2>
            </div>
          </div>
        </Parallax>
      ))}
    </div>
  )
}

export default Catalog