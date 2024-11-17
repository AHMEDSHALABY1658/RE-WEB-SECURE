import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export default function NavbarOne({ onScrollUp, onScrollDown }) {
    return (
        <div className="NavbarOne">
            <div className="icons">
                <a><FaFacebook /></a>
                <a><IoLogoWhatsapp /></a>
                <a><FaInstagram /></a>
                <a><FaYoutube /></a>
                <a><FaSquareTwitter /></a>
            </div>
            <div className="SCROOL">
                <FaAngleUp onClick={onScrollUp} />
                <h2>SCROOL</h2>
                <FaAngleDown onClick={onScrollDown} />
            </div>
        </div>
    );
}
