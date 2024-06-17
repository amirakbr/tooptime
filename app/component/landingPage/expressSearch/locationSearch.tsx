import Input from "../../input";
import { ISearchByLocation } from "./interface";

const LocationSearch = ({ control }: ISearchByLocation) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="bg-darkPeach p-1">
        <Input
          control={control}
          name="fieldName"
          type="text"
          label="نام مکان"
          className="!bg-white p-1 rounded"
          placeHolder="نام یا بخشی از نام مکان..."
        />
      </div>
    </div>
  );
};

export default LocationSearch;
