//global variable
counter=0;
var highestAvg=0;
var average = new Array();
var studObj = new Array();
var teachObj = new Array();
//Objects
var student = {
    studName:"",
    studentId:"",
    courses:['a', 'b', 'c', 'd'],
    marks:[]}

var teacher = {
    profName:"",
    course:"",
    office:"",
    email:""}

for(var i=0; i<30; i++)
{
    studObj[i] = Object.create(student);
    var check = prompt('Please enter students name(!!! to exit): ','');
    if(check !== '!!!')
    {
        studObj[i].studName = check;
        studObj[i].studentId = prompt('Please enter student ID: ','');
        var total=0;
        for(var j=0; j<4; j++)
        {
             studObj[i].marks[j] = prompt('Please enter student marks for ' + studObj[i].courses[j] + ' : ','');
            if(studObj[i].marks[j] > 100 || studObj[i].marks[j] < 0)
            {
                alert("Incorrect mark, please enter a correct mark!")
                j--;
            }
            else
            {
            total += Number(studObj[i].marks[j]);
            }
        }
        average[i] = total/4;
        counter++;
    }
    else
    {
        break;
    }
    alert(average[i]);
}

var highestAvg = Number(average[0]);
for(var x=1; x<counter; x++)
{
    if((Number(average[x])) > highestAvg)
    {
        highestAvg = average[x];
        var z=x
    }
}
alert(highestAvg);

alert('The student with the highest overall average is: \nStudent Name: ' + studObj[z].studName + '\nStudent ID: ' + studObj[z].studentId + '\nCourses: ' + studObj[z].courses + '\nMarks: ' + studObj[z].marks + '\nAverage Mark: ' + average[z]);