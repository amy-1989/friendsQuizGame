let myQuestions = [
    {
     question: "What is Monica's father's pet name for her?",
     answers: [{text: "Little Harmonica", correct: true},
               {text: "Tootsie", correct: false},
               {text: "Big Harmonica", correct: false},
               {text: "Little Mon-Mon", correct: false}]
    },
    {
     question: "In 'The One with the Proposal', who does Chandler call a 'big tree'?",
     answers: [{text: "Richard", correct: true},
               {text: "Joey", correct: false},
               {text: "Gunther", correct: false},
               {text: "His boss", correct: false}]
    },
    {
     question: "Who played Sandy, Ross & Rachel's male nanny?",
     answers: [{text: "Freddie Prinze Jr.", correct: true},
               {text: "Brad Pitt", correct: false},
               {text: "Robin Williams", correct: false},
               {text: "Paul Rudd", correct: false}]
    },
    {
     question: "In 'The One with Monica's Cousin', why is Monica late to the bridal shower that Phoebe & Rachel are throwing for her?",
     answers: [{text: "They forgot to invite her", correct: true},
               {text: "She had to work", correct: false},
               {text: "She forgot about it", correct: false},
               {text: "Chandler forgot to tell her about it", correct: false}]
    },
    {
     question: "At whose wedding did Joey comment, ' I feel like Superman without my powers. I have the cape and yet I cannot fly'?",
     answers: [{text: "Carol & Susan's", correct: true},
               {text: "Monica & Chandler's", correct: false},
               {text: "Ross & Emily's", correct: false},
               {text: "Ross & Rachel's", correct: false}]
    },
    {
     question: "What star of 'Sex and the City' played Erin, a date of Joey's that Rachel and Phoebe initially like more than he does?",
     answers: [{text: "Kristin Davis", correct: true},
               {text: "Cynthia Nixon", correct: false},
               {text: "Sarah Jessica Parker", correct: false},
               {text: "Kim Cattrall", correct: false}]
    },
    {
     question: "In 'The One Where Ross Can't Flirt', on what well known TV cop show does Joey get a part?",
     answers: [{text: "Law & Order", correct: true},
               {text: "CSI", correct: false},
               {text: "Criminal Minds", correct: false},
               {text: "Brooklyn 99", correct: false}]
    },
    {
     question: "Whom was Rachel's mother talking to when she said,' The last time I saw you, it was eat or be eaten'?",
     answers: [{text: "Monica", correct: true},
               {text: "Joey", correct: false},
               {text: "Barry", correct: false},
               {text: "Rachel's father", correct: false}]
    },
    {
     question: "What was the name of Rachel's assistant and, later, boyfriend?",
     answers: [{text: "Tag Jones", correct: true},
               {text: "Gavin Mitchell", correct: false},
               {text: "Mark Robinson", correct: false},
               {text: "Mr Zelner", correct: false}]
    },
    {
     question: "Of the following, who never lived in Joey & Chandler's apartment?",
     answers: [{text: "Phoebe", correct: true},
               {text: "Monica", correct: false},
               {text: "Rachel", correct: false},
               {text: "Ross", correct: false}]
    },
    {
     question: "According to Phoebe, in dating language, what does 'I think we should see other people' mean?",
     answers: [{text: "I already am", correct: true},
               {text: "I'm not attracted to you anymore", correct: false},
               {text: "I'm making up reasons to not be with you", correct: false},
               {text: "I want to be with you", correct: false}]
    },
    {
     question: "In 'The One After The Super Bowl', who played Susie Moss, Chandler's former schoolmate?",
     answers: [{text: "Julia Roberts", correct: true},
               {text: "Elle McPherson", correct: false},
               {text: "Brooke Shields", correct: false},
               {text: "Reese Witherspoon", correct: false}]
    },
    {
     question: "Who is Rachel talking about when she says, 'The guy is the devil. He's Satan in a smock'?",
     answers: [{text: "Barry", correct: true},
               {text: "Mr Heckles", correct: false},
               {text: "Paulo", correct: false},
               {text: "Gavin Mitchell", correct: false}]
    },
    {
     question: "What was the name of Monica's annoying downstairs neighbor?",
     answers: [{text: "Mr Heckles", correct: true},
               {text: "Mr Zelner", correct: false},
               {text: "Ugly Naked Guy", correct: false},
               {text: "Mr Robinson", correct: false}]
    },
    {
     question: "Which of the Friends characters was the first to marry?",
     answers: [{text: "Phoebe", correct: true},
               {text: "Ross", correct: false},
               {text: "Monica", correct: false},
               {text: "Rachel", correct: false}]
    },
    {
     question: "In 'The One with the Candy Hearts', who told Chandler, 'I cut you out of all my pictures so if you want, I have a bag with just your heads'?",
     answers: [{text: "Janice", correct: true},
               {text: "Eddie", correct: false},
               {text: "Monica", correct: false},
               {text: "Cathy", correct: false}]
    },
    {
     question: "In 'The One After the Super Bowl', who played Erika Ford, Joey's biggest fan, who thinks he actually IS Dr. Drake Ramoray?",
     answers: [{text: "Brooke Shields", correct: true},
               {text: "Elle McPherson", correct: false},
               {text: "Julia Roberts", correct: false},
               {text: "Christina Applegate", correct: false}]
    },
    {
     question: "At one time in her life, Monica lived or roomed with every other Friend except one. Name that Friend.",
     answers: [{text: "Joey", correct: true},
               {text: "Ross", correct: false},
               {text: "Phoebe", correct: false},
               {text: "Chandler", correct: false}]
    },
    {
     question: "What was the name of Rachel's Italian boyfriend in season one?",
     answers: [{text: "Paulo", correct: true},
               {text: "Alessandro", correct: false},
               {text: "Leonardo", correct: false},
               {text: "Pablo", correct: false}]
    },
    {
     question: "In 'The One Where Rachel's Sister Babysits', where is the first place Mike was going to propose to Phoebe?",
     answers: [{text: "A basketball game", correct: true},
               {text: "A fancy restaurant", correct: false},
               {text: "The coffee house", correct: false},
               {text: "A hockey game", correct: false}]
    },
    {
     question: "Who was the first Friends star to have children in real life?",
     answers: [{text: "Lisa Kudrow", correct: true},
               {text: "Courtney Cox", correct: false},
               {text: "Matt LeBlanc", correct: false},
               {text: "David Schwimmer", correct: false}]
    },
    {
     question: "In 'The One with the Rumor', Joey tells Monica if she'll cook it, he'll eat it all. What is he referring to?",
     answers: [{text: "A turkey", correct: true},
               {text: "A meatball sub", correct: false},
               {text: "A trifle", correct: false},
               {text: "Christmas Cookies", correct: false}]
    },
    {
     question: "Chandler calls Monica's boyfriend 'Ridiculously Dull Bobby' after he stops drinking. What was he known as previously?",
     answers: [{text: "Fun Bobby", correct: true},
               {text: "Over-Excited Bobby", correct: false},
               {text: "Fantastic Bobby", correct: false},
               {text: "Drunk Bobby", correct: false}]
    },
    {
     question: "Which Friends star is the youngest?",
     answers: [{text: "Matthew Perry", correct: true},
               {text: "Jennifer Aniston", correct: false},
               {text: "David Schwimmer", correct: false},
               {text: "Courtney Cox", correct: false}]
    },
    {
     question: "In 'The One with Phoebe's Wedding', where is the wedding held?",
     answers: [{text: "In the street", correct: true},
               {text: "Central Park", correct: false},
               {text: "The Plaza", correct: false},
               {text: "The coffee house", correct: false}]
    },
    {
     question: "In 'The One Where Rachel Goes Back to Work', what field does Chandler decide he wants to go into?",
     answers: [{text: "Advertising", correct: true},
               {text: "Data Processing", correct: false},
               {text: "Cheffing", correct: false},
               {text: "Writing Comics", correct: false}]
    },
    {
     question: "Which friends star appeared in 'Fools Rush In' with Salma Hayek?",
     answers: [{text: "Matthew Perry", correct: true},
               {text: "Matt LeBlanc", correct: false},
               {text: "Jennifer Aniston", correct: false},
               {text: "David Schwimmer", correct: false}]
    },
    {
     question: "What is Chandler's middle name?",
     answers: [{text: "Muriel", correct: true},
               {text: "Martin", correct: false},
               {text: "Megan", correct: false},
               {text: "Motley", correct: false}]
    },
    {
     question: "In 'The One Hundredth', with what '70's television character is Phoebe's obstetrician obsessed?",
     answers: [{text: "Fonzie", correct: true},
               {text: "Potsie", correct: false},
               {text: "Mork", correct: false},
               {text: "Mindy", correct: false}]
    },
    {
     question: "What is the profession of Duncan, Phoebe's first husband?",
     answers: [{text: "Ice Skater", correct: true},
               {text: "Ice Hockey Player", correct: false},
               {text: "Broadway star", correct: false},
               {text: "Ballet Dancer", correct: false}]
    },
    {
     question: "In 'The One with the Monkey', who kisses a frustrated Chandler at midnight on New Years Eve?",
     answers: [{text: "Joey", correct: true},
               {text: "Janice", correct: false},
               {text: "Monica", correct: false},
               {text: "Ross", correct: false}]
    },
    {
     question: "Which character said 'You don't own a TV? What's all your furniture pointed at?'?",
     answers: [{text: "Joey", correct: true},
               {text: "Chandler", correct: false},
               {text: "Ross", correct: false},
               {text: "Phoebe", correct: false}]
    },
    {
     question: "In 'The One with the Boobies', to whom was Ross talking when he said 'Hey, I married a lesbian to make you look good'?",
     answers: [{text: "Monica", correct: true},
               {text: "Chandler", correct: false},
               {text: "Susan", correct: false},
               {text: "Carol", correct: false}]
    },
    {
     question: "Who played Monica's boyfriend Richard?",
     answers: [{text: "Tom Selleck", correct: true},
               {text: "Ted Danson", correct: false},
               {text: "Steve Guttenberg", correct: false},
               {text: "Jon Favreau", correct: false}]
    },
    {
     question: "In 'The One with Princess Consuela', which fashion company offers Rachel a job in Paris?",
     answers: [{text: "Louis Vuitton", correct: true},
               {text: "Prada", correct: false},
               {text: "Ralph Lauren", correct: false},
               {text: "Dior", correct: false}]
    },
    {
     question: "Where does Phoebe's boyfriend David get a grant to study, meaning he has to leave Phoebe behind?",
     answers: [{text: "Minsk", correct: true},
               {text: "Yemin", correct: false},
               {text: "Siberia", correct: false},
               {text: "Timbuktu", correct: false}]
    },
    {
     question: "Who was Chandler's roommate before Joey?",
     answers: [{text: "Kip", correct: true},
               {text: "Eddie", correct: false},
               {text: "Ross", correct: false},
               {text: "Monica", correct: false}]
    },
    {
     question: "In 'The One with George Stephanopoulos', which character said 'Who's FICA? Why's he getting all my money?'?",
     answers: [{text: "Rachel", correct: true},
               {text: "Joey", correct: false},
               {text: "Phoebe", correct: false},
               {text: "Chandler", correct: false}]
    },
    {
     question: "What rocker played Stephanie Schiffer, a singer who takes Phoebe's gig at Central Perk?",
     answers: [{text: "Chrissie Hynde", correct: true},
               {text: "Alanis Morissette", correct: false},
               {text: "PJ Harvey", correct: false},
               {text: "Deborah Dyer", correct: false}]
    },
    {
     question: "What is the name of Chandler's father's all-male burlesque revue?",
     answers: [{text: "Viva Las Gaygas", correct: true},
               {text: "Raining Men", correct: false},
               {text: "On my Gaydar", correct: false},
               {text: "The Full Monty", correct: false}]
    },
    {
     question: "Which Friends star was Punk'd by Ashton Kutcher into believing they were caught up in a stolen car ring?",
     answers: [{text: "Matthew Perry", correct: true},
               {text: "David Schwimmer", correct: false},
               {text: "Matt LeBlanc", correct: false},
               {text: "Lisa Kudrow", correct: false}]
    },
    {
     question: "In 'The Last One', who ends up dismantling the foosball table to rescue the chick and duckling?",
     answers: [{text: "Monica", correct: true},
               {text: "Joey", correct: false},
               {text: "Chandler", correct: false},
               {text: "Mike", correct: false}]
    },
    {
     question: "In 'The One with the Butt', who does Chandler say 'makes the women I dream about look like short, fat, bald men'?",
     answers: [{text: "Aurora", correct: true},
               {text: "Monica", correct: false},
               {text: "Janine", correct: false},
               {text: "Cathy", correct: false}]
    },
    {
     question: "What was the name of Carol's life partner?",
     answers: [{text: "Susan", correct: true},
               {text: "Mary", correct: false},
               {text: "Donna", correct: false},
               {text: "Sarah", correct: false}]
    },
    {
     question: "Which American fashion designer did Rachel work for after leaving Bloomingdale's?",
     answers: [{text: "Ralph Lauren", correct: true},
               {text: "Prada", correct: false},
               {text: "Louis Vuitton", correct: false},
               {text: "Hugo Boss", correct: false}]
    },
    {
     question: "In 'The One with the Jellyfish', which character said, 'It was 5.30 in the morning, & you had rambled on for 18 pages. Front & back!'",
     answers: [{text: "Ross", correct: true},
               {text: "Rachel", correct: false},
               {text: "Chandler", correct: false},
               {text: "Joey", correct: false}]
    },
    {
     question: "Who played Gary, the New York City cop that Phoebe dated?",
     answers: [{text: "Michael Rapaport", correct: true},
               {text: "Michael Rooker", correct: false},
               {text: "Paul Rudd", correct: false},
               {text: "Alec Baldwin", correct: false}]
    },
    {
     question: "In 'The Last One', what is the housewarming gift that Joey gets for Monica & Chandler?",
     answers: [{text: "Chick and duckling", correct: true},
               {text: "A buffay original painting", correct: false},
               {text: "A pizza", correct: false},
               {text: "A fatboy chair", correct: false}]
    },
    {
     question: "To whom was Chandler talking to when he said, 'Goodbye, you fruit-drying psychopath'?",
     answers: [{text: "Eddie", correct: true},
               {text: "Kip", correct: false},
               {text: "Mr Heckles", correct: false},
               {text: "Paulo", correct: false}]
    },
    {
     question: "In 'The One with the Hundredth', what ailment lands Joey in a hospital bed as Phoebe is in labour?",
     answers: [{text: "Kidney stones", correct: true},
               {text: "A hernia", correct: false},
               {text: "Sympathy pains", correct: false},
               {text: "A broken arm", correct: false}]
    },
];