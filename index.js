$(document).ready(function () {

    //animating developer text
    var count = 0;
    developer_animation();
    function developer_animation() {
      setTimeout(function () {
        count++;
        if (count == 1) {
          title = "D";
        } else if (count == 2) {
          title = "De";
        } else if (count == 3) {
          title = "Dev";
        } else if (count == 4) {
          title = "Deve";
        } else if (count == 5) {
          title = "Devel";
        } else if (count == 6) {
          title = "Develo";
        } else if (count == 7) {
          title = "Develop";
        } else if (count == 8) {
          title = "Develope";
        } else if (count == 9) {
          title = "Developer";
        }
  
        if (count != 10) {
          $('.title').text(`I'm a ${title}`);
          developer_animation();
        } else if (count == 10) {
          count = 0;
          setTimeout(function () {
            designer_animation();
          }, 1000);
        }
  
      }, 100);
    }
  
  
    //animating desinger text
    function designer_animation() {
      setTimeout(function () {
        count++;
        if (count == 1) {
          title = "D";
        } else if (count == 2) {
          title = "De";
        } else if (count == 3) {
          title = "Des";
        } else if (count == 4) {
          title = "Desi";
        } else if (count == 5) {
          title = "Desig";
        } else if (count == 6) {
          title = "Design";
        } else if (count == 7) {
          title = "Designe";
        } else if (count == 8) {
          title = "Designer";
        }
  
        if (count != 10) {
          $('.title').text(`I'm a ${title}`);
          designer_animation();
        } else if (count == 10) {
          count = 0;
          setTimeout(function () {
            developer_animation();
          }, 1000);
        }
  
      }, 100);
    }
  
    //changing button color rgb(180, 149, 8)
    $('.about_me').mouseenter(function () {
  
      $(this).css('background-color', 'rgb(180, 149, 8)');
      $(this).css('border-color', 'rgb(180, 149, 8)');
  
    })
    $('.about_me').mouseleave(function () {
  
      $(this).css('background-color', 'rgb(255, 208, 0)');
      $(this).css('border-color', 'rgb(255, 208, 0)');
  
    })
    animate_names();
    function animate_names(){
  
      setTimeout(function(){
        $(".java_name").animate({ fontSize: "+=30px" }, 500);
        $(".java_name").animate({ letterSpacing: "+=15px" }, 1000);
        $(".adobe_name").animate({ fontSize: "+=30px" }, 500);
        $(".adobe_name").animate({ letterSpacing: "+=15px" }, 1000);
        $(".android_name").animate({ fontSize: "+=30px" }, 500);
        $(".android_name").animate({ letterSpacing: "+=15px" }, 1000);
        $(".ajax_name").animate({ fontSize: "+=30px" }, 500);
        $(".ajax_name").animate({ letterSpacing: "+=15px" }, 1000);
        $(".sql_name").animate({ fontSize: "+=30px" }, 500);
        $(".sql_name").animate({ letterSpacing: "+=15px" }, 1000);
  


        setTimeout(function () {
          $(".java_name").animate({ fontSize: "-=30px" }, 500);
          $(".java_name").animate({ letterSpacing: "-=15px" }, 1000);
          $(".adobe_name").animate({ fontSize: "-=30px" }, 500);
          $(".adobe_name").animate({ letterSpacing: "-=15px" }, 1000);
          $(".android_name").animate({ fontSize: "-=30px" }, 500);
          $(".android_name").animate({ letterSpacing: "-=15px" }, 1000);
          $(".ajax_name").animate({ fontSize: "-=30px" }, 500);
          $(".ajax_name").animate({ letterSpacing: "-=15px" }, 1000);
          $(".sql_name").animate({ fontSize: "-=30px" }, 500);
          $(".sql_name").animate({ letterSpacing: "-=15px" }, 1000);
          animate_names();
          }, 4000);
      }, 2000);
    }
  
    
  
  
    $('.project_name').text('Online Examination');
    $('.project_content').text('Online examination is conducting a test online to measure the knowledge of the participants on a given topic. In the olden days, everybody had to gather in a classroom at the same time to take an exam. With online examination students can do the exam online, in their own time, with their own device, regardless of where they live. You only need a browser and an internet connection. ')
    //Changing project images while clicking next and prev
    var project_count = 1;
    $('.next').click(function () {
      if (project_count == 2) {
        project_count = 0;
      }
      project_count++;
      $('.actual_img').attr('src', './img/project_' + project_count + '.png');
      if (project_count == 1) {
        $('.project_name').text('Online Examination');
        $('.project_content').text('Online examination is conducting a test online to measure the knowledge of the participants on a given topic. In the olden days, everybody had to gather in a classroom at the same time to take an exam. With online examination students can do the exam online, in their own time, with their own device, regardless of where they live. You only need a browser and an internet connection. ')
      } else if (project_count == 2) {
        $('.project_name').text('Quiz');
        $('.project_content').text('A quiz is a form of game or mind sport, attempt to answer questions correctly. It is a game to test knowledge about a certain subject. In some countries, a quiz is also a brief assessment used in education and similar fields to measure growth in knowledge, abilities, and/or skills.')
      }
  
    });
  
    $('.prev').click(function () {
      if (project_count == 1) {
        project_count = 3;
      }
      project_count--;
      $('.actual_img').attr('src', './img/project_' + project_count + '.png');
      if (project_count == 1) {
        $('.project_name').text('Online Examination');
        $('.project_content').text('Online examination is conducting a test online to measure the knowledge of the participants on a given topic. In the olden days, everybody had to gather in a classroom at the same time to take an exam. With online examination students can do the exam online, in their own time, with their own device, regardless of where they live. You only need a browser and an internet connection. ')
      } else if (project_count == 2) {
        $('.project_name').text('quiz');
        $('.project_content').text('A quiz is a form of game or mind sport, attempt to answer questions correctly. It is a game to test knowledge about a certain subject. In some countries, a quiz is also a brief assessment used in education and similar fields to measure growth in knowledge, abilities, and/or skills.')
      
      }
  
    });
  
  
  
  
  });