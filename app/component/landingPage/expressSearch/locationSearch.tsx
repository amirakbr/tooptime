import Input from "../../input";
import { ISearchByLocation } from "./interface";

const LocationSearch = ({ control }: ISearchByLocation) => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <Input
          control={control}
          name="fieldName"
          type="text"
          label="نام مکان"
          required={true}
        />
      </div>
    </div>
  );
};

export default LocationSearch;
