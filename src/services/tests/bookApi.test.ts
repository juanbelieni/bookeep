import bookapi from "../bookApi"

//Verifies if the id has only numbers
let idVerifier = new RegExp(/^\d+$/)

//Verifies if the image url is valid
let imageUrlVerifier = new RegExp(/^(?![^\n]*\.$)(?:https?:\/\/)?(?:(?:[2][1-4]\d|25[1-5]|1\d{2}|[1-9]\d|[1-9])(?:\.(?:[2][1-4]\d|25[1-5]|1\d{2}|[1-9]\d|[0-9])){3}(?::\d{4})?|[a-z-]+(?:\.[a-z-]+){2,})$/)

test("Bookapi search books by an title and return the right format", () => { //creates a jest test
    expect(async () => { //expect this async function to ....
        return (await bookapi.getVolumes("How to do testing")) //Await the response from the search api
            .every(
                (volume) => idVerifier.test(volume.id) //If the id is valid
                && volume.title  //and theres a title
                && volume.description  //and theres a description
                && volume.authors  //and theres authors
                && imageUrlVerifier.test(volume.image as string)) //and the image url is valid
                //return true
    }).toBeTruthy() //... return true
})