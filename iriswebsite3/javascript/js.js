const Reafirming = [
    "First of all it shouldnt matter what juuli thinks! you should know by now that hes gunna love you regardless you silly monkey",
    "Iris thats completley okay im gonna love you regardless :)",
    "Hey whatever it is you can tell me (as in like actualy tell me), i wont judge i wont think less of you, if anything ill be very happy that you trust me enough to tell me :)",
    "Juuli says: Iris i will always love you regardless of this, i dont care what you do ill always be here for you- you showed me something i really needed and you have genuinly made me a better person- there is NOTHING that could change how my heart feels about you.",
    "I spent an entire day making this app for you and you think that i would care about that small thing thats on your mind? listen here you sweetie pie you- i wont care (in the best way posible)- its not gonna change anything silly",
    "As im typing this i miss you i miss u basicly always so do you really think im gonna care about that small thing -_- come on iris ill care bout u regardless!",
    "well do you genuinly think thats gonna change how Juuli sees you- heres your awnser HELL no ill love you regardless it dont matter what you did.",
    "it doesnt matter, your perfect, inside and out.",
    "stop worrying and go ask me! infact theres a big chance youll get to know me better because i share personal stuff to comfort you :P"
  ]
  
  const Scared = [
    "No im not mad at you sunflower",
    "No i not mad yes i love YOU IRIS",
    "No im not mad at you im probably scared your mad at me while ur asking this lol",
    "Iris i physicaly cant focus in class like 50% of the time because im thinking about you do you think that i could be mad at you if i think about you like that :P (i cant)",
    "why would i be mad at you? the only reason why id actualy be mad at you is if you hurt me on purpose (and even then im just one genuine sorry message away from things being back to normal :). ).",
    "Listen why oh why do you think im mad at you? not ever am i mad at you like duh",
    "Think back of everything we did together and think very carefully, did things turn out okay? yes they did so why on heavens earth would i be mad at you now -_-",
    "hey calm down, i love you (yes shocker juuli loves you so much (that wasnt a shocker, this should be clear by now lol))",
    "Cmon chili i not mad i probably just a bit tired or confused.",
    "did you forget Juliaan loves you?"
  ]

  function GetReafirmingMessage(array, setter) {
    return array[Math.floor(Math.random() * array.length)]
  }

function  reafirm() {
    let newmsg = GetReafirmingMessage(Reafirming)
    document.getElementById("reafirm").textContent = newmsg
}

function  angy() {
    let newmsg = GetReafirmingMessage(Scared)
    document.getElementById("angy").textContent = newmsg
}




