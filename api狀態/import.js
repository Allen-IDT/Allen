var item = []
$("#filecontent").on('change',function(){
    var filereader=new FileReader();
    var file=$("#filecontent").get(0).files[0]
    filereader.onload=function (max){
        var content=JSON.parse(max.target.result);
        console.log(content);
        var filemax = content.url.map(function (value, index, array) {
            item[index] = value;
            $("#titlebox").text(content)
            $("#contentbox").text(value)
            addnewtable(index)
        })
    }
    filereader.readAsText(file)
})
$("#close").on('click',function(){
    $(".modal").css("display","none")
})

function addnewtable(index){
    $("table").css("border","1px solid black")
    $("table").css("border-collapse","collapse")
    $("table").css("text-align","center")
    $("table").css("width","100%")
    //新增url名稱格子
    var titlebox_id="titlebox_id"+index
    var titlebox_class="titlebox_class"+index
    var newtitle=document.createElement("th")
    newtitle.setAttribute("type",'text')
    newtitle.setAttribute("class",titlebox_class)
    newtitle.setAttribute("id",titlebox_id)
    document.getElementById("g").appendChild(newtitle)
    $("#"+titlebox_id).css("border","1px solid black")
    $("#"+titlebox_id).css("padding","1%")
    //新增url格子
    var contentbox_id="contentbox_id"+index
    var contentbox_class="contentbox_class"+index
    var newcontent=document.createElement("td")
    newcontent.setAttribute("class",contentbox_class)
    newcontent.setAttribute("id",contentbox_id)
    newcontent.setAttribute("type","text")
    document.getElementById("g").appendChild(newcontent)
    $("#"+contentbox_id).css("border","1px solid black")
    $("#"+contentbox_id).css("padding","1%")
}