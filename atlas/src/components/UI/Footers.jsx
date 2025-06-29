import footerContact from "../../api/footerContact.json";
import { IoWomanSharp} from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const iconMap = {
  IoWomanSharp: <IoWomanSharp />,
  IoIosMail: <IoIosMail />,
  IoCallSharp: <IoCallSharp />
};

 
function Footers() {
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
          {footerContact.map((curData, index)=>{
            const {icon, title, details } = curData;
            return (
              <div className="footer-contact" key={index}>
                <div className="icon">{iconMap[icon]}</div>
                <div className="footer-contact-text">
                  <p> {title} </p>
                  <p> {details} </p>
                </div>
              </div>
            )
          })}
      </div>
    </footer>
  );
}

export default Footers;
