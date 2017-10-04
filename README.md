## House Keep Front End Challenge

A web app to retrive and return booking information from an API.

```
Requirements:
- The user can specify the duration of the cleaning job that they want to book in hours
- Availability data is requested via GET request to the `/availability/` endpoint defined in Apiary, (see above)
- The data returned describing available start times is displayed in a user-friendly interface. Consider a calendar-type view.
- The user can select an available start timeslot. Timeslots that are not possible are not selectable.
- When the user has selected a timeslot, this is indicated visually.
- The user can then confirm their booking. On confirmation, POST to the `/book/` endpoint defined in Apiary, submitting the relevant details of what has been selected.
- Parse the server's response and show what has been booked.
```

### Technology

Angular 1.5  
Bootstrap 4  
Karma/Jasmine  
Protractor  
http-server  

### Installation

Clone this repo.

`$ npm install`  
`$ npm start` to run local host on 8080.

### Testing

Requirements in addition to package dependencies: Java JDK

Ensure the server and webdriver are initialised:   
`$ npm start`  
`$ npm run webdriver-manager start`

To run e2e tests:  
`$ npm run protractor test/protractor.conf.js`

To run unit tests:  
`$ npm karma start test/karma.conf.js`

### Evaluation

Testing:

E2e is OK, but could be more extensive. eg testing to ensure unavailable times are not displayed.  
Unit testing is minimal.  I would extend by writing additional tests for the service.
TDD was hampered by focusing on learning the framework.

Logic:

Code kept very basic.  Perhaps would have been cleaner to delegate response handling to a factory class to create day / time objects, away from controller.  Would also like to look at ways to tidy the mark-up and refactor long 'ng' functions.

Front end:

Would extend with more interesting styling, rather than basic Bootstrap - drop-downs for the available times for example.  The app is not properly responsive so would look to implement this as well.   
