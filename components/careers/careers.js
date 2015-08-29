var Careers = (function () {
  var imgPath;

  var getJobImgPath = function(jobId){
    var url = "https://baton-huner-restful-server.herokuapp.com/jobs/" + jobId;
    $.ajax({
            url: url,
            method: 'GET',
            async: false,
            crossDomain: true,
            dataType: 'json',
            error: function(response) {
                console.log('something went wrong');
            },
            success: function(responseData, textStatus, jqXHR) {
                console.log('Successfully');
            }
            }).done(function(data){
              imgPath = data.imgPath;
            });
  }

  var getCareerJobs = function () {
    return Profile.getJobs() || [];
  };

  var addCareerJobs = function (job) {
    
    var jobs = getCareerJobs();

    for (var i = 0; i < jobs.length; ++i) {
        if (job.id === jobs[i].id) {
            return;
        }
    }

    Profile.createJob(job);
  };

  var delCareerJobs = function (jobId) {
    Profile.deleteJob(jobId);
    window.location = "../careers/index.html";    
  };  

  var renderRole = function (job, roleId) {
    getJobImgPath(roleId);

    var $roleDom = $('#role-' + roleId),
        $roleImg = $('<img>');

    $roleImg.attr('src', imgPath);

    $roleDom.removeClass('no-role')
      .find('a')
      .attr('href','#')
      .empty()
      .append($roleImg);

    $roleDom.find('.title').html(job.title + ' <button type="button" class="delCareerBtn btn-danger">刪除!</button>');
	



    $roleDom.on({
      click:function(e){
        var target = e.target,
            $target = $(target);

            //Judge event has class or not
            //If has "delCareerBtn" class , then cal delCareerJobs(id)
            //If not , go to TrainingRoom
            if($target.hasClass("delCareerBtn btn-danger")){

              delCareerJobs(job.id);
            }
            else{

              e.preventDefault();
			  //set cookie
			  Profile.setCurrentJobId(job.jobId); 
              window.location.href = "../../trainingRoom.html?jobId=" + job.jobId; 
            }

      }
    });
  };
 

  var init = function() {
    var jobs = getCareerJobs();

    jobs.forEach(function (job, index) {
      renderRole(job, index + 1);
    });
  };

  return {
    getCareerJobs: getCareerJobs,
    addCareerJobs: addCareerJobs,
    delCareerJobs: delCareerJobs,
    init: init
  };

})();
