import {utils} from '../utils/utils'

import {eventsMixin} from '../utils/events-mixin'

export class Invader {

    constructor (position) {

        eventsMixin.extend(this);

        this.position = position;

    };

    init () {

        this.startFire();

    };

    startFire () {

        this.fireInterval = setInterval(()=>{

            this.fire();

        }, utils.randomize(10) * 1000);

    };

    fire () {

        this.trigger('fire', {

            position : this.position

        });

    };

    draw (context) {
        let upLeft = {

            x : this.position.x,

            y : this.position.y

        };
        let bottomRight = {

            x : upLeft.x + 10,

            y : upLeft.y + 10

        };
        context.fillStyle = '#FFF';

        context.fillRect(upLeft.x, upLeft.y, bottomRight.x, bottomRight.y);

    }


}