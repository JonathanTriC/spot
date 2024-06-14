interface SplashScreenParams {}
interface OnboardingScreenParams {}
interface LoginScreenParams {}
interface RegisterScreenParams {}

type ParamList = {
  SplashScreen: SplashScreenParams;
  OnboardingScreen: OnboardingScreenParams;
  LoginScreen: LoginScreenParams;
  RegisterScreen: RegisterScreenParams;
};
