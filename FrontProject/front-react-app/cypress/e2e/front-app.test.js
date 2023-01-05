describe("Test Evax Project",()=>{
   /* it("first test",()=>{
            expect(true).to.equal(true)
    })*/
    it.only("succeffully loads",()=>{
        cy.visit("http://localhost:3000/vaccins")
        cy.get('.ant-btn-primary').click()
        cy.get('#nomVaccin').type("TestVaccin")
        cy.get('#quantitéVaccin').type("2000")
        cy.get('[type="submit"]').click()
        cy.wait(2000)
       // cy.get('[href="/inscriptionDansPharmacie#pharma"] > .ant-btn').click()
       // cy.get(':nth-child(1) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').select("Tunis")
        //cy.get(':nth-child(1) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').select("Le Bardo")
    })
    it("Successfully loads !",()=>{
        //cy.visit('http://localhost:3000')
          cy.visit('/')
    })

})
   