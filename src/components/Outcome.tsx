import { useEffect, useState } from "react";
import OutcomeAchieve from "./Outcome/OutcomeAchieve";
import OutcomeError from "./Outcome/OutcomeError";
import axios from "axios";

interface Props {
  saveInfo: any;
  setSaveInfo(saveInfo: any): void;
  InputSearch: string;
}

const Outcome = ({
  saveInfo,
  setSaveInfo,
  InputSearch,
}: Props): JSX.Element => {
  useEffect(() => {
    const takeWord = async () => {
      try {
        const response = await axios.get(
          "`https://api.dictionaryapi.dev/api/v2/entries/en/${InputSearch}`"
        );
        const data = response.data;
        setSaveInfo(data);
        console.log(saveInfo);
        setShowDefinition(true);
      } catch (error) {
        setShowDefinition(false);
      }
    };
    if (InputSearch !== "") {
      takeWord();
    }
  }, [InputSearch]);

  const [showDefinition, setShowDefinition] = useState<boolean | null>(null);
  return (
    <div>
      {showDefinition === true ? (
        <OutcomeAchieve />
      ) : showDefinition === false ? (
        <OutcomeError />
      ) : showDefinition === null ? null : null}
    </div>
  );
};

export default Outcome;
