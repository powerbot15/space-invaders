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

    }

}