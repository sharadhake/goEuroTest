Purpose of Application :
        To show list of git hub repositories based on entered user information.
Directory structure
 --app  //core of the application resides under this directory
   |__core // widgets and core functionality files can go here.
      |__goEuroAPIServices.js  //common APIs and utilities at one place

   |__style // Styles of the application
      |__bootstrap.min.css //bootstrap is used so in future we can create RWD.
      |__style.css  //customize styling for application
   |
   |__templates //Templates of the application
      |__repositoryList.html //Template to show list of repositories.

   |__ui  // ui related inter activities and implementation can go here.
      |__repositoryListController.js //view based functionality and interaction to get list of repositories to show.

   |__App.js  //Entry point where angular application has been bootstrapped, routes and modules has been loaded.
 --vendor  //all framework like angular related libraries goes under this directory.
 --appProperties.js  //All the constants and server configurtion has to be define in this file.
 --index.html  //First file to be called when application is loaded. Also view is defined where all logical view parts will be loaded based on route defined.

Above directory structure has been used because: In future I can use new configuration for frontend like(bower, grunt).

Application has ability to show list of repositories for the user information entered.

Controller and API modules has been created to keep code clean and easy to understand. Each modules has it own defination and purpose.

To run application you can deploy it to any server like Tomcate or XAMP Apache server.

Points considered but not able to implemented during development because of time crunch.

1. Use of frontend configurations with the help bower, grunt task runner.
2. Use of BDD or TDD with the help of jasmine and karma.
3. Use of webpack server configuration.
4. Not able make full use of RWD.
