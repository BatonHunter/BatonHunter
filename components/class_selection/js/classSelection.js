var ClassSelection = (function() {
    function createCareer() {

        Careers.addCareerJobs({
            id: '1',
            title: '理財專家'
        });

        window.location = "../careers/index.html";
    }

    return {
        create: createCareer
    }
})();