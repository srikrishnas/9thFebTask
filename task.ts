function isLeap(year: number):Boolean{
    if(year%4 == 0 && year%100 != 0 && year%400==0)
        return true;
    return false;
}
console.log(isLeap(2024))

function strRev(str: string):string {
    let revStr = str.split("").reverse().join("");
    return revStr;
}               
console.log(strRev("GUVI GEEKS"))