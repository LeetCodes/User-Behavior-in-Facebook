var result = undefined;
$(document).ready(function () {

    collectResult(function (result) {
        $('#json-renderer').jsonViewer(result, {collapsed: true,withQuotes: false});
    });
    $("#submit").click(function () {
        if(result){
            submitStudyResults(result, function () {
                var today=(+new Date());
                setSingleValue("weekPeriod", today, function () {
                });
                alert("Data was sent to the server succ!");
            });
        }
    });
    $("#submitAlways").click(function () {
        setSingleValue("isAutoSave", true, function () {
            if(result){
                submitStudyResults(result, function () {
                    var today=(+new Date());
                    setSingleValue("weekPeriod", today, function () {
                    });
                    alert("Data was sent to the server succ!");
                });
            }
        });
    });
});
