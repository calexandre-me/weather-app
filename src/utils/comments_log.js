const fs = require('fs');
const path = require('path');

const archiveComment = function(email, comment){
   const commentsFolder = path.join(__dirname, '..', '..', 'comments');

   if(!fs.existsSync(commentsFolder)){
    fs.mkdir(path.join(__dirname, '..', '..', 'comments'), (err)=>{
        if(err) console.log('An error occured.');        
    })
   }
   
   const tmp = new Date();
   const commentParse = `~| At: ${tmp}, user: ${email} made the following comment:\t${comment} |~\n`;

   fs.appendFile(path.join(commentsFolder.toString(), 'comments.txt'), commentParse, (err)=>{
    if(err) console.log('There were an error while registering the comment.');
    console.log("New comment added.")
   })
}

module.exports = archiveComment;
