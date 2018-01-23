// 继承函数
function success(data) {
    return data;
}

// 中间件处理器1
function deal200(func) {
    if (arg.responseCode === 200) {
        // 200 操作
        // 作为中继就不要return 将原始数据传递下去
        // exp:
    }
    return func()
}

function deal400(func) {
    if (arg.responseCode === 400) {
        // 400  操作
        // 继续向下传递
    }
    return func()
}

// active like this
deal400(deal200(success(arg)));