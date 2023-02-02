export class BasePage {

    /**
     * set a delay
     * @param value - value of time to wait
     */
    setDelay(value: number = 2000) {
        cy.wait(value);
    }

    /**
     * get element and click on it
     * @param selector - WebElement
     */

    getElementAndClick(selector: any) {
        return cy.get(selector).click({force:true})
    }


    /**
     * tap on element but before that check certain text exist
     * @param selector - selector where we have text
     * @param text - string to match
     * @param indexNumber
     */

    verifyTextThenClick(selector: any, text: string, indexNumber: number) {
        cy.get(selector)
            .eq(indexNumber)
            .should("have.text", text)
            .click({ force: true });
    }
}