const index2 = (() => {

    const idShow = localStorage.getItem("showname");
    console.log(idShow);
    const index2search = `http://api.tvmaze.com/shows/${idShow}?embed[]=seasons&embed[]=cast`;

    $.get(`${index2search}`, function (singleShowData) {
        console.log(singleShowData);
        const castNames = [];
        const seasonsYears = [];
        const listactors = $(".castnames");
        const seasons = $(".seasons")

        singleShowData._embedded.cast.forEach(element => {
            const listNames = $("<li>").text(element.person.name)
            console.log(listNames)
            castNames.push(element.person.name);
            listactors.append(listNames);

        });

       /* singleShowData._embedded.seasons.forEach(element => {
            const seasonList = $("<li>").text(element.seasons.endDate)
            seasonsYears.push(element.seasons.endDate);
            seasons.append(seasonList);

        });*/

        const foot = $(".foot");
        const cast = $(".cast");

        const summar = singleShowData.summary;
        const titles = $("<h1>").text(singleShowData.name);
        const img2 = $("<img src='' >").attr("src", singleShowData.image.medium);
        const blok2 = $(".index2div");
        blok2.append(titles);
        blok2.append(img2);
        foot.append(summar);
    })

})()