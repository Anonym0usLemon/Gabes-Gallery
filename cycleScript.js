// JavaScript file to cycle through pictures to display

var pictures = ['picture0.jpg', 'picture1.jpg', 'picture10.jpg', 'picture11.jpg', 'picture12.jpg',
 'picture13.jpg', 'picture14.jpg', 'picture15.jpg', 'picture16.jpg', 'picture17.jpg', 'picture18.jpg',
  'picture19.jpg', 'picture2.jpg', 'picture20.jpg', 'picture21.jpg', 'picture22.jpg', 'picture23.jpg',
   'picture24.jpg', 'picture25.jpg', 'picture26.jpg', 'picture27.jpg', 'picture28.jpg', 'picture29.jpg',
    'picture3.jpg', 'picture30.jpg', 'picture31.jpg', 'picture32.jpg', 'picture33.jpg', 'picture4.jpg',
     'picture5.jpg', 'picture6.jpg', 'picture7.jpg', 'picture8.jpg', 'picture9.jpg']

var cyclePics = 0 

     function cycle() {
         cyclePics = (cyclePics === pictures.length) ? 0 : ++cyclePics 
         var pictureFrame = document.getElementById("pictureFrame")
            pictureFrame.src = "img/" + pictures[cyclePics]
     }

    setInterval(cycle, 5000)