/**
 * Created by KostyaGromov on 15.08.2017.
 */

class Mouse {
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        // this.radius = radius || 2;
        // this.color = color || '#ff6600';
        var rect = canvas.getBoundingClientRect();

        canvas.onmousemove = (e) => {
            this.x = e.clientX - rect.left;
            this.y = e.clientY - rect.top;
            //console.log(this.x, this.y);
        };
    }

    // draw (ctx) {
    //     ctx.save();
    //     ctx.beginPath();
    //     ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    //     ctx.fillStyle = this.color;
    //     ctx.fill();
    //     ctx.closePath();
    //     ctx.restore();
    // }
}
