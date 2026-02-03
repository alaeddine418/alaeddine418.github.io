# 🚀 GUIDE DE DÉMARRAGE RAPIDE

## ✅ Checklist avant le déploiement

### 1. Personnaliser vos informations (OBLIGATOIRE)

Ouvrez chaque fichier HTML et remplacez :

- [ ] `[Votre Nom]` → Votre vrai nom
- [ ] `votre.email@example.com` → Votre email
- [ ] `06 XX XX XX XX` → Votre téléphone
- [ ] `[Votre ville]` → Votre ville
- [ ] `[Nom du Lycée]` → Votre lycée
- [ ] `[Votre spécialité]` → SIN, ITEC, EE, ou AC

### 2. Ajouter vos fichiers dans le dossier assets/

- [ ] `profile.jpg` - Votre photo (500x500px minimum)
- [ ] `CV_Votre_Nom.pdf` - Votre CV
- [ ] Images de projets (optionnel)

### 3. Mettre à jour vos liens sociaux

Dans le footer de chaque page HTML :

```html
<!-- Remplacez # par vos vrais liens -->
<a href="https://linkedin.com/in/VOTRE-PROFIL" target="_blank">
<a href="https://github.com/VOTRE-USERNAME" target="_blank">
```

## 📤 Déploiement sur GitHub (3 minutes)

### Méthode simple (via interface web)

1. **Créer un dépôt GitHub**
   - Allez sur github.com
   - Cliquez sur "New repository"
   - Nom : `votre-username.github.io`
   - Cochez "Public"
   - Créez le dépôt

2. **Uploader les fichiers**
   - Dans votre dépôt, cliquez "uploading an existing file"
   - Glissez tous vos fichiers HTML, CSS, JS
   - Créez un dossier "assets" et ajoutez vos images
   - Commit changes

3. **Activer GitHub Pages**
   - Settings > Pages
   - Source: "main"
   - Save
   - Attendez 2-5 minutes

4. **Votre site est en ligne !**
   - URL : `https://votre-username.github.io`

## 🎨 Personnalisations rapides

### Changer les couleurs (styles.css)

```css
:root {
    --primary-color: #2563eb;  /* Couleur principale */
    --secondary-color: #8b5cf6;  /* Couleur secondaire */
}
```

### Modifier les niveaux de compétences (formations.html)

```html
<div class="skill-progress" style="width: 80%"></div>
<!-- Changez 80% selon votre niveau -->
```

### Ajouter un projet (projets.html)

Dupliquez un bloc `<div class="project-card">` existant et modifiez :
- L'image
- Le titre
- La description
- Les tags
- Les liens

## 📧 Activer le formulaire de contact

### Option facile : Formspree (gratuit)

1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte gratuit
3. Dans `contact.html`, ligne 45, remplacez :

```html
<form id="contactForm" class="contact-form">
<!-- PAR -->
<form action="https://formspree.io/f/VOTRE_ID" method="POST" class="contact-form">
```

## 🔍 Vérifications finales

Avant d'envoyer à des entreprises :

- [ ] Testez tous les liens
- [ ] Vérifiez l'orthographe
- [ ] Testez sur mobile
- [ ] Vérifiez que le CV se télécharge
- [ ] Testez le formulaire de contact

## 💼 Utiliser votre portfolio

### Dans vos candidatures

```
Bonjour,

Je suis étudiant en Bac STI2D et recherche une alternance.
Vous pouvez consulter mon portfolio : https://votre-username.github.io

Cordialement,
[Votre Nom]
```

### Sur votre CV

Ajoutez dans la section "Contact" :
- **Portfolio :** https://votre-username.github.io

### Sur LinkedIn

Dans "Contact" > "Site web" > Ajoutez votre lien

## 🆘 Problèmes ?

### Les images ne s'affichent pas
- Vérifiez les noms de fichiers (minuscules)
- Vérifiez que les fichiers sont dans assets/

### Le site ne se charge pas
- Attendez 5-10 minutes après activation
- Vérifiez Settings > Pages est activé
- Le fichier doit s'appeler `index.html` (minuscule)

### Menu burger ne marche pas
- Vérifiez que script.js est bien lié
- Ouvrez la console (F12) pour voir les erreurs

## 📱 Partager votre lien

Une fois en ligne, partagez sur :
- ✉️ Emails de candidature
- 💼 LinkedIn
- 📄 CV papier
- 📧 Signature email

---

**🎯 Votre portfolio est prêt à impressionner les recruteurs !**

Pour plus de détails, consultez le fichier README.md complet.
