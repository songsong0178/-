/*============================得到浏览器本地的各项数据=============================*/
let activityData = JSON.parse(sessionStorage.getItem('activityKey'));
let productData = JSON.parse(sessionStorage.getItem('productKey'));
let membersData = JSON.parse(sessionStorage.getItem('membersKey'));
let salesData = JSON.parse(sessionStorage.getItem('salesKey'));
let typesData = JSON.parse(sessionStorage.getItem('typesKey'));

/*===================================增删改查========================================*/

//增加一条数据
function addKey(arr, which) {
    //得到数据表的完整空对象
    let data = createNullObj(which);
    //合并数据,得到完整的要添加的对象
    Object.assign(data, moreKey(arr));
    //判断需要操作的数据表是谁,得到新的数据表
    whichData(which).push(data);
    //update
    upData(whichData(which), which);
}

//删除数据
function deleteKey(arr, which) {
    //找到对应数据表
    let data = whichData(which);
    //查到符合条件的所有对象元素所构成的数组
    let arrObj = searchKey(arr, which);
    //得到删除后的结果
    for (let obj of arrObj) {
        for (let i = 0; i < data.length; i++) {
            if (obj.activeNum === data[i].activeNum) {
                data.splice(i, 1);
                break;
            }
        }
    }
    //updata
    upData(data, which);
}

//修改数据
function changeKey(arrBefore, arrAfter, which) {
    /*局限：只能修改一条数据*/
    //先查询到对应的数据，仅能匹配一条数据（返回的是数组）
    let oldKey = searchKey(arrBefore, which);
    //得到需要修改的属性(返回的是对象)
    let changeKeyValue = moreKey(arrAfter);
    //得到修改后的对象,此处更新的是本页面的顶部的Data
    oldKey.forEach(item => Object.assign(item, changeKeyValue));
    //更新数据
    upData(whichData(which), which);

}

//查找数据
function searchKey(arr, which) {
    //找到对应数据表
    let data = whichData(which);
    //得到查找的条件，对象
    let obj = moreKey(arr);
    //利用遍历得到对应数据
    let getArr = data;
    let gotArr = [];
    for (let dataObj of getArr) {
        let sum = 0;
        //dataObj为数据表内的元素，即每一个对象
        for (let key in obj) {
            //key:属性名,字符串
            //obj[key]:属性值
            if (obj[key] === dataObj[key]) sum++;
            else break;
        }
        if (sum === Object.keys(obj).length) gotArr.push(dataObj);
    }
    return [...new Set(gotArr)];//此处为数组去重
}

/*==================================定制方法区=====================================*/

//员工销量排行(月份/年份)//返回数组：三个元素一组，名字，图片，年销售总量
function saleRank(year) {
    year = year.toString();
    let arr = searchKey(['year', year], 'sales');
    let menNum = [];
    arr.forEach(obj => menNum.push(obj.id));
    menNum = [...new Set(menNum)];
    let gotArr = new Map();
    let sortArr = [];
    for (let i = 0; i < menNum.length; i++) {
        let sum = 0;
        arr.forEach(obj => (obj.id === menNum[i]) ? (sum = sum + parseInt(obj.sale)) : {});
        gotArr.set(menNum[i], sum);
    }
    //由大到小排序
    for (let i = 1; i <= gotArr.size; i++) {
        let num = 0;
        let maxKey = '';
        gotArr.forEach((value, key) => {
            if (parseInt(value) >= num) {
                num = value;
                maxKey = key;
            }
        });
        gotArr.delete(maxKey);
        sortArr.push(...[searchKey(['id', maxKey], 'members')[0].name, searchKey(['id', maxKey], 'members')[0].img, num.toString()]);
        i--;
    }
    return sortArr
    //return gotArr
}

//得到【条件1，条件2，。。。】销售总量//返回Map数据
function monthSales(arr) {
    let find = searchKey(arr, 'sales');
    let gotArr = new Map();
    for (let j = 1; j <= 12; j++) {
        let sum = 0;
        for (let i of find) {
            if (parseInt(i.month) === j) {
                sum = sum + parseInt(i.sale);
            }
        }
        gotArr.set(j, sum)
    }
    return gotArr;
}

