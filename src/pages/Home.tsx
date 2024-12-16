import SideNav from "../components/SideNav/SideNav";

const Home: React.FC = () => {
  document.title = "Webflix | Home";
  return (
    <>
      <div className="h-screen w-screen grid grid-cols-6">
        <SideNav />
        <div className="col-span-5"></div>
      </div>
    </>
  );
};

export default Home;
