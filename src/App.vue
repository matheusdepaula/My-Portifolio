<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Matheus de Paula</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/profile.jpg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experiência</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Educação</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interesses</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li> -->
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <div class="subheading mb-0">{{ welcome }}</div>
          <h1 class="mb-0">{{ name }}
            <span class="text-primary">{{ surname }}</span>
          </h1>
          <div class="subheading mb-4"> {{ technologies }} </div>
          <div class="subheading mb-5">{{ info }}
            <a href="mailto:matheusdepaula.bsb@gmail.com">{{ email }}</a>
          </div>
          <p class="lead mb-5">{{ aboutMe }}</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/matheus.psousadf">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://twitter.com/matheus_psousa">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/matheus-depaula/">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/matheusdepaula">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experiência</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.description">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Educação</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="educationInfo in education" :key="educationInfo.description">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ educationInfo.institute }}</h3>
              <div class="subheading mb-3">{{ educationInfo.degree }}</div>
              <div>{{ educationInfo.knowledge }}</div>
              <p>{{ educationInfo.aditionalInfo }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ educationInfo.startDate }} - {{ educationInfo.endDate }}</span>
            </div>
          </div>

        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Linguagens de Programação &amp; Ferramentas</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicons devicons-android"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-apple"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-git"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-github"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-nodejs"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-javascript"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-npm"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-swift"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-react"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-visualstudio"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-intellij"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-trello"></i>
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0" v-for="item in workflow" :key="item.description">
            <li>
              <i class="fa-li fa fa-check"></i>
              {{ item.technology }}</li>
          </ul>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interesses</h2>
            <div class="resume-item d-flex flex-column flex-md-row mb-3" v-for="item in interests" :key="item.description">
              <p>{{ item.detail }}</p>
            </div>
        </div>
      </section>

      <hr class="m-0">

      <!-- <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005</li>
          </ul>
        </div>
      </section> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'My portfolio',
      welcome: 'Olá, Eu sou o',
      name: 'MATHEUS',
      surname: 'DE PAULA',
      technologies: 'iOS - Android - React Native',
      info: 'Brasília/DF · (61) 98222-5211 ·',
      email: 'matheusdepaula.bsb@gmail.com',
      aboutMe: 'Formado em Sistemas de Informação na Universidade Católica de Brasília e Pós graduando em Dispositivos Móveis pelo IESB (Instituto de Educação Superior de Brasília). Possuo ampla experiência como desenvolvedor Mobile, utilizando principalmente as linguagens Objective-C e Swift para desenvolvimento nativo iOS, Kotlin e Java para desenvolvimento Android e JavaScript para desenvolvimento híbrido, em ambas plataformas. Busco sempre me aperfeiçoar e posso, com certeza, dizer que tecnologia é minha paixão!',
      experience: [
        {
          position: 'Desenvolvedor Mobile',
          company: 'Stefanini Solutions',
          description: 'Desenvolvimento Mobile, utilizando, predominantemente, as linguagens Objective-C, Java Script (React Native) e Java (Android). Atuação em projetos do Banco do Brasil, trabalhando diariamente junto ao cliente citado.',
          startDate: 'Maio de 2017',
          endDate: 'Atual'
        },
        {
          position: 'Desenvolvedor iOS',
          company: 'Cast Group',
          description: 'Atuação no projeto Ourocard, gerenciador de cartões do Banco do Brasil, trabalhando na plataforma iOS, utilizando a linguagens nativas, Objective-C e Swift.',
          startDate: 'Abril de 2017',
          endDate: 'Maio de 2018'
        },
        {
          position: 'Desenvolvedor iOS',
          company: 'Apple Academy',
          description: 'Desenvolvimento de aplicações iOS utilizando as linguagens Swift e Objective-C.',
          startDate: 'February 2016',
          endDate: 'April 2017'
        }
      ],
      education: [
        {
          institute: 'UNIVERSIDADE CATÓLICA DE BRASÍLIA - UCB',
          degree: 'BACHAREL EM SISTEMAS DE INFORMAÇÃO',
          knowledge: 'Tecnologia da Informação - Desenvolvedor Web, Java',
          aditionalInfo: '',
          startDate: 'Fevereiro de 2012',
          endDate: 'Dezembro de 2016'
        },
        {
          institute: 'INSTITUTO DE EDUCAÇÃO SUPERIOR DE BRASÍLIA - IESB',
          degree: 'PÓS GRADUAÇÃO EM DESENVOLVIMENTO MOBILE',
          knowledge: 'Desenvolvimento Mobile: Android, iOS, React-Native, AWS, Adobe Illustrator',
          aditionalInfo: '',
          startDate: 'Março de 2018',
          endDate: 'Dezembro de 2019'
        }
      ],
      workflow: [
        {
          technology: 'Agile Development'
        },
        {
          technology: 'Git'
        },
        {
          technology: 'JavaScript'
        },
        {
          technology: 'Swift'
        },
        {
          technology: 'Objective-C'
        },
        {
          technology: 'Kotlin'
        },
        {
          technology: 'Java'
        },
        {
          technology: 'Design Patterns'
        }
      ],
      interests: [
        {
          detail: 'Além da paixão pela tecnologia, também aproveito o meu tempo livre praticando esportes, estando perto da minha família e amigos e também aprendendo coisas novas.'
        },
        {
          detail: 'Eu invisto muito do meu tempo também aprendendo sobre novas tecnologias, tendências e inovações que estão acontecendo ao redor do mundo. Gosto muito de assistir Ted Talks e ler artigos em sites como o Medium.'
        },
        {
          detail: 'Sou também apaixonado por viagens e espero ter a oportunidade de viajar para vários países ao redor do mundo.'
        }
      ]
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
}
</script>

