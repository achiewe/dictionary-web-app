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
      className={`flex flex-col items-center justify-center gap-[8px] w-full`}
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
        className={`w-full flex flex-row py-[16px] max-w-[736px] px-[24px] ${
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
          } border-none outline-none text[16px] bg-none ${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          } leading-[20.48px] font-bold placeholder:opacity-[0.25]`}
          type="text"
          placeholder="Search for any word…"
        />
        <img src={SearchSvg} alt="search svg" />
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
