// Source data array of zodiac signs with their corresponding cars, images, sounds, and other details.//
const zodiac_signs = [
    {"name": "Aries",
        "start_month": 3,
        "start_day": 21,
        "end_month": 4,
        "end_day": 19,
        "car": "Porsche GT3RS",
        "car_image": "porsche_gt3rs.jpg",
        "car_sound": "porsche_gt3rs.mp3",
        "country_of_origin": "Germany",
        "year_of_production": 2020,
        "top_speed": 208,
        "text": "The Porsche 911 GT3 RS is a monument to engineering obsession, a machine born from the relentless pursuit of automotive perfection. Beneath its unmistakable silhouette lies a magnificent 4.0-liter naturally aspirated flat-six, screaming toward 9,000 RPM with a mechanical symphony that sends chills down the spine. Every vent, every aerodynamic surface, every millimeter of its chassis exists for a singular purpose: to conquer the racetrack. Its towering rear wing and extraordinary aerodynamic engineering transform the humble principles of physics into something resembling an art form. Where other supercars rely on brute horsepower, the GT3 RS achieves greatness through precision, balance, and an almost supernatural connection to the road. It is the automotive equivalent of a perfectly sharpened blade, a machine so ruthlessly refined that every corner becomes an opportunity to experience the absolute limits of human engineering."
    },
    {"name": "Taurus",
        "start_month": 4,
        "start_day": 20,
        "end_month": 5,
        "end_day": 20,
        "car": "Ferrari 488 Pista Spider",
        "car_image": "ferrari_488_pista_spider.jpg",
        "car_sound": "ferrari_488_pista_spider.mp3",
        "country_of_origin": "Italy",
        "year_of_production": 2019,
        "top_speed": 211,
        "text": "The Ferrari 488 Pista Spider is a magnificent contradiction, a machine of devastating violence wrapped in the seductive elegance of Italian artistry. Beneath its sculpted carbon-fiber bodywork lies a ferocious 3.9-liter twin-turbocharged V8, unleashing 710 horsepower with an intensity that borders on the supernatural. Its sweeping curves, aggressive aerodynamic channels, and unmistakable Ferrari proportions create a silhouette that is simultaneously beautiful and terrifying. With the roof lowered, the furious howl of its engine fills the open air as the world dissolves into a blur of speed, sound, and sensation. It possesses the temperament of a thoroughbred racehorse and the elegance of a Renaissance sculpture, an intoxicating combination that few automobiles have ever achieved. The Pista Spider is Maranello's beautiful madness made manifest, a scarlet tempest of passion and power that reminds humanity why the automobile became an object of desire in the first place."
    },
    {"name": "Gemini",
        "start_month": 5,
        "start_day": 21,
        "end_month": 6,
        "end_day": 20,
        "car": "Koenigsegg Regera",
        "car_image": "koenigsegg_regera.jpg",
        "car_sound": "koenigsegg_regera.mp3",
        "country_of_origin": "Sweden",
        "year_of_production": 2017,
        "top_speed": 273,
        "text": "The Koenigsegg Regera is a testament to the extraordinary possibilities of human imagination, a machine so technologically audacious that it appears to have arrived from a future the rest of the automotive world has yet to comprehend. Within its breathtaking carbon-fiber silhouette resides a monstrous 5.0-liter twin-turbocharged V8 accompanied by three electric motors, delivering approximately 1,500 horsepower in a relentless tidal wave of acceleration. Its revolutionary Direct Drive system abandons the conventional multi-speed transmission entirely, replacing mechanical complexity with an almost supernatural continuity of power. Every detail, from its elegant dihedral synchro-helix doors to its exquisitely engineered powertrain, reveals the uncompromising genius of Christian von Koenigsegg. Yet beneath its technological brilliance lies something profoundly beautiful: the conviction that the impossible is merely an engineering problem awaiting a solution. The Regera is not simply a hypercar; it is a declaration of human ingenuity, a machine that bends the boundaries of possibility and makes the extraordinary appear effortless."
    },
    {"name": "Cancer",
        "start_month": 6,
        "start_day": 21,
        "end_month": 7,
        "end_day": 22,
        "car": "LaFerrari",
        "car_image": "laferrari.jpg",
        "car_sound": "laferrari.mp3",
        "country_of_origin": "Italy",
        "year_of_production": 2013,
        "top_speed": 249,
        "text": "The Ferrari LaFerrari is automotive divinity made tangible, a machine so breathtaking in its beauty, so extraordinary in its execution, that it feels less like something designed by human hands and more like something conceived by God himself. Its flowing silhouette possesses an almost celestial perfection, every curve and contour appearing as though it could never have existed any other way. Beneath its sculpted bodywork resides a magnificent 6.3-liter naturally aspirated V12, screaming toward 9,250 RPM in a symphony that borders on the biblical. Accompanied by Ferrari’s HY-KERS system, its 950 horsepower delivers performance worthy of its otherworldly appearance. The LaFerrari transcends engineering, design, and even the automobile itself. It is as though God descended from the heavens, handed humanity the blueprints for the perfect car, and Ferrari simply followed his instructions."
    },
    {"name": "Leo",
        "start_month": 7,
        "start_day": 23,
        "end_month": 8,
        "end_day": 22,
        "car": "Lamborghini Aventador SVJ",
        "car_image": "lamborghini_aventador_svj.jpg",
        "car_sound": "lamborghini_aventador_svj.mp3",
        "country_of_origin": "Italy",
        "year_of_production": 2017,
        "top_speed": 217,
        "text": "The Lamborghini Aventador SVJ is an unholy masterpiece of Italian excess, a thunderous celebration of everything that makes the automobile an object of obsession. Its menacing, razor-sharp silhouette looks less like something designed in a studio and more like a weapon forged in the fires of hell. Behind the cockpit sits a magnificent 6.5-liter naturally aspirated V12, unleashing 759 horsepower and a deafening, operatic scream that reverberates through your very soul. Its savage acceleration, violent single-clutch shifts, and revolutionary ALA active aerodynamics make it one of the most exhilarating machines ever to wear the raging bull. Where the LaFerrari embodies celestial perfection, the Aventador SVJ represents something far more primal: aggression, theatricality, and absolute mechanical fury. It is not a car that asks for admiration. It demands reverence. A fallen angel with twelve cylinders, sculpted in carbon fiber and born to shake the heavens."
    },
    {"name": "Virgo",
        "start_month": 8,
        "start_day": 23,
        "end_month": 9,
        "end_day": 22,
        "car": "Lamborghini Sesto Elemento",
        "car_image": "lamborghini_sesto_elemento.jpg",
        "car_sound": "lamborghini_sesto_elemento.mp3",
        "country_of_origin": "Italy",
        "year_of_production": 2015,
        "top_speed": 217,
        "text": "The Lamborghini Sesto Elemento is a masterpiece of mechanical brutality, an almost extraterrestrial creation that strips the automobile down to its purest, most savage form. Forged almost entirely from carbon fiber, its angular, skeletal bodywork resembles something unearthed from a civilization centuries ahead of our own, a machine so aggressively beautiful that it seems almost forbidden to exist. Beneath its otherworldly exterior lies a ferocious 5.2-liter naturally aspirated V10, producing 570 horsepower while commanding a machine weighing a scarcely believable 999 kilograms. Every ounce of unnecessary luxury has been sacrificed at the altar of performance, leaving behind nothing but raw engineering and unfiltered violence. Where the LaFerrari is divine perfection and the Aventador SVJ is demonic fury, the Sesto Elemento is something altogether more sinister. It is the embodiment of absolute purpose, a carbon-fiber predator engineered without compromise, as though Lamborghini had been tasked with building a weapon rather than an automobile."
    },
    {"name": "Libra",
        "start_month": 9,
        "start_day": 23,
        "end_month": 10,
        "end_day": 22,
        "car": "Bugatti Chiron Super Sport 300+",
        "car_image": "bugatti_chiron_super_sport_300.jpg", 
        "car_sound": "bugatti_chiron_super_sport_300.mp3",
        "country_of_origin": "France",
        "year_of_production": 2019,
        "top_speed": 305,
        "text": "The Bugatti Chiron Super Sport 300+ is an automotive titan, a machine born from mankind's relentless desire to conquer the impossible and transcend the very limits of speed. Beneath its magnificent, elongated carbon-fiber bodywork resides one of the greatest engines ever conceived: an 8.0-liter quad-turbocharged W16, a sixteen-cylinder mechanical colossus unleashing an earth-shattering 1,578 horsepower. In 2019, this engineering marvel became the first hypercar to breach the seemingly mythical 300 mph barrier, achieving an astonishing 304.773 mph and forever engraving its name into automotive history. Its sweeping longtail silhouette, exposed carbon-fiber finish, and striking orange accents evoke the elegance of a supersonic aircraft, a machine sculpted not merely to move through the atmosphere but to conquer it. Yet what makes the Bugatti truly extraordinary is the almost unimaginable composure with which it delivers such devastating performance, combining the refinement of French luxury with the ferocity of an engineering experiment pushed to its absolute limits. The Chiron Super Sport 300+ is humanity's defiance of the impossible made physical, a sixteen-cylinder monument to ambition, a machine that stares into the abyss of speed and declares that even the horizon is not far enough."
    },
    {"name": "Scorpio",
        "start_month": 10,
        "start_day": 23,
        "end_month": 11,
        "end_day": 21,
        "car": "Ferrari F8 Tributo",
        "car_image": "ferrari_f8_tributo.jpg",
        "car_sound": "ferrari_f8_tributo.mp3",
        "country_of_origin": "Italy",
        "year_of_production": 2019,
        "top_speed": 215, 
        "text": "The Ferrari F8 Tributo is a magnificent celebration of Maranello's engineering heritage, a machine that embodies the intoxicating beauty, passion, and ferocity of the Italian supercar. Beneath its exquisitely sculpted bodywork resides a masterpiece of mechanical artistry: a 3.9-liter twin-turbocharged V8 producing a staggering 710 horsepower, an engine so extraordinary that its very existence deserves celebration. Its sweeping aerodynamic lines, deeply carved air intakes, and elegant reinterpretation of Ferrari's iconic twin-taillight design create a silhouette that is both unmistakably modern and profoundly timeless. With every press of the accelerator, the F8 unleashes a breathtaking surge of power, propelling its driver into a world where speed becomes sensation and engineering becomes emotion. Yet its greatest achievement lies not merely in its performance, but in its significance: a tribute to the magnificent lineage of Ferrari's mid-engined V8 berlinettas, generations of machines that have captivated the world. The F8 Tributo is a love letter written in aluminum, carbon fiber, and fire; a final, thunderous standing ovation for one of the greatest chapters in Ferrari's history, and a reminder that true automotive beauty is measured not only in speed, but in the soul it leaves behind."
    },
    {"name": "Sagittarius",
        "start_month": 11,
        "start_day": 22,
        "end_month": 12,
        "end_day": 21,
        "car": "Ferrari SF90 Stradale",
        "car_image": "ferrari_sf90_stradale.jpg",
        "car_sound": "ferrari_sf90_stradale.mp3",
        "country_of_origin": "Italy",
        "year_of_production": 2020,
        "top_speed": 211,
        "text": "The Ferrari SF90 Stradale is a breathtaking declaration of Italian technological supremacy, a machine that stands at the intersection of Maranello's legendary heritage and an electrified future of almost unimaginable performance. Beneath its impossibly sculpted silhouette lies a ferocious 4.0-liter twin-turbocharged V8, united with three electric motors to unleash a staggering 986 horsepower in a relentless explosion of mechanical and electrical fury. Its razor-sharp aerodynamic surfaces, deeply sculpted air channels, and predatory stance give it the presence of a machine engineered not merely to compete, but to dominate. With instantaneous electric torque complementing the savage crescendo of its combustion engine, the SF90 delivers acceleration of such extraordinary intensity that the world seems to collapse toward the horizon. Yet its true brilliance lies in something far greater than raw performance: Ferrari's ability to embrace revolutionary technology without surrendering the emotion, theater, and unmistakable identity that have defined the Prancing Horse for generations. It is a machine of remarkable contradictions, combining astonishing technological complexity with an almost effortless ability to awaken the senses. The SF90 Stradale is Maranello's declaration of war against the boundaries of possibility, a scarlet thunderbolt forged from ninety years of racing heritage and an unshakable conviction that the future of the automobile should not merely be faster, but more extraordinary than anything that came before it."
    },
    {"name": "Capricorn",
        "start_month": 12,
        "start_day": 22,
        "end_month": 1,
        "end_day": 19,
        "car": "Aston Martin Valkyrie",
         "car_image": "aston_martin_valkyrie.jpg",
        "car_sound": "aston_martin_valkyrie.mp3",
        "country_of_origin": "United Kingdom",
        "year_of_production": 2021,
        "top_speed": 250,
        "text": "The Aston Martin Valkyrie is a staggering triumph of human ambition, an engineering marvel so uncompromising that it scarcely seems possible for such a machine to exist beyond the confines of a Formula 1 circuit. Conceived through the extraordinary aerodynamic genius of Adrian Newey, its alien silhouette is a breathtaking manifestation of physics pushed to its absolute limits, with enormous Venturi tunnels carving through its underbody as though the very atmosphere had been sculpted around it. At its heart resides one of the most magnificent engines ever created: a 6.5-liter naturally aspirated Cosworth V12, producing 1,000 horsepower on its own and screaming toward an almost incomprehensible 11,100 RPM. Accompanied by a hybrid system delivering approximately 1,139 horsepower combined, the Valkyrie unleashes a mechanical shriek so ferocious that it resembles the sound of reality itself being torn apart. Every surface, every gram of carbon fiber, every impossibly intricate component exists in service of a singular obsession: absolute performance. There is no indulgence, no concession to convention, no compromise made in the pursuit of greatness. The Valkyrie is the physical embodiment of mankind's refusal to accept limitations, a carbon-fiber cathedral dedicated to the worship of speed, where aerodynamics becomes scripture, engineering becomes art, and twelve cylinders deliver a mechanical sermon worthy of the heavens."
    },
    {"name": "Aquarius",
        "start_month": 1,
        "start_day": 20,
        "end_month": 2,
        "end_day": 18,
        "car": "Ferrari 812 Superfast",
        "car_image": "ferrari_812_superfast.jpg",
        "car_sound": "ferrari_812_superfast.mp3",
        "country_of_origin": "Italy",
        "year_of_production": 2017,
        "top_speed": 211,
        "text": "The Ferrari 812 Superfast is a glorious celebration of automotive passion, a machine that captures the romance, elegance, and unrestrained fury of the naturally aspirated V12 in its purest form. Beneath its magnificent, elongated hood resides a 6.5-liter twelve-cylinder masterpiece, unleashing 789 horsepower and screaming toward 8,900 RPM with a sound so extraordinary it borders on the divine. Its sweeping silhouette, sculpted rear haunches, and commanding proportions evoke the aristocratic grandeur of Ferrari's legendary front-engined grand tourers, yet beneath that breathtaking elegance lies a machine of almost unimaginable ferocity. Every surge of acceleration is accompanied by a rising mechanical crescendo, a twelve-cylinder orchestra performing a symphony of combustion, precision, and Italian passion. There is something profoundly romantic about its existence, a refusal to surrender the visceral beauty of the automobile to an increasingly sanitized world. The 812 Superfast is not merely a grand tourer; it is a love letter to the internal combustion engine, a magnificent twelve-cylinder requiem for an era when the greatest machines were measured not simply by how fast they traveled, but by how profoundly they stirred the human soul."
    },
    {"name": "Pisces",
        "start_month": 2,
        "start_day": 19,
        "end_month": 3,
        "end_day": 20,
        "car": "Bugatti Bolide",
        "car_image": "bugatti_bolide.jpg",
        "car_sound": "bugatti_bolide.mp3",
        "country_of_origin": "France",
        "year_of_production": 2020,
        "top_speed": 310,
        "text": "The Bugatti Bolide is a terrifying manifestation of engineering without restraint, a machine born when one of the most prestigious automotive manufacturers in history abandoned everything it had come to represent in pursuit of absolute mechanical supremacy. Gone are the sumptuous leather interiors, the effortless grand touring, the aristocratic refinement, and the extraordinary luxury that made the Bugatti name synonymous with automotive royalty. What remains is something almost incomprehensible: a skeletal, carbon-fiber leviathan forged with a singular, merciless purpose. At its heart resides the legendary 8.0-liter quad-turbocharged W16, a sixteen-cylinder mechanical colossus unleashing 1,578 horsepower into a machine that exists solely to conquer the racetrack. Its impossibly low silhouette, savage aerodynamic architecture, and cavernous air channels resemble the anatomy of some prehistoric predator, a creature whose every surface has been shaped by the relentless demands of speed. Its immense rear wing, aggressive diffusers, and uncompromising chassis transform the very atmosphere into an instrument of domination. There is something profoundly extraordinary about its existence: Bugatti, a manufacturer that spent decades perfecting the marriage of unimaginable performance and unparalleled luxury, finally asking what might happen if it sacrificed one for the absolute pursuit of the other. No concessions to comfort. No pursuit of elegance for elegance's sake. Not even the freedom to roam public roads. The Bolide has surrendered them all, and in doing so, has become something far more extreme than any Chiron or Veyron could ever hope to be. The Bolide is the one who left it all behind. The handcrafted interiors, the grand touring refinement, the obligation to be civilized. What remains is sixteen cylinders, four turbochargers, and the terrifying realization that Bugatti's greatest act of engineering may have required abandoning everything that once made it a Bugatti. It is not an automobile designed to inhabit the world. It is a machine designed to exist at the absolute limits of what the world will allow."
    }
];
// Function that matches user input with the zodiac_signs array and returns the corresponding sign object.//
function find_sign(input_month, input_day) {
    for (const sign of zodiac_signs) {
        if ((input_month === sign.start_month && input_day >= sign.start_day) ||
            (input_month === sign.end_month && input_day <= sign.end_day)) {
            return sign;
        }
    }
    
}

    

// This function will list all the zodiac signs and their corresponding cars in the console.//
function list_all_signs() {
    for (const sign of zodiac_signs) {
        console.log(`${sign.name}: ${sign.car}`);
    }
}
// Presents the corresponding card of the chosen sign with the proper data. This function will call other functions to display the image, play the sound, and save the last sign.//
function present_card(sign) {
    console.log('This function will present the card of the chosen sign with the proper data');
    display_card_image(sign);
    play_car_sound(sign);
    save_last_sign(sign);
}
function display_card_image(sign) {
    console.log('Displays the image of the sign/car');
}
function play_car_sound(sign) {
    console.log('Plays the cars startup and rev');
}
function save_last_sign(sign) {
    console.log('Saves the last input result (sign) and displays it');
}
function open_help_menu(sign) {
    console.log('Opens help menu for user accessibility');
}
open_help_menu();
list_all_signs();

const sign = find_sign(7, 2);

if (sign) {
    console.log(`Your sign is ${sign.name}: ${sign.car}`);
    present_card(sign);
} else {
    console.log('No sign found for that date.')
}
