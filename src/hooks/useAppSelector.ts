import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../providers/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
