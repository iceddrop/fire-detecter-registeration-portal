import { Dropdown } from "flowbite-react";
import { FaChevronDown,FaChevronRight  } from "react-icons/fa";
import {useState} from "react";
const AppNav = () => {
  const [dropdownTriggered, setDropdownTriggered] = useState(false);
  return (
    <header className="bg-[#002244] text-white p-4 shadow-md flex w-full justify-end">
      <Dropdown label="" dismissOnClick={false} onClick={() => setDropdownTriggered(!dropdownTriggered)} className="cursor-pointer"  renderTrigger={() => <span className="flex items-center cursor-pointer">My custom trigger {dropdownTriggered ? <FaChevronDown className="ml-2"/> : <FaChevronRight className="ml-2"/>}</span>}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
    </header>
  );
};

export default AppNav;
