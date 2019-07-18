if (Meteor.isClient) {
   var member_data = [
     {
        src:"/images/aalap.jpg",
        name:"Aalap"
     },
     {
        src:"/images/anurag.jpg",
        name:"Anurag"
     },
     {
        src:"/images/adarsh.png",
        name:"Adarsh"
     },
     {
        src:"/images/suraj.jpg",
        name:"Suraj"
     },
     {
        src:"/images/arpit.jpg",
        name:"Arpit"
     },
     {
        src:"/images/rahul.jpg",
        name:"Rahul"
     },
     {
        src:"/images/pranav.jpg",
        name:"Pranav"
     },
     {
        src:"/images/shridhey.jpg",
        name:"Shridhey"
     },

];

   Template.members.helpers({member:member_data});
}
