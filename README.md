# Portfolio Personnel - Guide d'utilisation

## 📋 Description

Portfolio professionnel créé avec HTML, CSS et JavaScript pour présenter vos compétences, formations et projets. Conçu spécialement pour la recherche d'alternance.

## 🚀 Pages incluses

- **Accueil** : Présentation générale avec photo
- **À propos** : Parcours détaillé, Bac STI2D, motivations
- **Formations** : Diplômes et compétences techniques
- **Projets** : Réalisations scolaires et personnelles
- **CV** : Téléchargement du CV en PDF
- **Contact** : Formulaire et coordonnées

## 📁 Structure des fichiers

```
portfolio/
├── index.html          # Page d'accueil
├── about.html          # Page À propos
├── formations.html     # Page Formations
├── projets.html        # Page Projets
├── cv.html            # Page CV
├── contact.html       # Page Contact
├── styles.css         # Styles CSS
├── script.js          # JavaScript
├── assets/            # Dossier pour les ressources
│   ├── profile.jpg    # Votre photo de profil
│   ├── CV_Votre_Nom.pdf  # Votre CV en PDF
│   └── project-*.jpg  # Images des projets
└── README.md          # Ce fichier
```

## ⚙️ Configuration initiale

### 1. Personnaliser les informations

Remplacez les informations suivantes dans **tous les fichiers HTML** :

- `[Votre Nom]` → Votre nom complet
- `[Votre ville]` → Votre ville
- `votre.email@example.com` → Votre email
- `06 XX XX XX XX` → Votre numéro de téléphone
- `[Nom du Lycée]` → Nom de votre lycée
- `[Votre spécialité]` → Votre spécialité STI2D (SIN, ITEC, EE, ou AC)

### 2. Ajouter vos images

Créez un dossier `assets/` et ajoutez :

- **profile.jpg** : Votre photo de profil (format carré recommandé, 500x500px minimum)
- **CV_Votre_Nom.pdf** : Votre CV au format PDF
- **project-*.jpg** : Images de vos projets (1200x800px recommandé)

### 3. Mettre à jour vos projets

Dans `projets.html`, modifiez les projets existants ou ajoutez-en de nouveaux en dupliquant cette structure :

```html
<div class="project-card" data-category="web personnel">
    <div class="project-image">
        <img src="assets/votre-projet.jpg" alt="Description">
        <div class="project-overlay">
            <div class="project-links">
                <a href="URL_DEMO" class="project-link" title="Voir le projet">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="URL_GITHUB" class="project-link" title="Code source">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
        </div>
        <h3>Nom du Projet</h3>
        <p>Description du projet...</p>
        <a href="#" class="project-details-btn">En savoir plus <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```

### 4. Actualiser vos compétences

Dans `formations.html`, modifiez les pourcentages des barres de compétences :

```css
<div class="skill-progress" style="width: 80%"></div>
```

Changez `80%` selon votre niveau (0-100%).

### 5. Ajouter vos liens de réseaux sociaux

Dans le footer de chaque page, remplacez `#` par vos vrais liens :

```html
<a href="https://linkedin.com/in/votre-profil" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
<a href="https://github.com/votre-username" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

## 🌐 Déploiement sur GitHub Pages

### Étape 1 : Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur le bouton **"New"** (nouveau dépôt)
3. Nommez votre dépôt : `votre-username.github.io`
   - Exemple : Si votre username est "jean-dupont", nommez-le `jean-dupont.github.io`
4. Cochez **"Public"**
5. Cliquez sur **"Create repository"**

### Étape 2 : Uploader vos fichiers

#### Option A : Via l'interface web (plus simple)

1. Sur la page de votre nouveau dépôt, cliquez sur **"uploading an existing file"**
2. Glissez-déposez tous vos fichiers (HTML, CSS, JS)
3. Créez un dossier `assets` et uploadez-y vos images et PDF
4. Cliquez sur **"Commit changes"**

#### Option B : Via Git (recommandé si vous connaissez Git)

```bash
# Dans le dossier de votre portfolio
git init
git add .
git commit -m "Premier commit - Portfolio"
git branch -M main
git remote add origin https://github.com/votre-username/votre-username.github.io.git
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Dans votre dépôt, allez dans **Settings** (Paramètres)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous "Source", sélectionnez **main** (ou master)
4. Cliquez sur **Save**
5. Attendez quelques minutes

