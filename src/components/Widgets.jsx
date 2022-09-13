import { AiOutlineWifi } from 'react-icons/ai';
import { BsBatteryFull } from 'react-icons/bs';
import { MdSignalCellularAlt } from 'react-icons/md';
import { TiLocationArrowOutline } from 'react-icons/ti';
import LiveClock from './LiveClock';
import './styles/Widgets.css';

export default function Widgets() {
  return (
    <section className="Widgets">
        <div className="Widgets-Left_cta">
            <LiveClock />
            <TiLocationArrowOutline />
        </div>
        <div className="Widgets-Right_cta">
            <MdSignalCellularAlt />
            <AiOutlineWifi />
            <BsBatteryFull />
        </div>
    </section>
  )
}
