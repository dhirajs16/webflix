import Hero from "../components/Hero/Hero";
import SideNav from "../components/SideNav/SideNav";
import TopNav from "../components/TopNav/TopNav";

const Home: React.FC = () => {
  document.title = "Webflix | Home";
  return (
    <>
      <div className="h-screen w-screen grid grid-cols-6">
        {/* col-1 space */}
        <SideNav />
        {/* col-4 space */}
        <div className="col-span-5">
          <TopNav />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
