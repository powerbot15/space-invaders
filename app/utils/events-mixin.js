export let eventsMixin = {

    events : {},

    on (event, callback, context) {

        if(this.events.hasOwnProperty(event)){

            this.events[event].push({

                fnk : callback,

                context : context || this

            });

        }
        else{

            this.events[event] = [{

                fnk : callback,

                context : context || this

            }];


        }

    },

    trigger (event, data) {

        let args = [];

        if(this.events[event]){

            if(data){

                args = Array.prototype.splice.call(arguments, 1);

            }

            this.events[event].forEach(function (handler) {

                handler.fnk.apply(handler.context, args);

            })

        }

    },

    extend (nested) {

        nested.events = {};

        nested.on = this.on;

        nested.trigger = this.trigger;

    }

};