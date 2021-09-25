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
    swap_input=swap_input.join("");
    var swap_output=(last.concat(swap_input)).concat(first);
    alert(typeof(swap_output));
    var swap_output1=swap_output.split(",");
    alert(typeof(swap_output1));
    document.write(+swap_output1);

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
    longest_string_input=longest_string_input.split("|");
    document.write(longest_string_input);
}