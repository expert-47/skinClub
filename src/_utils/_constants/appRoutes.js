import ForgotPassword from "ForgotPassword";
import LoginForm from "LoginForm";
import OnboardingForm from "OnboardingForm";

export const MAIN_ROUTES = [
  {
    path: "/",
    secured: false,
    header: true,
    footer: true,
    component: <OnboardingForm />,
  },
  {
    path: "/login",
    secured: false,
    header: true,
    footer: true,
    component: <LoginForm />,
  },

  {
    path: "/forgot-password",
    secured: false,
    header: true,
    footer: true,
    component: <ForgotPassword />,
  },
];