### Étape 4 : Accéder à votre site

Votre portfolio sera accessible à l'adresse :
`https://votre-username.github.io`

Exemple : `https://jean-dupont.github.io`

## 📤 Partager votre portfolio

Une fois en ligne, vous pouvez partager le lien :

- Sur votre CV
- Dans vos emails de candidature
- Sur LinkedIn
- Dans vos messages aux entreprises

**Exemple de message :**
```
Bonjour,

Je suis actuellement en Bac STI2D et je recherche une alternance.
Vous pouvez consulter mon portfolio en ligne : https://votre-username.github.io

Cordialement,
[Votre Nom]
```

## 🔧 Personnalisations avancées

### Changer les couleurs

Dans `styles.css`, modifiez les variables en haut du fichier :

```css
:root {
    --primary-color: #2563eb;  /* Bleu principal */
    --secondary-color: #8b5cf6;  /* Violet secondaire */
    --accent-color: #f59e0b;  /* Orange accent */
}
```

### Ajouter Google Analytics (optionnel)

Ajoutez ce code avant la balise `</head>` dans chaque fichier HTML :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Activer le formulaire de contact

Le formulaire actuel est une démonstration. Pour le rendre fonctionnel :

**Option 1 : Formspree (gratuit, facile)**

1. Allez sur [Formspree](https://formspree.io/)
2. Créez un compte gratuit
3. Dans `contact.html`, remplacez :

```html
<form id="contactForm" action="https://formspree.io/f/VOTRE_ID" method="POST">
```

**Option 2 : EmailJS (gratuit, sans backend)**

1. Allez sur [EmailJS](https://www.emailjs.com/)
2. Créez un compte et configurez un service
3. Ajoutez le SDK EmailJS dans vos fichiers

## 📱 Compatibilité

- ✅ Desktop (Windows, Mac, Linux)
- ✅ Mobile (iOS, Android)
- ✅ Tablette
- ✅ Tous les navigateurs modernes

## 🆘 Problèmes courants

### Les images ne s'affichent pas

- Vérifiez que le dossier `assets/` existe
- Vérifiez l'orthographe des noms de fichiers
- Les images doivent être en minuscules (ex: `profile.jpg` pas `Profile.JPG`)

### Le site ne s'affiche pas sur GitHub Pages

- Attendez 5-10 minutes après l'activation
- Vérifiez que le fichier s'appelle bien `index.html` (pas `Index.html`)
- Vérifiez dans Settings > Pages que GitHub Pages est activé

### Le menu ne fonctionne pas sur mobile

- Vérifiez que `script.js` est bien lié dans vos fichiers HTML
- Ouvrez la console du navigateur (F12) pour voir les erreurs

## 📚 Ressources utiles

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Unsplash](https://unsplash.com/) - Photos gratuites
- [Canva](https://www.canva.com/) - Créer des visuels

## 💡 Conseils

1. **Mettez à jour régulièrement** : Ajoutez vos nouveaux projets
2. **Testez sur mobile** : Beaucoup de recruteurs consultent sur téléphone
3. **Soignez l'orthographe** : Relisez tous vos textes
4. **CV à jour** : Remplacez votre CV PDF quand vous le modifiez
5. **Liens fonctionnels** : Vérifiez que tous vos liens marchent

## 🎯 Prochaines étapes

Après la mise en ligne :

1. ✅ Ajoutez le lien sur votre CV
2. ✅ Partagez sur LinkedIn
3. ✅ Mettez dans votre signature email
4. ✅ Ajoutez dans vos candidatures spontanées

## 📞 Support

Si vous avez des questions :

- Consultez la documentation GitHub Pages
- Recherchez sur [Stack Overflow](https://stackoverflow.com/)
- Demandez de l'aide sur des forums de développement

## 📄 Licence

Ce template est libre d'utilisation pour votre portfolio personnel.

---

**Bonne chance dans votre recherche d'alternance ! 🚀**