<style>
  body {
    font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    padding-top: 54px;
    color: #868e96;
  }

  @media (min-width: 992px) {
    body {
      padding-top: 0;
      padding-left: 17rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 700;
    text-transform: uppercase;
    color: #343a40;
  }

  h1 {
    font-size: 6rem;
    line-height: 5.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p.lead {
    font-size: 1.15rem;
    font-weight: 400;
  }

  .subheading {
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 1.5rem;
  }

  .social-icons a {
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: #495057;
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;
  }

  .social-icons a:last-child {
    margin-right: 0;
  }

  .social-icons a:hover {
    background-color: #BD5D38;
  }

  .dev-icons {
    font-size: 3rem;
  }

  .dev-icons .list-inline-item i:hover {
    color: #BD5D38;
  }

  #sideNav .navbar-nav .nav-item .nav-link {
    font-weight: 800;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  #sideNav .navbar-toggler:focus {
    outline-color: #d48a6e;
  }

  @media (min-width: 992px) {
    #sideNav {
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 17rem;
      height: 100vh;
    }
    #sideNav .navbar-brand {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin: auto auto 0;
      padding: 0.5rem;
    }
    #sideNav .navbar-brand .img-profile {
      max-width: 10rem;
      max-height: 10rem;
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }
    #sideNav .navbar-collapse {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-flex: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      width: 100%;
      margin-bottom: auto;
    }
    #sideNav .navbar-collapse .navbar-nav {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
    }
    #sideNav .navbar-collapse .navbar-nav .nav-item {
      display: block;
    }
    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
      display: block;
    }
  }

  section.resume-section {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    max-width: 75rem;
  }

  section.resume-section .resume-item .resume-date {
    min-width: none;
  }

  @media (min-width: 768px) {
    section.resume-section {
      min-height: 100vh;
    }
    section.resume-section .resume-item .resume-date {
      min-width: 18rem;
    }
  }

  @media (min-width: 992px) {
    section.resume-section {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  }

  .bg-primary {
    background-color: #BD5D38 !important;
  }

  .text-primary {
    color: #BD5D38 !important;
  }

  a {
    color: #BD5D38;
  }

  a:hover, a:focus, a:active {
    color: #824027;
  }
</style>
