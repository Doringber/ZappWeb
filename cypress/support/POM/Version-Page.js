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
    return cy.get('a[data-title="Build failed"]')


}

getBuildSucssed()
{
    return cy.get('i[class="fa fa-check-circle green"]')

}



}

export default VersionPage;
