function cb_jiashuju(str) {
    let dom = $(str).prev()[0]//;//input框
    // console.log(dom);
    console.log(dom)
    var arr = ["barCode", dom];//获得条形码和input框
    // console.log(arr);
    // console.log(dom.value)//dom的值就是条形码
    // console.log(onlyKey(arr[0],arr[1]))
    let arr1 = searchKey(arr, 'product')//获得条形码是输入的，所有的属性
    // console.log(arr1);
    // console.log(arr1[0].name);
    if (panduan(dom.value)) {
        let xiabiao = panduan1(dom.value)//获取相同条码的下标
        $(".shuzi>#shuzi").eq(xiabiao).text(parseInt($(".shuzi>#shuzi").eq(xiabiao).text()) + 1)//让个数加一
        // $(".jiage").eq(xiabiao).text(parseInt(arr1[0].price) * parseInt($(".shuzi").eq(xiabiao).text()))
    }
    else {
        $("#cbbiaoge>tbody").append(`
                        <tr>
                            <td class="tiaoma">${arr1[0].barCode}</td>
                            // console.log(${arr1[0].barCode})
                            <td>${arr1[0].classTwo}</td>
                            <td>${arr1[0].name}</td>
                            <td class="danwei">${arr1[0].unit}</td>
                            <td class="shuzi">
                            <span id="shuzi">1</span>
                            <span id="cbtianjia1" onclick="cbjia(this)" class="iconfont icon-xiangxia1"></span>
                            <span id="cbtianjia2" onclick="cbjian(this)" class="iconfont icon-xiangxia"></span>
                            </td>
                        </tr>`);
    }
    function panduan(obj) {
        for (var i = 0; i < $(".tiaoma").length; i++) {
            if($(".tiaoma").eq(i).text()===obj){
                return true;
            }
        }
    }
    function panduan1(obj) {
        for (var i = 0; i < $(".tiaoma").length; i++) {
            if ($(".tiaoma").eq(i).text() === obj) {
                return i;
            }
        }
    }
}//添加数据到table中，输入框失去焦点的时候，将数据添加在界面中。
window.onload=function(){
    $(".row").css({
        marginLeft:"0",
        marginRight:"0"
    })
}
function cbjia(obj) {
    $(obj).prev().text(parseInt( $(obj).prev().text())+1)
}//加号 数量增加
function cbjian(obj) {
    if (parseInt($(obj).prev().prev().text())>1) {
        $(obj).prev().prev().text(parseInt( $(obj).prev().prev().text())-1)
    }
    else{
            $(obj).parent().parent()[0].innerHTML="";
    }
}//减号 数量减少
$(function () {
 $("#cbshoudong").attr("checked",true)//选中
 $("#cbshoudong").attr("checked",false)//未选中
    $("#cbshoudong").click(function () {
        if ($(this).is(":checked")) {
            jQuery('#cbshuru').removeAttr('disabled')
        }
        else {
           $("#cbshuru")[0].value=""
            $("#cbshuru").attr('disabled', 'disabled')
        }
    })
});//判断选择框是否被选中
// *********************确定按钮的时候***************
function cbxianshi(obj) {
    var cbduixiang=$(obj).parent().parent().next()
    cbduixiang.slideDown(500);

}//点击确认的时候 ，确认按钮出现。
function zonghe() {
    let obj =$("#cbshuju>tr>td:nth-child(5)>span:first-child")//获的每一行的最后一列的值
    console.log(obj[0].innerHTML)
    // let sum=0;
    let cbobj=$("#cbshuju>tr>td:nth-child(1)")//获的每一行的第1列的值
    console.log(cbobj[0].innerHTML)
    for (let i=0;i<obj.length;i++){
        changeStockNum(cbobj[i].innerText,obj[i].innerText,'add')
    }//遍历每一行的个数，相加
}//添加的数量
$("#cbquerenshanghuo").click(function () {
    zonghe()
    $("#cbshuju")[0].innerText=""
    $("#cbquerenshanghuo").slideToggle(500);
    $("#cbshuru")[0].value=""
})//确认订单的时候 清除输入框的数据，自己消失
$("#cbquerenshanghuo").mouseover(function () {
    $("#cbquerenshanghuo").css({
        backgroundColor:"#E6F5FF"
    })
})
$("#cbquerenshanghuo").mouseout(function () {
    $("#cbquerenshanghuo").css({
        backgroundColor:"#409EFF"
    })
})










