var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {   name: "Fiery Jungle",
        image:"http://www.photosforclass.com/download/pixabay-839807",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum dui faucibus in. Vestibulum rhoncus est pellentesque elit ullamcorper. Felis donec et odio pellentesque diam volutpat. Senectus et netus et malesuada fames ac. Leo integer malesuada nunc vel risus commodo viverra maecenas. Blandit massa enim nec dui nunc mattis enim. Semper feugiat nibh sed pulvinar. Tempus egestas sed sed risus pretium quam vulputate dignissim. Blandit cursus risus at ultrices mi."
    },
    {   name: "Starry Night Watch",
        image:"https://pixabay.com/get/eb32b9072ef3063ed95c4518b7444795ea76e5d004b0144395f1c57aa2e9b6_340.jpg",
        description: "Ugh man braid fashion axe art party synth jianbing, yuccie cray pork belly food truck cronut. Freegan everyday carry kitsch, hoodie succulents biodiesel prism migas la croix squid etsy dreamcatcher gentrify deep v man bun. Letterpress narwhal cold-pressed, cred artisan jean shorts YOLO heirloom freegan. Leggings kinfolk la croix, health goth raw denim tilde blue bottle disrupt paleo direct trade. Flannel chia seitan bushwick pitchfork cold-pressed sriracha fam. Mixtape woke gluten-free, XOXO jean shorts cliche vice try-hard blog migas kombucha ethical. Twee slow-carb williamsburg, street art cronut mlkshk ethical franzen four dollar toast aesthetic yr umami whatever quinoa palo santo."
    },
    {   name: "Clouds and Mounts",
        image:"https://pixabay.com/get/eb35b70b2df6033ed95c4518b7444795ea76e5d004b0144395f1c57aa2e9b6_340.jpg",
        description: "Candy jelly cake wafer pastry tiramisu carrot cake. Tootsie roll donut jelly sugar plum marzipan sesame snaps. Wafer gummies bear claw. Sugar plum biscuit gummi bears chocolate toffee candy jujubes wafer. Jujubes carrot cake jelly beans fruitcake jelly chupa chups cookie croissant. Dessert carrot cake macaroon pudding sesame snaps caramels cake sesame snaps. Bonbon croissant croissant jelly cotton candy liquorice jujubes gummies. Sweet ice cream gingerbread. Dragée sugar plum chupa chups fruitcake."
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed campgrounds");
         // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("Created a campground");
                    // Create a comment
                    Comment.create({
                        text: "This place better had internet. Cut off from world.",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        }else{
                            campground.comments.push(comment._id);
                            campground.save();
                            console.log("Created a new comment");
                        }
                    });
                }
            });
        });
    });

    // Add a few comments too
}

module.exports = seedDB;
