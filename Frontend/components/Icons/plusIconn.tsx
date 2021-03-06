type PlusIconType = {
  width?: number;
  height?: number;
  className?: string;
};
export const PlusIcon = ({
  width = 25,
  height = 25,
  className,
}: PlusIconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="Layer_1"
    version="1.1"
    width={width}
    height={height}
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    className={className}
  >
    <style />
    <path
      className="st0"
      d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z"
    />
  </svg>
);
