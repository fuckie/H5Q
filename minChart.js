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
