import { ChangeEvent } from "react";
import { LaunchpadData, Props } from "./ILaunchpad";

export const onChange = <T>(
   setter: Function,
   event: ChangeEvent<HTMLInputElement>,
   property: keyof T
): void => {
   if (!setter) return;

   setter((prev: Partial<T>) => ({
      ...prev,
      [property]: event.target.value,
   }));
};
