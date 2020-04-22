(function () {
    if(document.body.clientWidth>1366&&document.body.clientWidth<1920){
        document.getElementsByTagName("html")[0].style.fontSize =(document.body.clientWidth/1920)*100+"px"
    }
})()//rem适配
function jiezhang(obj) {
   $(obj).parent().parent().parent().next().show()
    zengjia()
}//点击结账的时候，显示一个新的div
function dayin(obj) {
    let date=new Date();
    let year=1900+date.getYear();
    let month =date.getMonth()+1;
    //得到员工id
    let rifdNum=window.parent.document.location.href.split('?')[1];
    let peopleId=searchKey(['rifd',rifdNum],'members')[0].id;
    //得到销售的商品
    let htmlObj=$('.cbcontent3>div>table>tbody>tr');
    for(let i=0;i<htmlObj.length;i++){
        //得到销售的商品数据
        let tiaoMa=$(htmlObj[i]).children('td:first-child')[0];
        let num=$(htmlObj[i]).children('td:nth-child(4)').children('.cbfrist')[0];
       // console.log(searchKey(['barCode',tiaoMa],'product')[0])
        let proObj=searchKey(['barCode',tiaoMa],'product')[0];
        //添加销售数据
        addKey(['id',peopleId, 'year', year, 'month', month, 'classOne',proObj.classOne, 'classTwo', proObj.classTwo, 'sale', num],'sales')
    }
    //向 销售表 传数据，让
    //console.log(['id',peopleId, 'year', year, 'month', month, 'classOne',proObj.classOne, 'classTwo', proObj.classTwo, 'sale', num])
    zonghe()
    $(obj).next().show()
    // $("#cbzuo>table>tbody")[0].innerHTML=""
}//点击确认结账的时候，清除结账界面table,显示打印凭据的界面
function xiaoshi(obj) {
    $(obj).parent().hide()
    $(obj).parent().parent().parent().hide()
    var shouqian=document.getElementById("jine")
    var zhaoqian=document.getElementById("zhaoqian")
    var youhui=document.getElementById("cbyouhuijine")
    shouqian.value=""
    zhaoqian.textContent=""
    youhui.value=""
    $("#cbzuo>table>tbody")[0].innerHTML=""
    $("#cbshuru")[0].value=""
}//点击打印凭据的时候，将所有数据清空
function gaibian(obj) {
    $(obj).css(
        {
            backgroundColor:"#E6F5FF"
        }
    )
}
function huifu(obj) {
    $(obj).css(
        {
            backgroundColor:"#409EFF"
        }
    )
}//鼠标移入移出效果
function fun(){
    var date=new Date();
    document.getElementById("cbshijian1").innerHTML=(1900+date.getYear())+"-"+(date.getMonth()+1)+"-"+(date.getDay()+5)+"-"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    document.getElementById("cbshijian2").innerHTML=(1900+date.getYear())+"-"+(date.getMonth()+1)+"-"+(date.getDay()+5)+"-"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()

}//获取当前日期
window.onload=function(){
    $(".row").css({
        marginLeft:"0",
        marginRight:"0"
    })
    cb_num()
}
setInterval(fun,1000);
function jisuan() {
    var shouqian=document.getElementById("jine")
    var youhui=document.getElementById("cbyouhuijine")
    var zongjia=document.getElementById("cbzongjijine")
    var zhaoqian=document.getElementById("zhaoqian")
    var cha=shouqian.value-(zongjia.textContent-youhui.value);
    zhaoqian.innerText=cha
}//结账的时候 进行找零计算
function cb_jiashuju(str) {
    let dom=$(str).prev()[0];//input框
    // console.log(dom);
    var arr=["barCode",dom];//获得条形码和input框
    // console.log(arr);
    // console.log(dom.value)//dom的值就是条形码
    // console.log(onlyKey(arr[0],arr[1]))
    let arr1=searchKey(arr,'product')//获得条形码是输入的，所有的属性
    // console.log(arr1);
    // console.log(arr1[0].name);

   if (panduan(dom.value)) {
       //panduan这个函数，返回的值不同，
       //判断1返回是否相同，相同返回true
       //判断2如果相同返回下标
       let xiabiao=panduan1(dom.value)//获取条码的下标
       // $(".shuzi").eq(xiabiao).text(parseInt($(".shuzi").eq(xiabiao).text())+1)//让个数加一
       $(".jiage").eq(xiabiao).text(parseInt(arr1[0].price)*parseInt($(".shuzi").eq(xiabiao).text()))//让单价*个数
    }//相同 改变td的值
    else {
       $(".cbcontent3>div>table>tbody").append(`
                        <tr>
                            <td class="tiaoma">${arr1[0].barCode}</td>
                            <td>${arr1[0].name}</td>
                            <td>${arr1[0].price}</td>
                            <td class="shuzi">
                             <span class="cbfrist">1</span>
                             <span id="cbtianjia1" onclick="cbjia(this)" class="iconfont icon-xiangxia1"></span>
                             <span id="cbtianjia2" onclick="cbjian(this)" class="iconfont icon-xiangxia"></span>
                            </td>
                            <td class="jiage">${arr1[0].price}</td>
                        </tr>`)
    }//渲染表格
    zongjia()
}//向table body 渲染数据
function panduan(obj) {
    for (var i = 0; i < $(".tiaoma").length; i++) {
      if($(".tiaoma").eq(i).text()===obj){
          return true;
      }
    }
}//输入的条码与表格已经有的数据进行判断
function panduan1(obj) {
    for (var i = 0; i < $(".tiaoma").length; i++) {
        if($(".tiaoma").eq(i).text()===obj){
            return i;
        }
    }
}//表格已有数据的下标与当前输入的数据的下标
function zengjia() {
    var tb=$("#cbbiaoge>tbody>tr").clone(true);//先将界面中的table克隆一次
    tb.children()//找到 克隆的这个 tbody下面的tr下面的所有td.
    tb.children(".shuzi").children("span:not(.cbfrist)").hide()
    //children （“选择器”）所有儿子中的 class为.shuzi的 儿子
    //not（传选择器）
    // var cbxin=$($(tb).children()[3]).children()[0]
    // $(cbxin).siblings().hide();
    // console.log($(".shuzi").children("span:not(.cbfrist)"))
    var xuyao=$("#cbzuo>table>tbody")
    xuyao.append(tb)
}//将渲染在界面的table，传递给点击结账出现的界面
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
function zonghe() {
    let obj =$("#cbbiaoge>tbody>tr>td:nth-child(4)")//获的每一行的倒数第二列的值
    // console.log(obj)
    // let sum=0;
    let cbobj=$("#cbbiaoge>tbody>tr>td:nth-child(1)")//获的每一行的第1列的值
    for (let i=0;i<obj.length;i++){
        changeStockNum(cbobj[i].innerText,obj[i].innerText,'sub')
    }//遍历每一行的个数，相加
      $("#cbbiaoge>tbody")[0].innerText=""
      $("#cbzongjijine")[0].innerText=""
}//商品个数的总和
$("#cbcha").on("click",function () {
    $("#cbjiesuan").hide()
    $("#cbzuo>table>tbody")[0].innerHTML=""
    $("#jine")[0].value=""
    $("#zhaoqian")[0].textContent=""
    //console.log($("#zhaoqian"))
    $("#cbyouhuijine")[0].value=""
})//点击小×的时候，结算界面消失，tbody里面的数据清空
function zongjia() {
    var zongjia=document.getElementById("cbzongjijine")//获得显示界面的总价
    // console.log(zongjia.textContent)
    var cbzj=document.getElementById("cbzj");//获得最后的结算界面的总价

    let obj =$("#cbbiaoge>tbody>tr>td:last-child")//获的每一行的最后一列的值
    // console.log(obj)
    let sum=0;
    for (let i=0;i<obj.length;i++){
        sum=sum+parseInt(obj[i].innerText)
        // console.log(obj[i].innerText)//obj[i].innerText是每一行的总价
    }//遍历每一行的总价，相加
    zongjia.innerText=sum;//将总价格赋值给这个span
    cbzj.innerText=sum;//赋值
    return sum;
}//商品的价格总和
function cbjia(obj) {
    $(obj).prev().text(parseInt( $(obj).prev().text())+1)
    let cb_he =$(obj).parent().next()[0]
    //console.log(cb_he)
    let cbdanjia=$(obj).parent().prev()[0].innerText//单价
    let cbgeshu=$(obj).prev()[0].innerText//个数
    var cbhe=parseInt(cbdanjia)*parseInt(cbgeshu)
    cb_he.innerText=cbhe
    zongjia()
}//加号 数量增加
function cbjian(obj) {
    if (parseInt($(obj).prev().prev().text())>1) {
        $(obj).prev().prev().text(parseInt( $(obj).prev().prev().text())-1)
        let cb_he =$(obj).parent().next()[0]
        let cbdanjia=$(obj).parent().prev()[0].innerText//单价
        let cbgeshu=$(obj).parent().children(0)[0].innerText//个数
        var cbhe=parseInt(cbdanjia)*parseInt(cbgeshu)
        cb_he.innerText=cbhe
        zongjia()
    }
    else{
        // console.log($(obj).parent().parent()[0])
        $(obj).parent().parent()[0].innerHTML=""
    }
    zongjia()
}//减号 数量减少
function cb_num(){
    let rifdNum=window.parent.document.location.href.split('?')[1];
    let nameValue=searchKey(['rifd',rifdNum],'members')[0].name;
    $('#cbshouyinyuan>.cbnum')[0].innerText=nameValue.toString()+'';
    $('#cbzuo>.cbnum')[0].innerText=nameValue.toString()+'';//收银员名字 ，apped添加原始
}//获取员工人称



