let assert = require("assert");
let findItemsOver20 = require("../function-to-test/findItemsOver20");


describe('The findItemsOver20 function', function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    var itemList2 = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ] 
    
    //results look like this now.
    var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    ];

    it('all the products that have a quantity higher than 20', function(){
        assert.deepEqual(findItemsOver20(itemList), results);
    });

    it('all the products that have a quantity higher than 20', function(){
        assert.deepEqual(findItemsOver20(itemList2) ,results);
    });
});
