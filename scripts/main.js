/*Create a preset array of numbers. Create a piece of code that chooses the largest number from that array*/

var numbers=[5,4,3,2,1,6,7,8,9,3,6,9,2,5,8,1,4,7,1];
var largest=numbers[0];
function findLargest(){
	for(i=0;i<numbers.length;i++){
		if(largest<numbers[i]){
			largest=numbers[i];
		}
		
	}
	displayLargest();
	findSum();
	findMean();
}
function displayLargest(){
	document.getElementById("display").innerHTML="The largest number from the array ["+numbers.toString()+"] is "+largest;
}

/*Return the mean and sum of an array of numbers*/
var sum=0;
var mean;
function findSum(){
	for(i=0;i<numbers.length;i++){
		sum+=numbers[i];
	}
	displaySum();
}
function displaySum(){
	document.getElementById("showSum").innerHTML="The sum of the above array is "+sum;
}
function findMean(){
	mean=(sum/numbers.length).toFixed(2);
	displayMean();
}
function displayMean(){
	document.getElementById("showMean").innerHTML="The mean of the above array is "+mean;
}