$(document).ready(function(){
updateVisibleProjects();

function updateVisibleProjects(classifications) {
  //Set up variables
  var projects = $("#home-projects avisible").is("visible"),
      environmental = $(".environmental"),
      identity = $('identity'),
      iconography = $('iconography'),
      photography = $('photography');

  //Fade out all projects
  projects.fadeOut(300);

  switch (classifications) {
    case "environmental":
      //Show environmental projects
      break;
    case "identity":
      //Show identity projects
      break;
    case "iconography":
      //Show iconography projects
      break;
    case "photography":
      //Show photography projects
      break;
    default:
      //Show all projects
  }
}

});
