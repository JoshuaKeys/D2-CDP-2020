import { RouteComponentProps } from "react-router-dom";

export interface LoginPropsModel extends RouteComponentProps{
    isAuthenticated: boolean;
}