import "./LandingPage.css";
import Nav from "../../component/Nav/Nav";
import extinguisher from "../../assets/vecteezy_minimalist-blue-air-humidifier-design_54484677.png";
import { Link } from "react-router-dom";
import Features from "../../component/Features/Features";
import ScrollSpy from "react-ui-scrollspy";

const LandingPage = () => {


  return (
    <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
      <main>
        <div className="background w-full md:h-1/2 h-screen lg:h-screen">
          <div className="bg-slate-300 w-full md:h-1/2 h-full lg:h-full absolute opacity-50 z-40"></div>
          <div className="z-50 relative">
            <Nav />
          </div>
          <div className="z-50 relative flex justify-around items-center lg:pr-24 pb-10 lg:pb-0">
            <div className="px-6 lg:px-20 xl:px-40">
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold headline-text">
                The Future of Safety: Smoke, Gas Detection, SMS Alerts, and
                Automated Sprinklers All in One Device
              </h1>
              <p className="text-center headline-text font-medium">
                Experience a new era of safety with our all-in-one detection and
                response system. Designed to protect your loved ones and
                property, this innovative device combines cutting-edge smoke and
                gas detection with instant SMS alerts to keep you informed
                wherever you are. In emergencies, the automated sprinkler system
                activates immediately, ensuring rapid response to fire hazards
                before they escalate. Easy to install, reliable, and smart, this
                device is your ultimate safeguard for a safer tomorrow.
              </p>
              <div className="flex justify-center">
                <Link
                  to={"/register"}
                  className="bg-red-600 text-white headline-text px-4 py-2 rounded-md mt-4"
                >
                  Register Now
                </Link>
              </div>
            </div>
            <img
              src={extinguisher}
              className="hidden lg:block h-80 w-80 object-contain"
            />
          </div>
        </div>
        <Features />
      </main>
    </ScrollSpy>
  );
};

export default LandingPage;
