import Hero from "../components/Hero/Hero";

const Home: React.FC = () => {
  document.title = "Webflix | Home";
  return (
    <>
      <div className="w-[80vw] absolute top-[10vh] right-0">
        <Hero />
      </div>
    </>
  );
};

export default Home;
