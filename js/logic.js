// clicks
$("#wageCdBtn").on("click", showWage)
$("#taxCdBtn").on("click", showTax)
$("#mthoverviewCdBtn").on("click", showMonth)
$("#weekCdBtn").on("click", showWeek)

// Functions
function showWage(){
    var item = $('#wageCd');
    item.toggleClass('hidden unhidden')
};

function showTax(){
    var item = $('#taxCd');
    item.toggleClass('hidden unhidden')
};

function showMonth(){
    var item = $('#monthOverview');
    item.toggleClass('hidden unhidden')
};
function showWeek(){
    var item = $('#weekView');
    item.toggleClass('hidden unhidden')
};

