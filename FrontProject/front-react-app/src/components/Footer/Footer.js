import React from "react";
import { Layout } from "antd";

function Footer() {
  const { Footer } = Layout;
  return (
    <>
      <Footer style={{backgroundColor: "white"}}>
        <p style={{ marginBottom: "-10px", textAlign: "center" }}>
          <p>
            Lorsque vous cliquez sur le bouton "Ajouter une demande
            d'inscription" de votre formulaire de demande d'inscription sur
            evax.tn, vous indiquez que vous connaissez les conditions générales
            Politique de confidentialité .Vous acceptez volontairement les
            termes et conditions fournis.
          </p>
          <p>
            EVAX est le résultat d'un travail et d'un engagement patriotique
            commun des équipes du{" "}
            <b>
              CNI, ISIE, CIMS, ANSI, les opérateurs (TT, Ooredoo et Orange),
              Ministère de la Santé et le Ministère des Technologies de la
              Communication.{" "}
            </b>{" "}
          </p>
          <p>
            {" "}
            République de Tunisie - Ministère de la Santé - Portail
            d’inscription à la campagne de vaccination contre le COVID-19.{" "}
          </p>

          <b>
            <center>Tous droits réservés © 2021</center>
          </b>
        </p>
      </Footer>
    </>
  );
}

export default Footer;
