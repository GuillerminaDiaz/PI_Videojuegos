import Card from "../Card/Card"

const games=[
    {
        "id": "d6a6f0b4-15e1-4e22-8dbc-7465712b1c84",
        "name": "ortal",
        "description": "dale se puede",
        "platforms": [
          "{'gt'},{'jd'}"
        ],
        "image": "urls",
        "release_date": "2015-10-13",
        "rating": 0.5,
        "created": "true",
        "Genres": [
          {
            "name": "Action"
          },
          {
            "name": "Family"
          }
        ]
      },
      {
        "id": 3498,
        "name": "Grand Theft Auto V",
        "platforms": [
          "PC",
          "PlayStation",
          "Xbox"
        ],
        "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "released_date": "2013-09-17",
        "rating": 4.47,
        "created": false,
        "Genres": [
          "Action",
          "Adventure"
        ]
      },
      {
        "id": 3328,
        "name": "The Witcher 3: Wild Hunt",
        "platforms": [
          "PC",
          "PlayStation",
          "Xbox",
          "Nintendo"
        ],
        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "released_date": "2015-05-18",
        "rating": 4.66,
        "created": false,
        "Genres": [
          "Action",
          "Adventure",
          "RPG"
        ]
      },
      {
        "id": 4200,
        "name": "Portal 2",
        "platforms": [
          "PC",
          "PlayStation",
          "Xbox",
          "Apple Macintosh",
          "Linux"
        ],
        "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "released_date": "2011-04-18",
        "rating": 4.62,
        "created": false,
        "Genres": [
          "Shooter",
          "Puzzle"
        ]
      },
      {
        "id": 5286,
        "name": "Tomb Raider (2013)",
        "platforms": [
          "PC",
          "PlayStation",
          "Xbox",
          "Apple Macintosh"
        ],
        "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "released_date": "2013-03-05",
        "rating": 4.05,
        "created": false,
        "Genres": [
          "Action",
          "Adventure"
        ]
      },
      {
        "id": 4291,
        "name": "Counter-Strike: Global Offensive",
        "platforms": [
          "PC",
          "PlayStation",
          "Xbox"
        ],
        "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "released_date": "2012-08-21",
        "rating": 3.56,
        "created": false,
        "Genres": [
          "Action",
          "Shooter"
        ]
      },
      {
        "id": 13536,
        "name": "Portal",
        "platforms": [
          "PC",
          "PlayStation",
          "Xbox",
          "Android",
          "Apple Macintosh",
          "Linux",
          "Nintendo"
        ],
        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "released_date": "2007-10-09",
        "rating": 4.51,
        "created": false,
        "Genres": [
          "Adventure",
          "Puzzle"
        ]
      },
      {
        "id": 12020,
        "name": "Left 4 Dead 2",
        "platforms": [
          "PC",
          "Xbox",
          "Apple Macintosh",
          "Linux"
        ],
        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "released_date": "2009-11-17",
        "rating": 4.09,
        "created": false,
        "Genres": [
          "Action",
          "Shooter"
        ]
      },
      {
        "id": 5679,
        "name": "The Elder Scrolls V: Skyrim",
        "platforms": [
          "PC",
          "PlayStation",
          "Xbox",
          "Nintendo"
        ],
        "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        "released_date": "2011-11-11",
        "rating": 4.42,
        "created": false,
        "Genres": [
          "Action",
          "RPG"
        ]
      },
]

const CardContainer=()=>{
    return(
        <div>
            {games.map(game=>{
                return( 
                    <Card 
                        key={game.id}
                        image={game.image}
                        name={game.name}
                        genres={game.Genres}
                    />

                )
            })}
        </div>
    )
};

export default CardContainer;