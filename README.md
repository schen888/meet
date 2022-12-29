## Meet APP ##
A serverless, progressive web application (PWA) with React built by using test-driven development (TDD) technique. The documentation (acceptance test) of the app was built by applying the behavior-driven development (BDD) technique. The application uses OAuth 2.0 to access and use the Google Calendar API to fetch upcoming events.
### Link to the App: ###
https://schen888.github.io/meet/
### Key Features ###
#### 1. Filter events by city ####
- **User story**: As a user I should be able to “filter events by city”, so that I can see the list of events that take place in that city.
- **Scenarios**: 
1. When user hasn’t searched for a city, show upcoming events from all cities.
```
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
```
2. User should see a list of suggestions when they search for a city.
```
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed
```
3. User can select a city from the suggested list.
```
Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city
```
#### 2. Show/hide event details ####
- **User story**: As a user I should be able to “show and hide event details”, so that I can see the detailed information about an event which I'm interested in and hide it after finish reading.
- **Scenarios**: 
1. An event element is collapsed by default.
```
Given the list of events was open
When the user scrolls through the list
Then the details of events should be hidden
```
2. User can expand an event to see its details
```
Given the list of events was open 
When the user click on one event (or show button)
Then detailed info of that event should be shown to the user
```
3. User can collapse an event to hide its details.
```
Given the detailed info has been shown to the user
When the user click on the hide button
Then the detailed info of that even should be hidden
```
#### 3. Specify number of events. ####
- **User story**: As a user I should be able to specify number of events showing in the list, so that I can decide how many events I can see in the list at once.
- **Scenarios**: 
1. When user hasn’t specified a number, 32 is the default number.
```
Given the user did not specify a number
When the event list opens
Then 32 events max. will be shown in the list in one page
```
2. User can change the number of events they want to see
```
Given the user specified the number
When event list opens
Then the specified number of events max. will be shown in the list in one page
```
#### 4. Use the app when offline. ####
- **User story**: As a user I should be able to use the app when offline, so that I can see the events I viewed the last time I was online.
- **Scenarios**: 
1. Show cached data when there’s no internet connection.
```
Given the user has no internet
When the user opens the app
Then the cached data should be shown
```
2. Show error when user changes the settings (city, time range)
```
Given the uer has no internet 
When the user changes the setting
Then an error message should be shown, informing the user internet is required
```
#### 5. Add an app shortcut to the home screen ####
- **User story**: As a user I should be able to add a shortcut of the app to my home screen, so that I can have a faster access to the app everytime I want to use it.
#### 6. View a chart showing the number of upcoming events by city. ####
- **User story**: As a user I should be able to view a chart showing the number of upcoming events by city, so that I can have a better overview of how many events in which city.
- **Scenarios**: 
1. Show a chart with the number of upcoming events in each city.
```
Given the user hasn't searched a specific city
When the user opens the app
Then a chart with an overview, indicating the number of upcoming events by city will be shown.
```

### App Showcase
1. Welcome-page of Meet App
<img alt="A screenshot of the welcome-page of Meet App" src="/img/Screenshot1.png" width="100%">

2. Meet App after sign in with google account
<img alt="A screenshot of the Meet App after sign in with google account" src="/img/Screenshot2.png" width="100%">

3. Giving 'Berlin' in the search field
<img alt="A screenshot after giving 'Berlin' in the search field." src="/img/Screenshot3.png" width="100%">

4. PWA feature
<img alt="A screenshot when the app is offline." src="/img/Screenshot4.png" width="100%">