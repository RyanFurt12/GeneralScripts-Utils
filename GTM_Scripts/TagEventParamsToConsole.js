let a = ""
let ar = [... $("gtm-zippy .simple-table-row>div:first-of-type")]
ar.forEach( e => a += e.innerText+"\n")
console.log(a)