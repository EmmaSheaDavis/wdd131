const artworks = [
  {
    title: "Banshee",
    year: "2024",
    hours: "3 hrs 8 min",
    description:
      "Artist personal fictional character created to fit in the Call of Duty video game universe.",
    post_link: "n/a",
    image: "./images/banshee.png",
    image_small: "./images/imagecompressor/banshee-min.png",
    details:
      "An origonal character created by the artist, Banshee is a silent killer. Trained for lethal combat and efficient with a sniper rifle, you dont want to be on the other end of her scope. Quiet and mysterious, she's not quick to make friends but loyal to the few who have the privilage to be called her friend.",
  },
  {
    title: "Helldivers Pods",
    year: "2025",
    hours: "1 hr 19 min",
    description:
      "Fanart of Helldiver Hellpods decending to a planets surface from orbit.",
    post_link: "https://www.instagram.com/p/DFv_sjeM2jZ/?next=%2F",
    image: "./images/helldivers.png",
    image_small: "./images/imagecompressor/helldivers-min.png",
    details:
      "From the game Helldivers 2, Helldivers plumet rapidly to the planets surface to begin an operation. The pods these military individuals operate become red hot from entering the atmosphere with a seperate pair of bods also decending in the distance. This alien planet is going to face the fierce loyalty to freedom from these Helldivers.",
  },
  {
    title: "The Russian Spider",
    year: "2024",
    hours: "4 hrs 9 min",
    description: "The Artist own design for an alternate dimension Spider-Man.",
    post_link: "https://www.instagram.com/p/C_MCAmYvUON/?next=%2F",
    image: "./images/spider-man.png",
    image_small: "./images/imagecompressor/spider-man-min.png",
    details:
      "Inspired from the Spiderverse movie series, the Russian Spider is an alternate Spider-Man whos origins are set in Russia. Also known as Vlad, the Russian Spider works for the Russian Government and volunteered to scientific expiraments that made him Spider-Man. Unlike other Spider-Men, the Russian Spider is not afraid to do what is necessary to protect everyone.",
  },
  {
    title: "Titanfall",
    year: "2024",
    hours: "13 hrs 18 min",
    description: "Commissioned fanart of a Titan and its Pilot.",
    post_link: "https://www.instagram.com/p/C41cewEs1l-/?next=%2F",
    image: "./images/titanfall.png",
    image_small: "./images/imagecompressor/titanfall-min.png",
    details:
      "Commissioned to the artist from a friend shows a Titan and Pilot from the game Titanfall 2. The pair rush off in battle during evenig hours as explosions remain a primary source of light. Both the Titan and Pilot charge forward with determination. The only thing that can stop this giant mech and skilled warrior is a opossing Pilot with a Titan of their own.",
  },
  {
    title: "Otherworldy Bird",
    year: "2023",
    hours: "3 hrs 8 min",
    description:
      "A fictional creature created by the artist with a goldren grown of feathers and skull like face with antlers.",
    post_link: "https://www.instagram.com/p/Cy1JHOQAIGN/?next=%2F",
    image: "./images/bird.png",
    image_small: "./images/imagecompressor/bird-min.png",
    details:
      "A sketch done by the artist depicts a mythical like bird creature. Its skull-like head with dark colored antlers sprouting from it give it a sinister feeling. The crown of golden feathers behind its head make it more majestic and powerful in feeling. The real mystery is the amethyst colored gemstone inbeded in its chest, blood seeping around the wound.",
  },
  {
    title: "Godzilla Minus One",
    year: "2023",
    hours: "2 hrs 56 min",
    description: "Fanart of Godzilla from the movie Godzilla Minus One.",
    post_link: "n/a",
    image: "./images/godzilla.jpg",
    image_small: "./images/imagecompressor/godzilla-min.jpg",
    details:
      "A long time favorite movie monster of the artist, Godzilla is destructive and meant to be feared. In the movie Godzilla Minus One, the monster is depicticed as a terrifying and unstopable force as a symbol of direct consequences to the testing of atomic weapons. The radiation of the testing made Godzilla painfully mutate into the giant monster he is and seeeks revenge for what happened to him.",
  },
  {
    title: "The Salamanders",
    year: "2025",
    hours: "14 hrs 19 min",
    description:
      "A drawing of two Space Marine belonging to the Salamander Chapter.",
    post_link: "https://www.instagram.com/p/DHE5OjsvuUZ/?next=%2F",
    image: "./images/warhammer.png",
    image_small: "./images/imagecompressor/warhammer-min.png",
    details:
      "From the Warhammer series, the Salamanders are known to fight to save civilians and are more kind to them compared to other Space Marine Chapters. These armor designs come from the game Space Marine 2 which was used as refrence to do this artwork. These two Space Marines are ready to face any Xenos that comes their way and have lots of battle experience.",
  },
  {
    title: "Windrunner",
    year: "2025",
    hours: "4 hrs 49 min",
    description:
      "Commissioned piece of an armored warrior from the book series Stormlight Archive by Brandon Sanderson.",
    post_link: "https://www.instagram.com/p/DE3QEolvWWZ/?next=%2F",
    image: "./images/windrunner.png",
    image_small: "./images/imagecompressor/windrunner-min.png",
    details:
      "This is a Knight Radiant known to be a Windrunner. Bonded with a special creater known as a Spren, this knight has acess to great power he will use to protect humanity and follow the Ideals he has sworn to. He kneels confronting a storm and gathering Stormlight to use his abilities. Strong and honorable, he will do everything he can to protect his friends and family.",
  },
];

function artworkTemplate(artwork) {
  return `
    
    <div class="artwork-list">
          <img
            class="artwork-img"
            src=${artwork.image_small}
            alt=${artwork.title}
          />
          <div class="content">
            <h2>${artwork.title}</h2>
            <p class="year">${artwork.year}</p>
            <p class="hide">
             ${artwork.description}
            </p>
          </div>
        </div>`;
}

function renderArtworks(artworkList) {
  let artworkContainer = document.querySelector(".art-cards");
  artworkContainer.innerHTML = "";

  if (Array.isArray(artworkList)) {
    // Render each recipe in its own .recipe-card
    artworkList.forEach((artwork) => {
      artworkContainer.innerHTML += artworkTemplate(artwork);
    });
  }
}

function init() {
  renderArtworks(artworks);
}

function compareFn(a, b) {
  if (a.title < b.title) {
    return -1;
  } else if (a.title > b.title) {
    return 1;
  }
  return 0;
}

function sortedArtworks(query) {
  let filterArtworks = artworks.filter(function (artwork) {
    return (
     artwork.year.includes(query)||
     artwork.title.toLowerCase().includes(query.toLowerCase())
    );
  });
  return filterArtworks.sort(compareFn);
}

document.addEventListener("DOMContentLoaded", () => {
  init();

  const searchButton = document.getElementById("search-icon");
  const searchInput = document.getElementById("search-bar");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let query = searchInput.value.trim();
    let filterArtworks = query ? sortedArtworks(query) : artworks;
    renderArtworks(filterArtworks);
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let query = searchInput.value.trim();
      let filterArtworks = query ? sortedArtworks(query) : artworks;
      renderArtworks(filterArtworks);
    }
  });
});
