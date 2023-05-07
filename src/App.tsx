import { useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [changeInput, setChangeInput] = useState<boolean>(true);
  return (
    <div
      className={`${
        changeInput ? "bg-[#FFFFFF]" : "bg-[#050505]"
      } w-full min-h-screen flex-col justify-center items-center px-[24px] pt-[24px] pb-[84px]`}
    >
      <Header changeInput={changeInput} setChangeInput={setChangeInput} />
    </div>
  );
}
