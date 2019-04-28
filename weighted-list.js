let entries = [];
let totalWeight = 0.0;

let pushAll = exports.pushAll = function (array) {

    if (!Array.isArray || array.length == 0) return false;

    array.forEach(element => {
        push(element[0], element[1]);
    });
};

let push = exports.push = function (object, weight) {

    if (object === null || isNaN(weight)) return false;

    totalWeight += weight;
    entries.push({
        object: object,
        totalWeight: totalWeight
    });
};

let getRandom = exports.getRandom = function () {

    if (entries.length == 0) return false;

    var r = Math.random() * totalWeight;
    return entries.find(
        function (entry) {
            return entry.totalWeight >= r;
        }
    ).object;
};

let pop = exports.pop = function () {

    if (entries.length == 0) return false;

    var r = Math.random() * totalWeight;
    var index = entries.findIndex(
        function (entry) {
            return entry.totalWeight >= r;
        }
    );
    var element = entries[index];
    entries.splice(index, 1);
    return element.object;
};

let popSome = exports.popSome = function (n) {

    if (entries.length == 0) return false;

    var r = Math.random() * totalWeight;
    var index = entries.findIndex(
        function (entry) {
            return entry.totalWeight >= r;
        }
    );

    var element = entries[index];
    if(entries[index].totalWeight - n > 0){
        entries[index].totalWeight = entries[index].totalWeight - n;
    }else{
        entries.splice(index, 1);
    }
    return element.object;
};