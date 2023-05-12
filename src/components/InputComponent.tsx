import { useState } from "react";
import SearchSvg from "../images/icon-search.svg";

interface Props {
  changeInput: boolean;
  InputSearch: string;
  setInputSearch(InputSearch: string): void;
}

const InputComponent = ({
  changeInput,
  setInputSearch,
}: Props): JSX.Element => {
  const [errorText, setErrorText] = useState<boolean>(true);
  return (
    <div
      className={`flex flex-col items-start justify-center gap-[8px] w-full max-w-[375px] md:max-w-[689px] lg:max-w-[736px]`}
    >
      <form
        onSubmit={(e) => {
          setInputSearch(e.currentTarget.typeInput.value);
          e.preventDefault();
          if (e.currentTarget.typeInput.value === "") {
            setErrorText(!errorText);
          } else {
            setErrorText(true);
          }
        }}
        className={`w-full flex flex-row py-[16px] max-w-[736px] px-[24px] md:py-[24px] ${
          changeInput ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
        } justify-between items-center rounded-[16px] h-[48px] ${
          errorText
            ? "border-none"
            : "border-[1px] border-solid border-[#FF5252]"
        }`}
      >
        <input
          autoComplete="off"
          id="typeInput"
          className={`${
            changeInput ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
          } border-none outline-none text-[16px] w-full bg-none md:text-[20px] ${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          } leading-[20.48px] font-bold placeholder:opacity-[0.25]`}
          type="text"
          placeholder="Search for any word…"
        />
        <button className="w-[15.55px] h-[15.55px] rounded-none" type="submit">
          <img src={SearchSvg} alt="search svg" />
        </button>
      </form>
      <p
        className={`font-normal text-[16px] text-[#FF5252] ${
          errorText ? "hidden" : "block"
        }`}
      >
        Whoops, can’t be empty…
      </p>
    </div>
  );
};

export default InputComponent;
