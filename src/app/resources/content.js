import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Denizhan',
    lastName: 'Şahin',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'WEB & Mobile Developer',
    avatar: '/images/avatar.jpg',
    location: 'Europe/Istanbul',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Turkish', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>Merhaba bu kısmı yakında düzeleteceğim.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/denizzhansahin/',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/denizzhan-sahin/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/denizzhansahin',
    },
    {
        name: 'WEB',
        icon: 'person',
        link: 'https://www.denizhansahin.com/',
    },
    {
        name: 'YouTube',
        icon: 'youtube',
        link: 'https://www.youtube.com/c/spaceteknopoli',
    },
    {
        name: 'Google for Developers',
        icon: 'google',
        link: 'https://developers.google.com/profile/u/denizhansahin',
    },


    {
        name: 'Kaggle',
        icon: 'kaggle',
        link: 'https://www.kaggle.com/denizhanahin',
    },

    {
        name: 'Hugging Face',
        icon: 'web',
        link: 'https://huggingface.co/denizzhansahin',
    },

    {
        name: 'Medium',
        icon: 'medium',
        link: 'https://medium.com/@denizhansahin',
    },

    {
        name: 'Pardus Gönüllü Platformu',
        icon: 'linux',
        link: 'https://gonullu.pardus.org.tr/author/denizhansahin/',
    },

    {
        name: 'Sertifier',
        icon: 'certificate',
        link: 'https://verified.sertifier.com/tr/profile/denizhansahin2394225/',
    },

    {
        name: 'Credly',
        icon: 'certificate',
        link: 'https://www.credly.com/users/denizhan-sahin',
    },

]

const home = {
    label: 'Anasayfa',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Merhaba , Hoş Geldiniz :) </>,
    subline: <>Ben Denizhan Şahin , şu an bir <InlineCode>WEB geliştirici ve mobil geliştirici</InlineCode>,olarak<br /> hayallerimin peşinden gidiyorum.</>
}

