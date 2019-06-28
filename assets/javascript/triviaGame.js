var search = "#searchInput"
var numberOfRecords = "#recordNum" 
var startYear = "#startYear" + "0101"
var endYear = "#endYear" + "1231"
var key = "mFOHoR2tOylWqAA7pUS0mjkNpgXdMziR"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + search + "&begin_date=" + startYear + "&end_date=" + endYear

$("#submitSearch").on("click",function(){
    search = $("#searchInput").attr("value");
    numberOfRecords = $("#recordNum").attr("value");
    startYear = $("#startYear").attr("value");
    endYear = $("#endYear").attr("value");
})

//search button id="submitSearch"
//clear results button id="clearResults"

console.log(queryURL); //console logging for test of cantcatnation (don't spell check that).