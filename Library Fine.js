Explanation

Given the following dates:
Returned: 
Due: 

Because , we know it is less than a year late.
Because , we know it's less than a month late.
Because , we know that it was returned late (but still within the same month and year).

Per the library's fee structure, we know that our fine will be . We then print the result of  as our output.


function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
 let fine = 0;
  if (y2 > y1) return fine;
  if (y1 > y2) {
    fine = 10000;
    return fine;
  }
  if (m2 > m1) return fine;
  if (m1 > m2) {
    
    fine = (m1 - m2) * 500;
  
    return fine;
  }
  if (d1 > d2) {
    fine = (d1 - d2) * 15;
   
    return fine;
  }
  return fine;
}
