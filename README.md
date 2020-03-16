# Web Tests Infrastructure for Zapp platfrom #



#### Installation: ####
First you will need to install Node.js by download from here:
https://nodejs.org/en/download/

`git clone https://github.com/Doringber/ZappWeb.git`<br>
* Plase install Cypress `npm install cypress --save-dev`
* Plase install this version 3.4.2  `npm install -g cypress@3.4.2`


#### Example Test: ####
1. run on the cypress ci<br>
`cypress run --record --key dadd0520-0bc0-401f-9dfa-c2e94c982240 -s cypress/integration/ZappPlatform/zapp-platform.spec.js`

2. run with report<br>
`cypress run --reporter mochawesome  -s cypress/integration/ZappPlatform/zapp-platform.spec.js`    

3. run with xml report<br>
`cypress run --spec cypress/integration/ZappPlatform/zapp-platform.spec.js --reporter junit --reporter-options mochaFile=result.xml,toConsole=true`



#### Documentations: ####
__Cypress installtion:__ https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install<br>




