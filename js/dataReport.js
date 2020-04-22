let whichType;
// 选择方式的显示隐藏
$("#btnWay").click(function () {
  $("#wayBox").fadeToggle(500);
})
//选择员工的统计方式
$("#wayBox>div:nth-of-type(2)").click(
  function () {
    whichType = 1;
    $("#staff").show(1000);
    $("#type1,#type2,#type1Box,#type2Box").hide();
    $(this).parent().hide(1000)
  })
//选择类别的统计方式
$("#wayBox>div:nth-of-type(3)").click(
  function () {
    whichType = 2;
    $("#staff").hide();
    // 情况员工工号
    $("#inputStaff").val("请输入员工工号");
    $("#type1>span:first-child")[0].innerText = "一类商品";
    $("#type2>span:first-child")[0].innerText = "二类商品";
    $("#type1,#type2").fadeIn(2000);
    $(this).parent().fadeOut(1000)
  })




// 选择年份的显示隐藏
var yearnnum = 0;
$("#yearBtn").click(function () {
  if (yearnnum == 0) {
    $("#yearBox").fadeIn(500);
    arrYear.forEach(function (item, i) {
      $("#yearBox").append(`
    <div class="addYear" onclick="DataReportYEAR(this)">${item}</div>
    `)
    })
    yearnnum = 1;
  }
  else if (yearnnum == 1) {
    $("#yearBox").hide(500);
    $("#yearBox>.addYear").remove();
    yearnnum = 0;
  }
})

// 类别一的选择的显示隐藏
var typeOnenum = 0;
$("#type1").click(function () {
  if (typeOnenum == 0) {
    $("#type1Box").fadeIn(500);
    typeOne.forEach(function (item, i) {
      $("#type1Box").append(`
    <div class="addYear" onclick="DataReportTYPE(this)">${item}</div>
    `)
    })
    typeOnenum = 1;
  }
  else if (typeOnenum == 1) {
    $("#type1Box").hide(500);
    $("#type1Box>.addYear").remove();
    typeOnenum = 0;
  }
})

// 类别二的选择的显示与隐藏
var typeTwonum = 0;
$("#type2").click(function () {
  // $("#type2Box").fadeToggle(500);
  if (typeTwonum == 0 && $("#type1>span:first-child")[0].innerText != "一类商品") {
    $("#type2Box").fadeIn(500);
    typeTwo.forEach(function (item, i) {
      $("#type2Box").append(`
    <div class="addYear" onclick="DataReportTYPETwo(this)">${item}</div>
    `)
    })
    typeTwonum = 1;
  }
  else if (typeTwonum == 1) {
    $("#type2Box").hide(500);
    $("#type2Box>.addYear").remove();
    typeTwonum = 0;
  }
})

// 输入员工工号的input输入框的显示隐藏
$("#inputStaff").focus(
  function () {
    if ($("#inputStaff").val() == "请输入员工工号") {
      $("#inputStaff").val('');
    }
  }
)
$("#inputStaff").blur(
  function () {
    var len = $("#inputStaff").val().length;
    if ($("#inputStaff").val() == '') {
      $("#inputStaff").val("请输入员工工号");
    }
    if($("#inputStaff").val() != ''&& $("#inputStaff").val()!="请输入员工工号"){
      shujufengxing()
    }
  }
)


// 数据报表查看按钮
var dataReportNum = 0
$("#Btn").click(function () {
  shujufengxing()
})

// 取消按钮
$("#BtnClear").click(function () {
  $("#dataReport").hide();
  myChart.clear(option)
})



var arrYear = [];
var arrMonth = [];
var arrSale = [];
var typeOne = [];
var typeTwo = [];
window.onload = function () {
  //年份
  salesData.forEach(item => arrYear.push(item.year))
  arrYear = [...new Set(arrYear)];
  arrYear.sort(function (a, b) {
    return a - b;
  });
  // 类别一
  salesData.forEach(item => typeOne.push(item.classOne))
  typeOne = [...new Set(typeOne)];
  typeOne.sort();


  //月份 
  salesData.forEach(item => arrMonth.push(item.month))
  // 去重
  arrMonth = [...new Set(arrMonth)];
  // 排序
  arrMonth.sort(function (a, b) {
    return a - b;
  });
}

// 具体年份的点击事件
function DataReportYEAR(thisDom) {
  // 年份的获取
  //thisDom.value
  // dataReport(obj)
  let text = thisDom.innerText;
  //console.log(text)
  $('#yearBtn>span:first-child')[0].innerText = text;
  // 隐藏删除年份的数据
  yearnnum = 0;
  if (whichType === 1) {
    if ($("#inputStaff").val() == "请输入员工工号") {
      $("#yearBox>.addYear").remove();
      $('#yearBox').hide();
    } else if ($("#inputStaff").val() != "请输入员工工号") {
      $("#yearBox>.addYear").remove();
      $('#yearBox').hide();
      shujufengxing();
    }
  } else if (whichType === 2) {
    if ($('#type2>span:first-child')[0].innerText == "二类商品" && $('#type1>span:first-child')[0].innerText == "一类商品") {
      $("#yearBox>.addYear").remove();
      $('#yearBox').hide();
    } else {
      $("#yearBox>.addYear").remove();
      $('#yearBox').hide();
      shujufengxing();
    }
  }


}

