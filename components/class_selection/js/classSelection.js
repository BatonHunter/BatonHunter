$(function() {

    var job_categories_data = [];

    ClassData.getCategory().forEach(function(category_name) {
        var sub_categories_arr = [];
        var category_obj = {
            category_name: category_name
        };

        ClassData.getSubCategory(category_name).forEach(function(subcategory_name) {
            var jobs_arr = [];
            var sub_category_obj = {
                sub_category_name: subcategory_name
            };

            ClassData.getClass(subcategory_name).forEach(function(job) {
                var job_obj = {
                    jobId: job.jobId,
                    jobTitle: job.title,
                    jobDescription: job.description
                };

                jobs_arr.push(job_obj);
            });
            sub_category_obj.jobs = jobs_arr;
            sub_categories_arr.push(sub_category_obj);
        });
        category_obj.job_subcategories = sub_categories_arr;

        job_categories_data.push(category_obj);
    });


    $('#batonhunter-job-categories').render(job_categories_data);

    $('#batonhunter-dl-menu').dlmenu({
        animationClasses: {
            classin: 'dl-animate-in-2',
            classout: 'dl-animate-out-2'
        }
    });

    $('.job_name').on('click', function() {
        var $this = $(this),
            jobId = $this.siblings('#jobId').val(),
            jobDescription = $this.siblings('#jobDescription').val(),
            jobTitle = $this.text();

        $('#modal-Description').empty().append(jobDescription);
        $('#modal-Title').empty().append(jobTitle);
        $('#SelectCareer').attr('data-jobid', jobId);
        $('#jobDescriptionModal').modal();

    });

    $('#SelectCareer').on('click', function() {
        var jobId = $(this).data('jobid');
        var title = $('#modal-Title').text();

        Careers.addCareerJobs({
            id: jobId,
            jobId: jobId,
            title: title
        });
        window.location = "../careers/index.html";
    });
});