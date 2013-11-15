/**
 * Canvas绘图类
 * el.start().opt(options).drwaxxx().end();
 * @name DrawCanvas
 * @function
 * @param canvas canvas元素
 * @param ctx canvas绘图上下文
 * @return
 */
function DrawCanvas(canvas, ctx) {
    this.canvas  = canvas;
    this.ctx     = ctx;
}

DrawCanvas.prototype.start = function() {
    var ctx = this.ctx;
    ctx.save();
    return this;
}

DrawCanvas.prototype.end = function() {
    var ctx = this.ctx;
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    return this;
}

DrawCanvas.prototype.drawRect = function(bx, by, ex, ey) {
    var ctx = this.ctx,
    arg = [].slice.call(arguments);
    
    ctx.strokeRect.apply(ctx, arg)
    return this;
}

DrawCanvas.prototype.drawLine = function(data) {
    var ctx = this.ctx,
        i;

    ctx.beginPath();
    for (i = 1; i < data.length; i++) {
        //ctx.lineTo(i, data[i].price);
        var item      = data[i].price,
            itemWidth = this.canvas.width / data.length;

        ctx.lineTo(itemWidth * (i + 0.5), this.canvas.height / item * 100000 - 17700)
        console.log(itemWidth * (i + 0.5), this.canvas.height / item * 100000 - 17700)
    }
    return this;
}

DrawCanvas.prototype.lineWidth = function(num) {
    var ctx = this.ctx;
    ctx.lineWidth = num;
    ctx.strokeStyle = 'red';
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
    return this;
}

/**
 * 给canvas上下文设置属性
 *
 * @name opt
 * @function
 * @param options {lineWidth: 1, fillStyle: 'red'..}
 * @return
 */
DrawCanvas.prototype.opt = function(options) {
    var ctx = this.ctx,
        i;

    for (i in options) {
        if (ctx[i]) {
            ctx[i] = options[i];
        }
    }

    return this;
}


/**
 * getMax 取得一个数组的最大值，若数组项为对象，将第二个参数key设置为目标字段
 *
 * @name getMax
 * @function
 * @param data [d1, d2, d3..] or [{data: d1}, {data: d2}, ...]
 * @param key 要取值的字段
 * @return 
 */
function getMax(data, key) {

    var i, res, key = key ? key : 'data';

    if (! data) {
        return;
    }

    if (data[0][key] == null) {
        res = max(data);
    } else {
        res = data.sort(function(a, b) {
            return b[key] - a[key];
        })[0][key];
    }

    return res;

}

function getMin(data, key) {

    var i, res, key = key ? key : 'data';

    if (! data) {
        return;
    }

    if (data[0][key] == null) {
        res = min(data);
    } else {
        res = data.sort(function(a, b) {
            return a[key] - b[key];
        })[0][key];
    }

    return res;

}

