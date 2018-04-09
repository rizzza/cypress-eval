const config = require("../../lib/envConfig");

describe("My First Test", function() {
  // beforeEach(function() {
  //   cy
  //     .request("POST", "https://api.testing.sendgrid.com/v3/public/tokens", {
  //       username: "nlvx_automated_test_user_paid_26",
  //       password: "T3stPasS"
  //     })
  //     .then(response => {
  //       expect(response.status).to.eq(200);
  //     });
  //   // debugger;
  // });
  it("Does not do much!", function() {
    expect(true).to.equal(true);
  });

  it("Does more than you know!", function() {
    expect(true).to.equal(false);
  });

  it("logs into sendgrid and navigates to marketing campaigns", function() {
    cy
      .request("POST", "https://api.testing.sendgrid.com/v3/public/tokens", {
        username: "nlvx_automated_test_user_paid_26",
        password: "T3stPasS"
      })
      .then(response => {
        expect(response.status).to.eq(200);
        cy.log(response.body["token"]);
        cy.setCookie("mako_auth_token", response.body["token"]);
      });

    // cy.visit(config.url + "/marketing_campaigns");
    cy.visit("https://testing.sendgrid.com/marketing_campaigns");
    // debugger;
    // cy.pause();

    // Get an input, type into it and verify that the value has been updated
    // username
    // cy
    //   .get("#usernameContainer-input-id")
    //   .type("nlvx_automated_test_user_paid_26")
    //   .should("have.value", "nlvx_automated_test_user_paid_26");

    //   // password
    // cy.get("#passwordContainer-input-id").type("T3stPasS");

    //   // login button clicked
    // cy.get("[data-role=login-btn]").click();

    //   // open nav dropdown
    //   cy.get("[data-nav-title=marketing]").click();

    //   // click on Marketing campaigns link
    //   cy.contains("Marketing Campaigns").click();

    //   // assert url
    //   cy.url().should("include", "/marketing_campaigns/ui/welcome");
  });
});
