describe('Головна сторінка Hillel Auto', () => {

  beforeEach(() => {
    
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
  });

  describe('Хідер (Header) - Перевірка елементів', () => {
    it('повинен містити логотип, навігацію та кнопки авторизації', () => {
      
      cy.get('header .header_logo').should('be.visible');

      
      const navLinks = ['Home', 'About', 'Contacts'];
      navLinks.forEach((linkText) => {
        cy.get('header').contains(linkText).should('be.visible');
      });

      
      cy.get('header').contains('Guest log in', { matchCase: false }).should('be.visible');
      cy.get('header').contains('Sign In', { matchCase: false }).should('be.visible');
    });
  });

      describe('Футер (Footer) - Перевірка елементів', () => {
    it('повинен містити контактні дані та соціальні мережі', () => {
      
      cy.contains('a', 'ithillel.ua').should('be.visible');

      
      cy.get('a[href^="mailto:"]').should('be.visible');
      
      
      cy.get('footer').should('be.visible');
    });
  });


});
