const Home = () => {
  return (
    <section className="relative size-full">
      <video preload="auto" loop muted autoPlay className="w-full min-h-[calc(100vh-257px)] md:min-h-[calc(100vh-156px)] object-cover">
        <source src="/assets/videos/accueil.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Home;