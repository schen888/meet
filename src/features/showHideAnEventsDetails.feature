Feature: Show/hide event details

Scenario: An event element is collapsed by default.
  Given the list of events was open
  When the user scrolls through the list
  Then the details of events should be hidden

Scenario: User can expand an event to see its details.
  Given the list of events was open 
  When the user click on one event (or show button)
  Then detailed info of that event should be shown to the user

Scenario: User can collapse an event to hide its details.
  Given the detailed info has been shown to the user
  When the user click on the hide button
  Then the detailed info of that even should be hidden