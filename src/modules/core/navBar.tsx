import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import "./navBar.css";

export default function Header() {
  return (
    /* From Uiverse.io by faxriddin20 */
    <div className="button-container grid grid-cols-2">
      <div>
        <h2 className="text-white">LOGO</h2>
      </div>
      <div className="flex">
        <button type="button" className="button">
          <IoHomeOutline color="white" size={25} />
        </button>
        <button type="button" className="button">
          <IoIosSearch color="white" size={25} />
        </button>
        <button type="button" className="button">
          <IoPersonOutline color="white" size={25} />
        </button>
        <button type="button" className="button">
          <CiShoppingCart color="white" size={25} />
        </button>
      </div>
    </div>
  );
}
