Feature: Test Application Functionality

  @tcid-1
  Scenario Outline: Verify button click in <type>
    When I go to the Cupertino menu
    And I go to Alerts sub menu
    And I click the button <type>
    And I click the alert option <choice>
    Then I verify the message <choice> clicked is shown

    Examples:
      | type              | choice    | 
      | Alert             | Discard   | 
      | Alert with Title  | Allow     | 

  @tcid-2
  Scenario Outline: Verify snackbar message after refresh
    When I go to the Material menu
    And I go to Pull to refresh sub menu
    And I pull to refresh the content
    Then I verify that the snackbar shows <message>

    Examples:
      | message           | 
      | Refresh complete  | 

  @tcid-3
  Scenario Outline: Fill and submit the text field
    When I go to the Material menu
    And I go to Text fields sub menu
    # need flutter debug .apk for wdio flutter driver
    # And I fill the text field with <name>, <phone>, <email>, <story>, <salary>, and <password>
    And I click submit
    Then I verify that the snackbar shows <message>

    Examples:
      | name      | phone       | email           | story | salary  | password  | message                                          | 
      | Naufal A  | 4567874444  | naufala@hey.com | Lorem | 1000000 | 12345678  | Please fix the errors in red before submitting.  | 
