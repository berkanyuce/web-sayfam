import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const tr = 
    {
        "titles" : [
            "Beceriler",
            "Profil",
            "Hakkımda",
            "Projeler",
            "Bana Ulaşın"
        ],
        "changeLanguage": "Dili Değiştir",
        "darkMode": "Karanlık Mod",
        "header" : {
            "nav" : {
                "name" : "Berkan"
            },
    
            "header-content" : {
                "header-title" : "Berkan Yüce",
                "header-info" : "Veri bilimcisi ve full stack developerım. Verilerle uğraşmayı, tasarım yapmayı ve doğal olarak yazmayı çok seviyorum.",
                "header-social" : [
                    {
                        "id" : 1,
                        "img" : faGithub,
                        "social-name" : "LinkedIn",
                        "link" : "https://www.linkedin.com/in/berkanyuce/"
                    },
                    {
                        "id" : 2,
                        "img" : faLinkedinIn,
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
                "img-link" : "https://raw.githubusercontent.com/berkanyuce/web-sayfam/35d9cb385020ee3bf1059ba78b89903158abd8db/src/img/python.png"
            },
            {
                "id" : 2,
                "alt" : "React",
                "img-link" : "https://raw.githubusercontent.com/berkanyuce/web-sayfam/main/src/img/react.png"
            },
            {
                "id" : 3,
                "alt" : "SQL",
                "img-link" : "https://raw.githubusercontent.com/berkanyuce/web-sayfam/main/src/img/sql.png" 
            },
            {
                "id" : 4,
                "alt" : "Machine Learning",
                "img-link" : "https://raw.githubusercontent.com/berkanyuce/web-sayfam/main/src/img/machinelearning.png"
            },
            {
                "id" : 5,
                "alt" : "Deep Learning",
                "img-link" : "https://raw.githubusercontent.com/berkanyuce/web-sayfam/main/src/img/deeplearning.png"
            },
            {
                "id" : 6,
                "alt" : "JAVA",
                "img-link" : "https://raw.githubusercontent.com/berkanyuce/web-sayfam/main/src/img/java.png"
            },
            {
                "id" : 7,
                "alt" : "JavaScript",
                "img-link" : "https://raw.githubusercontent.com/berkanyuce/web-sayfam/main/src/img/javascript.png"
            },
            {
                "id" : 8,
                "alt" : "Spring Boot",
                "img-link" : "https://raw.githubusercontent.com/berkanyuce/web-sayfam/main/src/img/spring.png"
            },
        ],

        "profile" : {
            "basic-info" : {
                "basic-info-headers" : [
                    "Bilgiler",
                    "Doğum Tarihi",
                    "İkamet Şehri",
                    "Eğitim Durumu",
                    "Tercih Ettiği Rol"
                ],
                "doğum-tarihi" : "25.10.1997",
                "ikamet-sehri" : "Mersin",
                "egitim-durumu" : "Uludağ Ünv. Bilgisayar Müh. Lisans, 2022",
                "tercih-rol" : "Data Science, Frontend"
            },
            "about-me" : `Yeni mezun bir veri bilimci olarak makine öğrenimi ve 
            görüntü işlemeye ilgi duyuyorum ve yeni şeyler öğrenmeye hevesliyim. 
            Yayınlanan yazımda 2018 Dünya Kupası maçlarını makine öğrenmesi ve 
            görselleştirme tekniklerini kullanarak analiz ettim.`
        },

        "projects" : [
            {
                "id" : 1,
                "project-header" : "World Cup 2022 Predictor",
                "project-content" : `2022 Dünya Kupası'ndaki tüm maçların sonuçlarını 
                tahmin etmek için Python, Sklearn ve Streamlit'i kullanarak bir makine 
                öğrenme modeli geliştirdim. Turnuva öncesinde %69 doğruluk oranına sahip 
                olan model, 64 maçın 44'ünün sonucunu doğru tahmin ederek %69 başarı oranına ulaştı.`,
                "project-tags" : ["Python", "Makine Öğrenmesi"],
                "project-links" : [
                    {
                        "link-id" : 1,
                        "link" : "https://berkanyuce-world-cup-2022-main-3w2dzq.streamlit.app",
                        "link-details" : "Uygulamayı Deneyimleyin"
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
                "project-content" : `Python programlama dilini kullanan bir 
                futbol veri bilimi projesi geliştirdim. Proje, futbol istatistiklerini 
                görselleştiriyor ve 2018 FIFA Dünya Kupası'nın eleme aşamasını tahmin 
                ediyor. Model, 16 maçın 11'ini doğru tahmin edebiliyor.`,
                "project-tags" : ["Python", "Makine Öğrenmesi"],
                "project-links" : [
                    {
                        "link-id" : 1,
                        "link" : "https://share.streamlit.io/berkanyuce/fifa-world-cup-2018-visualization/main/codes/sidebar.py",
                        "link-details" : "Uygulamayı Deneyimleyin"
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

        "contact-message" : `Sorun varsa`,

       
    }


export default tr