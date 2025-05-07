const translations = {
    fr: {
        "Change theme": "Changer theme",
        "Home": "Accueil",
        "Articles": "Articles",
        "Multimedia": "Multimedia",
        "Contact": "Contact",
        "title-index": "Bienvenue sur GameforgeLab",
        "Change title": "Changer titre",
        "ajouter-paragraphe": "Ajouter paragraphe",
        "footer": "&copy; Gameforgelab - Tous droits reservés",
        "paragraphe-index": "Votre espace d’apprentissage et de création dédié à la conception de jeux vidéo.<\
            Que vous soyez tout juste initié à l’univers du game design ou déjà engagé dans un parcours de formation avec plusieurs projets à votre actif, ce site a été pensé pour vous. Conçu comme une plateforme d’accompagnement pédagogique et créatif, GameforgeLab s’adresse à tous les passionnés de jeux vidéo souhaitant apprendre, expérimenter et progresser dans les différents domaines de la conception vidéoludique.\
            La création d’un jeu vidéo, c’est bien plus que de simples lignes de code ou des graphismes attrayants. C’est un processus complexe, multidisciplinaire, qui mobilise l’imagination, la logique, l’organisation et la capacité à collaborer. C’est pourquoi notre site se donne pour mission de vous offrir un environnement structuré, accessible et stimulant, pour explorer chaque aspect de cette industrie passionnante. Une approche centrée sur la pratique\
            Apprendre à concevoir un jeu vidéo, ce n’est pas seulement comprendre des théories : c’est faire, tester, échouer parfois, et surtout recommencer. C’est pourquoi nous mettons un point d’honneur à favoriser l’apprentissage par la pratique. À travers des ateliers, des défis créatifs et des projets guidés, vous serez amené à mettre en œuvre vos idées, à manipuler les outils, et à affiner votre compréhension de ce qui fait un bon jeu.\
            Notre objectif est de faire de vous des concepteurs capables de penser un jeu dans sa globalité : depuis son intention initiale jusqu’à sa réalisation concrète et sa mise à disposition d’un public. Que vous soyez attiré par le level design, le gameplay, la narration interactive, l’UX, l’équilibrage ou encore la conception sonore, vous trouverez sur ce site de quoi nourrir votre curiosité et développer vos compétences.\
            Une communauté d’apprenants et de créateurs\
            Le monde du jeu vidéo est avant tout un espace de partage et de collaboration. GameforgeLab ne se limite pas à une bibliothèque de ressources : c’est aussi une communauté bienveillante, ouverte à l’échange et à l’entraide. Forums, commentaires, projets collaboratifs… Vous pourrez interagir avec d’autres apprenants, poser vos questions, montrer vos prototypes, recevoir des retours constructifs et tisser des liens avec des personnes qui partagent votre passion.\
            En résumé, GameforgeLab est bien plus qu’un simple site web : c’est une porte d’entrée vers l’univers foisonnant et créatif de la conception vidéoludique. Quel que soit votre point de départ, vous trouverez ici des clés pour progresser, des outils pour créer, et une communauté pour vous soutenir.\
            Prêt à entrer dans le monde des créateurs de jeux ? Alors bienvenue, et bon voyage dans cette aventure ludique et formatrice !",
        "titre-galerie": "Galerie d'images",
        "article-1": "1 - Créer son premier jeu avec Godot : guide pour débutants",
        "article-1-1": "Vous rêvez de créer votre propre jeu vidéo, mais vous ne savez pas par où commencer ? Le moteur Godot Engine, open source, gratuit et léger, est l’outil idéal pour débuter sans se ruiner ni se noyer dans la complexité. Dans cet article, nous vous guidons pas à pas dans la création d’un mini-jeu 2D.",
        "article-1-2": "1. Installation de Godot",
        "article-1-2-1": "Téléchargez Godot sur godotengine.org",
        "article-1-2-2": "Lancez l’exécutable (aucune installation nécessaire).",
        "article-1-2-3": "Créez un nouveau projet.",
        "article-1-3": "2. Création de la scène principale",
        "article-1-3-1": "Ajoutez un nœud Node2D et renommez-le 'Main'. Ajoutez ensuite un Sprite2D et un CollisionShape2D pour le joueur.",
        "article-1-4": "3. Importer un personnage",
        "article-1-4-1": "Faites glisser une image PNG dans le projet et liez-la au Sprite2D.",
        "article-1-5": "4. Ajouter des obstacles et des collisions",
        "article-1-5-1": "Ajoutez des StaticBody2D avec des CollisionShape2D pour les murs.",
        "article-1-6": "Conclusion",
        "article-1-6-1": "Avec quelques nœuds et lignes de code, vous avez un prototype jouable ! Godot rend le développement de jeux accessible à tous. Le plus dur, c’est de se lancer !",
        "afficher-plus": "Afficher plus",
        "article-2": "2 - Level Design – 5 erreurs à éviter quand on débute",
        "article-2-1": "Un bon level design peut transformer un jeu moyen en une expérience mémorable. Voici cinq erreurs fréquentes et comment les éviter.",
        "article-2-2": "1. Niveaux trop longs ou trop vides",
        "article-2-2-1": "Concevez vos niveaux comme des montagnes russes avec des pics et des pauses.",
        "article-2-3": "2. Absence de feedback visuel",
        "article-2-3-1": "Ajoutez des effets visuels et sonores pour guider le joueur.",
        "article-2-4": "3. Mauvaise signalisation des objectifs",
        "article-2-4-1": "Utilisez des indices visuels pour orienter le joueur (flèches, lumière, ennemis).",
        "article-2-5": "4. Difficulté mal dosée",
        "article-2-5-1": "Adoptez une courbe de difficulté progressive et testez votre niveau avec des joueurs.",
        "article-2-6": "5. Copier des idées sans comprendre",
        "article-2-6-1": "Analysez les mécaniques et le rythme des jeux célèbres avant de les reproduire.",
        "article-2-7": "Conclusion",
        "article-2-7-1": "Le level design est un art qui s’apprend avec du temps et des tests. Évitez ces pièges pour offrir une meilleure expérience.",
        "article-3": "3 - L'IA dans les jeux vidéo : comment ça marche vraiment ?",
        "article-3-1": "L’IA dans les jeux est souvent simple mais bien pensée. Voici les techniques les plus utilisées dans l’industrie.",
        "article-3-2": "1. États finis (Finite State Machines)",
        "article-3-2-1": "Exemple : Patrouille → Alerte → Attaque selon les conditions du jeu.",
        "article-3-3": "2. Navigation et Pathfinding",
        "article-3-3-1": "Les IA utilisent des algorithmes comme <code>A*</code> et des systèmes comme <code>NavMesh</code>.",
        "article-3-4": "3. Réactions simples mais efficaces",
        "article-3-4-1": "Des comportements simples comme dans DOOM suffisent à créer de la tension et du fun.",
        "article-3-5": "4. Scripting comportemental",
        "article-3-5-1": "Les <em>Behavior Trees</em> permettent de structurer les actions d’un ennemi.",
        "article-3-6": "5. IA avancée",
        "article-3-6-1": "Les IA avancées utilisent des réseaux neuronaux pour imiter des comportements complexes.",
        "article-3-7": "Conclusion",
        "article-3-7-1": "L’IA dans les jeux vidéo est une technologie puissante qui permet de créer des expériences plus immersives et plus réalistes.",
        "Nom complet": "Nom complet",
        "Email": "Email",
        "Message": "Message",
        "Votre message a bien été envoyé !": "Votre message a bien été envoyé !",
        "Envoyer": "Envoyer",
        "titre-multimedia": "Images et vidéos",
        "titre-video": "Vidéo sur la création de jeu vidéo",
        "titre-galerie": "Galeries d'images",
    },
        
    en: {
        "Change theme": "Change theme",
        "Home": "Home",
        "Articles": "Articles",
        "Multimedia": "Multimedia",
        "Contact": "Contact",
        "title-index": "Welcome to GameforgeLab",
        "Change title": "Change title",
        "ajouter-paragraphe": "Add paragraph",
        "footer": "&copy; Gameforgelab - All rights reserved",
        "paragraphe-index": "Your learning and creation space dedicated to video game design\
            Whether you're just beginning your journey into the world of game design or already pursuing a training program with several projects under your belt, this site was created with you in mind. Designed as a platform for both educational and creative support, GameforgeLab is aimed at all video game enthusiasts who want to learn, experiment, and grow in the many fields of game development.\
            Creating a video game is much more than writing lines of code or designing appealing graphics. It’s a complex, multidisciplinary process that engages imagination, logic, organization, and the ability to collaborate. That’s why our mission is to provide you with a structured, accessible, and stimulating environment in which to explore every aspect of this exciting industry.\
            A practice-focused approach\
            Learning how to design a game isn’t just about understanding theory—it’s about doing, testing, sometimes failing, and most importantly, trying again. That’s why we place a strong emphasis on learning by doing. Through hands-on workshops, creative challenges, and guided projects, you’ll be encouraged to put your ideas into action, work with real tools, and deepen your understanding of what makes a great game.\
            Our goal is to help you become a designer who can think of a game as a whole—from the initial concept to its concrete realization and distribution to an audience. Whether you're interested in level design, gameplay mechanics, interactive storytelling, user experience, game balancing, or sound design, you'll find plenty of resources here to feed your curiosity and grow your skills.\
            A community of learners and creators\
            The world of video games is, above all, a space for sharing and collaboration. GameforgeLab is not just a resource library—it’s also a welcoming community, open to discussion and mutual support. Forums, comments, collaborative projects… you’ll be able to interact with other learners, ask questions, showcase your prototypes, get constructive feedback, and connect with people who share your passion.\
            In short, GameforgeLab is much more than just a website—it’s a gateway into the rich and creative world of video game design. No matter where you're starting from, you’ll find the keys to grow, the tools to create, and the community to support you.\
            Ready to enter the world of game creators? Then welcome, and enjoy this playful and formative adventure!",
        "titre-galerie": "image gallery",
        "article-1": "1 - Creating Your First Game with Godot: A Beginner's Guide",
        "article-1-1": "Do you dream of creating your own video game, but you don't know where to start? The Godot Engine, open source, free, and lightweight, is the ideal tool to get started without breaking the bank or getting bogged down in complexity. In this article, we'll guide you step by step through the creation of a 2D mini-game.",
        "article-1-2": "1. Installation of Godot",
        "article-1-2-1": "Download Godot from godotengine.org",
        "article-1-2-2": "Launch the executable (no installation required).",
        "article-1-2-3": "Create a new project.",
        "article-1-3": "2. Creation of the main scene",
        "article-1-3-1": "Add a Node2D node and rename it 'Main'. Add a Sprite2D and a CollisionShape2D for the player.",
        "article-1-4": "3. Import a character",
        "article-1-4-1": "Drag and drop a PNG image into the project and link it to the Sprite2D.",
        "article-1-5": "4. Add obstacles and collisions",
        "article-1-5-1": "Add StaticBody2D with CollisionShape2D for the walls.",
        "article-1-6": "Conclusion",
        "article-1-6-1": "With a few nodes and lines of code, you have a playable prototype! Godot makes game development accessible to everyone. The hardest part is getting started!",
        "afficher-plus": "Show more",
        "article-2": "2 - Level Design – 5 Mistakes to Avoid When Starting Out",
        "article-2-1": "A good level design can transform an average game into a memorable experience. Here are five common mistakes and how to avoid them.",
        "article-2-2": "1. Levels too long or too empty",
        "article-2-2-1": "Design your levels like roller coasters with peaks and pauses.",
        "article-2-3": "2. Lack of visual feedback",
        "article-2-3-1": "Add visual and audio effects to guide the player.",
        "article-2-4": "3. Poor objective signaling",
        "article-2-4-1": "Use visual indicators to orient the player (arrows, light, enemies).",
        "article-2-5": "4. Uneven difficulty",
        "article-2-5-1": "Adopt a progressive difficulty curve and test your level with players.",
        "article-2-6": "5. Copying ideas without understanding",
        "article-2-6-1": "Analyze the mechanics and rhythm of famous games before reproducing them.",
        "article-2-7": "Conclusion",
        "article-2-7-1": "Level design is an art that is learned with time and testing. Avoid these traps to offer a better experience.",
        "article-3": "3 - AI in video games: how it really works?",
        "article-3-1": "AI in games is often simple but well thought out. Here are the most used techniques in the industry.",
        "article-3-2": "1. Finite State Machines (FSM)",
        "article-3-2-1": "Example: Patrol → Alert → Attack according to game conditions.",
        "article-3-3": "2. Navigation and Pathfinding",
        "article-3-3-1": "AI uses algorithms like <code>A*</code> and systems like <code>NavMesh</code>.",
        "article-3-4": "3. Simple but effective reactions",
        "article-3-4-1": "Simple behaviors like in DOOM are enough to create tension and fun.",
        "article-3-5": "4. Behavioral scripting",
        "article-3-5-1": "Behavior Trees allow you to structure an enemy's actions.",
        "article-3-6": "5. Advanced AI",
        "article-3-6-1": "Advanced AI uses neural networks to imitate complex behaviors.",
        "article-3-7": "Conclusion",
        "article-3-7-1": "AI in video games is a powerful technology that allows you to create more immersive and realistic experiences.",
        "Nom complet": "Full name",
        "Email": "Email",
        "Message": "Message",
        "Votre message a bien été envoyé !": "Your message has been sent successfully!",
        "Envoyer": "Send",
        "titre-multimedia": "Images and videos",
        "titre-video": "Video on game development",
        "titre-galerie": "Image gallery",
    }

};

// langue par defaut
let currentLang = localStorage.getItem('lang') || 'fr';



function applyTranslations() {

  // Pour chaque élément data-key, on injecte la chaîne traduite

  document.querySelectorAll('[data-key]').forEach(el => {

    const key = el.getAttribute('data-key');

    if (translations[currentLang][key]) {

      // <title> se gère via document.title

      if (el.tagName.toLowerCase() === 'title') {

        document.title = translations[currentLang][key];

      } else {

        el.textContent = translations[currentLang][key];

      }

    }

  });

}



// Initialisation au chargement

applyTranslations();



// Écoute du sélecteur de langue

document.querySelectorAll('[data-lang]').forEach(btn => {

  btn.addEventListener('click', () => {

    const chosen = btn.getAttribute('data-lang');

    if (chosen === currentLang) return;

    currentLang = chosen;

    localStorage.setItem('lang', currentLang);

    applyTranslations();

  });


});