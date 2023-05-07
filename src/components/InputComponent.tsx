import SearchSvg from "../images/icon-search.svg";

interface Props {
  changeInput: boolean;
}

const InputComponent = ({ changeInput }: Props): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[23px]  ">
      <div
        className={`w-full flex flex-row py-[16px] px-[24px] ${
          changeInput ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
        } justify-between items-center rounded-[16px] h-[48px] max-w-[736px]`}
      >
        <input
          className={`${
            changeInput ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
          } rounded-none outline-none text[16px] ${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          } leading-[20.48px] font-bold`}
          type="text"
          placeholder="Search for any word…"
        />
        <img src={SearchSvg} alt="search svg" />
      </div>
    </div>
  );
};

export default InputComponent;
