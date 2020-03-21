class VersionPage
{

getTestVersionHeader()
{
    return cy.get('#test-versions')
}

getTestVersionTable()
{
    return cy.get('table[class="table table-hover table-striped middle-vertical-aligned"]')
}

getPlatfromIcon()
{
    return cy.get('.platform-icon')
}

getVersionID()
{
    return cy.get('a[data-title="Version ID"]')

}

getBuildFail()
{
    return cy.get('#test-versions > table > tbody > tr:nth-child(4) > td:nth-child(7) > a')


}

getBuildSucssed()
{
    return cy.get('i[class="fa fa-check-circle green"]')

}



}

export default VersionPage;
