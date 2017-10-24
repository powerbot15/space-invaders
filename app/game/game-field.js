import {Player} from './player';

import {Invader} from './invader'

const INVADERS_PER_ROW = 10;

const ROW_COUNT = 10;

export class GameField {

    constructor () {

        this.init();

    };

    init () {

        this.createField();

        this.createInvaders();

        this.createPlayer();

        this.startGame();

        this.listenEvents();

    }

    createField () {

        this.field = {

            sizeX : 50,

            sizeY : 30

        }

    };

    createInvaders () {

        this.invaders = [];

        for(let i = 0; i < 20; i++){

        }

    };

    createPlayer () {

        this.player = new Player({x : 25, y : 0});

    };

    startGame () {

    };

    listenEvents () {

        this.invaders.forEach((invader) => {

            invader.on('fire', this.createBullet, this);

        });

    };

    createBullet () {

    //    TODO bullet instances creation

    }

}