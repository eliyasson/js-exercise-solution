/* Write a function that prints this version of children's song
"10 in the bed, the little one said rollover, 1 fell off" 
"9 in the bed.."
"8 in the bed.."
...
"1 in the bed, the little on said I am lonely!"

"The little one said, Everybody back on the bed!"
*/

function childrenSong() {  
    for (i = 10; i >= 1; --i) {
      if (i == 1) {
        rollover = i + " in the bed, The little on said I am lonely!";
      } else {
        rollover = i + " in the bed, the little one said rollover, 1 fell off";
      }
      console.log(rollover);
      
    } 
    console.log("The little one said, Everybody back on the bed!")
  }
  console.log(childrenSong());