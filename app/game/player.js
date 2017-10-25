export class Player {

    constructor (position) {

        this.position = position;

    }

    draw (context) {

        let width = 10;

        let height = 10;

        context.fillStyle = '#FFF';

        context.fillRect(this.position.x, this.position.y, width, height);

    }

}