//查询二级商品类别//返回数组
function searchClassTwo(value) {
    let getArr = searchKey(['classOne', value], 'types');
    let classTwoValue = [];
    getArr.forEach(item => classTwoValue.push(item.classTwo));
    return [...new Set(classTwoValue)];
}

//获取下拉框，单选框的值//返回单个字符串
function getChooseValue(chooseName, selector) {
    let value;
    let tag = document.querySelectorAll(selector);
    if (chooseName === 'radio') {
        for (let i = 0; i < tag.length; i++) {
            if (tag[i].checked) value = tag[i].value;
        }
    } else if (chooseName === 'option') {
        for (let i = 0; i < tag.length; i++) {
            if (tag[i].selected) value = tag[i].value;
        }
    } else {
        console.log('参数1为‘radio/option’其一，参数2为该对象的选择器，示例：‘#select>option’')
    }
    return value;
}

//改变单选框与下拉框的选中状态
function changeChooseValue(chooseName, selector, value) {
    let tag = document.querySelectorAll(selector);
    if (chooseName === 'radio') {
        for (let i = 0; i < tag.length; i++) {
            if (value === tag[i].value) tag[i].checked = true;
        }
    } else if (chooseName === 'option') {
        for (let i = 0; i < tag.length; i++) {
            if (value === tag[i].value) tag[i].select = true;
        }
    } else {
        console.log('参数1为‘radio/option’其一，参数2为该对象的选择器，示例：‘#select>option’,参数3为对应的字符串值')
    }
}

//库存加减
function changeStockNum(barCode, num, addOrSub) {
    let arr = ['barCode', barCode];
    let sum = parseInt(searchKey(arr, 'product')[0].stockNum);
    let arrBefore = ['barCode', barCode, 'stockNum', sum];
    let arrAfter = [];
    if (addOrSub === 'add') {
        sum = sum + parseInt(num);
        arrAfter = ['barCode', barCode, 'stockNum', sum];
        changeKey(arrBefore, arrAfter, 'product')
    } else if (addOrSub === 'sub') {
        sum = sum - parseInt(num);
        arrAfter = ['barCode', barCode, 'stockNum', sum];
        changeKey(arrBefore, arrAfter, 'product')
    } else {
        console.log('参数1，条码的节点、选择器或者具体条码；参数2，加减的数量；参数3，加？减？')
    }
}

//判断元素节点、属性节点里面或者选择器的指向是否存在空//返回布尔值
function tagIsNull(arr) {
    let isTrue = false;
    arr.forEach(item => Boolean(isWhat(item)) ? {} : isTrue = true);
    return isTrue;
}

//得到选中部分的节点，如果是radio，选择器要传name属性值//返回节点
function getChooseNode(chooseName, selector) {
    let tag;
    if (chooseName === 'radio') {
        tag = document.getElementsByName(selector);
        for (let i = 0; i < tag.length; i++) {
            if (tag[i].checked) tag = tag[i];
        }
    } else if (chooseName === 'option') {
        tag = document.querySelectorAll(selector);
        for (let i = 0; i < tag.length; i++) {
            if (tag[i].selected) tag = tag[i];
        }
    } else {
        console.log('参数1为‘radio/option’其一，参数2为该对象的选择器，示例：‘name值/#select>option’')
    }
    return tag;
}

/*==================================基础方法区==============================*/

//根据属性名与属性值//返回只有一个属性的对象
function onlyKey(proName, what) {
    //得到传入内容的文本
    let text = isWhat(what);
    //返回一个对象，包含属性名和属性值
    return {[proName]: text};
}

//根据参数arr//返回对象
function moreKey(arr) {
    if (arr.length % 2 === 0 && arr.length > 0) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) Object.assign(obj, onlyKey(arr[i], arr[i + 1]));
        }
        //返回对象
        return obj;
    } else {
        console.log('此方法的参数必须为数组，且数组格式为[‘属性名1’，‘对应值的选择器’，‘属性名2’，‘对应值的选择器’]，属性名与对应属性值成对排列并以数组传入');
    }
}

