import { useDispatch } from "react-redux";
import { AppDispatch } from "../providers/redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
