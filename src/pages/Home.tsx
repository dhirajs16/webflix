import SideNav from "../components/SideNav/SideNav";

const Home: React.FC = () => {
  document.title = "Webflix | Home";
  return (
    <>
      <div className="h-screen w-screen grid grid-cols-5">
        {/* col-1 space */}
        <SideNav />
        {/* col-4 space */}
        <div className="col-span-4"></div>
      </div>
    </>
  );
};

export default Home;
