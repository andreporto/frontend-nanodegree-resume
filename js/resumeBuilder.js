var work = {
    jobs: [{
            employer: "SERPRO - Serviço Federal de Processamento de Dados",
            title: "Analista - Desenvolvedor",
            location: "Recife - PE",
            datesWorked: "desde 11/2001",
            description: "Realização de elicitação e análise de requisitos, implementação de software e realização de testes",
            url: "http://www.serpro.gov.br"
        },
        {
            employer: "Ministério da Saúde",
            title: "Agente Administrativo",
            location: "Maceió - AL",
            datesWorked: "1995 - 2001",
            description: "Trabalhos administrativos de atendimento ao público e a servidores, auxílio em serviços de informática e implantação de rede de comunicação",
            url: "http://www.funasa.gov.br"
        }
    ],
    display: function () {
        var newEntry;

        work.jobs.forEach((job) => {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append();
            newEntry = HTMLworkEmployer.replace("#", job.url);
            newEntry = newEntry.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
            $(".work-entry:last").append(newEntry);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.datesWorked));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
        });
    }
};

var projects = {
    projects: [{
            title: "Lista de Tarefas Pessoais",
            datesWorked: "2016",
            description: "Aplicativo para dispositivos mobile para auxiliar no controle de tarefas a fazer",
            images: [
                "https://lh3.googleusercontent.com/-uZTrSz39wYpmX4pWUhZ44Tct8DtgcUiloGLdeCYQvKJB9QFmU7xmqaRIwkATHTQsluM=h310",
                "https://lh3.googleusercontent.com/lepZpU0EnwGUUqxg0nJ8SXcfmjf2zKZZiQv-L35O06CPHt1zj35zB6-SicENDYVVxzw=h900",
                "https://lh3.googleusercontent.com/fPrEraG9xRuN4pSAza7Ye_zEsx1KQYSDnNoWSMsmB_7Dvc1U-WKlFFB2TNjEhsrGEH0=h900",
                "https://lh3.googleusercontent.com/BtGAxc1xInDpeKLtHtahZfOknNEV7TqFusxjpTLgcsCpUxgH6vWF6eRUEg8WE-HeGA=h900"
            ]
        },
        {
            title: "CheckList - Segurança Do Trabalho",
            datesWorked: "2016",
            description: "Este APP tem por objetivo estimular o ensino das Normas Regulamentadoras (NR's) brasileiras na área de segurança do trabalho, bem como estabelecer uma ferramenta de apoio na realização de inspeções de segurança do trabalho, prezando pelo princípio prevencionista.",
            images: [
                "https://lh3.googleusercontent.com/nSXeI6qoX85o-j1ZIXBpitrHkodcqOrUjrBT-YRgHo_cu4_lXO0hRAoHeYzo3mJTfDFk=h900",
                "https://lh3.googleusercontent.com/L7YDrhKuuX153QeKzck1at-o4kbCNASh_Ypnkx5AzX3WtTigZZk0mDQdQzX1yG7DSA=h900",
                "https://lh3.googleusercontent.com/bKTwgrgZfQPw7I9p5YFVdA3CqRvos2sM96gEuhdG9w2WTAS50I1sfe8EzXIoiS2z0ibK=h900",
                "https://lh3.googleusercontent.com/2xPCQjudHkKqpkoboUmlM7bRAgi8-wXPz7lIccxYm6J1XwtLHCuQ0JuKFlNEib39M7U=h900",
                "https://lh3.googleusercontent.com/6pAN3L6pRHWv3SDJAvSun9pwLycOLQ4xjWEdxm6zKIv1TusKbN6tsAMvXc4nOmsqQm1I=h900"
            ]
        }
    ],
    display: function () {
        var newEntry;
        projects.projects.forEach((project) => {
            newEntry = $(HTMLprojectStart).html(
                HTMLprojectTitle.replace("#", project.title).replace("%data%", project.title) +
                HTMLprojectDates.replace("%data%", project.datesWorked) +
                HTMLprojectDescription.replace("%data%", project.description)
            );
            project.images.forEach((img) => {
                newEntry.append(HTMLprojectImage.replace("%data%", img));
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
        var headerInfo = HTMLheaderName.replace("%data%", bio.name) +
            HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(headerInfo);

        var contactInfo = HTMLmobile.replace("%data%", bio.contacts.whatsapp) +
            HTMLemail.replace("%data%", bio.contacts.email) +
            HTMLgithub.replace("%data%", bio.contacts.github) +
            HTMLlocation.replace("%data%", bio.contacts.location)
        $("#topContacts").append(contactInfo);
    }

}

var education = {
    schools: [{
        name: "UFAL - Universidade Federal de Alagoas",
        location: "Maceió - AL",
        degree: "Ciência da Computação",
        dates: "1992-2000",
        major: "BSc",
        url: "http://ufal.br"
    }],
    onlineCourses: [{
        title: "Front-end Web Developer",
        school: "Udacity",
        dates: "2017",
        url: "http://udacity.com"
    }],
    display: function () {
        var newEntry;
        education.schools.forEach((education) => {
            newEntry = $(HTMLschoolStart).html(
                HTMLschoolName.replace("#", education.url).replace("%data%", education.name) +
                HTMLschoolDegree.replace("%data%", education.degree) +
                HTMLschoolDates.replace("%data%", education.dates) +
                HTMLschoolLocation.replace("%data%", education.location) +
                HTMLschoolMajor.replace("%data%", education.major)
            );
            $("#education").append(newEntry);
        });


        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach((education) => {
            newEntry = $(HTMLschoolStart).html(
                HTMLonlineTitle.replace("#", education.url).replace("%data%", education.title) +
                HTMLonlineSchool.replace("%data%", education.school) +
                HTMLonlineDates.replace("%data%", education.dates) +
                HTMLonlineURL.replace("#", education.url).replace("%data%", education.url)
            );
            $("#education").append(newEntry);
        });
    }
}

bio.display();
education.display();
work.display();
projects.display();



// mapDiv
$("#mapDiv").append(googleMap);

// lets-connect