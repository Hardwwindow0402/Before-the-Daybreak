const scenes = {
    ch_1: {
        type: "chapter",
        label: "Chapter I",
        title: "Chapter I: Night at Clinton",
        subtitle: "",
        caption: "",
        hint: "",
        image: "images/chapters/clinton.png",
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
            { text: "Hide", next: "ch1_c4" },
            { text: "Run", next: "ch_2" }
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
    ch1_c4: {
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
                text: "duck behind the bleachers", next: "ch1_c5_1"
            },
            {
                text: "slip into a corner", next: "ch1_c5_2"
            },
            {
                text: "  climb up to the ventilation room", next: "ch1_c5_3"
            }
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
            { text: "Stay", next: "ch1_c6_c" }
        ]
    },

    ch_2: {
        type: "chapter",
        label: "Chapter II",
        title: "Chapter II: Run, Run, Run faster!",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [

        ],
        choices: [

        ]
    },

    e_1: {
        type: "ending",
        label: "Ending No.1",
        title: "THE END",
        subtitle: "",
        caption: "",
        hint: "Before the Daybreak: Escape from Clinton",
        image: "images/endings/e_1.png",
        text: [
            `A warm sensation spread through your body. After that, you remembered nothing.

            Probably-most likely-you were dead.

            -- ----
            `
        ],
        choices: [
            { text: "Restart", next:"ch_1"}
        ]
    }
};

function showScene(sceneId) {
    const scene = scenes[sceneId];

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


showScene("ch_1");