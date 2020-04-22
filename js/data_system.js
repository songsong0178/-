/*================================数据区===========================*/
//员工数据
let members = [
    //RFID卡号，RFID卡密码，工号，姓名，身份证，出生日期，在职状态，入职日期，操作等级，照片，性别,电话
    {
        rifd: '001',
        cardPwd: '001',
        id: '01',
        name: '张三',
        idCard: '123023199710251111',
        birth: '20200101',
        state: '在职',
        joinDate: '20020101',
        level: '1',
        img: '../images/1.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '002',
        cardPwd: '002',
        id: '02',
        name: '李四',
        idCard: '123023199710252222',
        birth: '20120101',
        state: '休假',
        joinDate: '20200101',
        level: '2',
        img: '../images/2.jpg',
        sex: '女',
        tel: '13808039999',
    },
    {
        rifd: '003',
        cardPwd: '003',
        id: '03',
        name: '王五',
        idCard: '123023199710253333',
        birth: '20200101',
        state: '在职',
        joinDate: '20140101',
        level: '3',
        img: '../images/3.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '004',
        cardPwd: '004',
        id: '04',
        name: '赵六',
        idCard: '123023199710254444',
        birth: '20200101',
        state: '在职',
        joinDate: '20130101',
        level: '3',
        img: '../images/4.jpg',
        sex: '女',
        tel: '13808039999',
    },
    {
        rifd: '005',
        cardPwd: '005',
        id: '05',
        name: '夏目漱石',
        idCard: '123023199710255555',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/5.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '006',
        cardPwd: '006',
        id: '06',
        name: '川建国',
        idCard: '123013199710256666',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/6.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '007',
        cardPwd: '007',
        id: '07',
        name: '迈克',
        idCard: '123023199710257777',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/7.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '008',
        cardPwd: '008',
        id: '08',
        name: 'jojo',
        idCard: '123023199710258888',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/8.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '009',
        cardPwd: '009',
        id: '09',
        name: '奥特曼',
        idCard: '123023199710259999',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/9.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '010',
        cardPwd: '010',
        id: '10',
        name: '草履虫',
        idCard: '123023199710250000',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/10.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '011',
        cardPwd: '011',
        id: '11',
        name: '维纳斯',
        idCard: '123456789987654321',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/11.jpg',
        sex: '女',
        tel: '13808039999',
    },
    {
        rifd: '012',
        cardPwd: '012',
        id: '12',
        name: 'Mars',
        idCard: '543210202001011314',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/12.jpg',
        sex: '女',
        tel: '13808039999',
    },
    {
        rifd: '013',
        cardPwd: '013',
        id: '13',
        name: '^v^',
        idCard: '543210202001011234',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/13.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '014',
        cardPwd: '014',
        id: '14',
        name: '无名氏',
        idCard: '012345202001011111',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/14.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '015',
        cardPwd: '015',
        id: '15',
        name: '皮卡丘',
        idCard: '012345202001011111',
        birth: '20080101',
        state: '离职',
        joinDate: '20200101',
        level: '2',
        img: '../images/15.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '016',
        cardPwd: '016',
        id: '16',
        name: '魔变',
        idCard: '012345202001011111',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '1',
        img: '../images/16.jpg',
        sex: '女',
        tel: '13808039999',
    },
    {
        rifd: '017',
        cardPwd: '017',
        id: '17',
        name: '曹操',
        idCard: '012345202001011111',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '2',
        img: '../images/17.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '018',
        cardPwd: '018',
        id: '18',
        name: '孙悟空',
        idCard: '012345202001011111',
        birth: '20200101',
        state: '离职',
        joinDate: '20200101',
        level: '2',
        img: '../images/18.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '019',
        cardPwd: '019',
        id: '19',
        name: '白龙马',
        idCard: '012345202001011111',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '2',
        img: '../images/19.jpg',
        sex: '女',
        tel: '13808039999',
    },
    {
        rifd: '020',
        cardPwd: '020',
        id: '20',
        name: '无名氏1',
        idCard: '012345202001011111',
        birth: '20200101',
        state: '在职',
        joinDate: '20200101',
        level: '3',
        img: '../images/20.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '021',
        cardPwd: '021',
        id: '21',
        name: '佚名',
        idCard: '012345202001011111',
        birth: '19980101',
        state: '在职',
        joinDate: '20200101',
        level: '3',
        img: '../images/21.jpg',
        sex: '男',
        tel: '13808039999',
    },
    {
        rifd: '022',
        cardPwd: '022',
        id: '22',
        name: '三毛',
        idCard: '012345202001011111',
        birth: '20200101',
        state: '在职',
        joinDate: '19950101',
        level: '2',
        img: '../images/12.jpg',
        sex: '女',
        tel: '13808039999',
    }
];
//商品数据
let product = [
    //条码，一级商品类别，二级商品类别，商品名称，单位，当前售价，库存，描述
    {
        barCode: '001',
        classOne: '日常用品',
        classTwo: '洗漱品',
        name: '牙刷',
        unit: '只',
        price: '10',
        stockNum: '100',
        describe: '杭州'
    },
    {
        barCode: '002',
        classOne: '日常用品',
        classTwo: '洗漱品',
        name: '牙膏',
        unit: '只',
        price: '20',
        stockNum: '100',
        describe: '杭州'
    },
    {
        barCode: '003',
        classOne: '日常用品',
        classTwo: '洗漱品',
        name: '毛巾',
        unit: '张',
        price: '20',
        stockNum: '100',
        describe: '成都'
    },
    {
        barCode: '004',
        classOne: '日常用品',
        classTwo: '护理品',
        name: '防晒霜',
        unit: '瓶',
        price: '100',
        stockNum: '100',
        describe: '杭州'
    },
    {
        barCode: '005',
        classOne: '日常用品',
        classTwo: '护理品',
        name: '口红',
        unit: '只',
        price: '600',
        stockNum: '100',
        describe: '成都'
    },
    {
        barCode: '006',
        classOne: '日常用品',
        classTwo: '护理品',
        name: '面乳',
        unit: '瓶',
        price: '100',
        stockNum: '100',
        describe: '杭州'
    },
    {
        barCode: '007',
        classOne: '玩具',
        classTwo: '棋类',
        name: '象棋',
        unit: '副',
        price: '5',
        stockNum: '100',
        describe: '杭州'
    },
    {
        barCode: '008',
        classOne: '玩具',
        classTwo: '积木类',
        name: '儿童积木',
        unit: '盒',
        price: '50',
        stockNum: '100',
        describe: '广州'
    },
    {
        barCode: '009',
        classOne: '饮食类',
        classTwo: '饮料',
        name: '矿泉水',
        unit: '瓶',
        price: '2',
        stockNum: '100',
        describe: '杭州'
    },
    {
        barCode: '010',
        classOne: '饮食类',
        classTwo: '饮料',
        name: '牛奶',
        unit: '瓶',
        price: '5',
        stockNum: '100',
        describe: '北京'
    },
    {
        barCode: '011',
        classOne: '饰品',
        classTwo: '首饰',
        name: '项链',
        unit: '串',
        price: '6666',
        stockNum: '100',
        describe: '广州'
    },
    {
        barCode: '012',
        classOne: '饰品',
        classTwo: '珠宝',
        name: '戒指',
        unit: '对',
        price: '9999',
        stockNum: '100',
        describe: '北京'
    },
    {
        barCode: '013',
        classOne: '饮食类',
        classTwo: '小零食',
        name: '棒棒糖',
        unit: '个',
        price: '0.5',
        stockNum: '100',
        describe: '杭州'
    },
    {
        barCode: '014',
        classOne: '饮食类',
        classTwo: '小零食',
        name: '辣条',
        unit: '包',
        price: '1',
        stockNum: '100',
        describe: '北京'
    },
    {
        barCode: '015',
        classOne: '饮食类',
        classTwo: '小零食',
        name: '薯片',
        unit: '包',
        price: '3',
        stockNum: '100',
        describe: '杭州'
    },
    {
        barCode: '016',
        classOne: '饮食类',
        classTwo: '小零食',
        name: '口香糖',
        unit: '个',
        price: '1.5',
        stockNum: '100',
        describe: '成都'
    },
    {
        barCode: '017',
        classOne: '饮食类',
        classTwo: '小零食',
        name: '牛肉干',
        unit: '包',
        price: '15',
        stockNum: '100',
        describe: '成都'
    },
];
//活动数据
let activity = [
    //活动编号，活动名称，类别，开启时间，结束时间，备注，状态
    {
        activeNum: '01',
        activeName: '1.1元旦节新品优惠',
        type: '打折',
        startTime: '2020年1月1日',
        endTime: '2020年1月2日',
        note: '持续一天',
        state: '开启'
    },
    {
        activeNum: '02',
        activeName: '5.1五一劳动节大放血',
        type: '促销',
        startTime: '2020年5月1日',
        endTime: '2020年5月2日',
        note: '持续一天',
        state: '关闭'
    },
    {
        activeNum: '03',
        activeName: '12.12剁手节',
        type: '打折',
        startTime: '2020年12月12日',
        endTime: '2020年12月13日',
        note: '持续一天',
        state: '关闭'
    },
    {
        activeNum: '04',
        activeName: '12.31年末大清仓',
        type: '促销',
        startTime: '2020年12月30日',
        endTime: '2020年12月31日',
        note: '持续一天',
        state: '关闭'
    }
];
//销量数据
let sales = [
    //员工工号，年份，月份，一级，二级，销量
    {id: '01', year: '2019', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2019', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2019', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2019', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2019', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2019', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},

    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '2', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2020', month: '3', classOne: '日常用品', classTwo: '洗漱品', sale: '200'},
    {id: '01', year: '2020', month: '4', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2020', month: '5', classOne: '日常用品', classTwo: '洗漱品', sale: '150'},
    {id: '01', year: '2020', month: '6', classOne: '日常用品', classTwo: '洗漱品', sale: '200'},
    {id: '01', year: '2020', month: '7', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2020', month: '8', classOne: '日常用品', classTwo: '洗漱品', sale: '50'},
    {id: '01', year: '2020', month: '9', classOne: '日常用品', classTwo: '洗漱品', sale: '150'},
    {id: '01', year: '2020', month: '10', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '01', year: '2020', month: '11', classOne: '日常用品', classTwo: '洗漱品', sale: '200'},
    {id: '01', year: '2020', month: '12', classOne: '日常用品', classTwo: '洗漱品', sale: '140'},
    {id: '01', year: '2020', month: '5', classOne: '日常用品', classTwo: '洗漱品', sale: '60'},
    {id: '01', year: '2020', month: '6', classOne: '日常用品', classTwo: '洗漱品', sale: '40'},
    {id: '01', year: '2020', month: '7', classOne: '日常用品', classTwo: '洗漱品', sale: '80'},
    {id: '01', year: '2020', month: '8', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},

    {id: '01', year: '2020', month: '1', classOne: '日常用品', classTwo: '护理品', sale: '1150'},
    {id: '01', year: '2020', month: '2', classOne: '日常用品', classTwo: '护理品', sale: '1100'},
    {id: '01', year: '2020', month: '3', classOne: '日常用品', classTwo: '护理品', sale: '1200'},
    {id: '01', year: '2020', month: '4', classOne: '日常用品', classTwo: '护理品', sale: '1100'},
    {id: '01', year: '2020', month: '5', classOne: '日常用品', classTwo: '护理品', sale: '1150'},
    {id: '01', year: '2020', month: '6', classOne: '日常用品', classTwo: '护理品', sale: '1200'},
    {id: '01', year: '2020', month: '7', classOne: '日常用品', classTwo: '护理品', sale: '1100'},
    {id: '01', year: '2020', month: '8', classOne: '日常用品', classTwo: '护理品', sale: '750'},
    {id: '01', year: '2020', month: '9', classOne: '日常用品', classTwo: '护理品', sale: '650'},
    {id: '01', year: '2020', month: '10', classOne: '日常用品', classTwo: '护理品', sale: '700'},
    {id: '01', year: '2020', month: '11', classOne: '日常用品', classTwo: '护理品', sale: '200'},

    {id: '02', year: '2019', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '02', year: '2019', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},
    {id: '02', year: '2019', month: '1', classOne: '日常用品', classTwo: '洗漱品', sale: '100'},

    {id: '02', year: '2020', month: '1', classOne: '日常用品', classTwo: '护理品', sale: '1100'},
    {id: '02', year: '2020', month: '2', classOne: '日常用品', classTwo: '护理品', sale: '1150'},
    {id: '02', year: '2020', month: '3', classOne: '日常用品', classTwo: '护理品', sale: '1200'},
    {id: '02', year: '2020', month: '4', classOne: '日常用品', classTwo: '护理品', sale: '1300'},
    {id: '02', year: '2020', month: '5', classOne: '日常用品', classTwo: '护理品', sale: '1400'},
    {id: '02', year: '2020', month: '6', classOne: '日常用品', classTwo: '护理品', sale: '1150'},
    {id: '02', year: '2020', month: '7', classOne: '日常用品', classTwo: '护理品', sale: '1600'},
    {id: '02', year: '2020', month: '8', classOne: '日常用品', classTwo: '护理品', sale: '1320'},
    {id: '02', year: '2020', month: '9', classOne: '日常用品', classTwo: '护理品', sale: '1200'},
    {id: '02', year: '2020', month: '10', classOne: '日常用品', classTwo: '护理品', sale: '1100'},
    {id: '02', year: '2020', month: '11', classOne: '日常用品', classTwo: '护理品', sale: '1100'},
    {id: '02', year: '2020', month: '12', classOne: '玩具', classTwo: '积木类', sale: '1100'},
    {id: '02', year: '2020', month: '2', classOne: '日常用品', classTwo: '护理品', sale: '100'},
    {id: '03', year: '2019', month: '12', classOne: '饰品', classTwo: '珠宝', sale: '50'},
    {id: '03', year: '2020', month: '12', classOne: '饰品', classTwo: '珠宝', sale: '50'},
    {id: '04', year: '2019', month: '12', classOne: '饮食类', classTwo: '小零食', sale: '50'},
    {id: '04', year: '2020', month: '12', classOne: '饮食类', classTwo: '小零食', sale: '50'},
    {id: '05', year: '2020', month: '7', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '05', year: '2019', month: '7', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '05', year: '2020', month: '1', classOne: '饮食类', classTwo: '饮料', sale: '137'},
    {id: '06', year: '2019', month: '1', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '06', year: '2020', month: '1', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '06', year: '2019', month: '2', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '06', year: '2020', month: '2', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '06', year: '2019', month: '2', classOne: '日常用品', classTwo: '护理品', sale: '137'},
    {id: '06', year: '2020', month: '3', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '06', year: '2019', month: '3', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '06', year: '2020', month: '3', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '06', year: '2020', month: '4', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '07', year: '2019', month: '4', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '07', year: '2020', month: '4', classOne: '饮食类', classTwo: '饮料', sale: '137'},
    {id: '07', year: '2019', month: '5', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '07', year: '2020', month: '5', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '08', year: '2019', month: '5', classOne: '玩具', classTwo: '积木类', sale: '150'},
    {id: '08', year: '2020', month: '6', classOne: '玩具', classTwo: '积木类', sale: '137'},
    {id: '08', year: '2020', month: '6', classOne: '玩具', classTwo: '积木类', sale: '150'},
    {id: '09', year: '2019', month: '6', classOne: '玩具', classTwo: '积木类', sale: '137'},
    {id: '09', year: '2020', month: '7', classOne: '玩具', classTwo: '积木类', sale: '150'},
    {id: '10', year: '2020', month: '7', classOne: '玩具', classTwo: '棋类', sale: '150'},
    {id: '10', year: '2019', month: '7', classOne: '玩具', classTwo: '棋类', sale: '150'},
    {id: '11', year: '2020', month: '8', classOne: '饮食类', classTwo: '小零食', sale: '150'},
    {id: '11', year: '2019', month: '8', classOne: '饮食类', classTwo: '小零食', sale: '137'},
    {id: '12', year: '2020', month: '8', classOne: '日常用品', classTwo: '洗漱品', sale: '150'},
    {id: '12', year: '2019', month: '9', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '12', year: '2020', month: '9', classOne: '饮食类', classTwo: '饮料', sale: '150'},
    {id: '13', year: '2020', month: '10', classOne: '饰品', classTwo: '首饰', sale: '150'},
    {id: '13', year: '2019', month: '10', classOne: '饰品', classTwo: '首饰', sale: '137'},
    {id: '13', year: '2020', month: '11', classOne: '饰品', classTwo: '首饰', sale: '150'},
    {id: '13', year: '2020', month: '11', classOne: '饰品', classTwo: '珠宝', sale: '150'},
    {id: '13', year: '2019', month: '11', classOne: '日常用品', classTwo: '洗漱品', sale: '150'},
    {id: '14', year: '2020', month: '12', classOne: '日常用品', classTwo: '洗漱品', sale: '137'},
    {id: '14', year: '2019', month: '12', classOne: '日常用品', classTwo: '洗漱品', sale: '150'},
    {id: '14', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '137'},
    {id: '14', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '14', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '15', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '15', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '15', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '15', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '16', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '16', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '150'},
    {id: '16', year: '2020', month: '12', classOne: '日常用品', classTwo: '护理品', sale: '150'},
];
//类别数据
let types = [
    //谁的类别，活动的类别，商品的一级类别，商品的二级类别
    {dataTable: '活动',id:'01', describe:'清空库存', type: '促销', classOne: '开启', classTwo: ''},
    {dataTable: '活动',id:'02', describe:'新品推销', type: '打折', classOne: '关闭', classTwo: ''},
    {dataTable: '商品',id:'01', describe:'', type: '', classOne: '日常用品', classTwo: '洗漱品'},
    {dataTable: '商品',id:'02', describe:'', type: '', classOne: '日常用品', classTwo: '护理品'},
    {dataTable: '商品',id:'03', describe:'', type: '', classOne: '玩具', classTwo: '棋类'},
    {dataTable: '商品',id:'04', describe:'', type: '', classOne: '玩具', classTwo: '积木类'},
    {dataTable: '商品',id:'05', describe:'', type: '', classOne: '饰品', classTwo: '首饰'},
    {dataTable: '商品',id:'06', describe:'', type: '', classOne: '饰品', classTwo: '珠宝'},
    {dataTable: '商品',id:'07', describe:'', type: '', classOne: '饮食类', classTwo: '小零食'},
    {dataTable: '商品',id:'08', describe:'', type: '', classOne: '饮食类', classTwo: '饮料'},
];
/*================================初始化============================*/
let membersJson = JSON.stringify(members);
let productJson = JSON.stringify(product);
let activityJson = JSON.stringify(activity);
let salesJson = JSON.stringify(sales);
let typesJson = JSON.stringify(types);
sessionStorage.setItem('membersKey', membersJson);
sessionStorage.setItem('productKey', productJson);
sessionStorage.setItem('activityKey', activityJson);
sessionStorage.setItem('salesKey', salesJson);
sessionStorage.setItem('typesKey', typesJson);