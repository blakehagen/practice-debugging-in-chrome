// function hello(){
// 	return "hello";
// }

// document.write(hello());


// function rev(arr){
// 	return arr.reverse();
// }

// var arr = [1,2,3,4,5,6,7,8];

// document.write(rev(arr));


function counter(num){
	var a = 0;
	for(var i = 0; i < num; i++){
		a++;
		console.log(a);
	}
	return a;

}

document.write(counter(6));
