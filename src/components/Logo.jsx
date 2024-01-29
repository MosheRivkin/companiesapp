import appLogo from "../assets/appLogo.svg";
import appLogoMobail from "../assets/appLogoMobail.png";

export function Logo() {
  return (
    <>
      <img src={appLogo} alt="app logo" className="w-1/3 hidden sm:block" />
      <img
        src={appLogoMobail}
        alt="app logo mobail"
        className="sm:hidden w-6 h-6"
      />
    </>
  );
}
