/*eslint-env browser*/

//////////////////	Step 1	//////////////////
//function alphabeticalOrder(str){
//    return str.split('').sort().join('');
//}
//window.console.log(alphabeticalOrder("webmaster"));


//////////////////	Step 2	//////////////////
//function uppercase(str){
//    var arr1, arr2, x;
//    arr1 = str.split(' ');
//    arr2 = [];
//
//    for(x = 0; x < arr1.length; x++){
//        arr2.push(arr1[x].charAt(0).toUpperCase()+arr1[x].slice(1));
//    }
//    return arr2.join(' ');
//}
//window.console.log(uppercase("the quick brown fox"));


//////////////////	Step 3	//////////////////
//function vowel(str){
//    var vowels, v = 0, x;
//    vowels = 'aeiouAEIOU';
//    for(x = 0; x < str.length ; x++){
//        if (vowels.indexOf(str[x]) !== -1){
//            v += 1;
//        }
//    }
//    return v;
//}
//window.console.log(vowel("The quick brown fox"));


//////////////////	Step 4	//////////////////
//function id(howMany){
//    var i, text = "", chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//    for(i=0; i < howMany; i++ ){  
//        text += chars.charAt(Math.floor(Math.random() * chars.length));
//    }
//    return text;
//}
//window.console.log(id(15));


//////////////////	Step 5	//////////////////
//function longCountry(name){
//    return name.reduce(function(longName, country) {
//        if (longName.length > country.length)
//            return longName;
//        else
//            return country;
//    }, "");
//}
//window.console.log(longCountry(["Australia", "Germany", "United States of America"]));

