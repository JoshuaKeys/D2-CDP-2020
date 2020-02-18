import { ChangeEventHandler } from "react";

export interface DurationPropsModel {
    onChange: ChangeEventHandler<HTMLInputElement>;
    duration: number | undefined;
}