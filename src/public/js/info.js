new Vue ({
    el: "#app",
    data: {
        isPerson: true,
        isCompany: false,
        info: {
            name: 'Diego J.',
            last_name: 'Chavez Ch.',
            separator: '|',
            company_name: '',
            photo: 'src/public/img/profile.jpeg',
            profession: '💻 Ingeniero en Informática | 💻 Desarrollador Web Fullstack | 💼 Analista Digital',
            logo: 'src/public/img/logo.svg'
        },
        social: [
            {
                name: 'Sitio Web',
                link: '', 
                description: 'Accede a mi sitio web.',
                icon: 'fa fa-globe', 
                color: 'background:#007BB5;',
                show_description: false
            },
            {
                name: 'Blog Personal',
                link: 'https://diegochavez18.medium.com/', 
                description: 'En este espacio genero contenido de valor dando mi opinión en base a mi experiencia acerca de temas de tecnología y marketing digital.',
                icon: 'fa fa-font', 
                color: 'background:#007BB5;',
                show_description: false
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/diego-jose-chavez-chirinos-9a7034a6/', 
                description: 'En este espacio podrás acceder a mi perfil profesional.',
                icon: 'fa fa-linkedin', 
                color: 'background: #0e76a8;',
                show_description: false
            },
            {
                name: 'Github',
                link: 'https://github.com/Diego-18', 
                description: 'Lograras acceder a mis proyectos terminados y en los que me encuentro desarrollando en el área de sistemas.',
                icon: 'fa fa-github-square', 
                color: 'background:#000;',
                show_description: false
            },
            {
                name: 'Gitlab',
                link: 'https://gitlab.com/Diego-18', 
                description: 'Lograras acceder a mis proyectos terminados y en los que me encuentro desarrollando en el área de sistemas.',
                icon: 'fa fa-gitlab', 
                color: 'background: #FC6D27;',
                show_description: false
            },
            {
                name: 'Codepen',
                link: 'https://codepen.io/diego-18', 
                description: 'Lograras acceder a mis proyectos terminados y en los que me encuentro desarrollando en el área de sistemas.',
                icon: 'fa fa-codepen', 
                color: 'background:#000;',
                show_description: false
            },
            {
                name: 'Stack Overflow',
                link: 'https://es.stackoverflow.com/users/231016/diego-chavez?tab=profile', 
                description: 'En este espacio encontraras mi lado autodidacta de aprendizaje y contribución en base a conocimientos aprendidos sobre programación.',
                icon: 'fa fa-stack-overflow', 
                color: 'background:#ef8236;',
                show_description: false
            },
            {
                name: 'Twitter',
                link: 'https://twitter.com/djchvz18', 
                description: 'En este espacio creo y/o comparto contenido de valor relacionado a lo que esta sucediendo actualmente en el área de tecnológica.',
                icon: 'fa fa-twitter', 
                color: 'background:#00aced;',
                show_description: false
            },
            {
                name: 'Facebook',
                link: 'https://www.facebook.com/d.j.c.c.20', 
                description: 'En esta espacio comparto información variada.',
                icon: 'fa fa-facebook-official', 
                color: 'background:#3b5998;',
                show_description: false
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/djchvz18/', 
                description: 'En este espacio comparto contenido variado desde mis hobbies, proyectos personales, viajes, música entre otros.',
                icon: 'fa fa-instagram', 
                color: 'background:#517fa4;',
                show_description: false
            },
            {
                name: 'Dribble',
                link: 'https://dribbble.com/diegochavez20/', 
                description: 'En este espacio comparto contenido relacionado a proyectos que he realizado o que he contribuido en base a desarrollo front-end (diseños) y marketing digital.',
                icon: 'fa fa-dribbble', 
                color: 'background:#ff0084;',
                show_description: false
            },
            {
                name: 'Behance',
                link: 'https://www.behance.net/ingdiegoch1a44/', 
                description: 'En este espacio comparto contenido relacionado a proyectos que he realizado o que he contribuido en base a desarrollo front-end (diseños) y marketing digital.',
                icon: 'fa fa-behance', 
                color: 'background:#000;',
                show_description: false
            },
            {
                name: 'Hackerrank',
                link: 'https://www.hackerrank.com/ingdiegochavez18', 
                description: 'En este espacio veras parte de mi lado competitivo, autodidacta en el área de la programación.',
                icon: 'fab fa-hackerrank', 
                color: 'background: #008f39;',
                show_description: false
            },
            {
                name: 'Codechef',
                link: 'https://www.codechef.com/users/djchavez', 
                description: 'En este espacio veras parte de mi lado competitivo, autodidacta en el área de la programación.',
                icon: 'fas fa-code', 
                color: 'background: #804000;',
                show_description: false
            }
        ]
    }
});

