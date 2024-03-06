const bookmark = document.getElementById("bookmark");
const text = document.getElementById("h1");
let newQuote = ""; // Declare newQuote as a global variable

document.querySelector(".button").addEventListener("click", function () {
  const textElement = document.getElementById("text");
  // Add the blur class to start the blur animation
  textElement.classList.add("blur-animation");
  text.classList.add("blur-animation");
  
  const number = Math.floor(Math.random() * quotes.length);
  newQuote = quotes[number]; // Assign value to the global newQuote variable
  document.getElementById("text").innerHTML = newQuote;
  console.log(newQuote); // Log the newQuote

  setTimeout(function () {
    // Remove the blur class after 2 seconds
    textElement.classList.remove("blur-animation");
    text.classList.remove("blur-animation");
  }, 1000);
});


const arraybook = ["hello 1 2 3 "];

document.querySelector(".bookmark").addEventListener("click", function () {
  if (newQuote.trim() !== "") { // Check if newQuote is not empty or whitespace
    alert("Bookmark Added");
    arraybook.push(newQuote); // Push newQuote into arraybook
    console.log(arraybook); // Log arraybook after quotes are added to it
  } else {
    console.error("Quote is empty.");
  }
});

shareBtn.addEventListener('click', event => {
  // Check for Web Share API support
  if (navigator.share) {
    // Browser supports native share API
    navigator.share({
      text: newQuote,
    }).then(() => {
      console.log('Thanks for sharing!');
    }).catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link");
  }
});


