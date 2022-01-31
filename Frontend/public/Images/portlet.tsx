import Image from "next/image";
import portfolet from "../Images/portfolet.png";
import sproy from "../Images/sproy.png";
import monitor from "../Images/monitoring.png";
import gelida from "../Images/geilda.png";
import zalot from "../Images/zalot.png";
import billo from "../Images/inbillo.png";
import downarrow from "../Images/downarrow.png";
import signout from "../Images/signout.png";

export const Portlet = () => (
  <Image src={portfolet} alt="portfolet" width={24} height={24} />
);

export const Sproy = () => (
  <Image src={sproy} alt="sproy" width={24} height={24} />
);

export const Monitor = () => (
  <Image src={monitor} alt="monitor" width={24} height={24} />
);

export const Gelida = () => (
  <Image src={gelida} alt="gelida" width={24} height={24} />
);

export const Zalot = () => (
  <Image src={zalot} alt="gelida" width={24} height={24} />
);

export const InBillo = () => (
  <Image src={billo} alt="Billo" width={200} height={70} />
);

export const DownArrow = () => (
  <Image src={downarrow} alt="arrow" width={20} height={15} />
);

export const SignOut = () => (
  <Image src={signout} alt="arrow" width={35} height={40} />
);
