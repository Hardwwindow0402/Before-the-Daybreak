const scenes = {
    ch_1: {
        type: "chapter",
        label: "Chapter I",
        title: "Chapter I: Night at Clinton",
        subtitle: "",
        caption: "",
        hint: "",
        image: "images/chapters/clinton.jpg",
        text: [
            "It was an ordinary evening at Clinton High School in Nob Hill, San Francisco.",
            "7:20 p.m. Nothing seemed wrong."
        ],
        choices: [
            { text: "Continue", next: "ch1_c1" }
        ]
    },

    ch1_c1: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: ["You were standing inside the gym. About twenty students were there, playing different sports.",
            "A few were playing badminton, while another group of girls stood nearby, chatting.",
            "\"Wait a sec. I'm going to the restroom,\" a tall guy named Richard said to you.",
            "Then he stepped out of the gym, and the door swung shut behind him.",
            "Then, a minute later, you heard a gunshot...",
            "Surprisingly, you seemed to be the only one who had heard it. ",
            "Everyone else kept playing as usual, as if nothing had happened.",
            "Only Will, a guy looked at you",
            "You decided to..."
        ],
        choices: [
            { text: "Tell everyone", next: "ch1_c3_1" },
            { text: "Tell Will only", next: "ch1_c2_1" },
            { text: "Continue playing sports", next: "ch1_c2_2" }
        ]
    },
    ch1_c2_1: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [`
                "Will, did you hear that ?"

                "Hear what ?" Will glanced at you. "I didn't hear anything strange."

                Did I mishear it ? you wondered.

                "No. I'm serious. That was a gunshot."

                Will did not reply. The look on his face made it clear he did not believe you.

                For a moment, even you started to doubt yourself.

                Then the sound came again.

                Bang. Bang. Bang.`

        ],
        choices: [
            { text: "Continue", next: "ch1_c3_1" },

        ]
    },


    ch1_c2_2: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [`The sound came again. This time, other students heard it too.
                They froze and looked at one another, panic spreading across their faces.
                They understood at once.
                There was a shooter on campus.`
        ],
        choices: [
            {
                text: "Tell everyone",
                next: "ch1_c3_1"

            },
            { text: "Continue playing", next: "ch1_c3_2" }
        ]
    },

    ch1_c3_1: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [`Everyone panicked, and nobody knew what to do.
                They had grown up in one of the safest places in the city. 
                No one had ever faced anything like this before.
                Some wanted to run out of the gym. Others suggested hiding in the corners. 
                Most simply stood there, frozen, unable to move.
                You decided to:`

        ],
        choices: [
            { text: "Hide", next: "ch1_c4_1" },
            {
                text: "Run",
                outcomes: [
                    { chance: 0.2, next: "ch1_c4_2" },
                    { chance: 0.8, next: "ch_2" }
                ]
            }
        ]
    },

    ch1_c3_2: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [`You told yourself you were probably overthinking it. You had most likely misheard.

                After all, no one else had noticed the sound.

                So you pushed the thought aside and went back to playing with your classmates.

                Then, just as you threw the ball, the gym doors burst open.

                Seven armed men stormed in.`
        ],
        choices: [
            { text: "Duck behind the bleachers", next: "ch1_c5_1" },
            { text: "Lay on the ground", next: "e_1" },
            { text: "Stand up and fight", next: "e_1" }
        ]
    },
    ch1_c4_1: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You followed your instincts: hide.

                You looked around, but the gym offered almost nowhere to hide.

                Under pressure, you made a split-second choice and hoped for the best...
                        `
        ],
        choices: [
            {
                text: "Duck behind the bleachers", next: "ch1_c5_1"
            },
            {
                text: "Slip into a corner", next: "ch1_c5_2"
            },
            {
                text: "  Climb up to the ventilation room", next: "ch1_c5_3"
            }
        ]
    },
    ch1_c4_2: {
        type: "content",
        label: "Chapter I",
        text: [
            `You opened the gym door and stepped outside.

            The moment the door swung open, you found yourself face to face with an armed man.

            He lifted his gun...`
        ],
        choices: [
            {text:"Continue", next:"e_1"}
        ]
    },
    ch1_c5_1: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `
            You hid behind the bleachers. The entire gym fell deathly silent.

            CRASH. The door slammed open.

            Someone entered the gym.

            In the dim light, you saw seven armed men standing on the basketball court. They all wore heavy black armor, rifles in their hands.

            "GET OUT! DON'T HIDE!" the man in the middle shouted.

            No one answered.

            "SEARCH FOR THEM!" he ordered.

            The others spread out, checking every possible hiding place. The students hiding in the corners were found and killed.

            Then they started toward the bleachers...
            `
        ],
        choices: [
            {
                text: "Continue",
                outcomes: [
                    { chance: 0.4, next: "e_1" },
                    { chance: 0.6, next: "ch1_c6" }
                ]
            }
        ]
    },
    ch1_c5_2: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You hid in the corners. The entire gym fell deathly silent.
            CRASH. The door slammed open.

            Someone entered the gym.

            In the dim light, you saw seven armed men standing on the basketball court. They all wore heavy black armor, rifles in their hands.

            "GET OUT! DON'T HIDE!" the man in the middle shouted.

            No one answered.

            "SEARCH FOR THEM!" he ordered.

            The others spread out, checking every possible hiding place.
            
            You saw someone coming to you...`
        ],
        choices: [
            { text: "Continue", next: "e_1" }
        ]
    },
    ch1_c5_3:{
        type:"content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You hid in the ventilation room. The entire gym fell deathly silent.

            CRASH. The door slammed open.

            Someone entered the gym.

            In the dim light, you saw seven armed men standing on the basketball court. They all wore heavy black armor, rifles in their hands.

            "GET OUT! DON'T HIDE!" the man in the middle shouted.

            No one answered.

            "SEARCH FOR THEM!" he ordered.

            The others spread out, checking every possible hiding place. The students hiding in the corners were found and killed.

            Then they walked toward the bleachers, the students hiding behind were found and killed too... `
        ],
        choices: [
            {text:"Continue", next:"ch1_c6"}
        ]
    },
    ch1_c6: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `
            The gym was silent again, as if nothing had happened.

            You stayed where you were, trembling, unsure whether to come out.

            You waited another minute or two.

            Nothing.

            It was as if the whole world had stopped.

            Now, you had to decide:`
        ],
        choices: [
            { text: "Get out", next: "ch_2" },
            { text: "Stay", next: "ch1_c6_c" }
        ]
    },
    ch1_c6_c: {
        type: "content",
        label: "Chapter I",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You kept hiding.

            The gym was silent again, as if nothing had happened.

            You stayed where you were, trembling, unsure whether to come out.

            You waited another minute or two.

            Nothing.

            It was as if the whole world had stopped.

            Now, you had to decide:`
        ],
        choices: [
            { text: "Get out", next: "ch_2" },
            
        ]
    },

    ch_2: {
        type: "chapter",
        label: "Chapter II",
        title: "Chapter II: Run, Run, Run faster!",
        subtitle: "",
        caption: "",
        hint: "",
        image: "images/chapters/corridor.jpg",
        text: [
            `You had made it out of the gym alive.
             But the danger was far from over..`
        ],
        choices: [
            {text:"continue",next:"ch2_c1"}
        ]
    },
    ch2_c1: {
        type: "content",
        label: "Chapter II",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You had escaped death and stepped out of the gym.

            You found yourself in a corridor.
            To your left, the floor was smeared with blood and marked by footprints.
            That way led toward the backyard and the library.

            To your right, the floor was cleaner.
            That path led to the academic building and the front entrance-the nearest way out of the school.

            "Go left!" said Cozy, one of the girls, already moving that way.

            "Wait," Will said. "We need to get out of here as fast as possible."

            In the chaos, you decided to:`
        ],
        choices: [
            { text: "Go right", next: "ch2_c2_1" },
            { text: "Go left", next: "ch2_c2_2" }
           
        ]
    },

    ch2_c2_1: {
        type: "content",
        label: "Chapter II",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You chose the corridor on the right.

        You ran as fast as you could, following it until you reached the academic building.

        As you kept going, you spotted a staircase on your right leading to the upper floors.

        You would:`
        ],
        choices: [
            { text: "Turn and go up", next: "ch2_c3_2" },
            {text:"Keep going", next:"ch2_c3_1"}
        ]
    },
    
    ch2_c2_2: {
        type: "content",
        label: "Chapter II",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
        `Somehow, you chose the corridor on the left, ignoring the bloodstains.

        Moving quickly along the corridor, you left the gym and stepped into the backyard of Clinton.

        The yard lay between the library and the gym, behind the academic building.

        Beyond it stood a deserted garden...

        You decided to:`
        ],
        choices: [
            { text: "Go to the garden", next: "ch_4" },
            { text: "Stay in the yard", next: "ch2_c3_4" },
            {text:"Go to the library",next:"ch_3"}
        ]
    
    },
    ch2_c3_1: {
        type: "content",
        label: "Chapter II",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You kept moving along the first floor. After all, it was the fastest route to the front door-the quickest way out of this hell.

            When you reached the end of the corridor, you peered around the corner.

            Three huge men were standing farther down the hall, talking about something.

            Only one of them was facing your direction. The others had their backs to you.

            At that moment, you decided to:`
        ],
        choices: [
            { text: "Turn back and Run", next: "ch2_c4_1" },
            {
                text: "Sneak forward",
                outcomes: [
                    { chance: 0.1, next: "ch2_c4_2" },
                    { chance: 0.9, next: "ch2_c4_3" }
                ]
            }

        ]
    },
    ch2_c3_2: {
        type: "content",
        label: "Chapter II",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You climbed the staircase to the second floor.

            You found yourself in the corridor again, but this time it was swallowed by darkness.

            The choking smell of gunpowder and rust filled the air, making it even harder to breathe.

            You could barely make out the walls, the windows, and the classroom doors.

            There was nothing else in the hallway.

            When you looked back, you realized that only Cozy had followed you.

            Now the two of you were trapped on the dark second floor, with no idea where to go.

            Following Cozy, the two of you began to move quietly...`
        ],
        choices: [
            { text: "Go conterclockwise", next: "ch2_c4_4" },
            { text: "Go clockwise", next: "ch2_c4_5" }
        ]

    },
    ch2_c3_4: {
        type: "content",
        label: "Chapter II",
        text: [
            `You stayed in the yard, hoping the armed men would simply disappear.

            But the world did not work that way.

            Three armed men were walking toward the library when they spotted you in the dim light.

            Then came the gunshot...`
        ],
        choices: [
            {text:"Continue", next:"e_1"}
        ]
    },
    ch2_c4_1: {
        type: "content",
        label:"Chapter II",
        text: [
            `Running back from the dangerous front entrance, you passed the staircase again.

            You hesitated.

            The armed men had already noticed you and were probably coming after you. But the second floor was a complete unknown.

            You decided to:`
        ],
        choices: [
            { text: "Stay on the first floor", next: "ch2_c3_3" },
            { text: "Go up to the second floor", next: "ch2_c3_2" }
        ]
    },


    ch2_c4_2: {
        type: "content",
        label: "Chapter II",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You crept forward quietly, trying not to make a single sound.

            You even held your breath, afraid they might hear you.

            Somehow, you made it.

            You had slipped through the most dangerous place of all, and no one had noticed.

            Then you ran for the front gate and saw police cars surrounding the entire school.

            At last, you were...`
        ],
        choices: [
            { text: "Continue", next: "e_2" }
        ]
    },
    ch2_c4_3: {
        type: "content",
        label: "Chapter II",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `You crept forward quietly, trying not to make a single sound.

            You even held your breath, afraid they might hear you.

            But getting past them was almost impossible.

            They noticed you.

            Then they turned and started coming toward you...`
        ],
        choices: [
            { text: "Continue", next: "e_1" }
        ]
    },
    ch2_c4_4: {
        type: "content",
        label: "chapter II",
        text: [
            `You kept walking.

            Suddenly, you saw a flashlight at the far end of the corridor.

            Heavy footsteps, breaking doors, and furniture crashing against the floor shattered the silence.

            You watched as the man moved past each classroom. He kicked the doors open, swept his light inside, and sprayed the rooms with bullets.

            Faint screams came from several of them.

            He was getting closer, and you and Cozy were stuck in the middle of the corridor.

            You decided to`
        ],
        choices: [
            { text: "Hide in a nearby classroom", next: "ch2_c5_1" },
            {
                text: "Turn around and run away",
                outcomes: [
                    { chance: 0.5, next: "ch2_c4_5" },
                    { chance: 0.5, next: "ch2_c5_2" }
                ]
            }
        ]
    },
    ch2_c5_1: {
        type: "content",
        label: "Chapter II",
        text: [
            `You entered the classroom. No one was there.

            It was completely empty-no students, no teacher, not even a body.

            The desks and chairs were in disarray.

            At the front of the room, you could barely make out something written on the whiteboard. At the back, there was something on the shelf.`
        ],
        choices: [
            { text: "Check the whiteboard", next: "ch2_c6_1" },
            { text: "Look at the back shelf", next: "ch2_c6_3" },
            {text:"Hide behind desks and chairs",next:"ch2_c7_1"}
        ]
    },
    ch2_c5_2: {
        type: "content",
        label: "Chapter II",
        text: [
            `You turned and ran.

            But you were too late. 
            
            He had already seen the two of you.`

        ],
        choices: [
            {
                text: "Continue",
                outcomes: [
                    { chance: 0.9, next: "e_1" },
                    { chance: 0.1, next: "ch2_c6_2" }

                ]
            }
        ]

        
    },
    ch2_c6_1: {
        type: "content",
        label: "Chapter II",
        image: "images/contents/kenbont.jpg",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        text: [
            `Near the whiteboard, you could finally read the words clearly.

            "Kenbont Far," Cozy read aloud.

            You saw her react at once. Her body tensed, and she nearly collapsed.

            "Are you okay?" you asked.

            She sat down and looked up at you, her face pale.

            She nodded. "Yes. I'm all right."

            "I read about it once," she said. "The book said Kenbont was the most dangerous terrorist group on Earth."

            Terrorists?

            --------------------------------------------------
            
            The footsteps were getting louder and closer. You knew the armed man was almost here.

            You decided to:
            `
        ],
        choices: [
            { text: "Hide in the middle, behind desks and chairs", next: "ch2_c7_1" },
            { text: "Hide near the door, in the corner", next: "ch2_c7_2" },
            { text: "Hide under windows, away from the corridor", next: "ch2_c7_3" }
                    ]
            
        

    },

    ch2_c6_2: {
        type: "content",
        label: "Chapter II",
        text: [
            `You thought you were dead.

            Honestly, so did I.

            But somehow, you survived.

            Cozy had been shot in the arm, and your right foot was in terrible shape. 
            Luckily, neither wound was fatal.`
        ],
        choices: [
            { text: "Continue", next: "ch2_c4_5" }
        ]
    },
    ch2_c6_3: {
        type: "content",
        label: "Chapter II",
        text: [
            ``
        ]

    },
    


    e_1: {
        type: "ending",
        label: "Ending No.1",
        title: "Daybreak Never Came",
        subtitle: "",
        caption: "",
        hint: "Before the Daybreak: Escape from Clinton",
        image: "images/endings/e_1.jpg",
        text: [
            `A warm sensation spread through your body. After that, you remembered nothing.

            Probably-most likely-you were dead.

            ---- THE END --
            `
        ],
        choices: [
            { text: "Restart", next:"ch_1"}
        ]
    },
    e_2: {
        type: "ending",
        label: "Ending No.2",
        title: "Safe for Now",
        subtitle: "",
        caption: "",
        hint: "Before the Daybreak: Escape from Clinton",
        image: "images/endings/e_2.jpg",
        text: [
            `Eventually, you saw the streetlights beyond the school.

            Someone grabbed your arm and helped you over the high wall.

            You looked up at the sky. The darkness was beginning to fade.

            For the first time, you realized how beautiful the world was.

            And now, it was the hour before daybreak.

            ---- THE END --
            `
        ],
        choices: [
            { text: "Restart", next: "ch_1" }
        ]
    }
};

function showScene(sceneId) {
    const scene = scenes[sceneId];

    const container = document.getElementById("game-container");
    container.className = "game-container " + scene.type;

    document.getElementById("scene-label").innerText = scene.label || "";
    document.getElementById("scene-title").innerText = scene.title || "";
    document.getElementById("scene-subtitle").innerText = scene.subtitle || "";
    document.getElementById("scene-caption").innerText = scene.caption || "";
    document.getElementById("continue-hint").innerText = scene.hint || "";

    const imageElement = document.getElementById("scene-image");
    const imageFrame = document.getElementById("image-frame");

    if (scene.image) {
        imageElement.src = scene.image;
        imageElement.style.display = "block";
        imageFrame.style.display = "block";
    } else {
        imageElement.style.display = "none";
        imageFrame.style.display = "none";
    }

    const textElement = document.getElementById("scene-text");
    textElement.innerHTML = "";
    for (const para of scene.text) {
        const p = document.createElement("p");
        p.innerText = para;
        textElement.appendChild(p);
    }

    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";
    for (const choice of scene.choices) {
        const button = document.createElement("button");
        button.innerText = choice.text;

        button.onclick = function () {
            if (choice.outcomes) {
                const roll = Math.random();
                let total = 0;

                for (const outcome of choice.outcomes) {
                    total += outcome.chance;
                    if (roll < total) {
                        showScene(outcome.next);
                        return;
                    }
                }
            } else {
                showScene(choice.next);
            }
        };

        choicesElement.appendChild(button);
    }
}
function updateSceneImage(imagePath) {
    const sceneImage = document.getElementById("scene-image");

    if (!imagePath) {
        sceneImage.style.display = "none";
        sceneImage.removeAttribute("src");
        return;
    }

    sceneImage.style.display = "none";

    const tempImg = new Image();
    tempImg.onload = function () {
        sceneImage.src = imagePath;
        sceneImage.style.display = "block";
    };
    tempImg.src = imagePath;
}


showScene("ch_1");
updateSceneImage(scene.image);