//根据传入的字符串判断是哪一个数据表，并创建对应的空对象//返回对象
function createNullObj(which) {
    if (which === 'members') {
        return {
            rifd: '',
            cardPwd: '',
            id: '',
            name: '',
            idCard: '',
            birth: '',
            state: '',
            joinDate: '',
            level: '',
            img: '',
            sex: '',
            tel: ''
        };
    } else if (which === 'product') {
        return {barCode: '', classOne: '', classTwo: '', name: '', unit: '', price: '', stockNum: '', describe: ''};
    } else if (which === 'activity') {
        return {activeNum: '', activeName: '', type: '', startTime: '', endTime: '', note: '', state: ''};
    } else if (which === 'sales') {
        return {id: '', year: '', month: '', classOne: '', classTwo: '', sale: ''};
    } else if (which === 'types') {
        return {dataTable: '', type: '', classOne: '', classTwo: '', describe: '', id: ''};
    } else {
        console.log('此方法which的参数必须为（‘members’/‘product’/‘activity’/‘sales’/‘types’）其一');
    }
}

//根据传入的字符串判断是哪一个数据表//返回顶部的JSON数据表
function whichData(which) {
    if (which === 'members') return membersData;
    else if (which === 'product') return productData;
    else if (which === 'activity') return activityData;
    else if (which === 'sales') return salesData;
    else if (which === 'types') return typesData;
    else {
        console.log('此方法which的参数必须为（‘members’/‘product’/‘activity’/‘sales’/‘types’）其一');
    }
}

//更新数据
function upData(data, which) {
    let dataJson = JSON.stringify(data);
    sessionStorage.setItem(which + 'Key', dataJson);
}

//正则判断是否为纯汉字//返回布尔值
function isChinese(temp) {
    let str = temp.toString().length;
    let rule = new RegExp("\[\u4e00-\u9fa5]{" + str + "}", "g");
    //console.log(rule); ///[\u4e00-\u9fa5]{99}/g;
    return rule.test(temp)
}

//正则判断没有英文//返回布尔值
function isNotEnglish(temp) {
    let regex = /^[^a-zA-Z]+$/;
    return regex.test(temp)
}

//正则判断是否为纯数字//返回布尔值
function isNumber(num) {
    let str = num.toString().length;
    //console.log(typeof num)  //num与string都可以
    let rule = new RegExp("\[0-9]{" + str + "}", "g");
    //console.log(rule)//    /[0-9]{18}/g
    return rule.test(num)
}

//正则判断是否为图片路径//返回布尔值
function isImgSrc(temp) {
    let regex = /^[../]{3}/;
    return regex.test(temp)
    //return temp.match(regex)
}

//根据给定节点获得主节点的值//返回字符串
function getNodeValue(node) {
    let text;
    //如果节点下有默认值，则得到默认值
    if (node.value !== undefined && node.value !== null) {
        text = node.value;
    } else {
        //克隆原节点
        let nodeClone = node.cloneNode(true);
        //删除克隆节点的子节点
        for (let i = 0; i < nodeClone.children.length; i++) {
            nodeClone.children[i].remove();
            i--;
        }
        //得到该节点的文本
        text = nodeClone.textContent.toString().trim();
        /*let value=$(selector)
        .clone()    //复制元素
        .children() //获取所有子元素
        .remove()   //删除所有子元素
        .end()  //回到选择的元素
        .text();//获取文本值*/
    }
    return text;
}

//支持格式：元素节点/属性节点/路径值/非英文值/选择器//返回字符串
function isWhat(what) {
    let text;//文本容器
    if (what.nodeType === 1) {
        //传入的是元素节点
        text = getNodeValue(what);
    } else if (what.nodeType === 2) {
        //传入的是属性节点
        text = what.nodeValue;
    } else if (isImgSrc(what)) {
        //传入的是路径值
        text = what.toString().trim();
    } else if (isNotEnglish(what)) {
        //传入的是非英文值
        text = what.toString().trim();
    } else {
        //传入的是选择器
        let node = document.querySelector(what);
        //得到选择器下的value值或者主节点值
        text = getNodeValue(node);
    }
    return text;
}