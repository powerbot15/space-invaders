import {utils} from '../utils/utils'

import {eventsMixin} from '../utils/events-mixin'

export class Invader {

    constructor (position, icon) {

        eventsMixin.extend(this);

        this.position = position;

        this.icon = icon;

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

        let width = 25;

        let height = 25;

        // context.fillStyle = '#FFF';

        // context.fillRect(upLeft.x, upLeft.y, width, height);

        context.drawImage(this.icon, upLeft.x, upLeft.y, width, height);

    }


}