### Meet APP ###
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
#### Key Features ####
1. Filter events by city
- **User story**: As a user I should be able to “filter events by city”, so that I can see the list of events that take place in that city.
- **Scenarios**: 
1. When user hasn’t searched for a city, show upcoming events from all cities.
```
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
```

2. User should see a list of suggestions when they search for a city.
3. User can select a city from the suggested list.


2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. View a chart showing the number of upcoming events by city.
6. Add an app shortcut to the home screen.
###### User stories and scenarios ######
1. Filter events by city.
> As a user I should be able to “filter events by city”, so that I can see the list of events that take place in that city
```
**SCENARIO 1**: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

```
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. View a chart showing the number of upcoming events by city.
6. Add an app shortcut to the home screen.