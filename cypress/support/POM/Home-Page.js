class HomePage
{


getAppBuilderButtons()
{
    return cy.get('.btn-toolbar')
}

getAppBuilderShare()
{
    return cy.get('.btn-group')

}
getGender()
{
  return  cy.get('select')
}

getEntrepreneaur()
{
   return cy.get('#inlineRadio3')
}
getShopTab()
{
    return cy.get(':nth-child(2) > .nav-link')
}

getNameAccount()
{
    return cy.get('#name')

}

getDropDownApp()
{
    return cy.get('#select2-chosen-1')

}

getFilterAccountButton()
{
    return cy.get("input[data-disable-with='Filter']")

}

getAllAppsOnScreen()
{
    return cy.get('.col-sm-4')
}

getResultSearchApp()
{
    return cy.get('.media-heading')
}

getTestVersionHeader()
{
    return cy.get('#test-versions')
}

getDownloadVersion()
{
    return cy.get('button[class="btn btn-default dropdown-toggle"]')

}

getDownloadDropDown()
{
    return cy.get('ul[class="dropdown-menu dropdown-menu-right"]')

}

getInfoButton()
{
    return cy.get('#dropdownActions')


}

getBuildVersionButton()
{
    return cy.get('a[class="btn btn-success build-version"]')

}

getBuildVersionCancelButton()
{
    return cy.get('button[class="btn btn-default"]')


}

getDownloadQR()
{
    return cy.get('svg[version="1.1"]')


}


}

export default HomePage;
