import React from "react";

export default function Formations() {
  return (
    <section style={{ padding: "10vh 20vh 10vh 20vh", textAlign: "left" }}>
      <div className="shadow p-3 mb-3 bg-white rounded card">
        <div className="card-body">
          <div className="card-title h5">
            Ingénierie Informatique et Réseaux option(MIAGE)
          </div>
          <div className="mb-2 text-muted card-subtitle h6">
            Ecole Maroccaine des sciences de l'ingenieur Marrakech
          </div>
          <p className="card-text">2021 - 2024</p>
        </div>
      </div>
      <div className="shadow p-3 mb-3 bg-white rounded card">
        <div className="card-body">
          <div className="card-title h5">
            Technicien Spécialisé developpement informatique
          </div>
          <div className="mb-2 text-muted card-subtitle h6">
            Institute Technology Appliquee Azli Marrakech
          </div>
          <p className="card-text">2019 - 2021</p>
        </div>
      </div>
      <div className="shadow p-3 mb-3 bg-white rounded card">
        <div className="card-body">
          <div className="card-title h5">BAC - PC</div>
          <div className="mb-2 text-muted card-subtitle h6">
            Lycée Abtyh Ait Ourir
          </div>
          <p className="card-text">2015 - 2018</p>
        </div>
      </div>
    </section>
  );
}
