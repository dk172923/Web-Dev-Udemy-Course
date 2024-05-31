const fs = require("fs");

// fs.writeFile("message.txt", "Dhineshkumar here, ", function(err){
//     if(err) throw err;
//     console.log("Successfully written the text...");
// })

fs.readFile("./message.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data);
});