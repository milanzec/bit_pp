const controller = (function (data, ui) {
    console.log("korak")

    function init() {
        console.log("App initialized");
        data.fetchShows(function (myShows) {
            console.log("CTRL", myShows);
            ui.displayShows(myShows)
            console.log("CTRL2", myShows);
        })
    }

    return {
        init
    }

})(dataModule, uiModule)