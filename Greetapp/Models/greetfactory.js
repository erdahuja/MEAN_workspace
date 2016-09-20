//1. factory
//2. service
module.factory("greetfactory", function () {

    //here we write logic 
    var obj = {
        initCap: function (name) {
            return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
        }
    };
    return obj;
});
