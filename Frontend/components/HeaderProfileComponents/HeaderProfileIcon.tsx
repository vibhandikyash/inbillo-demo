import { CheckMark } from "../Icons";

type HeaderProfileIconType = {
  className?: string;
};

export const HeaderProfileIcon = ({ className }: HeaderProfileIconType) => (
  <>
    <div className={className}>
      <div className="object-cover rounded-full h-14 w-14 bg-yellow-400 m-1 p-2 border-4 border-green-600">
        <div className="object-cover rounded-full h-12 w-12 relative bottom-3 right-3 bg-yellow-400 m-1 p-2 border-4 border-white">
          <div className="font-bold text-white">AK</div>
        </div>
      </div>
      <div className="flex flex-col mb-6 mx-2 font-medium">
        <div className="relative top-2">
          Adam Kowalski
          <div className="text-green-950">
            <CheckMark />
          </div>
        </div>
      </div>
    </div>
  </>
);