const quotes = [
    "You must do the thing you think you cannot do.    --ELEANOR ROOSEVELT",
    "The future belongs to those who believe in the beauty of their dreams.    --ELEANOR ROOSEVELT",
    "No one can make you feel inferior without your consent.    --ELEANOR ROOSEVELT",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.   --ELEANOR ROOSEVELT",
    "Happiness is not a goal; it is a by-product.   --ELEANOR ROOSEVELT",
    "The only thing we have to fear is fear itself.    --ELEANOR ROOSEVELT",
    "Friendship with oneself is all-important because without it, one cannot be friends with anyone else    --ELEANOR ROOSEVELT.",
    "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.     --ELEANOR ROOSEVELT",
    "A woman is like a tea bag you never know how strong she is until she gets in hot water.      --ELEANOR ROOSEVELT",
    "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.      --ELEANOR ROOSEVELT"
    

//steve jobs
    ,"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.---STEVE JOBS",
    "Innovation distinguishes between a leader and a follower.  --STEVE JOBS",
    "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.---STEVE JOBS",
    "Stay hungry, stay foolish.",
    "Your time is limited, so don't waste it living someone else's life.  --STEVE JOBS",
    "The people who are crazy enough to think they can change the world are the ones who do.  --STEVE JOBS",
    "Design is not just what it looks like and feels like. Design is how it works.  --STEVE JOBS",
    "I want to put a ding in the universe  --STEVE JOBS",
    "Innovation comes from people meeting up in the hallways or calling each other at 10:30 at night with a new idea, or because they realized something that shoots holes in how we've been thinking about a problem.---STEVE JOBS",
    "The people who are doing the work are the moving force behind the Macintosh. My job is to create a space for them, to clear out the rest of the organization and keep it at bay.---STEVE JOBS"

,
    "The first and greatest victory is to conquer yourself. --Plato",
    "At the touch of love, everyone becomes a poet. --Plato",
    "Ignorance, the root and stem of all evil. --Plato",
    "One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors. --Plato",
    "Wise men speak because they have something to say; fools because they have to say something. --Plato",
    "Courage is knowing what not to fear. --Plato",
    "Justice means minding your own business and not meddling with other men's concerns. --Plato",
    "The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself. --Plato",
    "An empty vessel makes the loudest sound, so they that have the least wit are the greatest babblers. --Plato",
    "The measure of a man is what he does with power. --Plato",
    "The direction in which education starts a man will determine his future in life. --Plato",
    "At the touch of love, everyone becomes a poet. --Plato",
    "The just man is happy, and the unjust man is miserable. --Plato",
    "Philosophy begins in wonder. --Plato",
    "Beauty of style and harmony and grace and good rhythm depend on simplicity. --Plato",
    //muhammad ali
    "Float like a butterfly, sting like a bee. --Muhammad Ali",
    "I'm not the greatest, I'm the double greatest. Not only do I knock 'em out, I pick the round. --Muhammad Ali",
    "Service to others is the rent you pay for your room here on Earth. --Muhammad Ali",
    "It's hard to be humble when you're as great as I am. --Muhammad Ali",
    "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.' --Muhammad Ali",
    "I am the greatest. I said that even before I knew I was. --Muhammad Ali",
    "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark. --Muhammad Ali",
    "Don't count the days; make the days count. --Muhammad Ali",
    "Impossible is just a big word thrown around by small men who find it easier to live in the world they've been given than to explore the power they have to change it. --Muhammad Ali",
    "He who is not courageous enough to take risks will accomplish nothing in life. --Muhammad Ali",
    "Live every day as if it were your last because someday you're going to be right. --Muhammad Ali",
    "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe. --Muhammad Ali",

    //Martin Luther King Jr

    "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.' --Martin Luther King Jr.",
    "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. --Martin Luther King Jr.",
    "Injustice anywhere is a threat to justice everywhere. --Martin Luther King Jr.",
    "The time is always right to do what is right. --Martin Luther King Jr.",
    "We must accept finite disappointment, but never lose infinite hope. --Martin Luther King Jr.",
    "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. --Martin Luther King Jr.",
    "I believe that unarmed truth and unconditional love will have the final word in reality. This is why right, temporarily defeated, is stronger than evil triumphant. --Martin Luther King Jr.",
    "Our lives begin to end the day we become silent about things that matter. --Martin Luther King Jr.",
    "The arc of the moral universe is long, but it bends toward justice. --Martin Luther King Jr.",
    "Faith is taking the first step even when you don't see the whole staircase. --Martin Luther King Jr.",
    "The ultimate tragedy is not the oppression and cruelty by the bad people but the silence over that by the good people. --Martin Luther King Jr.",
    "Let no man pull you so low as to hate him. --Martin Luther King Jr.",

    // mark zuckerburg
    
    "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. --Mark Zuckerberg",
    "The question I ask myself like almost every day is, 'Am I doing the most important thing I could be doing?' --Mark Zuckerberg",
    "People can be really smart or have skills that are directly applicable, but if they don't really believe in it, then they are not going to really work hard. --Mark Zuckerberg",
    "The Hacker Way is an approach to building that involves continuous improvement and iteration. --Mark Zuckerberg",
    "The thing that we are trying to do at Facebook is just help people connect and communicate more efficiently. --Mark Zuckerberg",
    "By giving people the power to share, we're making the world more transparent. --Mark Zuckerberg",
    "The companies that work are the ones that people really care about and have a vision for the world, so do something you like. --Mark Zuckerberg",
    "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough. --Mark Zuckerberg",
    "We don't build services to make money; we make money to build better services. --Mark Zuckerberg",
    "Simply put: we don't build services to make money; we make money to build better services. --Mark Zuckerberg"
,

// helen keller
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. --Helen Keller",
"Life is either a daring adventure or nothing at all. --Helen Keller",
"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. --Helen Keller",
"The only thing worse than being blind is having sight but no vision. --Helen Keller",
"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. --Helen Keller",
"The highest result of education is tolerance. --Helen Keller",
"We could never learn to be brave and patient if there were only joy in the world. --Helen Keller",
"Alone we can do so little; together we can do so much. --Helen Keller",
"I long to accomplish a great and noble task, but it is my chief duty to accomplish small tasks as if they were great and noble. --Helen Keller",
"The world is full of suffering, but it is also full of the overcoming of it. --Helen Keller",

//heracitus issac 
"You cannot step into the same river twice. --Heraclitus",
"Everything flows, nothing stands still. --Heraclitus",
"Character is destiny. --Heraclitus",
"No man ever steps in the same river twice, for it's not the same river and he's not the same man. --Heraclitus",
"War is the father of all things. --Heraclitus",
"Everything changes and nothing remains still. --Heraclitus",
"The only constant in life is change. --Heraclitus",
"Out of every one hundred men, ten shouldn't even be there, eighty are just targets, nine are the real fighters, and we are lucky to have them, for they make the battle. Ah, but the one, one is a warrior, and he will bring the others back. --Heraclitus",
"Nature loves to hide. --Heraclitus",
"Eyes and ears are bad witnesses to men if they have barbarian souls. --Heraclitus",

//nelson madela

"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. --Nelson Mandela",
"Education is the most powerful weapon which you can use to change the world. --Nelson Mandela",
"It always seems impossible until it's done. --Nelson Mandela",
"For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others. --Nelson Mandela",
"The greatest glory in living lies not in never falling, but in rising every time we fall. --Nelson Mandela",
"No one is born hating another person because of the color of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite. --Nelson Mandela",
"A good head and a good heart are always a formidable combination. --Nelson Mandela",
"Resentment is like drinking poison and then hoping it will kill your enemies. --Nelson Mandela",
"I dream of an Africa which is in peace with itself. --Nelson Mandela",
"Real leaders must be ready to sacrifice all for the freedom of their people. --Nelson Mandela"
,
//Albert Schweitzer 

"The only ones among you who will be really happy are those who will have sought and found how to serve. --Albert Schweitzer",
    "Do something wonderful, people may imitate it. --Albert Schweitzer",
    "Reverence for life affords me my fundamental principle of morality. --Albert Schweitzer",
    "The purpose of human life is to serve, and to show compassion and the will to help others. --Albert Schweitzer",
    "The true worth of a man is not to be found in man himself, but in the colors and textures that come alive in others. --Albert Schweitzer",
    "I don't know what your destiny will be, but one thing I know: the only ones among you who will be really happy are those who will have sought and found how to serve. --Albert Schweitzer",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. --Albert Schweitzer",
    "Ethics is nothing else than reverence for life. --Albert Schweitzer",
    "The human spirit is not dead. It lives on in secret... It has come to believe that compassion, in which all ethics must take root, can only attain its full breadth and depth if it embraces all living creatures and does not limit itself to mankind. --Albert Schweitzer",
    "We must fight against the spirit of unconscious cruelty with which we treat the animals. Animals suffer as much as we do. True humanity does not allow us to impose such sufferings on them. It is our duty to make the whole world recognize it. Until we extend our circle of compassion to all living things, humanity will not find peace. --Albert Schweitzer",
    "In everyone's life, at some time, our inner fire goes out. It is then burst into flame by an encounter with another human being. We should all be thankful for those people who rekindle the inner spirit. --Albert Schweitzer",


// Albert einstein

"Imagination is more important than knowledge. --Albert Einstein",
"The only source of knowledge is experience. --Albert Einstein",
"The true sign of intelligence is not knowledge but imagination. --Albert Einstein",
"Strive not to be a success, but rather to be of value. --Albert Einstein",
"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. --Albert Einstein",
"Life is like riding a bicycle. To keep your balance, you must keep moving. --Albert Einstein",
"The only thing that interferes with my learning is my education. --Albert Einstein",
"Two things are infinite: the universe and human stupidity, and I'm not sure about the universe. --Albert Einstein",
"Logic will get you from A to B. Imagination will take you everywhere. --Albert Einstein",
"A person who never made a mistake never tried anything new. --Albert Einstein",
"In the middle of difficulty lies opportunity. --Albert Einstein",
"Peace cannot be kept by force; it can only be achieved by understanding. --Albert Einstein",
"I have no special talents. I am only passionately curious. --Albert Einstein",
"The difference between stupidity and genius is that genius has its limits. --Albert Einstein",
"We can't solve problems by using the same kind of thinking we used when we created them. --Albert Einstein"

,

//Maya Angelou

"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. --Maya Angelou",
"You may not control all the events that happen to you, but you can decide not to be reduced by them. --Maya Angelou",
"Success is liking yourself, liking what you do, and liking how you do it. --Maya Angelou",
"If you don't like something, change it. If you can't change it, change your attitude. --Maya Angelou",
"We all should know that diversity makes for a rich tapestry, and we must understand that all the threads of the tapestry are equal in value no matter their color. --Maya Angelou",
"I can be changed by what happens to me, but I refuse to be reduced by it. --Maya Angelou",
"Prejudice is a burden that confuses the past, threatens the future, and renders the present inaccessible. --Maya Angelou",
"You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot - it's all there. Everything influences each of us, and because of that, I try to make sure that my experiences are positive. --Maya Angelou",
"Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. --Maya Angelou",
"We may encounter many defeats, but we must not be defeated. --Maya Angelou",
"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style. --Maya Angelou",
"Nothing will work unless you do. --Maya Angelou",


//issac newton

"If I have seen further, it is by standing on the shoulders of giants. --Isaac Newton",
"To every action, there is always an equal and opposite reaction. --Isaac Newton",
"I can calculate the motion of heavenly bodies but not the madness of people. --Isaac Newton",
"Tact is the knack of making a point without making an enemy. --Isaac Newton",
"We build too many walls and not enough bridges. --Isaac Newton",
"If I have done the public any service, it is due to my patient thought. --Isaac Newton",
"I do not know what I may appear to the world, but to myself, I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or prettier shell than ordinary, while the great ocean of truth lay all undiscovered before me. --Isaac Newton",
"Nature is pleased with simplicity. And nature is no dummy. --Isaac Newton",
"Plato is my friend; Aristotle is my friend, but my greatest friend is truth. --Isaac Newton",
"I was like a boy playing on the seashore, and diverting myself now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me. --Isaac Newton"
,

//abj abdul kalam

"Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action. --A.P.J Abdul Kalam",
"Don't take rest after your first victory because if you fail in the second, more lips are waiting to say that your first victory was just luck. --A.P.J Abdul Kalam",
"You have to dream before your dreams can come true. --A.P.J Abdul Kalam",
"All of us do not have equal talent, but all of us have an equal opportunity to develop our talents. --A.P.J Abdul Kalam",
"To succeed in your mission, you must have single-minded devotion to your goal. --A.P.J Abdul Kalam",
"If you want to shine like a sun, first burn like a sun. --A.P.J Abdul Kalam",
"Excellence is a continuous process, and not an accident. --A.P.J Abdul Kalam",
"Failure will never overtake me if my determination to succeed is strong enough. --A.P.J Abdul Kalam",
"Man needs difficulties in life because they are necessary to enjoy the success. --A.P.J Abdul Kalam",
"It's very easy to defeat someone, but it's very hard to win someone. --A.P.J Abdul Kalam",
"Let us sacrifice our today so that our children can have a better tomorrow. --A.P.J Abdul Kalam"
,

//mixed

"You miss 100% of the shots you don't take. --Wayne Gretzky",
"The best way to predict the future is to create it. --Peter Drucker",
"Don't watch the clock; do what it does. Keep going. --Sam Levenson",
"Life is what happens when you're busy making other plans. --John Lennon",
"You don't have to be great to start, but you have to start to be great. --Zig Ziglar",
"What you get by achieving your goals is not as important as what you become by achieving your goals. --Zig Ziglar",
"The only thing that's keeping you from getting what you want is the story you keep telling yourself about why you can't have it. --Tony Robbins",
"Life is 10% what happens to us and 90% how we react to it. --Charles R. Swindoll",
"Life is short, and it is up to you to make it sweet. --Sarah Louise Delany",
"It is never too late to be what you might have been. --George Eliot",
"Success usually comes to those who are too busy to be looking for it. --Henry David Thoreau",
"Life is about making an impact, not making an income. --Kevin Kruse",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. --Christian D. Larson",
"Your life is your message to the world. Make it inspiring. --Lorrin L. Lee",
"Dream big and dare to fail. --Norman Vaughan",
"Opportunities don't happen. You create them. --Chris Grosser",
"Be yourself; everyone else is already taken. --Oscar Wilde",
"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. --Mark Twain",
"The secret of getting ahead is getting started. --Mark Twain",
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination. --Jimmy Dean",
"The only way to achieve the impossible is to believe it is possible. --Charles Kingsleigh",
"The best time to plant a tree was 20 years ago. The second best time is now. --Chinese Proverb",
"The only person you are destined to become is the person you decide to be. --Ralph Waldo Emerson",
"Believe you can and you're halfway there. --Theodore Roosevelt",
"The best way to predict your future is to create it. --Abraham Lincoln",
"The only person you should try to be better than is the person you were yesterday. --Anonymous",
"You are the author of your own life story, and you can make it a bestseller. --Anonymous",
"The harder you work for something, the greater you'll feel when you achieve it. --Anonymous",
"Success is not just about making money. It's about making a difference. --Anonymous",
"Success is walking from failure to failure with no loss of enthusiasm. --Winston Churchill",
"Success is not final, failure is not fatal: It is the courage to continue that counts. --Winston Churchill",
"Do not wait for leaders; do it alone, person to person. --Mother Teresa",
"The journey of a thousand miles begins with one step. --Lao Tzu",
"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. --Jordan Belfort",
"The best revenge is massive success. --Frank Sinatra",
"Change your thoughts and you change your world. --Norman Vincent Peale",
"In the midst of winter, I found there was, within me, an invincible summer. --Albert Camus",
"The only way to do great work is to love what you do. --Steve Jobs",
"Your time is limited, don't waste it living someone else's life. --Steve Jobs",
"It does not matter how slowly you go as long as you do not stop. --Confucius",
"Life is really simple, but we insist on making it complicated. --Confucius",
"The best way to predict the future is to create it. --Peter Drucker",
"The only limit to our realization of tomorrow will be our doubts of today. --Franklin D. Roosevelt",
"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. --Jordan Belfort",
"The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. --Joel Brown",
"Your life does not get better by chance, it gets better by change. --Jim Rohn",
"The road to success and the road to failure are almost exactly the same. --Colin R. Davis",
"Success is not in what you have, but who you are. --Bo Bennett",
"Challenges are what make life interesting, and overcoming them is what makes life meaningful. --Joshua J. Marine",
"You are never too old to set another goal or to dream a new dream. --C.S. Lewis",


];

