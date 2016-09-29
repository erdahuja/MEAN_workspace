//way1

function add(x, y) {

    return x + y;
}

function subtract(x, y) { //won't be included because it is not exported.

    return x - y;
}
//include key(name) and value(fn)

module.exports.add = add;

module.exports.sub = subtract;

//way2 
//create object

var obj = {
    add: function (x, y) {

        return x + y;
    },

    subtract: function (x, y) { //won't be included because it is not exported.

        return x - y;
    }


};

module.exports = obj;
