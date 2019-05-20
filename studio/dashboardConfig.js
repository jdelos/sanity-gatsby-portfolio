export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce2d0bd8d75b2017ffc1540',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5nfz28ej',
                  apiId: '97c8d22b-6d46-4732-b52c-45b42a863e47'
                },
                {
                  buildHookId: '5ce2d0bd7abde901797aa922',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cfrcsauc',
                  apiId: '285a24a9-53ec-4aa2-b868-fee65a8ffecf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdelos/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-cfrcsauc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
