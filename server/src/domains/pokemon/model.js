const listOfAdjectives = [
  "silly",
  "goofy",
  "quirky",
  "zany",
  "whimsical",
  "wacky",
  "bizarre",
  "absurd",
  "hilarious",
  "cheeky",
  "comical",
  "amusing",
  "laughable",
  "eccentric",
  "offbeat",
  "playful",
  "mischievous",
  "funky",
  "ridiculous",
  "ludicrous",
];

class Pokemon {
  constructor(id, name) {
    // ideally this ids should be generate to avoid repetition
    // but in this case the id should be passed in the construction
    // so the imgSrc makes sense
    this.id = id;
    this.name = name;
    this.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    this.likes = 0;
    this.weight = 5 + Math.floor(Math.random() * 100);

    // creates a random funny description
    const randomIndex = Math.floor(Math.random() * listOfAdjectives.length);
    const adjective = listOfAdjectives[randomIndex];
    const isFirstLetterVogal = adjective
      .charAt(0)
      .includes("a", "e", "i", "o", "u");
    const article = isFirstLetterVogal ? "an" : "a";
    this.description = `${name} is ${article} ${adjective} pokemon`;
  }

  incrementLike() {
    this.likes++;
  }
}

module.exports = Pokemon;
