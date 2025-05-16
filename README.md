# Paie-RDC

**Paie-RDC** est une application web destinée à envoyer automatiquement les fiches de paie aux fonctionnaires de l'État de la République Démocratique du Congo.

## Fonctionnalités principales

- Gestion des comptes fonctionnaires (nom, matricule, email, poste)
- Génération automatique des fiches de paie en PDF
- Envoi des fiches de paie par email
- Tableau de bord pour l'administration
- Interface rapide et intuitive

## Technologies utilisées

- [Vite](https://vitejs.dev/)
- [React.js](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) (ou tout autre service SMTP)
- [jspdf](https://github.com/parallax/jsPDF) pour les fiches PDF

## Installation locale

```bash
git clone https://github.com/votre-utilisateur/paie-rdc.git
cd paie-rdc
npm install
npm run dev
