export default defineAppConfig({
  alpine: {
    title: 'blog.spuntentertainment',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/spunt-light.svg', // path of the logo
        pathDark: '/spunt-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'spuntentertainment' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: 'https://www.github.com/HashbrownKazang/alpine-nuxt-studio',

        text: 'spuntentertainment'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 't33m_n0_5l33p',
      instagram: 'spuntentertainment',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      github: 'https://github.com/HashbrownKazang',
      facebook: 'spuntentertainment',
      youtube: '@spuntentertainment'
    },
    form: {
      successMessage: 'Message sent. Thanks'
    }
  }
})