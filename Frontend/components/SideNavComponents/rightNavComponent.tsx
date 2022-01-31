import type { NextPage } from "next";
import { RightNavContents } from "..";
import rightNavContentList from "../../data/rightNavContentList.json";

export const RightNavComponent: NextPage = () => {
  return (
    <div className="flex h-screen mt-12 ml-8 w-1/4 right-0 cursor-pointer ">
      <nav>
        <div
          className="
            flex
            mt-5
            items-center
            transition-colors
            duration-200
            transform
            rounded-md
            text-gray-400
          "
        >
          <span className="mx-4 font-bold text-sm">ETAPY SPRAWY</span>
        </div>
        {rightNavContentList?.map(({ content }: any, index) => (
          <RightNavContents key={`${content}${index}`} label={content} />
        ))}
      </nav>
    </div>
  );
};
