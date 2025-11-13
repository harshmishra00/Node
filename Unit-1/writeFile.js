const fs=require('fs')

fs.copyFile("Harsh.txt","./Copied/harr.txt", function(err){
    if(err) console.error(err);
    else console.log("Done")
})