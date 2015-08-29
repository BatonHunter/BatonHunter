var ClassSelection = (function() {
    function createCareer() {

        Careers.addCareerJobs({
            id: 1,
            title: '投資操盤手'
        });

        window.location = "../careers/index.html";
    }

    return {
        create: createCareer
    }
})();