// 具体类别一的点击事件
function DataReportTYPE(thisDom) {
  let text = thisDom.innerText;
  // console.log(text)
  $('#type1>span:first-child')[0].innerText = text;
  typeOnenum = 0;
  if ($('#type2>span:first-child')[0].innerText == "二类商品") {
    $('#type1Box').hide();
    $("#type1Box>.addYear").remove();
    typeTwo = searchClassTwo($('#type1>span:first-child')[0].innerText);
    $('#type2>span:first-child')[0].innerText = typeTwo[0];
    shujufengxing()
    // 获取类别二的数据
    typeTwo = searchClassTwo($('#type1>span:first-child')[0].innerText);
  } else if ($('#type2>span:first-child')[0].innerText != "二类商品") {
    $('#type1Box').hide();
    $("#type1Box>.addYear").remove();
    // 获取类别二的数据
    typeTwo = searchClassTwo($('#type1>span:first-child')[0].innerText);
    $('#type2>span:first-child')[0].innerText = typeTwo[0];
    shujufengxing()
  }
}
// 类别二的点击事件
function DataReportTYPETwo(thisDom) {
  let text = thisDom.innerText;
  // console.log(text)
  $('#type2>span:first-child')[0].innerText = text;
  typeTwonum = 0;
  $('#type2Box').hide();
  $("#type2Box>.addYear").remove();
  shujufengxing()
}

// 数据报表的显示
var myChart = echarts.init(document.getElementById("dataReport"), "walden");
var option;
var optionText;
var color = ['#59759F', '#59C4E6', '#EDAFDA', '#93B7E3', '#59759F', '#59C4E6', '#EDAFDA', '#93B7E3', '#59759F', '#59C4E6', '#EDAFDA', '#93B7E3'];
function dataReport(arrMonth, arrSale) {
  if (whichType === 1) {
    //某人某年的每月销售总额
    let name = $("#inputStaff").val();
    // console.log(name)
    let arrName = ['id', name]
    var a = searchKey(arrName, 'members');
    // console.log(a[0].name)
    optionText = "员工" + a[0].name;//+ $('#yearBtn>span:first-child')[0].innerText + "年每月的销量"
  } else if (whichType === 2) {
    //某类型某年的每月销售总额
    let type2name = $('#type2>span:first-child')[0].innerText;
    // console.log(type2name)
    let arrName = ['classTwo', type2name]
    var a = searchKey(arrName, 'sales');
    // console.log(a[0].classTwo)
    optionText = a[0].classTwo + "类型商品";//+ $('#yearBtn>span:first-child')[0].innerText + "年" + "每月的销量"
  }
  option = {
    title: {
      text: optionText
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c}"
    },
    legend: {
      data: ["条形图销量", "折线图销量"]
    },
    xAxis: {
      data: arrMonth
    },
    yAxis: {},
    series: [
      {
        name: "条形图销量",
        type: "bar",
        data: [
          {
            value: arrSale[0], 
            itemStyle: {
              normal: {
                color: color[0]
              }
            },
          },
          {
            value: arrSale[1],
            itemStyle: {
              normal: {
                color: color[1]
              }
            }
          },
          {
            value: arrSale[2],
            itemStyle: {
              normal: {
                color: color[2]
              }
            }
          },
          {
            value: arrSale[3],
            itemStyle: {
              normal: {
                color: color[3]
              }
            }
          },
          {
            value: arrSale[4],
            itemStyle: {
              normal: {
                color: color[4]
              }
            }
          },
          {
            value: arrSale[5],
            itemStyle: {
              normal: {
                color: color[5]
              }
            }
          },
          {
            value: arrSale[6],
            itemStyle: {
              normal: {
                color: color[6]
              }
            }
          },
          {
            value: arrSale[7],
            itemStyle: {
              normal: {
                color: color[7]
              }
            }
          },
          {
            value: arrSale[8],
            itemStyle: {
              normal: {
                color: color[8]
              }
            }
          },
          {
            value: arrSale[9],
            itemStyle: {
              normal: {
                color: color[9]
              }
            }
          },
          {
            value: arrSale[10],
            itemStyle: {
              normal: {
                color: color[10]
              }
            }
          },
          {
            value: arrSale[11],
            itemStyle: {
              normal: {
                color: color[11]
              }
            }
          },
        ],

        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

            textStyle: {
              align: 'center',
              baseline: 'middle',
              fontFamily: '微软雅黑',
              fontSize: 14,
              // fontWeight: 'bolder'
            }
          }
        }
      },
      {
        name: "折线图销量",
        type: "line",
        data: arrSale
      }
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  // myChart.clear(option);
}

//报表数据的更新
function shujufengxing() {
  let arr;
  if (whichType === 1) {
    //某人某年的每月销售总额
    arr = ['year', '#yearBtn>span:first-child', 'id', '#inputStaff'];
  } else if (whichType === 2) {
    //某类型某年的每月销售总额
    arr = ['year', '#yearBtn>span:first-child', 'classTwo', '#type2>span:first-child'];
  }
  let map = monthSales(arr)
  let arrMonth = [];
  let arrSale = [];
  for (let key of map.keys()) {
    //key就是每一个键名
    arrMonth.push(key + '月');
    //map.get(key)得到键名对应的键值
    arrSale.push(map.get(key));
  }
  // 数据传入echarts
  $("#dataReport").show();
  dataReport(arrMonth, arrSale);
}