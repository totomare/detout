Feature: Table column order
Check all columns 

  Scenario: Check all columns
    When I open the page Table column order 
    Then confirm that the column headings are exactly what we expect 
        | HEADER        | ICON                      |
        | Nom           |                           |
        | Users         |                           |
        | Items         | glyphicon glyphicon-cloud |
        | Dates         |                           |
        | Duration      |                           |
        | Projects      |                           |