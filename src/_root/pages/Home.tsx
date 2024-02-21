import Carroussel from "@/components/shared/Carroussel";
import { Slides } from "@/constants";

const Home = () => {
  return (
    <section className="w-full m-auto relative group">
      <Carroussel slides={Slides} />
    </section>
  );
}

export default Home;