import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const en = 
    {
        "titles" : [
            "Skills",
            "Profile",
            "About",
            "Projects",
            "Contact Me"
        ],
        "changeLanguage": "Change Language",
        "darkMode": "Dark Mod",
        "header" : {
            "nav" : {
                "name" : "Berkan"
            },
    
            "header-content" : {
                "header-title" : "Berkan Yüce",
                "header-info" : "I'm a data scientist and full stack developer. I love dealing with data, designing and naturally coding.",
                "header-social" : [
                    {
                        "id" : 1,
                        "img" : faLinkedinIn,
                        "social-name" : "LinkedIn",
                        "link" : "https://www.linkedin.com/in/berkanyuce/"
                    },
                    {
                        "id" : 2,
                        "img" : faGithub,
                        "social-name" : "Github",
                        "link" : "https://github.com/berkanyuce"
                    }
                ]
            }
        },

        "skills" : [
            {
                "id" : 1,
                "alt" : "Python",
                "img-link" : "https://img.icons8.com/color/100/000000/python--v1.png"
            },
            {
                "id" : 2,
                "alt" : "React",
                "img-link" : "https://img.icons8.com/officel/100/000000/react.png"
            },
            {
                "id" : 3,
                "alt" : "SQL",
                "img-link" : "https://img.icons8.com/external-flat-juicy-fish/100/000000/external-sql-coding-and-development-flat-flat-juicy-fish.png" 
            },
            {
                "id" : 4,
                "alt" : "Machine Learning",
                "img-link" : "https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-machine-learning-robotics-flaticons-flat-flat-icons.png"
            },
            {
                "id" : 5,
                "alt" : "Deep Learning",
                "img-link" : "https://img.icons8.com/external-becris-flat-becris/100/external-deep-learning-artificial-intelligence-becris-flat-becris.png"
            },
            {
                "id" : 6,
                "alt" : "JAVA",
                "img-link" : "https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png"
            },
            {
                "id" : 7,
                "alt" : "JavaScript",
                "img-link" : "https://img.icons8.com/color/100/javascript--v1.png"
            },
            {
                "id" : 8,
                "alt" : "Spring Boot",
                "img-link" : "https://img.icons8.com/color/100/spring-logo.png"
            },
        ],

        "profile" : {
            "basic-info" : {
                "basic-info-headers" : [
                    "Basic Information",
                    "Birthday",
                    "Location",
                    "Education",
                    "Preferred Role"
                ],
                "doğum-tarihi" : "25.10.1997",
                "ikamet-sehri" : "Turkey",
                "egitim-durumu" : "Uludağ Uni. Computer Eng. Bachelor, 2022",
                "tercih-rol" : "Data Science, Frontend"
            },
            "about-me" : `As a newly graduated data scientist, I'm interested 
            in machine learning and image processing and am eager to learn new 
            things. In my published article, I analyzed the 2018 World Cup matches 
            using machine learning and visualization techniques.`
        },

        "projects" : [
            {
                "id" : 1,
                "project-header" : "World Cup 2022 Predictor",
                "project-content" : `I developed a machine learning model using Python,
                Sklearn, and Streamlit to predict the outcomes of all matches in the 2022 
                World Cup. The model had an accuracy rate of 69% before the tournament, 
                and correctly predicted the outcome of 44 of 64 matches, achieving a success rate of 69%.`,
                "project-tags" : ["Python", "Machine Learning"],
                "project-links" : [
                    {
                        "link-id" : 1,
                        "link" : "https://berkanyuce-world-cup-2022-main-3w2dzq.streamlit.app",
                        "link-details" : "View Site"
                    },
                    {
                        "link-id" : 2,
                        "link" : "https://github.com/berkanyuce/World-Cup-2022",
                        "link-details" : "Github"
                    },
                ],
                "project-img" : `https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png`
            },
            {
                "id" : 2,
                "project-header" : "2018 FIFA World Cup Visualization and Tournament Prediction",
                "project-content" : `I developed a football data science project which uses Python 
                programming language. The project visualizes football statistics and predicts the 
                knockout stage of 2018 FIFA World Cup. The model can predict 11 of 16 matches correctly.`,
                "project-tags" : ["Python", "Machine Learning"],
                "project-links" : [
                    {
                        "link-id" : 1,
                        "link" : "https://share.streamlit.io/berkanyuce/fifa-world-cup-2018-visualization/main/codes/sidebar.py",
                        "link-details" : "View Site"
                    },
                    {
                        "link-id" : 2,
                        "link" : "https://github.com/berkanyuce/FIFA-World-Cup-2018-Visualization-and-Prediction",
                        "link-details" : "Github"
                    },
                ],
                "project-img" : `https://upload.wikimedia.org/wikipedia/tr/c/c7/2018_FIFA_D%C3%BCnya_Kupas%C4%B1_logo.svg`
            },
        ],

        "contact-message" : `Got a question or proposal, or just want to say hello? Go ahead.`,
        
       
    }


export default en