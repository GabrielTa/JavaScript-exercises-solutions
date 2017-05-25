var friends = {
bill: {
firstName:"Bill" ,
lastName:"Gates" ,
number:"(206) 555-5555",
address: ['One Microsoft Way','Redmond','WA','98052']
},
steve: {
firstName:"Steve" ,
lastName:"Bertin" ,
number:"(206) 777-7777",
address: ['Two Intel Road','Salt Lake','UT','84056']
}
};
var list =function(friends) {
for (var key in friends){
console.log(key);}
};

var search= function(name){
    for (var key in friends){
        if(friends[key].firstName === name){
           console.log(friends[key]); 
           return friends[key]
        }else {
        
        }
    
    }
    
};