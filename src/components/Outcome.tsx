import { useEffect, useState } from "react";
import OutcomeAchieve from "./Outcome/OutcomeAchieve";
import OutcomeError from "./Outcome/OutcomeError";
import axios from "axios";
import ObjectTypes from "../type";

interface Props {
  saveInfo: null | ObjectTypes;
  setSaveInfo(saveInfo: any): void;
  InputSearch: string;
  changeInput: boolean;
}

const Outcome = ({
  saveInfo,
  setSaveInfo,
  InputSearch,
  changeInput,
}: Props): JSX.Element => {
  useEffect(() => {
    const takeWord = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${InputSearch}`
        );
        const data = response.data[0];
        setSaveInfo(data);
        setShowDefinition(true);
      } catch (error) {
        setShowDefinition(false);
      }
    };
    if (InputSearch !== "") {
      takeWord();
    }
  }, [InputSearch]);
  if (InputSearch !== "") {
    console.log(saveInfo);
  }
  const [showDefinition, setShowDefinition] = useState<boolean | null>(null);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {showDefinition === true ? (
        <OutcomeAchieve changeInput={changeInput} saveInfo={saveInfo} />
      ) : showDefinition === false ? (
        <OutcomeError changeInput={changeInput} />
      ) : null}
    </div>
  );
};

export default Outcome;
