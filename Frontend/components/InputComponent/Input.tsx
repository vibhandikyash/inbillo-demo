import clsx from "clsx";

type InputCompType = {
  content?: string;
  value?: string;
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
  textColor?: string;
};
export const Input = ({
  content,
  value,
  width,
  height,
  backgroundColor,
  textColor,
}: InputCompType) => (
  <div className="ml-4">
    <label
      htmlFor="inputComponent"
      className="block mb-1 text-sm relative left-5 text-gray-400"
    >
      {content}
    </label>
    <input
      name="inputComponent"
      defaultValue={value}
      style={{
        width: width,
        height: height,
      }}
      className={clsx(
        "w-full px-4 py-3 border border-gray-300 outline-none border-2 rounded-xl bg-gray-100 border-gray-200 ",
        backgroundColor === "bg-sky-600" && "bg-sky-600",
        backgroundColor === "bg-sky-600" && "text-white",
        textColor === "text-gray-400" && "text-gray-400"
      )}
    />
  </div>
);
