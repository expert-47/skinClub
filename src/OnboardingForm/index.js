import React from "react";

import "./index.css";
import { OnboardingImage } from "_images";
import { history, newUUID } from "_utils/_helpers";
import { FacebookLogo, GoogleLogo, TwitterLogo } from "_utils/_icons";
import {
  CustomFormWithImage,
  DividerWithText,
  ButtonWithIcon,
  TextInputField,
  CheckboxInputField,
} from "_components";

const OnboardingForm = () => {
  const navigateToLogin = () => {
    history.navigate("login");
  };
  return (
    <CustomFormWithImage
      heading="Create an account"
      description="Already have an account?"
      descriptionLinkText=" Login"
      onDescriptionLinkClick={navigateToLogin}
      image={OnboardingImage}
      sx={{ description: { color: "#4c4d4f80" } }}
    >
      <div className="multi-auth">
        {[
          { icon: <FacebookLogo />, title: "Facebook" },
          { icon: <GoogleLogo />, title: "Google" },
          { icon: <TwitterLogo />, title: "Twitter" },
        ].map(({ icon, title }) => (
          <ButtonWithIcon
            key={newUUID()}
            icon={icon}
            label={"Continue with " + title}
          />
        ))}
      </div>
      <DividerWithText text={"Or"} />
      <form>
        <div className="profile-names-wrapper">
          <TextInputField
            type="text"
            placeholder="Jane Doe"
            id={"first-name"}
            name={"first-name"}
            label={"first-name"}
            sx={{ flex: 1 }}
            hasError={true}
            error={"Error message"}
          />
          <TextInputField
            type="text"
            placeholder="Jane Doe"
            id={"last-name"}
            name={"last-name"}
            label={"last-name"}
            sx={{ flex: 1 }}
            hasError={true}
            error={"Error message"}
          />
        </div>
        <TextInputField
          type="email"
          placeholder="jane@gmail.com"
          id={"email"}
          name={"email"}
          label={"email"}
          hasError={true}
          error={"Error message"}
        />
        <TextInputField
          type="password"
          placeholder="********"
          id={"password"}
          name={"password"}
          label={"password"}
          hasError={true}
          error={"Error message"}
        />
        <CheckboxInputField
          type="checkbox"
          id={"subscribe"}
          name={"subscribe"}
          label={"Subscribe to our monthly newsletter"}
        />
        <div className="onboarding-note">
          <span>{"By clicking below you agree to our "}</span>
          <a href="#">{"Terms of Service"}</a>
          <span>{" and "}</span>
          <a href="#">{"Privacy Policy"}</a>
        </div>
        <ButtonWithIcon
          type={"submit"}
          sx={{
            backgroundColor: "#000",
            text: { color: "#fff", textAlign: "center" },
          }}
          label={"Sign up"}
        />
        <div className="onboarding-note text-align-center">
          <span>{"Already have an account?"}</span>
          <a href="" onClick={navigateToLogin}>
            {" Log in"}
          </a>
        </div>
      </form>
    </CustomFormWithImage>
  );
};

export default OnboardingForm;
