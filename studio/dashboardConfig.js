export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '6254f5e2d11dd77094178869',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-y3xtkb7s',
                  apiId: '4d511b9b-27b3-4921-aa02-f11e4689af94'
                },
                {
                  buildHookId: '6254f5e224b2936e200008d7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-871e9noo',
                  apiId: '9b58fcd5-6ddd-4e0b-8bb1-ba1a4ffcd25c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pablety/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-871e9noo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
