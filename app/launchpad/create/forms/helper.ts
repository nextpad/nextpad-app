import { ChangeEvent } from "react";
import { LaunchpadData, Props } from "./ILaunchpad";

export const onChange = (
   props: Partial<Props>,
   event: ChangeEvent<HTMLInputElement>,
   property: keyof LaunchpadData
): void => {
   if (!props.setLaunchpadData) return;

   props.setLaunchpadData((prev: LaunchpadData) => ({
      ...prev,
      [property]: event.target.value,
   }));
};
