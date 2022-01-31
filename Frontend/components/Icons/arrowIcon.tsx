import clsx from "clsx";
type IconProps = {
  color?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  rotateDegree?: string;
};

export function ArrowIcon({
  color,
  width = 25,
  height = 25,
  className,
  rotateDegree,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 135 140"
      className={clsx(
        className,
        "fill-sky-600",
        rotateDegree && `transform rotate-${rotateDegree}`
      )}
    >
      <path d="M41.6812 50.1082L67.5 76.8248L93.3187 50.1082L101.25 58.3332L67.5 93.3332L33.75 58.3332L41.6812 50.1082Z" />
    </svg>
  );
}
