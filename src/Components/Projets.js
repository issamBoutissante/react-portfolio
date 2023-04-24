import React from 'react'

export default function Projets() {
  const projets = [
    {
      title: "Application gestion des mines",
      description: "Application desktop avec WPF pour la Direction Régionale des Mines",
      

    },
    {
      title: "Application Dice game",
      description: "Application desktop avec Electron.js et Socket.io ",
      

    },
    {
      title: "Application de gestion de hotel",
      description: "Application web avec Django et python",
      
    },
    {
      title: "Application web gestion de rectrutement",
      description: "Application web de rectrutement avec Django et python",
      
    },
    {
      title: "Refont des 8 applications de la solution Audros",
      description: "Refont des application Audros avec .Net 6 et c#",
      
    }
  ];

  return (
    <div style={{ paddingTop: '5vh' }}>
      <section className="row justify-content-center" style={{ padding: '10vh 10vh 10vh 10vh' }}>
        {projets.map((projet, index) => (
          <div key={index} className="col-sm-6 col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{projet.title}</h5>
                <p className="card-text">{projet.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
