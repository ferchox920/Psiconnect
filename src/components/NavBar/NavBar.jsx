import style from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/LogoCerebro.svg";
import FormModal from "../modals/Modals";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";

export default function NavBar() {
  const [modal, setModal] = useState(null);
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const openModal = () => {
    setModal(true);
  };

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setMenu(!menu);
  };
  const closeNav = () => setOpen(!open);

  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
            <h3>psiconnect</h3>
          </Link>
        </div>
        <div className={style.hamburgerContainer}>
          <div
            className={`${style.hamburger} ${
              open ? style.hamburgerOpen : null
            }`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={open ?  style.containerNav : style.navClose} onClick={()=> setOpen(false)}>
        <div className={`${style.nav} ${open ? null : style.navClose}`}>
          <div className={style.nav_list}>
            <div>
              <Link to={"/"}>
                <h3 onClick={closeNav} className={style.navItem}>
                  ¿Qué es Psiconnect?{" "}
                </h3>
              </Link>
            </div>
            <div>
              <Link to={"/registerProfesional"}>
                {" "}
                <h3 onClick={closeNav} className={style.navItem}>
                  ¿Eres medico?{" "}
                </h3>
              </Link>
            </div>
            <div>
              <Link to={"/Asistencia"}>
                <h3 onClick={closeNav} className={style.navItem}>
                  ¿Cómo te ayudamos?
                </h3>
              </Link>
            </div>
            {user && window.screen.width < 1140 ? (
              <>
                <div
                  onClick={() => {
                    user.rol == "admin"
                      ? navigate("/admin/users")
                      : navigate(`/${user.rol}Profile/profile`);
                  }}
                >
                  <h3 onClick={closeNav} className={style.navItem}>
                    {" "}
                    {user?.rol === "admin" ? "Admin" : "Mi perfil"}
                  </h3>
                </div>
                <div
                  onClick={() => {
                    localStorage.removeItem("tkn"),
                      localStorage.removeItem("profTkn"),
                      window.location.reload();
                  }}
                >
                  <h3 onClick={closeNav} className={style.navItem}>
                    Cerrar Sesión
                  </h3>
                </div>
              </>
            ) : null}
          </div>

          {user ? (
            <div onClick={openMenu} className={style.avatarContainer}>
              <img
                className={style.img_avatar}
                src={
                  user.avatar ||
                  "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1"
                }
                alt={user.name}
              />
              {menu ? (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      user.rol == "admin"
                        ? navigate("/admin/users")
                        : navigate(`/${user.rol}Profile/profile`);
                    }}
                  >
                    {user?.rol === "admin" ? "Admin" : "Mi perfil"}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      localStorage.removeItem("tkn"),
                        localStorage.removeItem("profTkn"),
                        window.location.reload();
                    }}
                  >
                    {" "}
                    Cerrar Sesión{" "}
                  </MenuItem>
                </Menu>
              ) : null}
            </div>
          ) : (
            <div className={style.loginDiv}>
              <div onClick={openModal}>
                <h3>Iniciar sesion</h3>
              </div>
              <div onClick={openModal}>
                <h3>Registrate</h3>
              </div>
            </div>
          )}
        </div></div>
      </div>

      {modal && <FormModal name="User" set={setModal} />}
    </>
  );
}
