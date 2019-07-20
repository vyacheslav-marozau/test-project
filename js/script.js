  $(document).ready(function() { 
      $("#menu").click( function() {
          $("#menu").toggleClass("fa-bars").toggleClass("fa-times");
          $(".menuMobile").toggle();
           $(".fa-closeBackground").toggle()
          $("#search").addClass("fa-search").removeClass("fa-times");
          $(".searchMobile").hide();
          $(".fa-closeBackground2").hide();
      });
      $("#search").click( function() {      
          $("#search").toggleClass("fa-search").toggleClass("fa-times");
          $(".searchMobile").toggle();
          $(".fa-closeBackground2").toggle();
          $("#menu").addClass("fa-bars").removeClass("fa-times");
          $(".menuMobile").hide();
          $(".fa-closeBackground").hide()
      });

      if ( $(".searchRequest").value() != false) {
            $(".requestButton").removeAttr("disabled");
       }
 });
