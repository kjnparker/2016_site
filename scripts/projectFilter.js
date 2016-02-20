$(document).ready(function(){

//On filter bar option click, grab ID nd update visible projects
$("#filter-bar .filterTag").on('click', function(){
  var _ = $(this),
      newClassification = _.attr('id'),
      currentClassfication = $(".selected-filter").attr('id');

  if(newClassification !== currentClassfication){
    //Update filter selected state
    $("#filter-bar .filterTag").removeClass("selected-filter")
    _.addClass("selected-filter");
    updateVisibleProjects(newClassification)
  }
});

function updateVisibleProjects(classification) {
  //Set up variables
  var visibleProjects = $("#home-projects a:visible"),
      allProjects = $("#home-projects a"),
      environmental = $(".environmental"),
      identity = $('.identity'),
      iconography = $('.iconography'),
      photography = $('.photography');

  //Fade out all projects
  visibleProjects.fadeOut(500, function(){
    switch (classification) {
      case "environmental":
        //Show environmental projects
        environmental.fadeIn(500);
        break;
      case "identity":
        //Show identity projects
        identity.fadeIn(500);
        break;
      case "iconography":
        //Show iconography projects
        iconography.fadeIn(500);
        break;
      case "photography":
        //Show photography projects
        photography.fadeIn(500);
        break;
      default:
        //Show all projects
        allProjects.fadeIn(500);
    }
  });

}

});
