

;(function (global, $) { //semi colon, becaiuse if there is another file that doen't finish it's semicolon then still our code will run fine
    var Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);//creating a function constructor
        //returns a new objet greetr.init
    }

    //hidden within the scope of IIFE, not directly accessible
    var allowedLang = ['en', 'es'];

    var greetings = {
        en: "Hello",
        es: "Hola"
    };

    var formalGreet = {
        en: "Greetings",
        es: "Saludos"
    };

    var logMessage = {
        en: "Logged in",
        es: "Inicio Sesion"
    };


    Greetr.prototype = {
        //Adding methods to greetr by using prototype // so basically this is the use of prototype
        //that we can add properties later
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if(allowedLang.indexOf(this.language) === -1){
                throw "Invalid Language";
            }
        },

        greeting: function () {
            //var msg1 = greetings[this.language] + " " + this.firstname;
            return greetings[this.language] + " " + this.firstname;
            //basically its like greeting.language, like do the greeting with the selected language
            //if(console)
                //console.log(msg1);
        },

        formalgreeting: function () {
            return formalGreet[this.language] + ", " + this.fullname();
        },

        greet: function (formal) {
            var msg;
            //if undefined or null it will coerced to false
            if(formal){ //it means if formal is true  . i.e; if user pass (true):that is yes it is formal
                //then it will return formal greeting
                msg = this.formalgreeting();
            }
            else {
                msg = this.greeting();
            }

            if(console){
                console.log(msg);
            }

            return this;  //this refers to the calling object at the execution time
            //makes the method chainable
        },

        log: function () {
            if(console){
                console.log(logMessage[this.language] + ": " + this.fullname());
            }
            return this;//return this makes the method chainable
        },

        setLang : function (lang) { //for setting laguage on the fly
            //first we check the laguage passed and then validate it
            this.language = lang;
            this.validate();
            return this;
        },

        HtmlGreeting: function (selector, formal ) {
        	if(!$){
        		throw "jQuery is not there";
        	}

        	if(!selector){
        		throw "No selector";
        	}

            var msg;
            if(formal){
                msg = this.formalgreeting();
            }

            else {
                msg = this.greeting();
            }
            $(selector).html(msg); //updates value
            return this;
        }

    };//Here i will put methods that i want to use for greetr
    //Anything created inside greetr.prototype will have acees to inside greetr.init function
    Greetr.init = function (firstname, lastname, language) { //actual function defintion
        //.init returns a object or you can say initialises a object.

        var self = this;

        self.firstname = firstname || ' ';
        self.lastname = lastname || ' ';
        self.language = language || 'en';

        self.validate(); //shoild validate here also so the user don't enter other than en or es
    } //means this method that i have created will go into greetr.prototype

    Greetr.init.prototype = Greetr.prototype;//this is the trick borrowed from jQuery//we will add method to greetr.init so that other
    //members can access them in future(basically inheritance)thats why using prototype
    //Objext created with the fn greetr.init will point at prototype
    //By object.prototype we can create new properties

    //attacheed our greetr to the global object and provide a shorthand $G for ease of typing
    global.Greetr = global.G$ = Greetr;//exposed to global object,
    //these two names will point to the function value

}(window, jQuery));
