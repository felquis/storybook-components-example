import { useEffect } from "react";

import style from "./style.module.css";
import BrandIcon from "../../img/f-brand.svg";
import HomeIcon from "../../img/home.svg";
import HatIcon from "../../img/hat.svg";
import PersonIcon from "../../img/person.svg";
import EnvelopIcon from "../../img/envelop.svg";
import SettingsIcon from "../../img/settings.svg";
import LogoutIcon from "../../img/logout.svg";

export default () => {
  useEffect(() => {
    console.count("useEffect");
  }, []);

  return (
    <div className={style.menu}>
      <nav className={style.menuInner}>
        <a href="/dash" className={style.menuItem}>
          <BrandIcon />
        </a>

        <a href="/" className={style.menuItem}>
          <HomeIcon />
        </a>

        <a href="/" className={style.menuItem}>
          <HatIcon />
        </a>

        <a href="/" className={style.menuItem}>
          <PersonIcon />
        </a>

        <a href="/" className={style.menuItem}>
          <EnvelopIcon />
        </a>

        <a href="/" className={style.menuItem}>
          <SettingsIcon />
        </a>

        <div className={style.lastMenuItemWrap}>
          <a href="/" className={style.menuItem}>
            <LogoutIcon />
          </a>
        </div>
      </nav>
    </div>
  );
};