const about = {
    label: 'Hakkımda',
    title: 'Gelin Tanışalım',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://www.denizhansahin.com/'
    },
    intro: {
        display: true,
        title: 'Profilim',
        description: <>Merhaba! Ben Denizhan! Yozgat Bozok Üniversitesi Bilgisayar Mühendisliği öğrencisi ve Anadolu Üniversitesi WEB Tasarımı/Kodlama öğrencisiyim.
            Mobil uygulama geliştirmeyi, WEB uygulamaları geliştirmeyi, AI teknolojileri ve Linux sistemleri çok seviyorum. Özellikle TypeScript ve Python en çok sevdiğim iki dildir.
            Öğrendiğim bilgiler ve elde ettiğim deneyimler ile girişimci olmayı, problemleri çözmeyi ve hayal ettiğim teknolojiler geliştirmeyi çok seviyorum!
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Tecrüblerim',
        experiences: [
            {
                company: 'T3 Vakfı',
                timeframe: '2024 - Günümüz',
                role: 'Eğitmen Mentor Bursiyer',
                achievements: [
                    <>Eğitmen Mentor Bursu, Türkiye Teknoloji Takımı Vakfı tarafından geleceğin teknoloji liderleri olma potansiyeline sahip 720 üniversite öğrencisine verilen on aylık özel bir burstur.
                        Yetkin olduğum alanlarda Deneyap Teknoloji Atölyelerinde öğrencilere eğitmenlik yapma ve yarışmalar için desteklenen takımlara mentorluk yaparak öğrenciler arasında besleyici bir döngü oluşturulması hedeflenmektedir.</>,
                    //<></>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    /*
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                    */
                ]
            },
            {
                company: 'Deneyap Türkiye',
                timeframe: '2022 - 2023',
                role: 'Deneyap Türkiye Siber Güvenlik Eğitmeni',
                achievements: [
                    <>Deneyap Türkiye Yozgat Atölyesinde Siber Güvenlik eğitmeni olarak görev aldım.</>,
                    <>Eğitmenliğim döneminde lise ve ortaokul gruplarına eğitim verdim.</>
                ],
                images: [{
                    src: '/images/projects/project-01/DENEYAP_BELGE.png',
                    alt: 'Once UI Project',
                    width: 16,
                    height: 9
                }]
            },
            {
                company: 'GDSC Yozgat Bozok University',
                timeframe: '2023 - 2024',
                role: 'Lead at Google DSC Yozgat Bozok University',
                achievements: [
                    <>Eski adı ile Google Developer Student Clubs topluluğuna bağlı olarak GDSC YOBÜ'nün kurucu liderlik görevini üstlendim.</>,
                    <>Teknoloji takımları sistemi ile eğitimler, webinarlar, topluluk buluşmaları ve teknik gezi faaliyetleri düzenledik.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/gdsc.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Yozgat Gençlik Merkezi Otonom Araç Takımı ',
                timeframe: '2023 - 2024',
                role: 'Proje Lideri',
                achievements: [
                    <>Projemizi TEKNOFEST Robotaksi Otonom Araç Yarışması Özgün Araç Kaategorisi için hazırladık.</>,
                    <>Kritik Tasarım Aşamasını başarılı bir şekilde tamamladığımız projemizde elektronik, mekanik ve yazılım olmak üzere alt birimler vardır.</>
                ],
                images: []
            },
            {
                company: 'Global AI Hub',
                timeframe: '2022 - 2023',
                role: 'Mentorship Program 2023 Bootcamps',
                achievements: [
                    <>Aygaz-Global AI Hub Python Bootcamp Mentor</>,
                    <>Akbank-Global AI Hub Python Bootcamp Mentor</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/mentor.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Yozgat Bozok Üniversitesi BeeM Takımı',
                timeframe: '2021 - 2023',
                role: 'Yazılım Ekibi Üyesi',
                achievements: [
                    <>YOLO modelleri için veri seti etiketleme, ZED2 kamera ile çalışma ve model eğitimi üzerine tecrübe kazandım.</>,
                    <>Python alanına bu takım ile başladım. BeeM Takımı 2023 döneminde Teknofest Robotaksi Otonom Araç Yarışmasında ikincilik elde etmiştir. </>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/teknofest1.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/teknofest2.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/teknofest3.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/teknofest4.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                company: 'IEEE Yozgat Bozok Üniversitesi Student Branch',
                timeframe: '2022 - 2023',
                role: 'Sosyal Medya Yöneticisi',
                achievements: [
                    <>Bu dönemde Instagram ve internet sitesi için içerik ürettim.</>,
                    <>Meta Bussines Platform üzerinde süreci yönettim. </>
                ],
                images: []
            }

        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Eğitim',
        institutions: [
            {
                name: 'Yozgat Bozok Üniversitesi',
                description: <>Bilgisayar Mühendisliği Öğrencisi - 2021/Günümüz</>,
            },
            {
                name: 'Anadolu Üniversitesi',
                description: <>WEB Tasarımı ve Kodlama Öğrencisi - 2024/Günümüz</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Programlama Dilleri ve Kullandığım Yazılımlar',
        skills: [
            {
                title: 'Python',
                description: <>
                    Bu programlama dilinde OpenCV ile görüntü işleme, Flask ile API yazma, Transformes ile LLM geliştirme, YOLO ile nesne tanıma ve segmentasyon, TensorFlow ile makine öğrenmesi modeli geliştirme aşamalarında deneyim kazandım. Qt5 ile ise masaüstü yazılım geliştirme yaptım.
                </>,
                images: [
                    {
                        src: '/images/projects/project-01/1.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'TypeScript-JavaScript',
                description: <>
                    Bu programlama dilinde WEB ve mobil geliştirme işlemlerinde deneyim kazandım.
                </>,
                images: [
                    {
                        src: '/images/projects/project-01/2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'React',
                description: <>
                    Dinamik WEB uygulamaları geliştirme çalışmaları yaptım.
                </>,
                images: [
                    {
                        src: '/images/projects/project-01/3.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Kotlin',
                description: <>
                    Android işletim sistemi için mobil uygulama geliştirme çalışması yaptım.
                </>,
                images: [
                    {
                        src: '/images/projects/project-01/4.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'React Native',
                description: <>
                    Hem Android hem IOS için uygulama geliştirme çalışması yaptım.
                </>,
                images: [
                    {
                        src: '/images/projects/project-01/5.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next JS',
                description: <>
                    Dinamik WEB uygulamaları geliştirme çalışmaları yaptım.
                </>,
                images: [
                    {
                        src: '/images/projects/project-01/6.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Linux',
                description: <>
                    Linux ile birlikte özellikle Pardus işletim sistemi üzerinde yapay zeka teknolojisi geliştirme ve diğer alanlarda teknoloji geliştirme çalışmaları yapıyorum.
                </>,
                images: [
                    {
                        src: '/images/projects/project-01/7.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'YouTube',
                description: <>
                    Aktif olarka Space Teknopoli için içerik üretmekteyim.
                </>,
                images: [
                    {
                        src: '/images/projects/project-01/8.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },

        ]
    },
    gonullu: {
        display: true, // set to false to hide this section
        title: 'Gönüllülük',
        gonulluluk: [
            {
                company: 'T.C. Gençlik ve Spor Bakanlığı',
                timeframe: '2022 - Günümüz',
                role: ' GSB Yozgat Gençlik Merkezi Gönüllü Gençlik Lideri',
                achievements: [
                    <>Gönüllü olarak sosyal ve kültürel faaliyetlerde yer almaktayım.</>,
                    //<></>
                ],
                images: [ // optional: leave the array empty if you don't want to display images

                ]
            },
            {
                company: 'T.C. Gençlik ve Spor Bakanlığı',
                timeframe: '2024 - 2024',
                role: ' Temsilci Genç',
                achievements: [
                    <>Gönüllü olarak 2024 yılında 12 Mayıs-21 Mayıs tarihlerinde 81 il genelinden gelen bir kadın bir erkek katılımcıdan biri olarak Yozgat ilini temsil ettim.</>,
                    //<></>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/temsilci_genc.jpeg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'HUAWEI Student Developers (HSD) Türkiye',
                timeframe: '2024 - Günümüz',
                role: 'HSD Türkiye Medium Gönüllü Yazar Programı Yazarı',
                achievements: [
                    <>HSD Türkiye Medium Gönüllü Yazar Programı için Medium platformunda Huawei Developers-Türkiye topluluğunda içerik üretmekteyim.</>,
                    //<></>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/hsd_medium.jpeg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                role: 'T3 AILE Gönüllüsü',
                timeframe: '2024 - Günümüz',
                company: 'T3 Vakfı',
                achievements: [
                    <>Türkiye’nin yerli üretken yapay zeka modellerini geliştirmesi, bu teknolojinin hizmetlere entegre edilmesi ve yapay zeka alanında çalışan yetkin iş gücü oluşturulmasına öncü olmaktır.</>,
                    //<></>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/t3ai.jpeg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                role: 'T3 Vakfı Gönüllüsü',
                timeframe: '2022 - Günümüz',
                company: 'T3 Vakfı',
                achievements: [
                    <>Türkiye Teknoloji Takımı Gönüllüsü.</>,
                    //<></>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                   
                ]
            },
            {
                role: 'Pardus Gönüllü Platformu Gönüllü Yazarlık',
                timeframe: '2021 - Günümüz',
                company: 'Pardus Gönüllü Platformu',
                achievements: [
                    <>Türkiye Teknoloji Takımı Gönüllüsü.</>,
                    //<></>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/pardus.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },


        ]
    },
}

const blog = {
    label: 'Blog',
    title: 'Sizin için seçtiğim önemli yazılarım...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Projelerim',
    title: 'Projelerime Bakın!',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Galeri',
    title: 'Çalışmalarımın Görselleri',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-15.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-16.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-17.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-18.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-19.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-20.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-21.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-22.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-23.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-24.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-25.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-26.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-27.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-28.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-29.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-30.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-31.png',
            alt: 'image',
            orientation: 'horizontal'
        },

        {
            src: '/images/gallery/img-32.png',
            alt: 'image',
            orientation: 'vertical'
        },


        {
            src: '/images/gallery/img-33.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-34.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-35.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-36.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-37.png',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };