class Movie {
    constructor(title, director) {
        // add your code here
        this.title = title;
        this.director = director;
    }

    getTitle() {
        // add your code here
        console.log(this.title);
    }

    getDirector() {
        // add your code here
        console.log(this.director);
    }

    // addStar(star) {
    //     // add your code here
    //     this.star.push(star);
    // }

    getStars() {
        // add your code here
        console.log(this.stars);
    }

    addWriter(writer) {
        // add your code here
        this.writer.push(writer);
    }

    getWriters() {
        // add your code here
        console.log(writers);
    }

    addRating(rating) {
        // add your code here
        this.rating.push(rating);
    }

    getAverageRating() {
        // add your code here
        let AverageRating = x;
        let Rating = y;
        if (AverageRating == Rating) {
        }
        return x == y;
    }
    // ... Add yours :-) Look to IMDB for inspiration
}

class StaffMember {
    constructor(name, role, dateOfBirth) {
        // add your code here
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
    }

    addMovie(movie) {
        // add your code here
        this.movie.push(movie);
    }

    getName() {
        // add your code here
        console.log(this.name);
    }

    getRole() {
        // add your code here
        console.log(this.role);
    }

    getAge() {
        // add your code here
        let age = 18;
        let date = year;
        this.age = age;
        this.date = date;
        console.log(this.age);

    }
}

// Pick your favorite movie from http://www.imdb.com/

const myMovie = new Movie("missionImposible");
console.log(myMovie);
const firstActor = new StaffMember("tome");
console.log(firstActor);
// myMovie.addStar(firstActor);
// create and add more staff members
const myStaff = new Stars("jone", "marce", "nike");
console.log(myStaff);
// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.getName()}`);