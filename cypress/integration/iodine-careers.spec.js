describe("Iodine Software Test", function () {
  before(function () {
    cy.fixture("applicants").then(function (applicant) {
      this.applicant = applicant;
    });
  });
  it("Job Application Test", function () {
    // visit iodine software website
    cy.visit("https://iodinesoftware.com/");
    // navigate to careers page
    cy.get(".header-nav-cont").within(() => {
      cy.contains("Company").click();
      cy.contains("Careers").click();
    });
    // open SDET Job
    cy.contains("Software Development Engineer in Test")
      .scrollIntoView()
      .click();
    const title = "Software Development Engineer in Test";
    assertJobTitle(title);
    // apply for job
    cy.get("button")
      .should("be.visible")
      .contains("Apply for This Job")
      .click({ force: true });
    // fill in application details
    fillPersonalInfo(this.applicant);
    fillProfessionalInfo(this.applicant);
    fillAdditionalInfo(this.applicant);
    // cancel application
    cy.get('[data-action="SiteFooterAction\\:cancel"]').click();
    // assert Job title
    assertJobTitle(title);
  });
});

function assertJobTitle(title) {
  cy.get("h2").should("have.text", title);
}

function fillPersonalInfo({
  firstName,
  lastName,
  email,
  phone,
  streetAddress,
  city,
  state,
  zip,
}) {
  cy.get("#firstName").type(firstName);
  cy.get("#lastName").type(lastName);
  cy.get("#email").type(email);
  cy.get("#phone").type(phone);
  cy.get("#streetAddress").type(streetAddress);
  cy.get("#city").type(city);
  cy.get("[for='state']")
    .next()
    .within(() => {
      cy.get(".fab-SelectToggle__toggleButton").click();
    });
  cy.get("[data-helium-id='fab-menu1']").within(() => {
    cy.contains(state).scrollIntoView().click();
  });
  cy.get("#zip").type(zip);
}

function fillProfessionalInfo({
  resumeFile,
  dateAvailable,
  desiredPay,
  websiteUrl,
  linkedinUrl,
  educationLevel,
}) {
  cy.get('input[type="file"]').attachFile(resumeFile);
  cy.get("[name='dateAvailable__cpFacade']").type(dateAvailable);
  cy.get("#desiredPay").type(desiredPay);
  cy.get("#websiteUrl").type(websiteUrl);
  cy.get("#linkedinUrl").type(linkedinUrl);
  cy.get("[for='educationLevelId']")
    .next()
    .within(() => {
      cy.get(".fab-SelectToggle__toggleButton").click();
    });
  cy.get("[data-menu-id='fab-menu3']").within(() => {
    cy.contains(educationLevel).scrollIntoView().click();
  });
}

function fillAdditionalInfo({
  referredBy,
  legallyAuthorized,
  requireSponsorship,
  gpa,
  howDidYouHear,
}) {
  cy.get("#referredBy").type(referredBy);
  cy.get("#customQuestions\\[271\\]").type(legallyAuthorized);
  cy.get("#customQuestions\\[272\\]").type(requireSponsorship);
  cy.get("#customQuestions\\[273\\]").type(gpa);
  cy.get("#customQuestions\\[274\\]").type(howDidYouHear);
}
