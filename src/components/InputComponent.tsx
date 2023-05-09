import SearchSvg from "../images/icon-search.svg";

interface Props {
  changeInput: boolean;
  InputSearch: string;
  setInputSearch(InputSearch: string): void;
}

const InputComponent = ({
  changeInput,
  InputSearch,
  setInputSearch,
}: Props): JSX.Element => {
  console.log(InputSearch);
  return (
    <form
      onSubmit={(e) => {
        setInputSearch(e.currentTarget.typeInput.value);
        e.preventDefault();
      }}
      className={`w-full flex flex-row py-[16px] px-[24px] ${
        changeInput ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
      } justify-between items-center rounded-[16px] h-[48px] max-w-[736px]`}
    >
      <input
        id="typeInput"
        className={`${
          changeInput ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
        } rounded-none outline-none text[16px] ${
          changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
        } leading-[20.48px] font-bold placeholder:opacity-[0.25]`}
        type="text"
        placeholder="Search for any word…"
      />
      <img src={SearchSvg} alt="search svg" />
    </form>
  );
};

export default InputComponent;
