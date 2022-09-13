Input Format

The first line of input contains , the number of test cases.

Each test case consists of two lines.

The first line has two space-separated integers,  and , the number of students (size of ) and the cancellation threshold.
The second line contains  space-separated integers () that describe the arrival times for each student.

Constraints

Sample Input

2
4 3
-1 -3 4 2
4 2
0 -1 2 1
Sample Output

YES
NO
Explanation

For the first test case, . The professor wants at least  students in attendance, but only  have arrived on time ( and ) so the class is cancelled.

For the second test case, . The professor wants at least  students in attendance, and there are  who arrived on time ( and ). The class is not cancelled.




function angryProfessor(k, a) {
    // Write your code here
let studentsOnTime = 0;
  a.forEach((el) => {
      if(el <= 0) {
          studentsOnTime += 1;
      }
      
  })

  return (studentsOnTime >= k) ? "NO" : "YES";

}
