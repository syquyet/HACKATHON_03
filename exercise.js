//  bài tập 01
function exercise_01() {
  const strings = prompt("nhập vào một chuỗi kí tự:");
  function reverse_num(strings) {
    strings = strings.toString();
    return strings.split("").reverse().join("");
  }
  function symmetrical_num(strings) {
    let flag = 0;
    if (reverse_num(strings) === strings) flag = 1;
    return flag;
  }
  let check = symmetrical_num(strings);
  if (check === 1) alert(strings + " là chuỗi doi xứng");
  else alert(strings + " không phải la chuỗi doi xứng");
}
// bài tập 02
function exercise_02() {
  const text = prompt("nhập vào một đoạn text:");
  const arraytext = text.split("");
  console.log(arraytext);
}
// bài tập 03
function exercise_03() {
  const month = Number(prompt("nhập vào một tháng:"));
  const year = Number(prompt("nhập vào mộ năm:"));
  function leapYear(year) {
    if (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    ) {
      return true;
    } else {
      return false;
    }
  }

  leapYear(year);

  if (leapYear(year)) {
    switch (month) {
      case 1:
        alert("tháng 1 năm " + year + "có 31 ngày");
        break;
      case 2:
        alert("tháng 2 năm " + year + "có 29 ngày");
        break;
      case 3:
        alert("tháng 3 năm " + year + "có 31 ngày");
        break;
      case 4:
        alert("tháng 4 năm " + year + "có 30 ngày");
        break;
      case 5:
        alert("tháng 5 năm " + year + "có 31 ngày");
        break;
      case 6:
        alert("tháng 6 năm " + year + "có 30 ngày");
        break;
      case 7:
        alert("tháng 7 năm " + year + "có 31 ngày");
        break;

      case 8:
        alert("tháng 8 năm " + year + "có 31 ngày");
        break;
      case 9:
        alert("tháng 9 năm " + year + "có 30 ngày");
        break;
      case 10:
        alert("tháng 1 năm " + year + "có 31 ngày");
        break;
      case 11:
        alert("tháng 1 năm " + year + "có 3 ngày");
        break;
      case 12:
        alert("tháng 1 năm " + year + "có 31 ngày");
        break;

      default:
        alert("nhập đúng tháng, năm");
        break;
    }
  } else {
    switch (month) {
      case 1:
        alert("tháng 1 năm " + year + "có 31 ngày");
        break;
      case 2:
        alert("tháng 2 năm " + year + "có 28 ngày");
        break;
      case 3:
        alert("tháng 3 năm " + year + "có 31 ngày");
        break;
      case 4:
        alert("tháng 4 năm " + year + "có 30 ngày");
        break;
      case 5:
        alert("tháng 5 năm " + year + "có 31 ngày");
        break;
      case 6:
        alert("tháng 6 năm " + year + "có 30 ngày");
        break;
      case 7:
        alert("tháng 7 năm " + year + "có 31 ngày");
        break;

      case 8:
        alert("tháng 8 năm " + year + "có 31 ngày");
        break;
      case 9:
        alert("tháng 9 năm " + year + "có 30 ngày");
        break;
      case 10:
        alert("tháng 1 năm " + year + "có 31 ngày");
        break;
      case 11:
        alert("tháng 1 năm " + year + "có 3 ngày");
        break;
      case 12:
        alert("tháng 1 năm " + year + "có 31 ngày");
        break;

      default:
        alert("nhập đúng tháng, năm");
        break;
    }
  }
}
// bài tập 04
function exercise_04() {
  const stringNumber = prompt("nhập vào chuỗi số cách nhau dấu ','");

  const arrayNumber = stringNumber.split(",");
  const arrayNew = [];
  for (let j = 0; j < arrayNumber.length; j++) {
    let index = 0;
    let max = Number(arrayNumber[0]);
    for (let i = j + 1; i < arrayNumber.length; i++) {
      const number = Number(arrayNumber[i]);
      if (max < number) {
        max = number;
        index = i;
      }
    }
    arrayNumber.splice(index, 1);
    arrayNew.push(max);
    j--;
  }
  console.log(arrayNew);
}
// sử dụng sort để sắp xếp
function exercise_04() {
  const stringNumber = prompt("nhập vào chuỗi số cách nhau dấu ','");
  const arrayNumber = stringNumber.split(",");
  arrayNumber.sort((a, b) => b - a);
  console.log(arrayNumber);
}
function exercise_05() {
  const numberInteger = prompt("nhập vào 5 số nguyên cách nhau bởi dấu ',':");
  const arrayNumberInterger = numberInteger.split(",");
  console.log(arrayNumberInterger);
  let number=true;
  for (let i = 0; i < arrayNumberInterger.length; i++) {
     number = Number.isInteger(Number(arrayNumberInterger[i]));
    
    }
    if(number==false){
        alert(arrayNumberInterger[i]+"không phải là số nguyên, nhập lại dãy số")
  }else{
    let max=Number(arrayNumberInterger[0]);
    for (let i = 0; i < arrayNumberInterger.length; i++){
        if(max<arrayNumberInterger[i]){
            max=arrayNumberInterger[i];
        }
    }
    alert("số nguyên lớn nhất là"+max);
  }
}
