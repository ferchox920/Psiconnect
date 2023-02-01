import React from "react";

const Asistencia = () => {
  return (
    //navBar
    <>
      <h3>Como te ayudamos </h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
        incidunt!
      </p>

      <Link to={"/areas"}>
        <img src="" alt="area1" />
      </Link>

      <Link to={"/areas"}>
        <img src="" alt="area2" />
      </Link>

      <Link to={"/areas"}>
        <img src="" alt="area3" />
      </Link>

      <Link to={"/areas"}>
        <img src="" alt="area4" />
      </Link>

      <Link to={"/areas"}>
        <img src="" alt="area5" />
      </Link>

      <br />
      <h3>Elige el profesional de tu preferencia</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
        incidunt!
      </p>
      <img src="" alt="Equipo profesional" />
      <br />
      <h3>Decide que horario es de tu convenencia</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
        incidunt!
      </p>
      <h3>
        <Link to={"/registerUser"}>Confia en nosotros</Link>
      </h3>
    </>
    //footer
  );
};

export default Asistencia;
