const uiModule = (function () {


    function displayShows(myShows) {
        console.log("displayShows", myShows);

        const displayMovies = []
        myShows.forEach(function (element) {

            displayMovies.push(element.image)
            const block = $("<div>");

            const images = $("<img src=''>").attr("src", element.image);
            const name = $("<p>").text(` ${element.name} `)
            const rating = $("<p>").text(`rating: ${element.rating} `)

            block.addClass("svidiv")
            block.attr("id", `${element.id}`)
            block.append(images, name, rating)
            $(".imgsetup").append(block)

            $(".svidiv").on("click", function () {
                const id = $(this).attr("id");
                localStorage.setItem("showname", id);
                console.log(id);

                window.open("index2.html");





            })


        })

    }








    return {
        displayShows
    }





})()