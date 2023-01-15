var marks = [87,97,94,82,62,98,81,81,74,91];
var sum=0, average;
if (marks.length > 0){
    for (var index=0; index<marks.length; index++){
        sum = sum + marks[index];
    }
    average = sum / marks.length;
    document.write("Average is ", average);
}
else {
    document.write("String has no elements.");
}
