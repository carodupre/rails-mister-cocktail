// TIPS
// CTRL + F pour trouver ce dont j'ai besoin :)



// POUR AJOUTER UN EVENT LISTENER SUR UN BOUTON, AU CLIC
// ________________________________________________________________________________

// 1. dans le folder app > javascript > packs > dans un file

        // const button = document.getElementById("clickme");
        // button.addEventListener("click", (event) => {
        //   button.classList.add("disabled");

        //   console.log(button.innerText);
        //   button.innerText = "Bingo!";

        // });


// 2. dans la page html.erb qui va displayer le bouton:

        //   <button id="clickme" class="btn btn-primary btn-lg">
        //     <strong>Click me!</strong>
        //       </button>


// ____________________________________________________________________________________
// POUR IMPORTER FONTAWESOME
        // <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css">

// _______________________________________________________________________________________
// POUR METTRE UNE PHOTO STOCKEE DS CLOUDINARY, DANS UNE PAGE HTML.ERB

// <#%= cl_image_tag("ruhwuokucmutzo16tvg5",
//       width: 400, height: 300, crop: :fill) %> -->


// ____________________________________________________________________________________
// POUR AJOUTER UNE CARD TYPE DRIBBLE


// 1. dans la page html concernée :

        // <div class="dribble-card-container">
        //     <div class="card-white">
        //       <div class="card-white-img">
        //         <div class="btn-dribble">
        //           <a href="#">Save</a>
        //         </div>
        //       </div>
        //       <ul class="list-inline">
        //         <li><i class="fas fa-eye"></i> 80</li>
        //         <li><i class="fas fa-comment"></i> 25</li>
        //         <li><i class="fas fa-heart"></i> 8</li>
        //       </ul>
        //     </div>
        // </div>

// 2. je dois importer fontawesome au bon endroit dans les fichiers html (soit application.html.erb ou index..):
//         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css">


// 3. je créé les composents scss en créant des fichiers ou en ajoutant
// ces styles aux fichiers existants:

        // _card.scss
        // _button.scss

// 4. Détail du css:

        // .dribble-card-container {
        //   height: 300px;
        //   margin: 0px auto;
        //   margin-bottom: 30px;
        //   width: 350px;
        // }

        // .card-white {
        //   background-color: white;
        //   padding: 10px;
        //   border: 1px solid rgb(240, 240, 240);
        //   border-radius: 3px;
        // }

        // .card-white-img {
        //   background-image: url("https://images.pexels.com/photos/1232152/pexels-photo-1232152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
        //   height: 220px;
        //   background-size: cover;
        //   background-position: center;
        //   border-radius: 3px;
        // }

        // .btn-dribble {
        //   background-color: white;
        //   opacity: 0;
        //   border-radius: 3px;
        //   padding: 5px 10px;
        //   width: 50px;
        //   text-align: center;
        //   font-family: 'Poppins';
        //   margin: 10px;
        //   display: inline-block;
        //   color: gray;
        //   transition: 0.3s;
        // }

        // .card-white:hover .btn {
        //   opacity: 1;
        //   transition: 0.3s;
        // }


        //  --- Google Fonts ---
        // @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Poppins:400,700");
        // @import url("components/card.css");
        // @import url("components/button.css");


        /* --- Fonts --- */
        /*body {
          font-family: "Open Sans", "Helvetica", "sans-serif";
          padding-bottom: 200px;
          margin: 0;
          background-color: rgb(240, 240, 240);
        }

        h1, h2, h3 {
          font-family: "Poppins", "sans-serif";
        }

        a {
          text-decoration: none;
        }

        a:hover {
          text-decoration: none;
        }

        .text-center {
          text-align: center;
        }

        .list-inline {
          list-style: none;
          padding-left: 0px;
          margin: 10px 0px 0px 0px;
          text-align: right;
          color: #b9b9b9;
        }

        .list-inline li {
          display: inline-block;
          margin: 0px 2px 0px 2px;
          padding-right: 5px;
          padding-left: 5px;
          font-size: 20px;
        }*/




