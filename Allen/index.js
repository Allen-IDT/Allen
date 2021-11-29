var max
$(document).ready(function(){
    // $.ajax({
    //     type:"GET",
    //     url:"https://invoices.com.tw/0708.html",
    //     dataType: 'html',
    //     success:function(mg){
    //         max=mg
    //         console.log(max)
    //     },error:function(){
    //         alert("error")
    //     }
    // })
    $.ajax({
        type:"GET",
        url:"https://invoices.com.tw/0708.html",
        dataType:"jsonp",
        success:function(max){
            alert("good")
        },error:function(error){
            alert("error")
        }
    })
})

