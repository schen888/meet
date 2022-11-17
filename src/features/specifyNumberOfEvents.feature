Feature: Specify number of events.

Scenario: When user hasn't specified a number, 32 is the default number.
  Given the user did not specify a number
  When the event list opens
  Then Maximun 32 events will be shown in the list in one page

Scenario: User can change the number of events they want to see
  Given the user specified the number
  When event list opens
  Then the specified number of events max. will be shown in the list in one page