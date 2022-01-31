import { InBillo } from "../../public/Images/portlet";

type BilliComponentType = {
  className?: string;
};

export const BilliComponent = ({ className }: BilliComponentType) => (
  <div className={className}>
    <InBillo />
  </div>
);
