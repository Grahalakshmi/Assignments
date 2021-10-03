function validate_form(input,position){
    var input= document.getElementById("input").value;
    var position = document.getElementById("position").value;
    var str1=input.substring(0,position);
    console.log(str1);
    console.log(position);
    var position=Number(position)+1;
    console.log(position);
    var len=input.length;
    console.log(len);
    var str2=input.substring(position,len);
    console.log(str2);
    var output=str1+str2;
    alert("Output is " +output);
}
function count_vowels(vowel_input){
    var vowel_input= document.getElementById("vowel_input").value;
    var vowel_input1= new String(vowel_input);
    console.log(typeof(vowel_input1));
    count=vowel_input1.length;
    console.log(count);
    var i=0;
    var vowel_count=0;
    while(i<count){
        console.log(vowel_input1[i]);
       if(vowel_input1[i]=='a' || vowel_input1[i]=='e' || vowel_input1[i]=='i' || vowel_input1[i]=='o' || vowel_input1[i]=='u')
        {
            vowel_count=vowel_count+1;
            console.log(vowel_count);
        }
        i++;
    }
    alert("Count of the Vowels in the string " +vowel_count);
}
function rotate_string(){
    var rotate_input=document.getElementById("rotate_input").value;
    var rotate_input=rotate_input.split("");
    console.log(typeof(rotate_input));
    //len=rotate_input.length;
    //console.log(len);
    var i=1;
    while(i<rotate_input.length)
    {
        var removed_char= rotate_input.shift();
        var rotate_output=rotate_input.join("")+removed_char;
        document.write(rotate_output+ "<br>");
        alert(rotate_output);
        rotate_input=rotate_output.split("");
        //document.write(rotate_input);
        i++; 
    }
}
function palindrome(){
    var palindrome_input=document.getElementById("palindrome_input").value;
    var input=palindrome_input;
    palindrome_input=palindrome_input.split("");
    var palindrome_output=palindrome_input.reverse();
    palindrome_output=palindrome_output.join("");
    //document.write(input+"<br>");
    //document.write(palindrome_output);
    (input==palindrome_output) ? alert("The Given String is a Palindrome") : alert("The Given String is not a Palindrome");
}
function swap(){
    var swap_input=document.getElementById("swap_input").value;
    swap_input=swap_input.split(",");
    //document.write(swap_input);
    var first=swap_input.shift();
    //document.write("<br>first" +first);
    var last=swap_input.pop();
    //document.write("<br>Last"+last);
    //document.write("<br>"+swap_input);
    alert("Output is "+last+ "," +swap_input+ ","+first);
}
function factorial(){
    var factorial_input=Number(document.getElementById("factorial_input").value);
    //document.write(factorial_input);
    var factorial_output=1;
    //document.write(typeof(factorial_input));
    while(factorial_input>0){
        factorial_output=factorial_input*factorial_output;
        factorial_input--;
    }
    alert(factorial_output);
}
function longest_string(){
    var longest_string_input=document.getElementById("longest_string_input").value;
    longest_string_input=longest_string_input.replaceAll("  ","");
    console.log(longest_string_input);
    longest_string_input=longest_string_input.split("|");
    //document.write(longest_string_input);
    var longest_string_val="";
    var output=longest_string_input.forEach(func);
    //document.write(output);
    function func(v){
        if(v.length>longest_string_val.length){
            longest_string_val=v;
            //document.write("<br>"+longest_string_val);
            return longest_string_val;
        }
        //document.write("<br>"+longest_string_val);
    }
    alert("Longest sting in a  array is " +longest_string_val);
    /*longest_string_input=longest_string_input.split("|");
    document.write(longest_string_input);
    var length_array = longest_string_input.map(func);
    function func(v){
        return length_array=v.length;
    }
    document.write("<br>"+length_array+ "<br>");
    length_array=length_array.join(",");
    document.write(typeof(length_array)+"<br>");
    var index_lengtharray=Math.max(length_array);
    document.write(index_lengtharray);
}*/
}
function fibonacci(){
    var fibonacci_input=Number(document.getElementById("fibonacci_input").value);
    //document.write(fibonacci_input);    
    document.write("Fibonacci Series");
    var n1=0, n2=1,series=0;
    for(i=1; i<=fibonacci_input; i++)
    {
        alert(n1);
        document.write("<br>"+n1);
        series=n1+n2;
        n1=n2;
        n2=series;
    }
}
function prime(){
    var prime_input=Number(document.getElementById("prime_input").value);
    //document.write(prime_input);
    if(prime_input==1){
        alert("1 is neither prime nor composite number.");
    }
    else if(prime_input<=0){
        alert("Enter a positive value");
    }
    else if (prime_input>1){
        var prime_output=true;
        //document.write(prime_output);
        for (i=2;i<prime_input; i++){
            if(prime_input % i == 0){
                //document.write(prime_input);
                prime_output=false;
                //document.write(prime_output);
                break;      
            }
        }
        if(prime_output == true){
            alert(prime_input+ " is a Prime number");
         }
        else{
            alert(prime_input+ " is not a prime number");
         }
        }
}
function sum(){
    var sum_input=Number(document.getElementById("sum_input").value);
    //document.write(sum_input);           
   var sum, total=0, n=1;
    while(n<=sum_input) {
         sum=Math.round(sum_input/n);
         total=total+sum;
         n=n*2;
        //document.write("<br>"+total);
     }
     alert("Output is " +total);
     //document.write("<br>final"+total);
}
function form_pattern(){
    
    var pattern_input=Number(document.getElementById("pattern_input").value);
    console.log(pattern_input);
    document.write("Pattern");
    for (i=1;i<=pattern_input; i++)
    {
        document.write("<br>");
        for(j=1; j<=i; j++){
            document.write("^ ");
        }
    }
}
function pyramid_pattern_form(){
    var pyramid_pattern_input=Number(document.getElementById("pyramid_pattern_input").value);
    document.write(pyramid_pattern_input+"<br>");
    for(var i=1; i<=pyramid_pattern_input; i++)
        {
            for(var k=1; k<=( pyramid_pattern_input-i ); k++)
                {
                    document.write(" ");
                }
            for(var j=1; j<=i; j++)
                {
                    document.write("* ");
                }
            document.write("<br/>");
        }
}