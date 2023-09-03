import React from "react";

import "./index.css";
import SkinClubLogo from "_utils/_icons/SkinClubLogo";

const CustomFormWithImage = ({
  heading = "",
  description = "",
  descriptionLinkText = "",
  onDescriptionLinkClick = () => {},
  image = "",
  sx = {},
  children,
}) => {
  return (
    <div className="layout" style={{ ...sx }}>
      <div className="form-container">
        {description && (
          <>
            <h2>{heading}</h2>
            <span style={{ ...sx.description }}>
              {description}
              {descriptionLinkText && (
                <a href="" onClick={onDescriptionLinkClick}>
                  {descriptionLinkText}
                </a>
              )}
            </span>
          </>
        )}
        {children}
      </div>
      {image && (
        <div className="image-container">
          <SkinClubLogo sx={{ position: "absolute" }} />
          <div>
            <img src={image} alt="Login" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomFormWithImage;
