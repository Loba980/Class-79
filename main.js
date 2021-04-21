name_of_the_student_array=[];
function submit(){
    var student_name_1=document.getElementById("name_1").value;
    var student_name_2=document.getElementById("name_2").value;
    var student_name_3=document.getElementById("name_3").value;
    var student_name_4=document.getElementById("name_4").value;
    name_of_the_student_array.push(student_name_1);
    name_of_the_student_array.push(student_name_2);
    name_of_the_student_array.push(student_name_3);
    name_of_the_student_array.push(student_name_4);
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML=name_of_the_student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";0
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML=name_of_the_student_array;
}