import React from "react";

import "./index.css";
import { ForgotPasswordImage } from "_images";
import { history } from "_utils/_helpers";
import {
  CustomFormWithImage,
  ButtonWithIcon,
  TextInputField,
} from "_components";

const ForgotPassword = () => {
  const navigatetoLogin = () => {
    history.navigate("/login");
  };
  return (
    <CustomFormWithImage
      heading="Forgot your password?"
      description={`No worries, enter your email below to get instructions \nto reset your password`}
      image={ForgotPasswordImage}
      sx={{ description: { color: "#4c4d4f" } }}
    >
      <form>
        <TextInputField
          type="email"
          placeholder="jane@gmail.com"
          id={"email"}
          name={"email"}
          label={"email"}
          hasError={true}
          error={"Error message"}
        />
        <ButtonWithIcon
          type={"submit"}
          sx={{
            backgroundColor: "#000",
            text: { color: "#fff", textAlign: "center" },
          }}
          label={"Reset Password"}
        />
      </form>
      <div className="onboarding-note text-align-center">
        <span
          style={{ textDecorationLine: "underline", cursor: "pointer" }}
          onClick={navigatetoLogin}
        >
          {"I remember my password"}
        </span>
      </div>
    </CustomFormWithImage>
  );
};

export default ForgotPassword;
