import { RouteComponentProps } from "react-router-dom";
import { LoginFormModel } from "./login-form.model";

export interface LoginPropsModel extends RouteComponentProps{
    isAuthenticated: boolean;
    login: (loginPayload: LoginFormModel)=> void
}