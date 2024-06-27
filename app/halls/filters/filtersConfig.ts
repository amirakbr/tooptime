import { IHallsListFilterConfig } from "../interface";

export const citiesList: IHallsListFilterConfig = {
  label: "شهر",
  name: "city",
  items: [{ id: 1, name: "mashhad", label: "مشهد" }],
};

export const fieldsList: IHallsListFilterConfig = {
  label: "نوع مکان",
  name: "field type",
  items: [
    { id: 1, name: "volleyball", label: "والیبال" },
    { id: 2, name: "football", label: "فوتبال" },
    { id: 3, name: "futsall", label: "فوتسال" },
    { id: 4, name: "tennis", label: "تنیس" },
  ],
};

export const genderList: IHallsListFilterConfig = {
  label: "جنسیت",
  name: "gender type",
  items: [
    { id: 1, name: "female", label: "بانوان" },
    { id: 2, name: "male", label: "آقایان" },
    { id: 3, name: "mixed", label: "دو سر پنجا پنجا" },
  ],
};
