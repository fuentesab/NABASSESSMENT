nabOne Hamburger Project
========================

This evaluation activity for prospective nabOne developers requires you to develop and test a responsive web application
in typescript using AngularJS, Bootstrap and a nodejs based front-end development tool set.

Please see the accompanying word document for the full list of requirements.


Before you start
----------------

We recommend you develop your app using WebStorm which you can download here:
https://www.jetbrains.com/webstorm/download/

Ensure you have the following software installed before you start:

 - Node.js
 
 
     http://nodejs.org/download
     
   
 - grunt-cli
 
 
     npm install -g grunt-cli
     

Once you have installed the software, copy this seed project to a folder, navigate to that folder in your preferred
command line tool and run:

    npm install
  
  
Developing
----------

Develop your application inside the src/app folder and unit tests inside the src/test/unit folder. 

A build tasks has already been configured using grunt. To build your app, run the following from the command line:

    grunt build
    
Your app will be built inside the build/app folder and tests inside the build/test folder. Open build/app/index.html to
view your compiled app.


Web server
----------

Your app will run best if served from a web server so if you don't have one installed locally or your IDE does not
include one, there is one pre-configured in this project. To use it, run the following from the command line:

    grunt connect:start

then navigate to http://localhost:8082/build/app/index.html in your browser


Unit Testing
------------

Write your jasmine test specs inside src/test/unit. Tests are pre-configured to run using Karma and you can build and
unit test the app by running the following from the command line:

    grunt unit-test
    
You can also run tests using a karma plugin in WebStorm or your preferred IDE. Ensure you reference the karma config
from the build folder, not the src folder.

    build/test/karma.conf.js
    
After testing, line coverage can be inspected by viewing:

    build/test/results/coverage/html/index.html
    
    
End to End Testing
------------------

Write your jasmine test specs inside src/test/e2e. Tests are pre-configured to run using protractor and you can build
and e2e test the app by running the following from the command line:

    grunt e2e-test
    
You can also run or debug your tests by creating a NodeJS/Protractor run configuration in WebStorm.
Simply go to Run > Edit Configurations and create a new NodeJS configuration with the following parameters:
 
  - Javascript file: node_modules\protractor\lib\cli.js
  - Application parameters: build\test\protractor-conf.js

Before running your tests using the WebStorm run configuration, ensure you start the testing server as follows:

    grunt connect:start
    
You will need to stop the testing server using the Ctrl+C command in the terminal window before running the tests again
via the grunt e2e-test task.