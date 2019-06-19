var niza= [{
	ime:"Pero", prezime:"Perovski", prosek:6.2},
	{ime:"Janko", prezime:"Jankovski", prosek:7.1},
	{ime:"Stanko", prezime:"Stankovski",prosek:8.3},
	{ime:"Petko",prezime:"Petkovski", prosek:9.81},
	{ime:"Ivana", prezime:"Ivanovska",prosek:6},
	{ime:"Gordana",prezime:"Gordanovska",prosek:6.1},
	{ime:"Cveta",prezime:"Cvetkovska", prosek:9.2}


	]

	//Име и презиме на студентот со највисок просек
        
 var maxObj=niza.reduce(function(max,obj){
return obj.prosek >max.prosek? obj :max;
})
console.log(maxObj);

//Име и презиме на студентот со најнизок просек 

var minObj=niza.reduce(function(min,obj){
return obj.prosek <min.prosek? obj :min;
})
console.log(minObj);

//Средна вредност(просек) на цела генерација 


	var average1=niza.map(person=>person.prosek);
    var average=average1.reduce((a,b)=>{
    	return a+b;
    })
    var total=average/niza.length;
    console.log("Prosekot na cela generacia e " + total);