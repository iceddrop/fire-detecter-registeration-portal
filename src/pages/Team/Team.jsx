import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import portrait from "../../assets/androgynous-6588615_640.jpg"
import Footer from "../../component/Footer/Footer";
const Team = () => {
  return (
    <div>
      <Breadcrumb aria-label="Default breadcrumb example" className="py-2 pl-2">
        <Breadcrumb.Item href="/" className="text-white" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/team" className="text-white">
          Team
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="lg:flex px-10 pt-16">
        <img className="size-96 object-cover rounded-md" src={portrait} alt="" />
        <div className="flex flex-col lg:pl-6 lg:w-96">
          <h3 className="text-2xl font-semi-bold pt-4 lg:pt-0">Ibikunle Tomiwa</h3>
          <h6 className="text-lg text-gray-600 font-bold pt-2">Front end web developer</h6>
          <p className="text-slate-600 pt-2 lg:pr-20 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente
            nesciunt laboriosam. Repudiandae necessitatibus hic eveniet quos
            blanditiis eum recusandae!
          </p>
        </div>
      </div>

      <div className="lg:flex px-10 pt-16">
        <img className="size-96 object-cover rounded-md" src={portrait} alt="" />
        <div className="flex flex-col lg:pl-6 lg:w-96">
          <h3 className="text-2xl font-semi-bold pt-4 lg:pt-0">Ibikunle Tomiwa</h3>
          <h6 className="text-lg text-gray-600 font-bold pt-2">Front end web developer</h6>
          <p className="text-slate-600 pt-2 lg:pr-20 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente
            nesciunt laboriosam. Repudiandae necessitatibus hic eveniet quos
            blanditiis eum recusandae!
          </p>
        </div>
      </div>

      <div className="lg:flex px-10 pt-16">
        <img className="size-96 object-cover rounded-md" src={portrait} alt="" />
        <div className="flex flex-col lg:pl-6 lg:w-96">
          <h3 className="text-2xl font-semi-bold pt-4 lg:pt-0">Ibikunle Tomiwa</h3>
          <h6 className="text-lg text-gray-600 font-bold pt-2">Front end web developer</h6>
          <p className="text-slate-600 pt-2 lg:pr-20 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente
            nesciunt laboriosam. Repudiandae necessitatibus hic eveniet quos
            blanditiis eum recusandae!
          </p>
        </div>
      </div>

      <div className="lg:flex px-10 pt-16">
        <img className="size-96 object-cover rounded-md" src={portrait} alt="" />
        <div className="flex flex-col lg:pl-6 lg:w-96">
          <h3 className="text-2xl font-semi-bold pt-4 lg:pt-0">Ibikunle Tomiwa</h3>
          <h6 className="text-lg text-gray-600 font-bold pt-2">Front end web developer</h6>
          <p className="text-slate-600 pt-2 lg:pr-20 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente
            nesciunt laboriosam. Repudiandae necessitatibus hic eveniet quos
            blanditiis eum recusandae!
          </p>
        </div>
      </div>
      
      <div className="pt-6">
      <Footer/>
      </div>
    </div>
  );
};

export default Team;
