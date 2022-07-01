let minimist=require("minimist");
let args=minimist(process.argv);
let fs=require("fs");
let  str = fs.readFileSync('file.txt',{encoding:'utf8', flag:'r'});

console.log(str.length);
count=1;
for(let i=0;i<str.length;i++){

    if(str.charAt(i)==' '){
        count++;
    }
}



fs.writeFileSync("file1.txt",
    "length  "+str.length+"\n"+"wordcount "+count + "\n",
    {
      encoding: "utf8",
      flag: "a+",
      mode: 0o666
    });

