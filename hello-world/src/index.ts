class Ride {
    private static _activeRides: number = 0;

    start(){Ride._activeRides++;}
    stop(){Ride._activeRides--;}

    static get activeRides(){
        return Ride._activeRides;
    }
}

// This is can't be happen logically. so we need to make it private.
// Ride._activeRides = 10;

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides); //

