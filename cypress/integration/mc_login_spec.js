const config = require('../../lib/envConfig');

describe("My First Test", () => {
  let token;

  before(function(){
    cy.request(
        "POST",
        "https://api.testing.sendgrid.com/v3/public/tokens",
        {
          username: "nlvx_automated_test_user_paid_26",
          password: "T3stPasS"
        }
      )
      .then(response => {
        debugger;
        cy.log(response.body.token);
        expect(response.status).to.eq(200);
        token = response.body.token;
      });
  });
  // it("Does not do much!", () => {
  //   expect(true).to.equal(true);
  // });

  // it("Does more than you know!", () => {
  //   expect(true).to.equal(false);
  // });

  it("logs into sendgrid and navigates to marketing campaigns",  () => {
    cy.visit(config.url)

    // // Get an input, type into it and verify that the value has been updated
    // // username
    // cy.get('#usernameContainer-input-id')
    //   .type('nlvx_automated_test_user_paid_26')
    //   .should('have.value', 'nlvx_automated_test_user_paid_26')

    // // password
    // cy.get('#passwordContainer-input-id')
    //   .type('T3stPasS')

    // // login button clicked
    // cy.get("[data-role=login-btn]").click()

    cy.log("I don't work with logging/debugging"); // in cli

    // open nav dropdown
    cy.get('[data-nav-title=marketing]').click();
    cy.debug();

    // click on Marketing campaigns link
    cy.contains('Marketing Campaigns').click();

    // assert url
    cy.url().should('include', '/marketing_campaigns/ui/welcome')
  });
});
