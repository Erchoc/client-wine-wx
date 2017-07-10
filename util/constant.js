const constant = {
    // host: 'http://123.207.82.14:8081',
    // host: 'https://server-wine-api.erchoc.com',
    // host: 'https://api.jiyiguan.nowui.com',

    platform: 'WX',
    version: '1.0.0',
    color: '#c81623',
    duration: 2000,
    category_list: [{
        category_id: '',
        category_name: '所有商品',
        category_color: '#fd666b',
        category_image: '/image/apps.png'
    }, {
        category_id: '146474b15ba545d9b9717cf8b5a6c3f5',
        category_name: '海昏清明',
        category_color: '#73b4ef',
        category_image: '/image/present.png'
    }, {
        category_id: '9ed6cb3551fb4bfaabfeee89cc63f9b4',
        category_name: '醇香汾酒',
        category_color: '#e78ab0',
        category_image: '/image/shop.png'
    }],
    order_status_list: [{
        order_status_value: '',
        order_status_name: '全部订单',
        order_status_image: ''
    }, {
        order_status_value: 'WAIT_PAY',
        order_status_name: '代付款',
        order_status_image: '/image/pay.png'
    }, {
        order_status_value: 'WAIT_SEND',
        order_status_name: '代发货',
        order_status_image: '/image/deliver.png'
    }, {
        order_status_value: 'WAIT_RECEIVE',
        order_status_name: '代收货',
        order_status_image: '/image/deliver.png'
    }, {
        order_status_value: 'FINISH',
        order_status_name: '已完成',
        order_status_image: '/image/comment.png'
    }]
}

module.exports = constant;