use('cinema')
db.getMongo().getDBs()
db.getCollectionNames()
db.movies.insert({})
db.movies.find({})

// # insertions
db.movies.insert(
    {
        title: 'The Matrix',
        released: 1999,
        tagline: 'Welcome to the Real World'
    })

db.movies.insert(
    {
        title: 'The Matrix Reloaded',
        released: 2003,
        tagline: 'Free your mind',
        budget: 150,
        revenues: 742
    })

db.movies.insert(
    {
        title: 'The Matrix Revolutions',
        released: 2003,
        tagline: 'Everything that has a beginning has an end'
    })

db.movies.insert(
    {
        title: "The Devil's Advocate",
        released: 1997,
        tagline: 'Evil has its winning ways',
        revenues: 427,
        music: 'Don Davies'
    })

db.movies.insert(
    {
        title: "A Few Good Men",
        released: 1992,
        tagline: "In the heart of the nation's capital, in a courthouse of the U.S. government, one man will stop at nothing to keep his honor, and one will stop at nothing to find the truth.",
        script: 'Aaron Serkin',
        evaluation: 91
    })

db.movies.insert(
    {
        title: 'Top Gun',
        released: 1986,
        tagline: 'I fell the need, the need for speed.',
        music: 'Take Ny Breath Away'
    })

db.movies.insert(
    {
        title: 'Jerry Maguire',
        released: 2000,
        tagline: 'The rest of his life begins now.',
        oscar: 'supporting actor'
    })

db.movies.insert(
    {
        title: 'Cloud Atlas',
        released: 2012,
        tagline: 'Everything is connected',
        revenues: 130
    })

db.movies.insert(
    {
        title: 'The Da Vinci Code',
        released: 2006,
        tagline: 'Break The Codes',
        book: 'Dan Brown'
    })

// //

// How to get all movies titles
db.movies.find({}, {_id: 0,title: 1})