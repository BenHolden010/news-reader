describe('template spec', () => {
  beforeEach('',()=>{
    cy.intercept('GET','https://newsapi.org/v2/top-headlines?country=us&apiKey=43781a23cadb44cc8823fc4f18059a23',{
      statuscode: 201,
      fixture: 'topArticles'
    }).as('top')
    cy.intercept('GET','https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=43781a23cadb44cc8823fc4f18059a23',{
      statuscode: 201,
      fixture: 'teslaArticles'
    }).as('tesla')
    cy.visit('http://localhost:3000/').wait('@top')
  })
  it('should visit home page and see all the top new headlines', () => {
    cy.get('header').contains('h1','News Reader')
    .get('input').should('be.visible')
    .get('button').contains('','Search News Articles').should('be.visible')
    .get('.articles-container').should('be.visible')
    .get('.list-img').should('be.visible')
    .get('.articles-container').children().should('have.length', 20)
    .get('.articles-container').children().first().contains('p','Minnesota justices appear skeptical that states should decide').should('be.visible')
    .get('.articles-container').children().first().contains('p','2023-11-02T16:28:00Z').should('be.visible')
    .get('.articles-container').children().first().contains('p','Minnesota Supreme Court justices appear skeptical states have the authority to block ex-President Donald Trump from the 2024 ballot. Some of the justices suggested Thursday Congress is best positioned to decide whether Trump').should('be.visible')
    .get('.articles-container').children().last().contains('p','Russia: Israel Occupying State, New IDF Estimate On Hamas Attack, Netanyahu Political Days Numbered? - CRUX').should('be.visible')
    .get('.articles-container').children().last().contains('p','2023-11-02T11:29:21Z').should('be.visible')
    
  })
  it('should be able to search and see the tesla headlines and click on the first one', () => {
    cy.get('header').contains('h1','News Reader')
    .get('input').type('tesla')
    .get('button').contains('','Search News Articles').click().wait('@tesla')
    .get('.articles-container').should('be.visible')
    .get('.list-img').should('be.visible')
    .get('.articles-container').children().should('have.length', 100)
    .get('.articles-container').children().first().contains('p','A guide to the California Festival in San Diego').should('be.visible')
    .get('.articles-container').children().first().contains('p','2023-11-02T16:51:09Z').should('be.visible')
    .get('.articles-container').children().first().contains('p','The California Festival takes place Nov. 3-19 across the state, with dozens of distinct performances throughout San Diego spotlighting new musical compositions written in the last five years.').should('be.visible')
    .get('.articles-container').children().last().contains('p','Ericsson Nikola Tesla d d : Notification of disposal of own shares').should('be.visible')
    .get('.articles-container').children().last().contains('p','2023-11-02T12:35:03Z').should('be.visible')
    .get('.articles-container').children().last().contains('p','(marketscreener.com) On Oct 24, 2023 and Oct 26, 2023, Ericsson Nikola Tesla d.d. with headquarter in Zagreb, Krapinska 45, has disposed a total of 25 own shares, which makes 0.002% of the Company').should('be.visible')
    .get('.articles-container').children().first().click()
    .get('.article-view').contains('h2','A guide to the California Festival in San Diego')
    .get('.article-view').contains('p','Julia Dixon Evans')
    .get('.view-img').should('be.visible')
    .get('.article-view').contains('p','Jump to the San Diego concert listings. A state-wide festival of new music kicks off this week, and the numbers are impressive: 100 performing arts organizations, 140 composers and 180 new compositi… [+8381 chars]')
    .get('.article-view').contains('p','Click Here to View More...')
    .get('.article-view').contains('p','KPBS')
  })
})