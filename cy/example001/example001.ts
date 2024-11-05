/*
https://medium.com/@sasindran.anusha/cucumber-with-cypress-for-behavior-driven-development-bdd-part-2-44d94e94e158

Feature: Login Page 

  Scenario: Validate valid & invalid login credentials with Datatable
    Given I navigate to the login page
    When I login using the following credentials :
      | username   | password      | expectedAlertText     |
      | test       | test123       | validation succeeded  |
      | invalid    | invalid123    | validation failed     |
      | new        | pass12345     | validation failed     |

When('I login using the following credentials :', (dataTable) => {
  const credentials = dataTable.hashes();
  console.log("Printing data table with hashes method:", credentials); // Printing the dataTable output as object with keyvalue pair
  cy.log("hashes method: ", credentials)

  const rows = dataTable.rows();
  console.log("Printing data table with rows method :", rows); // Printing the dataTable output as array without headers
  cy.log("rows method: ", rows)
  
  const raw = dataTable.raw();
  console.log(raw); // Printing the dataTable output as array with headers
  cy.log("Printing data table with raw method :", raw)
})
*/ 

const hashesMethod = [
    {username: 'test', password: 'test123', expectedAlertText: 'validation succeeded'},
    {username: 'invalid', password: 'invalid123', expectedAlertText: 'validation failed'},
    {username: 'new', password: 'pass12345', expectedAlertText: 'validation failed'}
]

let first = hashesMethod[0];

console.log(' username=', first.username, ' or username=', first['username'])
// [LOG]: " username=",  "test",  " or username=",  "test" 

const rowsMethod = [
    ['test', 'test123', 'validation succeeded'],
    ['invalid', 'invalid123', 'validation failed'],
    ['new', 'pass12345', 'validation failed']
]

let second = rowsMethod[0];
console.log(' username=', second[0])
// [LOG]: " username=",  "test"