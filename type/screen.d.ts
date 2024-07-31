interface SplashScreenParams {}
interface OnboardingScreenParams {}
interface LoginScreenParams {}
interface RegisterScreenParams {}
interface HomeScreenParams {}

type ParamList = {
  SplashScreen: SplashScreenParams;
  OnboardingScreen: OnboardingScreenParams;
  LoginScreen: LoginScreenParams;
  RegisterScreen: RegisterScreenParams;
  HomeScreen: HomeScreenParams;
};
