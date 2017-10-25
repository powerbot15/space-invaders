import {Player} from './player';

import {Invader} from './invader'

export class GameField {

    constructor () {

        this.initInvadersIcon();

    };

    initInvadersIcon () {

        this.img = document.createElement('img');

        this.img.src = '/space-invaders/img/up.png';

        this.img.addEventListener('load', () => {

            this.init();

        }, false);

    };

    init () {

        this.createField();

        this.createInvaders();

        this.createPlayer();

        this.startGame();

        this.listenEvents();

    }

    createField () {

        this.dataField = {

            sizeX : 50,

            sizeY : 30

        };

        this.gameField = document.querySelector('[data-field]');

        this.gameContext = this.gameField.getContext('2d');

    };

    createInvaders () {

        let invader;

        this.invaders = [];

        for(let i = 0; i < 5; i++){

            for(let j = 0; j < 10 ; j++){

                invader = new Invader({

                    x : j * 30,

                    y : i * 30

                }, this.img);

                this.invaders.push(invader);

                // invader.draw(this.gameContext);

            }

        }

    };

    createPlayer () {

        this.player = new Player({x : 300, y : 50});

    };

    startGame () {

        this.draw();

    };

    listenEvents () {

        this.invaders.forEach((invader) => {

            invader.on('fire', this.createBullet, this);

        });

    };

    createBullet () {

    //    TODO bullet instances creation

    };

    draw () {

        this.gameContext.fillStyle = '#000';

        this.gameContext.fillRect(0, 0, this.gameField.width, this.gameField.width);


        this.invaders.forEach((invader) => {

            invader.draw(this.gameContext);

        });

        this.player.draw(this.gameContext);

    }

}