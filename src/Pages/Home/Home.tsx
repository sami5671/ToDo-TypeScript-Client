import img1 from "../../assets/images/todo1.png";
import img2 from "../../assets/images/todo2.png";
import img3 from "../../assets/images/mainlogo.png";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <h1 className="text-white mb-24">hello</h1>
      </div>
      <section className="grid lg:grid-cols-3 gap-6">
        <div>
          <img src={img1} className="lg:w-[340px] lg:h-[550px]" alt="" />
        </div>
        <div className="flex flex-col items-center lg:mt-32">
          <img src={img3} className="w-[100px] h-[90px]" alt="" />
          <h1 className="text-slate-500 text-3xl">Microsoft To Do</h1>
          <p className="mt-4 mb-4">To Do gives you focus, from work to play.</p>
          <button className="px-8 py-2 border-2 text-black hover:bg-blue-500 hover:text-white cursor-pointer">
            Get started
          </button>
        </div>
        <div>
          <img src={img2} className="lg:w-[310px] lg:h-[570px]" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
