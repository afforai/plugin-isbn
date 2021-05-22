module.exports = [
  {
    name: 'book',
    input: '9780099560432',
    output: [{
      URL: 'https://books.google.com/books/about/Ready_Player_One.html?hl=&id=4zugGMReN3cC',
      abstract: 'It\'s the year 2044, and the real world has become an ugly place. We\'re out of oil. We\'ve wrecked the climate. Famine, poverty, and disease are widespread. Like most of humanity, Wade Watts escapes this depressing reality by spending his waking hours jacked into the OASIS, a sprawling virtual utopia where you can be anything you want to be, where you can live and play and fall in love on any of ten thousand planets. And like most of humanity, Wade is obsessed by the ultimate lottery ticket that lies concealed within this alternate reality: OASIS founder James Halliday, who dies with no heir, has promised that control of the OASIS - and his massive fortune - will go to the person who can solve the riddles he has left scattered throughout his creation. For years, millions have struggled fruitlessly to attain this prize, knowing only that the riddles are based in the culture of the late twentieth century. And then Wade stumbles onto the key to the first puzzle. Suddenly, he finds himself pitted against thousands of competitors in a desperate race to claim the ultimate prize, a chase that soon takes on terrifying real-world dimensions - and that will leave both Wade and his world profoundly changed.',
      author: [
        { family: 'Cline', given: 'Ernest' }
      ],
      issued: { 'date-parts': [[2012]] },
      keyword: 'Fiction',
      language: 'en',
      'number-of-pages': 374,
      publisher: 'Random House',
      title: 'Ready Player One',
      type: 'book',
      ISBN: '9780099560432'
    }]
  },
  {
    name: 'as number',
    input: 9780008117498,
    output: [{
      URL: 'https://openlibrary.org/books/OL26774598M/FOUNDATION-_PB',
      author: [{
        family: 'Asimov',
        given: 'Isaac',
        _url: 'https://openlibrary.org/authors/OL34221A/Isaac_Asimov'
      }],
      issued: { raw: 'Sep 22, 2016' },
      publisher: 'HARPER COLLINS',
      title: 'FOUNDATION- PB',
      type: 'book',
      ISBN: '9780008117498'
    }]
  },
  {
    name: 'with hyphens',
    input: '978-0918024565',
    output: [{
      type: 'book',
      author: [{
        given: 'Muriel',
        family: 'Rukeyser'
      }],
      URL: 'https://books.google.com/books/about/Willard_Gibbs.html?hl=&id=Bq9jQgAACAAJ',
      keyword: 'Science',
      ISBN: '9780918024565',
      language: 'en',
      'number-of-pages': 465,
      title: 'Willard Gibbs',
      issued: { 'date-parts': [[1988]] }
    }]
  }
]