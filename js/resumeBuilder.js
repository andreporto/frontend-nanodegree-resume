const placeholder = '%data%';

var work = {
    jobs: [{
            employer: "SERPRO - Serviço Federal de Processamento de Dados",
            title: "Analista - Desenvolvedor",
            location: "Recife - PE",
            dates: "desde 11/2001",
            description: "Realização de elicitação e análise de requisitos, implementação de software e realização de testes",
            url: "http://www.serpro.gov.br"
        },
        {
            employer: "Ministério da Saúde",
            title: "Agente Administrativo",
            location: "Maceió - AL",
            dates: "1995 - 2001",
            description: "Trabalhos administrativos de atendimento ao público e a servidores, auxílio em serviços de informática e implantação de rede de comunicação",
            url: "http://www.funasa.gov.br"
        }
    ],
    display: function () {
        let newEntry;

        work.jobs.forEach((job) => {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append();
            newEntry = HTMLworkEmployer.replace("#", job.url);
            newEntry = newEntry.replace(placeholder, job.employer) + HTMLworkTitle.replace(placeholder, job.title);
            $(".work-entry:last").append(newEntry);
            $(".work-entry:last").append(HTMLworkDates.replace(placeholder, job.dates));
            $(".work-entry:last").append(HTMLworkDescription.replace(placeholder, job.description));
        });
    }
};

var projects = {
    projects: [{
            title: "Lista de Tarefas Pessoais",
            dates: "2016",
            description: "Aplicativo para dispositivos mobile para auxiliar no controle de tarefas a fazer",
            images: [
                "https://lh3.googleusercontent.com/-uZTrSz39wYpmX4pWUhZ44Tct8DtgcUiloGLdeCYQvKJB9QFmU7xmqaRIwkATHTQsluM=h310",
                "https://lh3.googleusercontent.com/lepZpU0EnwGUUqxg0nJ8SXcfmjf2zKZZiQv-L35O06CPHt1zj35zB6-SicENDYVVxzw=h900",
                "https://lh3.googleusercontent.com/fPrEraG9xRuN4pSAza7Ye_zEsx1KQYSDnNoWSMsmB_7Dvc1U-WKlFFB2TNjEhsrGEH0=h900",
                "https://lh3.googleusercontent.com/BtGAxc1xInDpeKLtHtahZfOknNEV7TqFusxjpTLgcsCpUxgH6vWF6eRUEg8WE-HeGA=h900"
            ],
            url: "https://play.google.com/store/apps/details?id=br.com.saladatech.tarefas"
        },
        {
            title: "CheckList - Segurança Do Trabalho",
            dates: "2016",
            description: "Este APP tem por objetivo estimular o ensino das Normas Regulamentadoras (NR's) brasileiras na área de segurança do trabalho, bem como estabelecer uma ferramenta de apoio na realização de inspeções de segurança do trabalho, prezando pelo princípio prevencionista.",
            images: [
                "https://lh3.googleusercontent.com/nSXeI6qoX85o-j1ZIXBpitrHkodcqOrUjrBT-YRgHo_cu4_lXO0hRAoHeYzo3mJTfDFk=h900",
                "https://lh3.googleusercontent.com/L7YDrhKuuX153QeKzck1at-o4kbCNASh_Ypnkx5AzX3WtTigZZk0mDQdQzX1yG7DSA=h900",
                "https://lh3.googleusercontent.com/bKTwgrgZfQPw7I9p5YFVdA3CqRvos2sM96gEuhdG9w2WTAS50I1sfe8EzXIoiS2z0ibK=h900",
                "https://lh3.googleusercontent.com/2xPCQjudHkKqpkoboUmlM7bRAgi8-wXPz7lIccxYm6J1XwtLHCuQ0JuKFlNEib39M7U=h900",
                "https://lh3.googleusercontent.com/6pAN3L6pRHWv3SDJAvSun9pwLycOLQ4xjWEdxm6zKIv1TusKbN6tsAMvXc4nOmsqQm1I=h900"
            ],
            url: "https://play.google.com/store/apps/details?id=com.saladatech.check_list_inspecao_seguranca_rabalho"
        }
    ],
    display: function () {
        let newEntry;
        projects.projects.forEach((project) => {
            newEntry = $(HTMLprojectStart).html(
                HTMLprojectTitle.replace("#", project.url).replace(placeholder, project.title) +
                HTMLprojectDates.replace(placeholder, project.dates) +
                HTMLprojectDescription.replace(placeholder, project.description)
            );
            project.images.forEach((img) => {
                newEntry.append(HTMLprojectImage.replace(placeholder, img));
            });
            $("#projects").append(newEntry);
        });
    }
};


var bio = {
    name: "André Porto",
    role: "Desenvolvedor Web e Mobile",
    welcomeMessage: "Sou especialista em engenharia de sistemas e apaixonado por tecnologia.",
    contacts: {
        mobile: "+55 81 98128-1884",
        email: "andreporto@yahoo.com",
        github: "andreporto",
        location: "Recife - PE"
    },
    skills: ["HTML5", "TypeScript", "Angular", "Ionic", "PL/SQL"],
    biopic: "https://avatars2.githubusercontent.com/u/8604870?v=3&s=460",
    display: function () {
        let headerInfo = HTMLheaderName.replace(placeholder, bio.name) +
            HTMLheaderRole.replace(placeholder, bio.role);
        $("#header").prepend(headerInfo);

        let formattedBioPic = HTMLbioPic.replace(placeholder, bio.biopic);
        $('#header').append(formattedBioPic);
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            bio.skills.forEach((sk)=>{
                $('#skills').append(HTMLskills.replace(placeholder, sk));
            });
        }

        let contactInfo = HTMLmobile.replace(placeholder, bio.contacts.mobile) +
            HTMLemail.replace(placeholder, bio.contacts.email) +
            HTMLgithub.replace(placeholder, bio.contacts.github) +
            HTMLlocation.replace(placeholder, bio.contacts.location);
        $("#topContacts").append(contactInfo);
        $("#footerContacts").append(contactInfo);

    }
};

var education = {
    schools: [{
        name: "UFAL - Universidade Federal de Alagoas",
        location: "Maceió - AL",
        degree: "Ciência da Computação",
        dates: "1992-2000",
        majors: "BSc",
        url: "http://ufal.br"
    }],
    onlineCourses: [{
        title: "Front-end Web Developer",
        school: "Udacity",
        dates: "2017",
        url: "http://udacity.com"
    }],
    display: function () {
        let newEntry;
        education.schools.forEach((education) => {
            newEntry = $(HTMLschoolStart).html(
                HTMLschoolName.replace("#", education.url).replace(placeholder, education.name) +
                HTMLschoolDegree.replace(placeholder, education.degree) +
                HTMLschoolDates.replace(placeholder, education.dates) +
                HTMLschoolLocation.replace(placeholder, education.location) +
                HTMLschoolMajor.replace(placeholder, education.majors)
            );
            $("#education").append(newEntry);
        });


        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach((education) => {
            newEntry = $(HTMLschoolStart).html(
                HTMLonlineTitle.replace("#", education.url).replace("%data%", education.title) +
                HTMLonlineSchool.replace(placeholder, education.school) +
                HTMLonlineDates.replace(placeholder, education.dates) +
                HTMLonlineURL.replace("#", education.url).replace(placeholder, education.url)
            );
            $("#education").append(newEntry);
        });
    }
};

bio.display();
education.display();
work.display();
projects.display();



// mapDiv
$("#mapDiv").append(googleMap);

// lets-connect