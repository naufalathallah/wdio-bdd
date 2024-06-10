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

  # @tcid-2 @only
  # Scenario Outline: Verify snackbar message after refresh
  #   Given the app is open
  #   When I go to the "Material" menu
  #   And I go to "Pull to refresh"
  #   And I refresh the content
  #   Then I verify that the snackbar shows "Refresh complete"

  # @tcid-3
  # Scenario Outline: Fill and submit the text field
  #   Given the app is open
  #   When I go to the "Material" menu
  #   And I go to "Text field"
  #   And I fill the text field with "example text"
  #   And I click submit
  #   Then I verify the submission is successful
