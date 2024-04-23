let filmography = {
    movies: [
        { "title": "The Green Mile", "img": "images/green_mile.jpg", "class": "thumbnail", "role": "Toot-Toot", "year": "1999" },
        { "title": "Fear and Loathing in Las Vegas", "img": "images/fear_and_loathing.jpg", "class": "thumbnail", "role": "Judge", "year": "1998" },
        { "title": "Pretty in Pink", "img": "images/pretty_in_pink.jpg", "class": "thumbnail", "role": "Jack", "year": "1986" },
        { "title": "Repo Man", "img": "images/repo_man.jpg", "class": "thumbnail", "role": "Bud", "year": "1984" },
        { "title": "Escape from New York", "img": "images/escape_from_new_york.jpg", "class": "thumbnail", "role": "Harold 'Brain' Hellman", "year": "1981" },
        { "title": "Alien", "img": "images/alien.jpg", "class": "thumbnail", "role": "Brett", "year": "1979" },
        { "title": "Cool Hand Luke", "img": "images/cool_hand_luke.jpg", "class": "thumbnail", "role": "Tramp", "year": "1967" }
    ]
}

const table = document.getElementById("filmography");

for(i in filmography.movies){

    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = filmography.movies[i].title;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    const img = document.createElement("img");
    img.src = filmography.movies[i].img;
    img.classList.add(filmography.movies[i].class);
    cell2.appendChild(img);
    row.appendChild(cell2);


    const cell3 = document.createElement("td");
    cell3.textContent = filmography.movies[i].role;
    row.appendChild(cell3);

    const cell4 = document.createElement("td");
    cell4.textContent = filmography.movies[i].year;
    row.appendChild(cell4);



    table.appendChild(row);


}




