(function(){
'use strict'
//define app
//-------------------------------------
let dmApp = angular.module('dmApp',[
    //app dependencies
]);

//define controller
//-------------------------------------
dmApp.controller('LunchCheckCtrl',[
    //dependencies
    '$scope',
    //main controller function 
    lunchCheckCtrl
]);
function lunchCheckCtrl(scope){
    //items holder
    scope.itemsList="";
    //default message
    scope.checkMsg="Please enter your items separated by comma (,)";
    //default class
    scope.msgClass="front-green";
    //check function 
    scope.checkItemsList=function(){
        let items=[];
        //remove empty items if any
        items = getValidItems(scope.itemsList.split(","));
        if(items.length==0){
            if (scope.itemsList!=""){
                scope.checkMsg="Please enter VALID data first (see note below).";
            }else{
                scope.checkMsg="Please enter data first.";
            }            
            scope.msgClass = "back-red";
        }else if (items.length < 4){
            scope.checkMsg = `Enojoy your ${items.length} items :-)`;
            scope.msgClass = "front-green";
        }else{
            scope.checkMsg = `${items.length} items is too much :-(`;
            scope.msgClass = "front-red";
        }
    }    
}

//shared function
//-----------------------------------
function getValidItems(lstItems){
    let items = [];
    //remove empty items 
    for (let i in lstItems){
        let item = lstItems[i].trim();
        if (item!=""){
            items.push(item);
        }
    }
    return items;
}

})();