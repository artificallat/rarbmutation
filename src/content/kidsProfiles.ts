export type KidProfile = {
  slug: string;
  name: string;
  parents: string;
  siblings?: string;
  yearOfBirth: string;
  hometown: string;
  messageTitle: string;
  messageParagraphs: string[];
  dreamsTitle?: string;
  dreamsParagraphs?: string[];
};

export const kidsProfiles: KidProfile[] = [
  {
    slug: "noe",
    name: "Noé",
    parents: "Loïc and Chloé",
    yearOfBirth: "2018",
    hometown: "Toulouse, France",
    messageTitle: "A Message from Noé's Parents:",
    messageParagraphs: [
      "After a normal pregnancy, Noé was born at 39 weeks, he measured 51 cm and weighed 3.06 kg. As our third child, he joined his big sister and brother. Minutes after his birth, Noé began having difficulty breathing on his own and was sent to the neonatal unit at another hospital for treatment and monitoring. The team from this pediatric unit was unable to stabilize Noé's condition and he had to be rushed to a distant hospital. He remained on a ventilator for 5 days in pediatric intensive care. He quickly showed us his warrior temperament, and managed to breathe and eat on his own. He remained under surveillance in the neonatal unit in the same hospital for 10 days. He then underwent a lot of tests: MRI, CT scan, ultrasounds… We also took a genetic test because the doctors had a lot of questions.",
      "Noé's journey continued with the discovery of several eye abnormalities, leading to his first surgery at four months old to enhance his vision in his right eye. He benefits from regular ophthalmological follow-up. We know that he sees, he recognizes and names colors and objects and knows how to find his way in space, but his field of vision is very limited and he is tired.",
      "We received the diagnosis of  the RARB gene variation in November 2019, MCOPS12, but the doctors knew nothing about this disease. No one has been able to tell us what Noé will or will not be able to achieve. The announcement was dizzying for us.",
      "Noé never ceases to surprise us, he is constantly evolving. He is a talkative little boy, he has a good vocabulary and forms simple sentences. He knows how to answer simple questions, but you have to give him time. He likes to interact with others and now people are beginning to understand him better. Very curious, he likes to discover what is around him and always asks: \"What is that?\" He now moves with a walker for short distances but shows a desire to walk and move around alone. He has spasticity in his legs which really limits his motor skills. During the week, he has a very busy schedule but we thank all the professionals who support Noé because they are all very caring, involved and allow him to evolve.",
      "Noé is a very funny little boy, who has a wonderful smile. He loves to laugh and is very cuddly. He can also be very stubborn, and complain when something doesn't suit him. Reading books, playing vet and cars, watching cartoons, listening and dancing to music, riding a pony, looking at the lights and going to the swimming pool are some of Noé's favorite activities. He also really likes fire trucks.",
    ],
    dreamsTitle: "What are our Dreams for Noé?",
    dreamsParagraphs: [
      "We are lucky and so grateful to have our Noé. It makes us see the world differently. His love makes us happy souls. We wish him the best, to be as independent as possible, to achieve everything he desires. We also hope that it is possible that he could benefit from a remedy that will help him improve his motor skills. We have created an association \"Tous avec Noé\" to provide financial and material assistance to Noé for his physical, psychological and emotional development; to finance methods or therapies abroad; to raise awareness of positive inclusion; to raise funds to support medical research and hopefully a treatment for MCOPS12.",
    ],
  },
  {
    slug: "mia",
    name: "Mia",
    parents: "Barbara and Gabriele",
    yearOfBirth: "2021",
    hometown: "Italy",
    messageTitle: "A Message from Mia's Parents:",
    messageParagraphs: [
      "My pregnancy was a normal one; it was my third pregnancy. We had regular check-ups every month, including chorionic villus sampling. The baby was growing strong, and the doctors assured us that everything was going well during the pregnancy. Mia was born in 2021 through an emergency C-section, weighing almost 4 kg. She spent her first weeks of life in an incubator, and we couldn't bring her home for a few weeks. During those weeks, the doctors noticed Mia's hypotonia, which ranged from mild to severe at times. She also had saturation problems and apnea episodes, and she couldn't feed from a bottle due to weak suction. When we finally returned home, Mia was connected to a computer for saturation monitoring while she slept and needed oxygen.",
      "Those were very difficult months, as the doctors attributed Mia's hypotonia to rare diseases despite our belief that it was a result of the traumatic birth. They conducted numerous tests, all of which came back normal. When she was born, they did the first exome sequencing, which was normal. Then, in 2022, we decided to repeat the test, and a few weeks ago, we received the second exome sequencing results with a diagnosis of a mutated Rarb gene.",
      "We were told that we are the only known case in Italy, with just over 50 cases worldwide. Our world came crashing down; we knew there was something, but we didn't expect it to be an ultra-rare disease. After a few days of tears, we decided to search for as much information as possible on the internet and came across Cure MCOPS12.",
      "Mia receives physiotherapy and speech therapy and does not use any medication. She has two sisters, and it's difficult for them to accept all of this, but they love Mia immensely and try to stimulate and encourage her at every moment. As a mother, seeing them together is beautiful; it's sibling love. At the same time, I want to spare her two older sisters from the pain of knowing the world of rare diseases.",
      "As of today, Mia is almost two years old. She eats on her own, even in small pieces, and no longer needs oxygen and a computer because fortunately, her saturation improved in her first year of life. The major challenge remains at the motor level because Mia can roll but can't crawl or walk on all fours. She can kneel in her crib, sit up for a long time while playing, coloring or watching TV, but she can't sit up on her own – we have to place her in a seated position.",
      "Despite being born at 4 kg and eating regularly and often, Mia has gained very little weight; she now weighs just under 11 kg. Weight gain has always been a problem because even though she eats, it seems like she doesn't absorb nutrients properly, and she's still below the growth charts. Mia can say a few words (mom, dad, grandparents, thank you, her sisters' names, and other common words), she recognizes colors, shapes, and animals and imitates their sounds. She seems to understand what's being said to her and responds with yes or no when she wants or doesn't want something. She's a real handful! She wants to do many things, but her hypotonia holds her back, which frustrates her.",
      "We decided to enroll her in school because we noticed she tries to imitate her older sisters a lot. For example, when they dance, she starts dancing in her high chair, moving her arms and head and singing. Our hope is that other children will stimulate her in some way, and she's happy to go there. As of today, Mia is a happy child who laughs and smiles a lot. She loves dolls, feeds them, and cuddles them, but what she loves most of all are puppies. She could spend hours playing with her grandparents' and aunt/uncle's puppies.",
    ],
    dreamsTitle: "What are our Dreams for Mia?",
    dreamsParagraphs: [
      "Our hope is that one day Mia can walk, have as independent a life as possible, and we hope for a cure to enable her and other children in the group, and beyond, to be happy and self-reliant even as they grow up.",
    ],
  },
  {
    slug: "piper",
    name: "Piper",
    parents: "Chelsey & Nathan",
    yearOfBirth: "2019",
    hometown: "Catonsville, MD",
    messageTitle: "A Message from Piper's Parents:",
    messageParagraphs: [
      "We had a pretty normal pregnancy, with minimal indication of her genetic disorder. At 26 weeks there was some shadowing on her heart that made it appear as if there was a hole in her heart. We sought help from DC children's hospital and later found that she did not have a hole but rather two superior vena cava veins to her heart. The rest of our journey was easy going, delivery went smoothly, but when Piper was getting her shots and checked in she stopped breathing a few times.",
      "Two hours after delivery they decided to admit her to the NICU at shady grove hospital in Silver Spring, MD. She was placed on oxygen and a feeding tube. She had also not yet opened her eyes. By the third day of not opening her eyes we decided to seek help from an ophthalmologist, they did an MRI and said that her eye gloves were normal, but the eye exam revealed that she had little to no cornea. After 7 days we transferred her to Johns Hopkins hospital to be closer to Wilmer eye institute. She spent 32 days in the NICU while we advocated to get her home as we began the journey of learning and understanding her genetic disorder. After 3 months we got the results of her genetic testing which showed she had MCOPS12. We found a specialist in Pittsburgh at Children's Hospital there, who knew of this condition and met an ocularist that could make Piper conformers. We make the journey every 6 months to have her seen in Pittsburgh, PA.",
      "Piper is now almost 4. She started at Maryland School for the Blind Early Learning in fall of 2022 and just completed her first year! She has received all therapies (speech, PT and OT) while at school. We are also connected with Kennedy Kreiger Institute in Baltimore where she can also get PT, OT, speech and high intensive therapy. Piper will be going to Extended School Year (ESY) this summer at the school and return in the fall for a full school year once again. Piper is learning to communicate both verbally and with sounds or cues, she is eating by mouth along with tube feeds, she is free of additional oxygen and making strides in both PT and OT, she can stand at a walker, bar or gait trainer and can sit and play unassisted!",
      "Piper loves horses, she loves to swim and splash, she enjoys all music and playing instruments (bongos, ukulele and guitar) and she loves swinging! And she loves her new baby sister (5 months old now).",
    ],
    dreamsTitle: "What are our Dreams for Piper?",
    dreamsParagraphs: [
      "We hope that Piper just continues to grow, learn and progress! We hope that she continues to explore her surroundings and to be curious. We hope that she can one day verbally communicate her needs, gain more independence and mobility.",
    ],
  },
  {
    slug: "rhett",
    name: "Rhett",
    parents: "Matt & Sarah",
    yearOfBirth: "2018",
    hometown: "Atlanta, GA, USA",
    messageTitle: "A Message from Rhett's Parents:",
    messageParagraphs: [
      "After a healthy pregnancy, Rhett was born via c-section at 39 weeks, weighing 7 lbs., 11 oz. Shortly after his birth, Rhett began having difficulty maintaining his O2 saturations and was sent down to the NICU to be cared for and monitored. The NICU team discovered that Rhett was born with an anorectal malformation and needed to be transported to a nearby children's hospital. He required emergency intubation and remained on a ventilator for 7 days. He had to undergo his first surgery (out of 7 total) when he was just 3 days old, and he stayed in the NICU for 10 weeks, mostly due to respiratory issues. During his time in the NICU and throughout the first couple years of his life, Rhett was diagnosed with several respiratory and gastrointestinal conditions. After a few rounds of genetic testing, we finally received a diagnosis in April of 2021.",
      "Rhett required formula feeds through his g-tube until he was 3 years old, but now he eats a mostly puréed diet and can drink thickened liquids through a sippy cup. He still has a g-tube for fluids, but we are hopeful that he won't have one forever. He is working on his chewing skills in speech therapy and is making great progress. His digestive issues have improved greatly over the past year, as well, which has allowed him to eat a more well-rounded diet and finally gain some weight. While he cannot sit, stand, or walk without support, he is determined and motivated to work hard in his weekly therapy sessions in an effort to reach his goals, no matter how challenging they may be. Rhett's most recent sleep study showed a significant number of obstructions, so he will be starting CPAP therapy soon for his sleep apnea.",
      "Even though Rhett has several eye anomalies, we know that he can see. He can identify colors, objects, people, etc., but his field of vision is limited. He knows his ABCs, can count to 20, and does a fantastic job expressing his wants and needs verbally. He speaks slowly and must be given time to process questions, but he can speak in 5-7 word sentences and about 50-75% of his speech can be understood by strangers. Reading books, pretending to cook, watching his favorite shows, listening and dancing to music, playing on the playground, looking at lights, and going to the pool are some of Rhett's favorite things to do. He has a tender heart, tenacious spirit, and a smile (with adorable dimples) that can light up the night sky. He is joy personified and a blessing to those who have the privilege of knowing and loving him.",
    ],
    dreamsTitle: "What are our Dreams for Rhett?",
    dreamsParagraphs: [
      "We thank God every day for our precious Rhett and pray to find a cure that will help him live a long, healthy life without limitations. We want him to be able to achieve anything his heart desires!",
    ],
  },
  {
    slug: "troy",
    name: "Troy",
    parents: "Melissa and Paul",
    yearOfBirth: "2021",
    hometown: "Oak Park, Illinois, USA",
    messageTitle: "A Message from Troy's Parents:",
    messageParagraphs: [
      "Troy was born between 4-5 weeks early in March of 2021. Immediately after birth Troy was admitted to the NICU because he wasn't breathing as expected. Troy spent 5 weeks in the NICU with general concerns over oxygen saturation and temperature regulation. While in the NICU, Troy underwent several tests, but all tests came back normal despite the fact he was unable to pass his car seat test after multiple attempts. Troy was finally sent home in April and we were instructed to use a car bed instead of a car seat. Knowing our son still had oxygen saturation issues after leaving the NICU was incredibly challenging for us. Despite all of the normal test results, we knew there was more to explore. Troy's muscle tone alternated between high and low, he wasn't meeting traditional motor milestones, and his right eye began to drift inward. We jumped into action and began to advocate for additional testing and evaluations. Troy began physical therapy through the Early Intervention program at 2 months old, occupational therapy at 6 months old, and feeding/speech therapy at 9 months old. Around the same time Troy started occupational therapy, he received a vision test. We then learned his right eye had a cataract, a -14.5 prescription, and was slightly microphthalmic.",
      "In early 2022 we received Troy's genetic testing results back and learned he had a spontaneous mutation of his RARB gene. Hearing that our son would be up against a complex neurological disorder led to mixed feelings. We were relieved to have a diagnosis, but scared about the obstacles Troy would have to face in the coming years. That said, we figured what was to come couldn't be more difficult than the past year, and dedicated ourselves to helping Troy get the support he needed. Paul, was able to find a new job working from home that allowed him to oversee many of Troy's therapies and daily activities and his Mom continued to advocate for more services. Troy now has added developmental therapy to the mix and will be starting vision therapy as soon as a local therapist is available. After nearly a year of eye patching, Troy received strabismus surgery in hopes that he'll be able to receive additional visual input from his right eye. We both work with Troy daily on his therapies, and the hard work is beginning to pay off!",
      "Troy's favorite things to do include: roughhousing with his dad, cuddling/singing with his mom, and playing with his two husky mix \"woof woofs\", Mackenzie and Astro. He loves all things cars, stroller rides, and floating (with support!) in the bath. He seems to have a true love for the water, after spending a lot of time with some bath-based physical therapy tools as a baby, and we are hoping to nurture this love further at the local pool after Troy's motor skills improve just a bit more. We are hopeful that with the right mix of familial and medical support Troy will learn to manage MCOPS12 and enjoy all that Chicago has to offer.",
    ],
    dreamsTitle: "What are our Dreams for Troy?",
    dreamsParagraphs: [
      "Right now our primary hope is that Troy will be mobile without the use of a gait trainer, walker, or wheelchair. Troy can stand if he holds on to a surface, but he isn't able to roll over or crawl and he tends to lock up his limbs when standing. Troy is so eager to explore, but his limited mobility prevents him from doing the things other toddlers love to do. So our hope is that in the future mobility will be less of a concern.",
    ],
  },
  {
    slug: "rayne",
    name: "Rayne",
    parents: "Oren & Emily",
    siblings: "Isla",
    yearOfBirth: "2009",
    hometown: "New Jersey, USA",
    messageTitle: "A Message from Rayne's Parents:",
    messageParagraphs: [
      "Rayne was our first child, born post-date via c-section and was almost immediately taken to the NICU because she was desaturating. In the NICU, doctors also saw that she was having trouble feeding and an NG tube was placed. During her initial exam, her 'cloudy corneas' were noted, as was as a left superior vena cava with her heart. After two weeks in the NICU, Rayne finally came home, but her troubles persisted. Rayne continued to desaturate and struggled to eat. At three months, Rayne underwent her first of two corneal transplants (we learned that the backs of her eyes didn't develop normally either), which was soon followed by gut malrotation surgery, a g-tube placement and finally her second corneal transplant. In Rayne's first months, we spent more time living out of various hospitals across several states than we did at home, mainly due to her gut not working/common illnesses that would quickly escalate and her extended recoveries from surgeries. We eventually learned that Rayne also suffers intermittent hypoglycemia (even while on a continuous feed).",
      "As Rayne's constellation of symptoms grew over her first few months and then years, doctors became increasingly baffled. After a series of ear infections triggered a regression across all areas of her motor development, Rayne was tested–and then received a diagnosis-for Mitochondrial DNA depletion. Years later, when Rayne was five, we received confirmation via Exome Sequencing of her RARB mutation. To date, we do not know of any other children with Rayne's specific mutation.",
      "Developmentally, Rayne is globally delayed. She cannot sit unassisted, walk (bear weight through her legs), talk, eat or see (though, she may see some light with her left eye). Still, Rayne's strong personality shines through. She loves to listen to music and play with her musical toys. She also loves walks outside and snuggling. She has a deep belly laugh, an adorable dimple on her left cheek and a devilish sense-of-humor. She likes to give her therapists at school a hard time and has developed a special relationship with one of the nurses who has helped us care for Rayne since she was three. Hospital stays are still a part of Rayne's life, but are less frequent now than years ago. At her core, Rayne is a fighter with strong opinions and easy \"thank-you's\" (communicated in her own way). To all who have already met her, Rayne is especially memorable.",
    ],
    dreamsTitle: "What are our Dreams for Rayne?",
    dreamsParagraphs: [
      "There are so many. But for purposes here, I think that our dream for our daughter is for as many people as possible to know Rayne and her story. Like many of us do for ourselves, our dream is for Rayne to leave her own mark, in her own way, on the world.",
    ],
  },
  {
    slug: "sienna",
    name: "Sienna",
    parents: "Annina and Anthony",
    siblings: "Ava (almost 5), Bailey (16)",
    yearOfBirth: "2019",
    hometown: "Melbourne, Australia",
    messageTitle: "A Message from Sienna's Parents:",
    messageParagraphs: [
      "Sienna was born in October 2019 at 38 weeks via Caesarian. She was in and out of the special nursery because of her jaundice and she struggled to put on any weight (she would throw up after almost every feed), in the end we had to bottle feed her to keep track of her milk intake and burp her multiple times each feed. When it was time to introduce solids she struggled with swallowing so she stayed on puree for quite some time. She also became very constipated, and still has to have laxatives to help her bowel movements.",
      "At around 10 months old she was diagnosed as having a vitamin b12 and iron deficiency (at this point her low muscle tone and inability to hold herself up on her tummy was evident, along with very little use of or even self- awareness of her own feet/legs).She was given b12 injections and iron supplements and seemed to pick up a bit from there (may have been a coincidence).",
      "She was then diagnosed with Peters Anomaly, as she had cloudy patches in her eyes, although her vision is fine. Doctors then suspected her of having Cerebral Palsy and had a microarray and MRI done, however nothing was found. Following this, she was then placed under the global developmental delay category. At this time, she was behind in her speech, fine and gross motor skills, and dribbling a lot!!!",
      "Since then she has had Physio, Speech, and Occupational therapy. She now crawls, sits, and walks with the use of a gait walker (with afos), but can pull herself up and cruise along a couch. She feeds herself,  talks a lot and is now at the right level of speech for her age. She has recently developed a stutter, however we are now working on this in speech. Additionally, she has muscle spasticity and tends to curl up her feet when she puts weight on them and turns them in.",
      "We have just completed her first 3 week intensive therapy at the NAPA Center (Neurological and Physical Abilitation Center)! Prior to her therapy here, she was only standing unsupported for approximately 1 minute with maybe 1 unassisted step (wearing afos). Now after this 3 week therapy she managed to take 50 unsupported steps (Walked with only afos helping her)!",
      "Finally, Sienna was diagnosed with MCOPS12 in early 2022. The geneticists had told us that the syndrome was very rare and there was very little they could tell us about it. So we started researching on the internet and found the Cure MCOPS12 website. That's when we connected with Reinhard and Edith and received much more information about the syndrome.",
      "We have since started our own Facebook page \"A cure for Sienna\" and have begun fundraising to contribute to the research that Reinhard and Edith have started at their non-profit, Cure MCOPS12.",
      "Sienna is such a beautiful, happy and super determined girl, although she did tend to bite her 4 year old sister if she doesn't get her way! She just loves life, is super determined and almost always smiling. She loves dancing, music, and playing with her sister and her friends.",
    ],
    dreamsTitle: "What are our Dreams for Sienna?",
    dreamsParagraphs: [
      "Our dreams for Sienna are for her to grow old and be able to reach any goals she has in happiness!",
    ],
  },
  {
    slug: "rin",
    name: "Rin",
    parents: "Atsuko and Shinichi",
    siblings: "Ann",
    yearOfBirth: "2018",
    hometown: "Tokyo, Japan",
    messageTitle: "A Message from Rin's Parents:",
    messageParagraphs: [
      "After a smooth pregnancy, Rin was born full-term. Our initial concern was that our baby consumed little milk and would not open her eyes. Five days after her birth, Rin was taken to a hospital and diagnosed with diagraphic eventration, duodenal stenosis, intestinal malrotation as well as hypoplasia of the corpus callosum and absence of left kidney. She underwent surgery, and at that time we were told that our baby was likely totally blind. A few months later, Rin was diagnosed with microphthalmia and reticulochoroidal coloboma.",
      "Although she was born at an average size, her weight and height fell below the growth curve because she could not consume enough milk. Several developmental milestones, such as rolling over, did not occur. After a year, we found out that this was all due to RARB gene mutations, of which Rin is the first case in Japan, according to the doctor.",
      "Our daughter has now started to utter some words, and she is very smiley and expressive. Although she cannot see, she has some ability to detect light. As Rin is unable to sit up nor stand up, she is going through physical therapy. Also, since she can only eat food pastes, she is undergoing dysphagia rehabilitation.",
      "We hope that MCOPS12 will become widely known to the public and that there will be advances in MCOPS12-related research.",
    ],
  },
  {
    slug: "atle",
    name: "Atle",
    parents: "Linnéa & David",
    siblings: "Ivar",
    yearOfBirth: "2011",
    hometown: "Stockholm, Sweden",
    messageTitle: "A Message from Atle's Parents:",
    messageParagraphs: [
      "Atle was born in 2011 as our first child. The pregnancy was normal and full-term. He was however taken to the neonatal ward due to short breath and a hard time feeding. The doctors first thought it was due to one of his lungs not being fully developed, which later would be proven wrong. In Sweden, all babies have their eyes examined before they leave the maternity ward, but Atle did not open his eyes enough for the doctor to be able to perform the examination. Instead, they sent us to a specialist a couple of days later, who told us that our son had bilateral cataract and that surgery was scheduled at three weeks of age. However, at the operating table, the surgeon discovered he had microphtalmia, adhesions between cornea and iris, and bilateral coloboma, both in the fundus and the iris. He also had a somewhat cloudy cornea, which probably was mistaken for cataract. Our sons delayed gross motor development was explained with his bad eyesight and we were told by our son's doctors to wait and see. At the same time, different chromosome tests were being performed but without finding any abnormalities. He was unable sit without support, nor crawl or open his hands, among other things. His speech was difficult to understand for people outside of the family, so he came up with a communication system of his own consisting of signs combined with directing his gaze to different objects. We also used pictures and photos and continues to talk and explain a lot to him, which we find is assisting our son in developing his speech.",
      "In 2015, a full exome sequence was finally made and in April 2016 we received the answer: a mutation on the RAR-beta gene. Neither the geneticists, the neurologist nor we had ever heard of this and at first, he was wrongly diagnosed with a gain of function-variation. As many other parents to children with special needs, we googled a lot and found Dr. Michaud's research. Neither of the subjects in his study had however the same location on the gene for the mutation as Atle, and some of the phenotypes was different as well. Atle has a loss of function mutation. He has no Chiari malformation or intellectual development disorder, but he is spastic to an increasing extent, partly vision impaired but manages without glasses. He is sensitive to strong light, possibly due to the eye surgery that was performed. He also has unvoluntary movements and a partial paresis on his diaphragm. We have been trying different treatments, including MNRI (short for Masgutova Neurosensorimotor Reflex Integration) and we perceive positive effects from our sessions, however it is difficult to attribute any particular treatment to our son's development.",
      "Today, Atle is a humorous, stubborn, considerate, and bright nine-year-old. He goes to a regular school with help of a personal assistant. He speaks good Swedish and English and anyone can understand his speech nowadays, given they are patient with his spastic-induced stutter. He can count in various languages, something he has taught himself on through children's mathematics applications on his tablet. He is still not able to sit or stand on his own but moves with a manual wheelchair as well as an electrical one on his own. His gross motor skills are still underdeveloped. After a surgery last year, he can however stand shorter periods of time with support from someone else. He loves recycling waste (Swedes goes to great lengths to recycle waste), buses, his tablet, and his little brother who was born earlier this year.",
    ],
  },
  {
    slug: "stella",
    name: "Stella",
    parents: "Drew & Erin",
    siblings: "Lucy",
    yearOfBirth: "2018",
    hometown: "Madison, WI, USA",
    messageTitle: "A Message from Stella's Parents:",
    messageParagraphs: [
      "After a normal pregnancy, our sweet girl Stella arrived 2 months early and spent the next two months in the newborn intensive care unit.  One year later, after a myriad of health concerns, appointments and therapies, we received the diagnosis of the RARB mutation from a full exome sequence.  While it was helpful to understand the source of Stella's issues, the rarity of the mutation and the spectrum of possibilities leaves us with a great deal of unknown.",
      "Stella cannot currently sit, walk, talk or eat, but she is making progress with her four-point stance and crawling. Stella's eyes developed incompletely, so she has severe anterior chamber dysgenesis, but she has remarkably good vision given the condition.  She is incredibly good natured, curious, and determined – and she loves music and lights.  We were recently thrilled to realize Stella knows her colors, shapes and numbers 1-10; we are currently tackling the alphabet. As far as we are concerned, the sky is the limit for our girl, and she continues to write her own story. We are so grateful God gave us this beautiful girl. We look forward to connecting with other families who are sharing this experience and supporting the progress toward our ultimate goal of finding a treatment.",
    ],
  },
  {
    slug: "zayd",
    name: "Zayd",
    parents: "Sadia",
    yearOfBirth: "2018",
    hometown: "London, UK",
    messageTitle: "A Message from Zayd's Mother:",
    messageParagraphs: [
      "Zayd was born in April 2018 without any complications. He seemed to be a content baby who hardly ever cried. When he was 3 months old, I took him to an ophthalmologist as he wasn't making any eye contact. Zayd was diagnosed with high myopia and bilateral cataracts. In January 2019 he had bronchiolitis and an X-ray showed he had diaphragmatic hernia, which was operated upon. Zayd has an unsafe swallow for liquids and is fed through ng tube.",
      "He was diagnosed with having Chiari 1 malformation but doctors still could not find out the reason for all his conditions. I finally got the much awaited diagnosis in June 2020 that Zayd had RARB mutation and there was no treatment or cure for it. The doctor said whether Zayd would ever sit or stand depends on how far physiotherapy can push him to reach his potential.  My little boy is under 4 different hospitals in the UK; they have started to feel like a 2nd home to us now.",
      "Looking after a special needs child as a single parent is stressful as his siblings sometimes feel left out. However that one smile Zayd gives makes up for everything. He is the purest gift God could have given me. My son may never reach what other kids his age would, but I´ve accepted the fact that he came into my life to be loved only. And he surely knows how to get all the love and attention with his cheeky and quirky nature. I hope that one day there could be a therapy to help Zayd and other beautiful children suffering from MCOPS12.",
    ],
    dreamsTitle: "What are my Dreams for Zayd?",
    dreamsParagraphs: [
      "I hope that one day there could be a therapy to help Zayd and other beautiful children suffering from MCOPS12.",
    ],
  },
  {
    slug: "josephine",
    name: "Josephine",
    parents: "Claudia and Frank",
    yearOfBirth: "2011",
    hometown: "Lieskau, Germany",
    messageTitle: "A Message from Josephine's Parents:",
    messageParagraphs: [
      "Josephine was born in February 2011 as a wish child. At that time, everyone assumed that she was healthy and alert. On the second day of life, Josephine was admitted to the intensive care unit, where we received a new diagnosis almost every day, including seizures, complex ocular pathology with blepharophimosis, microphthalmos, microcornea, and muscular hypertension.",
      "Josephine lived a very withdrawn life as a baby, disliking closeness from anyone except mom and dad. She took oral food, very little but it was always enough that she does not need a feeding tube to this day. We were told that Josephine would probably never speak. When she was about four years old, she said her first word: \"Oma\" (german for \"grandma\") – until today many words have been added. She is a calm and friendly child who is very aware of her environment, but no one can say how much. She is also quickly overwhelmed with external stimuli. Josephine has to fight again and again with strong spasticity. She loves the North Sea and its animals – at the same time she is totally relaxed.",
      "In 2014 Josephine then became a big sister, the two are now inseparable. We only found out about her genetic defect in 2020. We would not have expected a diagnosis after such a long time. And we are grateful that there are people who make an exchange about this genetic defect possible.",
    ],
  },
  {
    slug: "sophia",
    name: "Sophia",
    parents: "Rachel and Gary",
    yearOfBirth: "2007",
    hometown: "Laguna Beach, CA, USA",
    messageTitle: "A Message from Sophia's Parents:",
    messageParagraphs: [
      "Sophia Rose was born in 2007 to proud parents Rachel and Gary in Laguna Beach, CA USA.  We did not receive the diagnosis of her RARB mutation until she was 7 years old since whole exome sequencing was not available until 2013.  Despite a completely normal pregnancy and delivery, Sophia would not open her right eye after birth and her left iris looked unusual. We were told that she would be blind and have a host of other issues until we starting working with a wonderful pediatric ophthalmologist named Dr Simpson.",
      "She confirmed that her left eye was functional even though her right one wasn't.  We also partnered with a geneticist from a few months after birth until now who would ultimately help us to get the exome sequenced and answer the question as to why she had Cerebral palsy and such a unique eye structure.  It was a very long road to get to our diagnosis, and we have been presented with additional challenges as we went along this journey.  However, I cannot imagine life without my beautiful, witty, smart and slightly sarcastic daughter.  I learn something new from her everyday, and I hope by sharing our journey with you, we can help you to realize the true potential of your uniquely RARE child as well.",
    ],
  },
  {
    slug: "simon",
    name: "Simon",
    parents: "Edith and Reinhard",
    yearOfBirth: "2017",
    hometown: "Salzburg, Austria",
    messageTitle: "A Message from Simon's Parents:",
    messageParagraphs: [
      "Maybe you know the story written by Emily Perl Kingsley describing how it is to raise a child with a disability. It illustrates some of our feelings when our world was falling apart after receiving Simons MCOPS 12 diagnosis.",
      "Our little one was a real fighter from the very beginning on: soon after birth he struggled with breathing problems and needed to stay in the intensive care unit for several weeks. During that time we also received the first crushing diagnosis that Simon has microphthalmia. However, the bad news continued when we were informed about the genetic test results in January 2018: a mutation in the RARB gene, a disease called MCOPS12. A disease so rare that no treatment and basically no information was available. A disease so rare that only two dozen of patients were diagnosed at that time. We knew so little but only that the prognosis would be bad. In those darkest days of our lives we could count on the support by family, good friends – and Simon, who motivated and inspired us with his everlasting cheerful character.",
      "Although Simon is basically blind and not able to sit, walk or talk our journey with Simon has changed us in so many ways. He is our greatest teacher in keeping good mood and his joy of living is simply contagious. It seems he is the happiest boy alive when playing with his disco lights, listening to music or swimming in the water no matter how cool it is.",
    ],
    dreamsTitle: "What are our Dreams for Simon?",
    dreamsParagraphs: [
      "We want our little sunshine to live a happy and independent life. Therefore, we need to transform the impossible into the possible and find a therapy for him and all other MCOPS12 patients.",
    ],
  },
];

export const kidPhotoMap: Record<string, string> = {};
