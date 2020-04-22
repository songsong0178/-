var a = 0;
var dangqian = 0;
var myin;

// var ygfc = [
//     {imgSrc: "../images/头像1.jpg", MiaoShu: '一月最佳员工'},
//     {imgSrc: "../images/头像2.jpg", MiaoShu: '二月最佳员工'},
//     {imgSrc: "../images/头像3.jpg", MiaoShu: '三月最佳员工'},
//     {imgSrc: "../images/头像7.jpg", MiaoShu: '四月最佳员工'},
//     {imgSrc: "../images/头像5.jpg", MiaoShu: '五月最佳员工'},
//     {imgSrc: "../images/头像6.jpg", MiaoShu: '六月最佳员工'},
// ];
var lunbo = [
    {imgSrc: "../images/chaoshi1.png"},
    {imgSrc: "../images/chaoshi2.png"},
    {imgSrc: "../images/chaoshi3.png"},
];



window.onload = function () {

    let year='2020';
    let arr=saleRank(year);
    // =========以下是员工风采=================================
    // console.log(arr.length)
    $("#data").before(`
                <div class="row ygfc"></div>
                <div class="row ygfc"></div>
        `);
    for (let i = 0; i < arr.length; i++) {
        if(i%3===0&&i<18){
            $("#myindex>div:first-child").append(`        
                    <div class="col-lg-2">
                        <div>
                            <img class="bestworker" src="${arr[i+1]}" alt="">
                            <div>${arr[i]}</div>
                            <div>${year}年总销量：${arr[i+2]}</div>
                        </div>
                    </div>          
          `)
        }if(i%3===0&&i>=18&&i<36){
            $("#myindex>div:nth-child(2)").append(`         
                    <div class="col-lg-2">
                        <div>
                            <img class="bestworker" src="${arr[i+1]}" alt="">
                            <div>${arr[i]}</div>
                            <div>${year}年总销量：${arr[i+2]}</div>
                        </div>
                    </div>          
          `)
        }
    }

    xuanran(lunbo);
    beginlb();

};
// window.onload = function () {
//     for (let i = 0; i <= lunbo.length; i++) {
//         $("#lunbo").append(`
//                 <div class="col-sm-2">
//                     <img class="bestworker" src=${ygfc[i].imgSrc} alt="">
//                     <div>${ygfc[i].MiaoShu}</div>
//                 </div>
//                 `)
//     }
// };

// =========================以下是轮播===========================================

function xuanran(data) {
    data.forEach(function (item, i) {
        $("#lunbo").append(`
            
          <div><img src="${item.imgSrc}" alt=""></div>
        
        `)
    });
}
$("#lbspan>div>span").on('click', function () {
    a=dianji(this)
});

function dianji(obj) {

    if (typeof obj ==='number') {
        let intextnum = obj;
        // console.log(intextnum)
        $('#lunbo').children().eq(dangqian).css({
            animation: 'fromLtoR1 .5s linear forwards',
        });
        // console.log(3)
        $('#lunbo').children().eq(intextnum).css({
            animation: 'fromLtoR2 .5s linear forwards',
        });
        dangqian = intextnum;
        return intextnum;
    } else {
        let intextnum = obj.innerText - 1;
        // console.log(intextnum)
        // console.log(2)
        $(obj).parent().parent().prev().children().children().eq(dangqian).css({
            animation: 'fromLtoR1 .5s linear forwards',
        });
        $(obj).parent().parent().prev().children().children().eq(intextnum).css({
            animation: 'fromLtoR2 .5s linear forwards',
        });
        dangqian = intextnum;
        // console.log(intextnum)
        return intextnum;
    }
}

function dianji1(obj) {

    if (typeof obj ==='number') {
        let intextnum = obj;
        // console.log(intextnum)
        $('#lunbo').children().eq(dangqian).css({
            animation: 'fromRtoL1 .5s linear forwards',
        });
        // console.log(3)
        $('#lunbo').children().eq(intextnum).css({
            animation: 'fromRtoL2 .5s linear forwards',
        });
        dangqian = intextnum;

        return intextnum;
    } else {
        let intextnum = obj.innerText - 1;
        // console.log(intextnum)
        // console.log(2)
        $(obj).parent().parent().prev().children().children().eq(dangqian).css({
            animation: 'fromRtoL1 .5s linear forwards',
        });
        $(obj).parent().parent().prev().children().children().eq(intextnum).css({
            animation: 'fromRtoL2 .5s linear forwards',
        });
        dangqian = intextnum;
        // console.log(intextnum)
        return intextnum;
    }
}
$("#lbspan>span:nth-of-type(2)").on('click', function f() {
    right()
});

function right() {
    let num;

    if(dangqian===2){
        num=0;
        dianji(num);
        dangqian=num;
    }else {
        num = dangqian+1;
        dianji(num);
        dangqian=num;
    }
}

$("#lbspan>span:nth-of-type(1)").on('click', function f() {
    let num;
    if(dangqian===0){
        num=2;
        dianji1(num);
        dangqian=num;
    }else {
        num = dangqian-1;
        dianji1(num);
        dangqian=num;
    }
});

function beginlb() {
    myin=setInterval(function () {
        right()
    },3000)
}

function stoplb() {
    clearInterval(myin)
}

$("#lunbo").on({
    mouseover(){
        stoplb();
        $("#lbspan > span:nth-of-type(1)").css({
            left:'0',
            transition: 'all .5s linear',
            opacity:'1'

        });
        $("#lbspan > span:nth-of-type(2)").css({
            right:'0',
            transition: 'all .5s linear',
            opacity:'1'

        });
        $("#lbspan > div > span").css({
            transition: 'all .5s linear',
            opacity:'1'

        })
    },

    mouseout(){
        beginlb();
        $("#lbspan > span:nth-of-type(1)").css({
            left: '.5rem',
            transition: 'all .5s linear',
            opacity: '0'
        });
        $("#lbspan > span:nth-of-type(2)").css({
            right:'.5rem',
            transition: 'all .5s linear',
            opacity:'0'

        });
        $("#lbspan > div > span").css({
            transition: 'all .5s linear',
            opacity:'0'

        })

    }
});

//移入轮播上面的icon其他icon不消失的渲染函数
function yiru() {
    $("#lbspan > span:nth-of-type(1)").css({
        left:'0',
        transition: 'all .5s linear',
        opacity:'1'

    });
    $("#lbspan > span:nth-of-type(2)").css({
        right:'0',
        transition: 'all .5s linear',
        opacity:'1'
    });
    $("#lbspan > div > span").css({
        transition: 'all .5s linear',
        opacity:'1'

    })
}

$("#lbspan>div>span").on({
    mouseover(){
        stoplb()
        yiru()
    }
});
$("#lbspan>span").on({
    mouseover(){
        stoplb()
        yiru()
    }
});
