
import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function PaieFonctionnaire() {
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [paie, setPaie] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (matricule === "123456" && password === "motdepasse") {
      setPaie({
        nom: "Jean Kabila",
        mois: "Mai 2025",
        montant: "1 250 000 CDF",
        service: "Ministère de la Santé",
        banque: "Rawbank",
        note: "Versement effectué le 15 mai 2025 sur le compte bancaire."
      });
      setIsLoggedIn(true);
      setMessage("");
    } else {
      setMessage("Matricule ou mot de passe incorrect.");
      setPaie(null);
    }
  };

  const handleLogout = () => {
    setMatricule("");
    setPassword("");
    setPaie(null);
    setIsLoggedIn(false);
    setMessage("");
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Fiche de Paie - République Démocratique du Congo", 20, 20);

    doc.autoTable({
      startY: 30,
      head: [["Champ", "Détails"]],
      body: [
        ["Nom", paie.nom],
        ["Mois", paie.mois],
        ["Montant", paie.montant],
        ["Service", paie.service],
        ["Banque", paie.banque],
        ["Note", paie.note]
      ]
    });

    doc.save(`Fiche_Paie_${paie.nom}_${paie.mois}.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      {!isLoggedIn ? (
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Portail de Paie - RDC</h2>
          <input
            type="text"
            placeholder="Matricule"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Connexion</button>
          {message && <p className="text-red-600 text-center mt-2">{message}</p>}
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-semibold">Fiche de Paie - {paie?.mois}</h3>
            <button onClick={handleLogout} className="text-sm text-blue-600">Déconnexion</button>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>Nom:</strong> {paie.nom}</p>
            <p><strong>Service:</strong> {paie.service}</p>
            <p><strong>Montant:</strong> {paie.montant}</p>
            <p><strong>Banque:</strong> {paie.banque}</p>
            <p className="italic text-gray-600">{paie.note}</p>
          </div>
          <button onClick={handleDownloadPDF} className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Télécharger PDF</button>
        </div>
      )}
    </div>
  );
}
